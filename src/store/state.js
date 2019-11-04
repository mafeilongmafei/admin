import { getToken } from "../untils/auth"
export default {
  user: {
    token: getToken(),
    rous: [],
    rank : 0,
  },
  name : {
    user : {
      rank : 4,
    },
    admin : {
      rank : 5,
    }
  },
  shop: {
    shopInfo: [],
    shopList: []
  },
  eachrt: {}
};