// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/bootstrap.min.css';
import 'nprogress/nprogress.css';
import 'bootstrap';
import 'open-iconic/font/css/open-iconic-bootstrap.css';
import 'vue2-dropzone/dist/vue2Dropzone.css';
import 'material-design-icons/iconfont/material-icons.css';

import Vue from 'vue';
import App from './App';
import router from '@/router';
import http from './services/http';

import Breadcrumb from '@/components/Breadcrumb';
Vue.component('breadcrumb', Breadcrumb);

import AlertMessage from '@/components/AlertMessage';
Vue.component('alertMessage', AlertMessage);

import Toasted from 'vue-toasted';
Vue.use(Toasted, {
  iconPack: 'material', // set your iconPack, defaults to material. material|fontawesome
  position: 'top-right',
  duration: 5000,
  theme: 'primary',
  icon: {
    name: 'check',
    after: true // this will append the icon to the end of content
  }
});

Vue.prototype.$http = http;
Vue.config.productionTip = false;

Vue.prototype.$custom = {
  success: {
    type: 'success',
    icon: 'check'
  },
  error: {
    type: 'error',
    icon: 'close'
  }
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
