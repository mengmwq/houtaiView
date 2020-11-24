import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: constantRouterMap.concat(asyncRouterMap)
})

export default router
