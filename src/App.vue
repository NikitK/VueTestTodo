<template>
  <div id="app">
    <TodoHeader />
  <Main/>
  </div>
</template>

<script>
import TodoHeader from "./components/header/TodoHeader.vue";
import Main from './components/Main.vue';
export default {
  name: "App",
  components: {
    TodoHeader,
    Main,
  }
};
</script>

<style>
@import url("assets/css/normalize.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
