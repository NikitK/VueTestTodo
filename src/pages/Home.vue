<template>
  <div class="div">
    <h1>Выполненные карточки!</h1>
    <Completed />
  </div>
</template>

<script>
import Completed from "@/components/todo-item/Completed.vue";
export default {
  components: {
    Completed
  }
};
</script>/ 
<style  scoped>
.wrap {
  background-color: #1d474ccc;
  display: flex;
  flex-wrap: wrap;
  padding: 25px 100px;
  margin: 0 auto;
}
.desk-item-wrapper {
  width: 100%;
}
</style>