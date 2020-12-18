/*
 * @Author: your name
 * @Date: 2020-12-18 15:03:31
 * @LastEditTime: 2020-12-18 15:57:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \houtaiView\src\api\SingleBack.JS
 */
import HttpRequest from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
const axios = new HttpRequest(defaultSettings.baseUrl.default)

export const SingleBackData = data => axios.request({
  method: 'get',
  url: '/execl/selectReturnOrder',
  data
})



