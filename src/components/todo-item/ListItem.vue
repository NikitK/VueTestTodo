<template>
  <li>
    <button @click="$emit('completed', todo.id)">&#x2714;</button>
      <span :class="{completed:todo.completed}">{{index + 1 +'.'+ todo.text }}</span>
    <button @click="$emit('remove', todo.id)">&#x2718;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index:{
      type:Number
    }
  },  
};
</script>
<style scoped>
.completed{
  text-decoration:line-through;
}
li {
  display: flex;
  width: 130px;
  padding: 8px 0;
  justify-content: space-between;
  align-items: center;
  overflow-wrap: anywhere;
}
li button{
  color: #fff;
  background-color: inherit;
  height: 26px;
  border: 1px solid #00bcd4;
  border-radius: 55%;
  cursor: pointer;
}
li button:focus{
  outline: none;
}
</style>