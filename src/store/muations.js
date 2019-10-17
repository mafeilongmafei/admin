
import {
  SET_TOKEN,
  GET_BY_USERINFO,
  GET_SHOPINFO,
  GET_ECHARTS_DATA
} from "./muations-Type";
import config from "../untils/config"
import router from "../router/index"
import { filerRouter } from "../filters/filters";



export default {
  [SET_TOKEN](state, data) {
    state.user.token = data.token;
    state.user.rank = data.rank;
  },
  [GET_BY_USERINFO](state , userInfo) {
    // 这个config 应该时请求时,和用户信息一起拿到的
    // 得到初始路由
     let initRoutes = router.options.routes;
    //  筛选路由 放在了filters文件加下

    let arr  = filerRouter(config);
    state.user.rous = [...arr];
    router.addRoutes([...config ,...initRoutes])
  },
  [GET_SHOPINFO] (state , shopInfo) {
    state.shop = shopInfo
   
  },
  [GET_ECHARTS_DATA](state , {data}) {
    state.eachrt = data
  }
};
