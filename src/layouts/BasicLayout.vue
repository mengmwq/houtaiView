<template>
  <pro-layout
    :menus="menus"
    :title="title"
    :collapsed="collapsed"
    :mediaQuery="query"
    :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery"
    :handleCollapse="handleCollapse"
    :logo="logoSrc"
    :i18nRender="i18nRender"
    v-bind="settings"
  >
    <!-- <setting-drawer :settings="settings" @change="handleSettingChange" />
    <template v-slot:rightContentRender>
      <right-content
        :top-menu="settings.layout === 'topmenu'"
        :is-mobile="isMobile"
        :theme="settings.theme"
      />
    </template> -->
    <template v-slot:footerRender>
      <div></div>
    </template>
    <router-view />
  </pro-layout>
</template>

<script>
// import { SettingDrawer } from "@ant-design-vue/pro-layout";
import { CONTENT_WIDTH_TYPE, TOGGLE_MOBILE_TYPE } from "@/store/mutation-types";
// import RightContent from "@/components/GlobalHeader/RightContent";
import defaultSettings from "@/config/defaultSettings";
import logoSrc from "@/assets/img/logo.png";
import { asyncRouterMap } from "@/config/router.config";

export default {
  components: {
    // SettingDrawer,
    // RightContent,
  },
  data() {
    return {
      menus: [],
      logoSrc: require("@/assets/img/logo.png"),
      collapsed: false,
      title: defaultSettings.title,
      settings: {
        // 布局类型
        layout: defaultSettings.layout, // 'sidemenu', 'topmenu'
        // CONTENT_WIDTH_TYPE
        contentWidth:
          defaultSettings.layout === "sidemenu"
            ? CONTENT_WIDTH_TYPE.Fluid
            : defaultSettings.contentWidth,
        // 主题 'dark' | 'light'
        theme: defaultSettings.navTheme,
        // 主色调
        primaryColor: defaultSettings.primaryColor,
        fixedHeader: defaultSettings.fixedHeader,
        fixSiderbar: defaultSettings.fixSiderbar,
        colorWeak: defaultSettings.colorWeak,

        hideHintAlert: true,
        hideCopyButton: true,
      },
      query: {},
      isMobile: false,
      t: "",
    };
  },
  created() {
    // const routes = this.mainMenu.find(item => item.path === '/')
    this.menus = asyncRouterMap.find((item) => item.path === "/").children;
    // this.menus = (routes && routes.children) || []
    // 处理侧栏收起状态
    this.$watch("collapsed", () => {
      this.$store.commit("sidebar_type", this.collapsed);
      if (this.collapsed) {
        this.logoSrc = require("@/assets/img/logo2.png");
        console.log(this.title, "this.");
        this.title = this.t;
      } else {
        this.logoSrc = require("@/assets/img/logo.png");
        this.title = defaultSettings.title;
      }
    });
    this.$watch("isMobile", () => {
      this.$store.commit(TOGGLE_MOBILE_TYPE, this.isMobile);
      if (this.isMobile) {
        this.logoSrc = require("@/assets/img/logo2.png");
        this.title = this.t;
      } else {
        this.logoSrc = require("@/assets/img/logo.png");
        this.title = true;
        this.title = defaultSettings.title;
      }
    });
  },
  mounted() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Edge") > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed;
        setTimeout(() => {
          this.collapsed = !this.collapsed;
        }, 16);
      });
    }
  },
  methods: {
    i18nRender(e) {
      switch (e) {
        case "app.setting.pagestyle":
          return "页面样式";
        case "app.setting.themecolor":
          return "主题色";
        case "app.setting.navigationmode":
          return "导航样式";
        case "app.setting.content-width":
          return "页面宽";
        case "app.setting.fixedheader":
          return "是否固定头部";
        case "app.setting.fixedsidebar":
          return "是否固定侧边栏";
        case "app.setting.othersettings":
          return "其他设置";
        case "app.setting.weakmode":
          return "弱模式";
        default:
          return e;
      }
    },
    handleMediaQuery(val) {
      this.query = val;
      if (this.isMobile && !val["screen-xs"]) {
        this.isMobile = false;
        return;
      }
      if (!this.isMobile && val["screen-xs"]) {
        this.isMobile = true;
        this.collapsed = false;
        this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fluid;
        // this.settings.fixSiderbar = false
      }
    },
    handleCollapse(val) {
      this.collapsed = val;
    },
    handleSettingChange({ type, value }) {
      console.log("type", type, value);
      type && (this.settings[type] = value);
      switch (type) {
        case "contentWidth":
          this.settings[type] = value;
          break;
        case "layout":
          if (value === "sidemenu") {
            this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fluid;
          } else {
            this.settings.fixSiderbar = false;
            this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fixed;
          }
          break;
      }
    },
    logoRender() {
      return <img src="../assets/img/logo.png" />;
    },
  },
};
</script>

<style lang="less">
#logo {
  height: auto;
  padding: 0;
  & > a > span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 0 10px 0;
  }
}
.ant-pro-sider-menu-logo svg,
.ant-pro-sider-menu-logo img {
  height: 63px;
  width: 120px;
  vertical-align: middle;
}
.ant-pro-sider-menu-sider.light .ant-pro-sider-menu-logo h1 {
  color: #000000;
}
</style>
