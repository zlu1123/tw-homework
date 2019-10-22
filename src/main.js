import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '../public/img/homework/font icons/fonts.css'
import '../public/img/homework/home-style.css'
import httpAxios from "axios"

import es6Promise from "es6-promise"

es6Promise.polyfill();
Vue.prototype.axios = httpAxios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
