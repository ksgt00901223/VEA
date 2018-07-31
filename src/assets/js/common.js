// const USERINFO = JSON.parse(sessionStorage.userInfo);
const USERINFO = sessionStorage.getItem("userInfo") ? JSON.parse(sessionStorage.getItem("userInfo")) : "";
const token= sessionStorage.getItem("userInfo") ? JSON.parse(sessionStorage.getItem("userInfo")).token : "";
// console.log(USERINFO);

export default {
  USERINFO,
  token,
};