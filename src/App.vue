<template>
  <div id="app">
          <h1 class="my-titel">TodoApp</h1>
          <router-link to="/todos">Todos</router-link>
          <router-link to="/">Home</router-link>
    <router-view/>
  </div>
</template>

<style>
@import url("assets/css/normalize.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html , body {
  height: 100%;
  color:#fff;
  background-color: rgba(0, 0, 0, 0.521);
}
.my-titel{
  margin:0;
  color:#fff;
}
</style>
