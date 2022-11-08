<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <LoginView/> -->
  <RouterView /> 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LoginView from './components/LoginView.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LoginView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
