
import Vue from 'vue'
import Router from 'vue-router'
import News from './pages/NewsPage.vue'
import Home from './pages/Home.vue'


Vue.use (Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path:'/',
            component: Home
        },
        {
            path:'/news',
            component: News 
        }
    ],
})