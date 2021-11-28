import axios from 'axios'
import NProgress from 'nprogress'

import store from '../store'

const request = axios.create({
  baseURL: 'http://127.0.0.1:8088'
})

// 请求拦截
request.interceptors.request.use(
  (config) => {
    // 在请求头提供token
    const token = store.getters.token || window.sessionStorage.getItem('token')
    if (token) {
        //每次请求都会携带token
      config.headers.Authorization = token
    }
    NProgress.start()
    return config
  },
  (err) => Promise.reject(err)
)
// 响应拦截
request.interceptors.response.use(
  (result) => {
    NProgress.done()
    return result.data
  },
  (err) => Promise.reject(err)
)

export default request
