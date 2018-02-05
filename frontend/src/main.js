// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/bootstrap.min.css';
import 'nprogress/nprogress.css';
import 'bootstrap';
import 'open-iconic/font/css/open-iconic-bootstrap.css';
import 'vue2-dropzone/dist/vue2Dropzone.css'

import Vue from 'vue'
import App from './App'
import router from '@/router'
import http from './services/http'

import Breadcrumb from "@/components/Breadcrumb";
Vue.component('breadcrumb', Breadcrumb);

import AlertMessage from "@/components/AlertMessage";
Vue.component('alertMessage', AlertMessage);

Vue.prototype.$http = http;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
