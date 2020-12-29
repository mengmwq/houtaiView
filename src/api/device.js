/*
 * @Author: your name
 * @Date: 2020-11-27 15:23:25
 * @LastEditTime: 2020-12-29 16:02:02
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

export const GoodInfoByParamMap = data => axios.request({
  method: 'post',
  url: '/query/selectGoodInfoByParamMap',
  data
})

//根据条件查询所有品牌
export const selectBrandList = data => axios.request({
  method: 'post',
  url: '/query/selectBrandList',
  data
})
//获取单条数据
export const getGoodInfoBySku = data => axios.request({
  method: 'post',
  url: '/query/getGoodInfoBySku',
  data
})
//提交编辑的数据
export const updateBarcodeBySku = data => axios.request({
  method: 'post',
  url: '/businessWarning/updateBarcodeBySku',
  data
})
//下载预警的接口
export const ExportMarketing = data => axios.request({
  method: 'get',
  url: '/execl/selectNotInShopSku2Execl',
  data
})

