/*
 * @Author: mjk
 * @Date: 2020-11-26 15:54:12
 * @LastEditTime: 2020-11-26 19:00:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\api\system.js
 */
import HttpRequest from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
const axios = new HttpRequest(defaultSettings.baseUrl.default)


// export const GetUserList = (params) => {
//   return axios.request({ url: '/query/selectMarketingBySku', method: 'post', params })
// }
//请求活动查询接口
export const GetUserList = data => axios.request({
  method: 'post',
  url: '/query/selectMarketingBySku',
  data
})
