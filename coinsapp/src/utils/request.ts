// service统一出口
import HYRequest from './config'
import { BASE_URL, TIME_OUT } from './config/config'

// 创建一个新的请求,并传入参数
const request = new HYRequest({
  // 传入baseurl
  baseURL: BASE_URL,
  // 传入超时时间
  timeout: TIME_OUT,
  // 传入拦截器
  interceptors: {
    requestInterceptor: (config={}) => {
      // 给当前请求实例所有的请求添加token
      const token = ''
      if (token) {
        // 模板字符串进行拼接
        config.headers.Authorization = `Bearer ${token}`
      }

      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default request;