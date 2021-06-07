<template>
  <div id="app">
    <HeaderWebsite/>
    <BannerWebsite/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderWebsite from './components/HeaderWebsite.vue'
import BannerWebsite from './components/BannerWebsite.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    HeaderWebsite,
    BannerWebsite
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  font-family: 'Roboto', sans-serif;
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
