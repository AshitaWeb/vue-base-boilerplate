import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import Logout from '@/components/Logout';

import Anime from '@/components/anime/Root';
import AnimeHome from '@/components/anime/Home';
import AnimeNew from '@/components/anime/New';
import AnimeEdit from '@/components/anime/Edit';

import Alimento from '@/components/alimento/Root';
import AlimentoHome from '@/components/alimento/Home';
import AlimentoNew from '@/components/alimento/New';
import AlimentoEdit from '@/components/alimento/Edit';

import Users from '@/components/users/Root';
import UsersHome from '@/components/users/Home';
import UsersNew from '@/components/users/New';
import UsersEdit from '@/components/users/Edit';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        humanName: 'Dashboard',
        showOnNav: true
      }
    },
    // ANIMES
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
          }
        },
        {
          path: 'new',
          name: 'AnimeNew',
          component: AnimeNew,
          meta: {
            humanName: 'New'
          }
        },
        {
          path: 'edit/:id',
          name: 'AnimeEdit',
          component: AnimeEdit,
          meta: {
            humanName: 'Edit'
          }
        }
      ]
    },
    // Alimentos
    {
      path: '/alimento',
      redirect: '/alimento/home',
      name: 'Alimento',
      component: Alimento,
      meta: {
        humanName: 'Alimentos',
        showOnNav: true
      },
      children: [
        {
          path: 'home',
          name: 'AlimentoHome',
          component: AlimentoHome,
          meta: {
            humanName: 'List'
          }
        },
        {
          path: 'new',
          name: 'AlimentoNew',
          component: AlimentoNew,
          meta: {
            humanName: 'New'
          }
        },
        {
          path: 'edit/:id',
          name: 'AlimentoEdit',
          component: AlimentoEdit,
          meta: {
            humanName: 'Edit'
          }
        }
      ]
    },
    // USERS
    {
      path: '/users',
      redirect: '/users/home',
      name: 'Users',
      component: Users,
      meta: {
        humanName: 'Users',
        showOnNav: true
      },
      children: [
        {
          path: 'home',
          name: 'UsersHome',
          component: UsersHome,
          meta: {
            humanName: 'List'
          }
        },
        {
          path: 'new',
          name: 'UsersNew',
          component: UsersNew,
          meta: {
            humanName: 'New'
          }
        },
        {
          path: 'edit/:id',
          name: 'UsersEdit',
          component: UsersEdit,
          meta: {
            humanName: 'Edit'
          }
        }
      ]
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
    }
  ]
});
