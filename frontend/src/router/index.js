import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Logout from '@/components/Logout'

import AnimeHome from '@/components/anime/AnimeHome'
import AnimeNew from '@/components/anime/AnimeNew'
import AnimeEdit from '@/components/anime/AnimeEdit'

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
      component: AnimeHome,
    },
    {
      path: '/anime/new',
      name: 'AnimeNew',
      component: AnimeNew,
    },
    {
      path: '/anime/edit/:id',
      name: 'AnimeEdit',
      component: AnimeEdit,
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
