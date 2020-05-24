<template>
  <li>
    <button v-on:click="completedTodo">&#x2714;</button>
      <span v-bind:style="{textDecoration:compl}">{{ todo.text }}</span>
    <button @click="$emit('remove', todo.id)">&#x2718;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
      compl:'none'
    }
  },
  methods:{
    completedTodo(){
      this.compl='line-through'
    }
  }
};
</script>
<style scoped>
li {
  display: flex;
  width: 130px;
  padding: 8px 0;
  justify-content: space-between;
  align-items: center;
  overflow-wrap: anywhere;
}
li button{
  max-height: 25px;
  cursor: pointer;
}
</style>