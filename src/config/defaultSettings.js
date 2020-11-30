/*
 * @Author: your name
 * @Date: 2020-11-24 14:55:17
 * @LastEditTime: 2020-11-30 15:14:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\config\defaultSettings.js
 */
/**
 * 项目默认配置项
 * primaryColor - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * colorWeak - 色盲模式
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * contentWidth - 内容区布局： 流式 |  固定
 *
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */

export default {
  navTheme: 'light', // theme for nav menu
  primaryColor: '#FA541C', // primary color of ant design
  layout: 'sidemenu', // nav menu position: `sidemenu` or `topmenu`
  contentWidth: 'Fluid', // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
  fixedHeader: false, // sticky header
  fixSiderbar: false, // sticky siderbar
  colorWeak: false,
  menu: {
    locale: true
  },
  title: '火凤凰电商数据平台',
  pwa: false,
  iconfontUrl: require('../assets/iconfont/iconfont'),
  production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',
  baseUrl: {
    default: 'http://192.168.2.105:8888/Dataplatform/'
  }
}
