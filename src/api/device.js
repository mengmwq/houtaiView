/*
 * @Author: your name
 * @Date: 2020-11-27 15:23:25
 * @LastEditTime: 2020-11-27 16:30:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\api\device.js
 */
import HttpRequest from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
const axios = new HttpRequest(defaultSettings.baseUrl.default)



export const selectNotInShopSkuList = data => axios.request({
  method: 'post',
  url: '/businessWarning/selectNotInShopSkuList',
  data
})


//下载预警的接口
export const ExportMarketing = data => axios.request({
  method: 'get',
  url: '/execl/selectNotInShopSku2Execl',
  data
})

