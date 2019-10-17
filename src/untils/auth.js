import Cookies from 'js-cookie'


const TokenKey = 'Admin-Token'
export function getToken() {
    return Cookies.get(TokenKey)
}
export function setToken(Token) {
    return Cookies.set(TokenKey , Token)
}
export function removeToken() {
    return Cookies.remove(TokenKey);
}





export function getRank() {
    
    return Cookies.get("rank")
}
export function setRank(Token) {

     Cookies.set("rank", Token);

}
export function removeRank() {
         return Cookies.remove("rank");
       }