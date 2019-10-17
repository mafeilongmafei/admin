import axios from "./request";

// export function getInfo(nickname, password) {
//   return axios.post("/app/mock/230901/login", {
//     nickname,
//     password
//   });
// }

export function getInfo(nickname, password) {
  return axios.get("/token", {
    nickname,
    password
  });
}

export function getShop(){
  return axios.get("/shopInfo");
}

export function getEchData() {
  return axios.get("/eachart");
}