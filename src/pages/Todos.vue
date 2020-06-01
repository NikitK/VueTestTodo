<template>
  <div>
    <TodoHeader />
    <Main />
  </div>
</template>

<script>
import TodoHeader from "@/components/header/TodoHeader.vue";
import Main from "@/components/Main.vue";

// import {mapGetters , mapMutations} from 'vuex'
export default {
  name: "App",
  components: {
    TodoHeader,
    Main
  }
};
</script>

<style>
</style>
