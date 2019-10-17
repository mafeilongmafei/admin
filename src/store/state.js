import { getToken } from "../untils/auth"
export default {
  user: {
    token: getToken(),
    rous: [],
    rank : 0,
  },
  shop: {
    shopInfo: [],
    shopList: []
  },
  eachrt: {}
};