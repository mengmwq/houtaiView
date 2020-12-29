/*
 * @Author: your name
 * @Date: 2020-11-24 14:55:17
 * @LastEditTime: 2020-12-21 16:15:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { VueAxios } from './utils/request'

import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import Antd from 'ant-design-vue'
import BaiduMap from 'vue-baidu-map'
import './permission'
import 'ant-design-vue/dist/antd.less'
import './global.less'
import themePluginConfig from './config/themePluginConfig'

Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
// Vue.use(VueAxios)
Vue.use(Antd)
Vue.use(BaiduMap, { ak: 'XP1alssWsEscC3NfYAhj6YfqKvgQgUXF' })
Vue.component('pro-layout', ProLayout)
Vue.component('page-header-wrapper', PageHeaderWrapper)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
