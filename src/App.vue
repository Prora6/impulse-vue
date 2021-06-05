<template>
  <div id="app">
    <HeaderWebsite/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderWebsite from './components/HeaderWebsite.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    HeaderWebsite
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin: 0;
}
* {
  box-sizing: border-box;
}
p, h1, h2, h3 {
  margin: 0; 
}
ul {
  margin: 0;
}
</style>
