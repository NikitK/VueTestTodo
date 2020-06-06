<template>
  <div class="my-todo-card" v-bind:class="{ displayN: card.completed }">
    <InputText v-model="newTodoText" placeholder="Новая задача" @keydown.enter="addTodo" />
    <ul v-if="this.card.todos.length">
      <ListItem
        v-for="(todo, index) in this.card.todos"
        :key="todo.id"
        :index="index"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>
    <p v-else>Введите задачу и нажмите "enter"</p>
    <button class="remove-card" @click="$emit('remove', card.id)">&#x2718;</button>
    <button
      @click="completedCard"
      class="completed-card"
      title="Нажмите , чтобы добаить в выполненое"
    >&#x2714;</button>
  </div>
</template>

<script>
import InputText from "./InputText";
import ListItem from "./ListItem";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "DeskItem",
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["allTodos", "getTodoById", "allCompletedCard"])
  },
  components: {
    InputText,
    ListItem
  },
  data() {
    return {
      newTodoText: "",
      counter: 0,
      id: Date.now()
    };
  },
  methods: {
    ...mapMutations(["removeTodoById", "updateStore"]),
    addTodo() {
      const todo = {
        id: this.id++,
        text: this.newTodoText,
        completed: false
      };
      if (
        this.newTodoText.length > 0 &&
        this.newTodoText.length < 21 &&
        this.card.todos.length < 5
      ) {
        this.newTodoText = "";
        this.card.todos.push(todo);
        this.updateStore();
      } else {
        alert(
          "Поле ввода не должно быть пустым \nМаксимальное количество символов 20 \nМаксимальное количество задач 5"
        );
      }
    },
    removeTodo(idToRemove) {
      this.card.todos = this.card.todos.filter(todo => {
        return todo.id !== idToRemove;
      });
      this.updateStore();
    },
    completedCard() {
      this.card.todos.filter((todo, i) => {
        if (todo.completed == true) {
          this.card.completed = true;
        } else {
          alert("Вы не выполнили задачу: " + (i + 1) + "." + todo.text);
        }
      });
      this.updateStore();
      console.log(this.card);
    }
  }
};
</script>

<style scoped>
* {
  font-size: 14px;
}
.displayN {
  display: none !important;
}
.my-todo-card {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 300px;
  overflow: auto;
  padding: 50px 15px 15px 15px;
  margin: 0 25px 25px 0;
  border: 1px solid #00bcd4;
  border-radius: 25px;
}
ul {
  list-style-type: none;
  padding: 0;
}
.completed-card,
.remove-card {
  position: absolute;
  top: 5%;
  background-color: inherit;
  right: 5%;
  color: #fff;
  height: 26px;
  border: 1px solid #00bcd4;
  border-radius: 55%;
  cursor: pointer;
}
.completed-card {
  top: 90%;
  right: 85%;
}
button:focus {
  outline: none;
}
</style>
