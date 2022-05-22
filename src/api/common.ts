/**
 * 公共基础接口封装
 */
import request from '@/utils/request'
import { ILoginInfo } from '@/api/types/common'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })
  // return request.get<ResponseData<{
  // slide: string[]
  // logo_square: string
  // logo_rectangle: string
  // login_logo: string
  // }>>('/login/info').then(res => {
  //   return res.data
  // })
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    responseType: 'blob'
  })
}
