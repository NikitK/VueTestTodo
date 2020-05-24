<template>
  <div class="wrap">
    <DeskItem v-for="card in cards" :key="card.id" :card="card" @remove="removeCard" />
    <div class="add-card">
      <span @click="addCard">+add</span>
    </div>
  </div>
</template>
<script>
import DeskItem from "./todo-item/DeskItem.vue";

let nextCardId = 1;
export default {
  name: "Main",
  components: {
    DeskItem
  },
  data() {
    return {
      cards: [
        {
          id: nextCardId++
        }
      ]
    };
  },
  methods: {
    addCard() {
      if (this.cards.length < 9) {
        this.cards.push({
          id: nextCardId++
        });
      } else {
        alert("Максимальное число карточек , достигнуто");
      }
    },
    removeCard(idToRemove) {
      this.cards = this.cards.filter(card => {
        return card.id !== idToRemove;
      });
    }
  }
};
</script>
<style scoped>
.wrap {
  background-color: #1d474ccc;
  display: flex;
  flex-wrap: wrap;
  padding: 25px 100px;
  margin: 0 auto;
}
.add-card {
  width: 15%;
  height: 337px;
  padding: 15px;
  margin: 0 25px 25px 0;
  border: 1px solid #00bcd4;
  border-radius: 25px;
}
.add-card span {
  cursor: pointer;
  display: block;
  margin: 60% auto;
}
</style>