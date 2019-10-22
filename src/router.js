import Vue from 'vue'
import Router from 'vue-router'
import HomeWork from "./views/HomeWork";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homework',
      name: 'homework',
      component: HomeWork
    },
    {
      path: "*",
      redirect: '/homework'
    }
  ]
})
