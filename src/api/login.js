import instance from '../utils/request'

/*登录之后获取用户信息*/
export function getUserInfo() {
  return instance({
    url: '/users/getUserInfo',
    method: 'GET'
  })
}

/*登录*/
export function doLogin(loginForm) {
  return instance({
    url: '/login',
    method: 'POST',
    params:{
      username: loginForm.username,
      password: loginForm.password
    }
  })
}

/*注册*/
export function signUp(userObj) {
  return instance({
    url: '/users/add',
    method: 'POST',
    data: userObj

  })
}

/*注销*/
export function doLogout() {
  return instance({
    url: '/logout',
    method: 'POST'
  })
}
