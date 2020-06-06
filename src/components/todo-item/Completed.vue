<template>
  <div class="div">
    <div class="wrap">
      <h2>{{this.cardCompletedCounter}}</h2>
      <div v-if="allCompletedCard.length" class="desk-item-wrapper">
        <DeskItem class="active" v-for="card in allCompletedCard" :key="card.id" :card="card" />
        <span class="updateCardFilde" @click="updateCardFilde">Нажмите , чтобы обновить поле!</span>
      </div>
      <div v-else>
        <p>
          Выполненых задач пока нет ,
          перейдите к
          <a href="/todos">доске</a> чтобы их создать
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import DeskItem from "@/components/todo-item/DeskItem.vue";
import { mapGetters, mapMutations } from "vuex";
let a = JSON.parse(localStorage.getItem('cards')).length;
export default {
  components: {
    DeskItem
  },
  data() {
    return {
      cardCompletedCounter: a
    }
  },
  computed: {
    ...mapGetters(["allCompletedCard"]),
    watchUpdate: function() {
      if (this.allCompletedCard.length > 0) {
        this.updateStore();
 
      }
      return this.cardCompletedCounter + 1;
    }
  },
  methods: {
    ...mapMutations([
      "removeCardById",
      "updateStore",
      "completedCardById",
      "removeAllCard"
    ]),
    updateCardFilde() {
      this.removeAllCard();
    }
  }
};
</script>/ 
<style  scoped>
.wrap {
  background-color: #1d474ccc;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 25px 100px;
  margin: 0 auto;
}
.updateCardFilde {
  position: absolute;
  bottom: 2%;
  left: 50%;
  cursor: pointer;
}
.desk-item-wrapper {
  width: 100%;
  display: flex;
}
.active {
  display: flex !important;
}
</style>