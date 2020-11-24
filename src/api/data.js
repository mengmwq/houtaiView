import HttpRequest from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'

const axios = new HttpRequest(defaultSettings.baseUrl.default)

export const initMap = data => axios.request({
  method: 'post',
  url: '/json/wenkong/shouye_map.php',
  data
})
