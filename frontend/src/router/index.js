import Vue from 'vue';
import Router from 'vue-router';

import Root from '@/components/Root';

import Home from '@/components/app/home/Home';

import Login from '@/components/app/auth/Login';
import Logout from '@/components/app/auth/Logout';

import AnimeHome from '@/components/app/anime/Home';
import AnimeForm from '@/components/app/anime/Form';

import mangaHome from '@/components/app/manga/Home';
import mangaForm from '@/components/app/manga/Form';

import UsersHome from '@/components/app/users/Home';
import UsersForm from '@/components/app/users/Form';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        humanName: 'Home',
        showOnNav: true
      }
    },
    // ANIMES
    {
      path: '/anime',
      redirect: '/anime/home',
      component: Root,
      meta: {
        humanName: 'Animes',
        showOnNav: true
      },
      children: [
        {
          path: 'home',
          component: AnimeHome,
          meta: {
            humanName: 'List'
          }
        },
        {
          path: 'new',
          component: AnimeForm,
          meta: {
            humanName: 'New'
          }
        },
        {
          path: 'edit/:id',
          component: AnimeForm,
          meta: {
            humanName: 'Edit'
          }
        }
      ]
    },
    // Manga
    {
      path: '/manga',
      redirect: '/manga/home',
      component: Root,
      meta: {
        humanName: 'Mangas',
        showOnNav: true
      },
      children: [
        {
          path: 'home',
          component: mangaHome,
          meta: {
            humanName: 'List'
          }
        },
        {
          path: 'new',
          component: mangaForm,
          meta: {
            humanName: 'New'
          }
        },
        {
          path: 'edit/:id',
          component: mangaForm,
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
      component: Root,
      meta: {
        humanName: 'Users',
        showOnNav: true
      },
      children: [
        {
          path: 'home',
          component: UsersHome,
          meta: {
            humanName: 'List'
          }
        },
        {
          path: 'new',
          component: UsersForm,
          meta: {
            humanName: 'New'
          }
        },
        {
          path: 'edit/:id',
          component: UsersForm,
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
