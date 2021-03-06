import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import store from "./store/index";
import router from "./router/index";
import "./assets/css/comm.css";
// import "./permission";

import "./mock/index";
//导入iconfont
import "./assets/iconfont/iconfont.css";
import "./assets/iconfont/iconfont.js";


import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style







NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  const hastoken = store.state.user && store.state.user.token;
  NProgress.start();
  if (hastoken) {
    //有了token还想进入 ,休想 返回首页
    if (to.path === "/login") {
      next("/");
      NProgress.done();
    } else {
      //如果后端返回路由 就next()
      if (store.state.user && store.state.user.rous.length > 0) {
        next();
      } else {
        //没有返回执行获取路由
        await store.dispatch("getByRoutes");
        //合并路由
        next({ ...to, replace: true });
      }
    }
  } else {
    //没token要进入其他页面 休想  去登录页面
    if (to.path !== "/login") {
      next("/login");
      NProgress.done();
    } else {
      //有了就进去把
      next();
    }
  }
});
//每次跳转结束时,进度去掉
router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
//是否开启警告模式
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
