import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

request.interceptors.request.use((config) => {
  // 统一设置 token

  return config
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use((res) => {
  return res
}, error => {
  // 统一处理响应错误 token 过期
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
