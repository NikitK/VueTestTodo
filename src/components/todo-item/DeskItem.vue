<template>
  <div class="my-todo-card">
    <InputText v-model="newTodoText" placeholder="Новая задача" @keydown.enter="addTodo" />
    <ul v-if="todos.length">
      <ListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo" />
    </ul>
    <p v-else>Введите задачу и нажмите "enter"</p>
    <button @click="$emit('remove', card.id)">&#x2718;</button>
  </div>
</template>

<script>
import InputText from "./InputText";
import ListItem from "./ListItem";

let nextListId = 1;
export default {
  name: "DeskItem",
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  components: {
    InputText,
    ListItem
  },
  data() {
    return {
      newTodoText: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim();
      if (trimmedText) {
        this.todos.push({
          id: nextListId++,
          text: trimmedText
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove;
      });
    }
  }
};
</script>

<style scoped>
* {
  font-size: 14px;
}
.my-todo-card {
  display: flex;
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
</style>
