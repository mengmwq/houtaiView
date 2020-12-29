/*
 * @Author: your name
 * @Date: 2020-12-18 16:56:31
 * @LastEditTime: 2020-12-21 19:15:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \houtaiView\src\api\shunfen.js
 */
import HttpRequest from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
const axios = new HttpRequest(defaultSettings.baseUrl.default)


export const uploadData = data => axios.request({method: 'post', url: '/execl/rePushOrder', data, responseType: 'arraybuffer'})
