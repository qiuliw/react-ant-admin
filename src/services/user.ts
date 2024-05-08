import request from "./request"

// 用户登录
const adminUserLogin = (username:String, passwordMd5:String) => {
  return request.post("/api/user/login", {
    username,
    passwordMd5
  })
}

// 获取用户信息

const adminUserProfile = () => {
  return request.get("/api/adminUser/profile")
}

export default {
    adminUserLogin,
    adminUserProfile
}