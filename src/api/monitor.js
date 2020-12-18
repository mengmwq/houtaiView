/*
 * @Author: your name
 * @Date: 2020-11-30 14:01:24
 * @LastEditTime: 2020-12-18 16:31:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \houtaiView\src\api\monitor.js
 */

import HttpRequest from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
const axios = new HttpRequest(defaultSettings.baseUrl.default)


export const uploadData = data => axios.request({method: 'post', url: '/execl/rePushPaymentOrder', data, responseType: 'arraybuffer'})

 // 重推wms
// export const rePushPaymentOrder = data => axios.request({method: 'post', url: '/businessWarning/updatePushWMSTimes', data})
