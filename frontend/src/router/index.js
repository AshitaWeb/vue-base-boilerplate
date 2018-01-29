import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import AnimeHome from '@/components/anime/AnimeHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/anime',
      name: 'AnimeHome',
      component: AnimeHome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
  ]
})
