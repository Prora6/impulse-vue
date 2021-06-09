<template>
  <div id="app">
    <HeaderWebsite/>
    <BannerWebsite/>
    <SectionActiviry/>
    <SectionPartner/>
    <SectionObjects/>
    <SectionNews/>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderWebsite from './components/HeaderWebsite.vue'
import BannerWebsite from './components/BannerWebsite.vue'
import SectionActiviry from './components/SectionActivity.vue'
import SectionPartner from './components/SectionPartner.vue'
import SectionObjects from './components/SectionObjects.vue'
import SectionNews from './components/SectionNews.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
    HeaderWebsite,
    BannerWebsite,
    SectionActiviry,
    SectionPartner,
    SectionObjects,
    SectionNews
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


