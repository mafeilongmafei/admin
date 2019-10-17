import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

/* 初始路由 */
export default new Router({
  routes: [
    {
      path : '/',
      redirect : '/home'
    },
    {
      path: "/login",
      component: () => import("../views/login")
    },
    {
      path: "/",
      component: () => import("../views/layout"),
      children : [
        {
          path : '/home',
          component : ()=>import('../views/home')
        }
      ]
    },
  ]
});





