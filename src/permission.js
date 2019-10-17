import router from "./router/";
import store from "./store";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration



router.beforeEach(async (to, from, next) => {
  const hastoken = store.state.user && store.state.user.token
  console.log(store.state.user);
  NProgress.start();
  if (hastoken) {
    if (to.path === "/login") {
      next("/");
      NProgress.done();
    } else {
      if (store.state.user && store.state.user.rous.length > 0) {
        next();
      } else {
        await store.dispatch("getByRoutes")
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
