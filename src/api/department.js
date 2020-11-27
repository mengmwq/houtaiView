/*
 * @Author: your name
 * @Date: 2020-11-27 14:14:47
 * @LastEditTime: 2020-11-27 17:21:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\api\department.js
 */
import HttpRequest from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
const axios = new HttpRequest(defaultSettings.baseUrl.default)

//请求订单查询接口
export const selectOrderDetailByOrderNo = data => axios.request({
  method: 'post',
  url: '/query/selectOrderDetailByOrderNo',
  data
})
