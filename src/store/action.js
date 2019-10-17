import {
  SET_TOKEN,
  GET_BY_USERINFO,
  GET_SHOPINFO,
  GET_ECHARTS_DATA
} from "./muations-Type";
import { setToken, setRank } from "@/untils/auth";

import { getInfo, getShop , getEchData  } from "@/untils/api";

export default {
  ByUsername({ commit }, userInfo) {
    const username = userInfo.username.trim();
    return new Promise((resolve, reject) => {
      getInfo(username, userInfo.password)
        .then(response => {
          const data = response.token;
          setToken(data); //登录成功后将token存储在cookie之中
          // 这个应该放在token中
          setRank(response.rank);
          commit(SET_TOKEN, response);

          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
    // const res  = await getInfo(username, userInfo.password)
    // commit(SET_TOKEN, res);
  },
  async getByRoutes({ commit }) {
    // 获取到token后,根据token获取用信息,包括权限等级 , 所有能访问的路由
    commit(GET_BY_USERINFO);
  },
  async getByShop({ commit }) {
    await getShop().then(res => {
      commit(GET_SHOPINFO, res);
    });
  },

  async getEchsData({commit}) {
    let data = await getEchData()
    commit(GET_ECHARTS_DATA , data);
   
  }
};
