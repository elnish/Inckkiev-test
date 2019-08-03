import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/final',
      name: 'final_easy',
      component: () => import(/* webpackChunkName: "about" */ './views/Final.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import(/* webpackChunkName: "about" */ './views/Main.vue')
    }
  ]
})
