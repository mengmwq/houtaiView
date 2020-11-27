/*
 * @Author: your name
 * @Date: 2020-11-27 11:35:49
 * @LastEditTime: 2020-11-27 17:29:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\api\user.js
 */
import HttpRequest from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
const axios = new HttpRequest(defaultSettings.baseUrl.default)



//请求用户查询接口
export const GetUserData = data => axios.request({
  method: 'post',
  url: '/query/selectCustomerDetail',
  data
})



