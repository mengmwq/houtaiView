<!--
 * @Author: your name
 * @Date: 2020-11-27 13:48:40
 * @LastEditTime: 2020-11-27 17:18:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\layouts\UserLayout.vue
-->
<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserLayout',
  computed: {
    ...mapState({
      isMobile: state => state.app.isMobile
    })
  }
}
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
    height: 100%;

    &.mobile {
      .container {
        .main {
          max-width: 368px;
          width: 98%;
        }
      }
    }

    .container {
      width: 100%;
      min-height: 100%;
      background: #f0f2f5 url(~@/assets/img/background.svg) no-repeat 50%;
      background-size: 100%;
      padding: 110px 0 144px;
      position: relative;

      a {
        text-decoration: none;
      }

      .top {
        text-align: center;

        .header {
          height: 44px;
          line-height: 44px;

          .badge {
            position: absolute;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            margin-left: -12px;
            margin-top: -10px;
            opacity: 0.8;
          }

          .logo {
            height: 44px;
            vertical-align: top;
            margin-right: 16px;
            border-style: none;
          }

          .title {
            font-size: 33px;
            color: rgba(0, 0, 0, .85);
            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
          }
        }
        .desc {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }

      .main {
        min-width: 260px;
        width: 368px;
        margin: 0 auto;
      }
    }
  }
</style>
