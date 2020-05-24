<template>
  <header class="header">
    <div v-if="isActive" class="input-block">
      <form v-on:submit.prevent="setName">
        <input v-model="todoName" type="text" :placeholder="validForm" required />
        <button>&#x2714;</button>
      </form>
    </div>
    <div v-else class="list-name">
      <h1>{{listName}}</h1>
      <span v-on:click="editName">&#9998;</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "TodoHeader",
  data() {
    return {
      todoName: "",
      listName: "",
      validForm:'введите имя доски',
      isActive: true
    };
  },
  methods: {
    setName: function() {
      if (this.todoName.length > 0 && this.todoName.length < 21 ) {
        this.listName = this.todoName;
        this.isActive = !this.isActive;
      }else{
        this.todoName = '';
        this.validForm = 'Имя не должно превышать 20 символов!';
      }
    },
    editName: function() {
      this.isActive = true;
    }
  }
};
</script>
<style>
.header {
  text-align: center;
  padding: 50px;
  background-color: rgba(0, 0, 0, 0.521);
}
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 81px;
}
.list-name {
  position: relative;
  min-width: 400px;
  margin-right: 60px;
}
.list-name h1 {
  position: relative;
  font-size: 50px;
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
  cursor: default;
  margin: 0;
}
.list-name:hover span {
  opacity: 0.7;
}
.list-name span {
  display: block;
  font-size: 22px;
  position: absolute;
  cursor: pointer;
  top: -30px;
  left: 46%;
  opacity: 0;
  transition: linear 0.4s;
}
.header input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.562);
  font-size: 12px;
  align-items: center;
}
.header input,
.header button {
  background-color: rgba(0, 0, 0, 0.521);
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  color: #fff;
  border: none;
  padding: 10px;
}
.header button {
  cursor: pointer;
}
.header input {
  max-width: 300px;
}
</style>