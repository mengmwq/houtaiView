<!--
 * @Author: your name
 * @Date: 2020-11-24 14:55:17
 * @LastEditTime: 2020-11-26 15:19:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\App.vue
-->
<template>
  <a-config-provider :locale="zh_CN">
    <div id="app">
        <router-view/>
    </div>
  </a-config-provider>
</template>

<script>
// eslint-disable-next-line camelcase
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  data () {
    return {
      zh_CN
    }
  }
}
</script>
<style>
.anticon{
  font-family: iconfont;
}
.anticon::before{
  display: block!important;
}
.ant-menu-item .anticon, .ant-menu-submenu-title .anticon {
  font-size: 16px!important;
}
</style>
