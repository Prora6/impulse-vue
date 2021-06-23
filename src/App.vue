<template>
  <div id="app">
    <HeaderWebsite :backgroundColor="backgroundColor" :color="color" v-bind:darkLogo="darkLogo"/>
    <div><router-view /></div>
    <SectionFooter/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderWebsite from './components/HeaderWebsite.vue'

import SectionFooter from './components/SectionFooter.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
    HeaderWebsite,

    SectionFooter
  },
    data() {
    return {
      backgroundColor:'transparent',
      color:'#FFFFFF',
      darkLogo :false
    }
  },
  watch: {
    '$route.path'() {
      if(this.$route.path === '/news') {
        this.backgroundColor = '#FFFFFF',
        this.color = '#000000',
        this.darkLogo = true
      } else {
        this.backgroundColor = 'transparent',
        this.color = '#FFFFFF',
        this.darkLogo = false
      }
    }
  },
    mounted() {
      console.log(this.$route)
      this.$route
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
.wrap__title{
  display: flex;
  align-items: center;
  max-width: 1334px;
  width: 100%;
  margin-bottom: 50px;
}
.wrap__title-text{
  display: flex;
  align-items: center;
}
.section__number {
  margin-right: 26px;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #118BDD;
}
.section__title {
  font-weight: bold;
  font-size: 46px;
  line-height: 69px;
  color: #000000;
}


</style>


