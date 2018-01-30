import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Logout from '@/components/Logout'

import Anime from '@/components/anime/Anime'
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
      component: Dashboard,
      meta: {
        humanName: 'Dashboard',
        showOnNav: true,
      }
    },
    {
      path: '/anime',
      redirect: '/anime/home',
      name: 'Anime',
      component: Anime,
      meta: {
        humanName: 'Animes',
        showOnNav: true
      },
      children: [
        {
          path: 'home',
          name: 'AnimeHome',
          component: AnimeHome,
          meta: {
            humanName: 'List'
          },
        },
        {
          path: 'new',
          name: 'AnimeNew',
          component: AnimeNew,
          meta: {
            humanName: 'New'
          },
        },
        {
          path: 'edit/:id',
          name: 'AnimeEdit',
          component: AnimeEdit,
          meta: {
            humanName: 'Edit'
          },
        }
      ],
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
