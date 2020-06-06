<template>
  <div class="wrap">
    <DeskItem v-for="card in allCards" :key="card.id" :card="card" @remove="removeCard"></DeskItem>
    <div v-if="this.allCards.length < 5" class="add-card">
      <span @click="addCard">+Add Card</span>
    </div>
  </div>
</template>
<script>
import DeskItem from "./todo-item/DeskItem.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Main",
  components: {
    DeskItem
  },
  computed: {
    ...mapGetters(["allCards"])
  },
  methods: {
    ...mapMutations(["removeCardById", "createCard","updateStore"]),
    addCard() {
      const card = {
        id: Date.now(),
        completed:false,
        todos: []
      };
      this.createCard(card);
    },
    removeCard(idToRemove) {
      this.removeCardById(idToRemove);
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
  font-weight: bold;
  opacity: 0.4;
}
</style>