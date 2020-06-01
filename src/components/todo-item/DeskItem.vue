<template>
  <div class="my-todo-card">
    <InputText v-model="newTodoText" placeholder="Новая задача" @keydown.enter="addTodo" />
    <ul v-if="todos.length">
      <ListItem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :index="index"
        :todo="todo"
        @remove="removeTodo"
        @completed="completedTodo"
      />
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
    },

  },
  components: {
    InputText,
    ListItem
  },
  data() {
    return {
      newTodoText: "",
      todos:[]
    };
  },
  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim();
      if (trimmedText) {
        this.todos.push({
          id: nextListId++,
          completed:'',
          text: trimmedText
        });
        this.newTodoText = "";
      }else{
        alert('ввдите текст!')
      }
    },
    removeTodo(idToRemove) {
    this.todos = this.todos.filter(todo => {
        return  todo.id !== idToRemove;
      }); 
    },
    completedTodo(idCompleted){
    this.todos = this.todos.filter(todo => {
        if(todo.id == idCompleted){
          todo.completed = true;
        }
        return todo;
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
button {
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
button:focus{
  outline: none;
}
</style>
