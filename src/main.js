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
    if (to.path === "/login") {
      next("/");
      NProgress.done();
    } else {
      if (store.state.user && store.state.user.rous.length > 0) {
        next();
      } else {
        await store.dispatch("getByRoutes");
        next({ ...to, replace: true });
      }
    }
  } else {
    if (to.path !== "/login") {
      next("/login");
      NProgress.done();
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
