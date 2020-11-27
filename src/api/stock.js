/*
 * @Author: your name
 * @Date: 2020-11-27 11:05:05
 * @LastEditTime: 2020-11-27 11:08:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\api\Stock.js
 */
import HttpRequest from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
const axios = new HttpRequest(defaultSettings.baseUrl.default)


// export const GetUserList = (params) => {
//   return axios.request({ url: '/query/selectMarketingBySku', method: 'post', params })
// }
//请求活动查询接口
export const GetStockData = data => axios.request({
  method: 'post',
  url: '/query/selectAllStockBySku',
  data
})
