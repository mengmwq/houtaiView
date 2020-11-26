
import BasicLayout from '@/layouts/BasicLayout'
import UserLayout from '@/layouts/UserLayout'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/dashboard',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: 'home'
        },
        component: () => import('@/views/Dashboard')
      },
      {
        path: '/system',
        name: 'system',
        meta: {
          title: '数据查询',
          icon: ' icon-shujuchaxun'
        },
        component: RouteView,
        children: [
          {
            path: '/system/department',
            name: 'department',
            meta: {
              title: '订单查询'
            },
            component: () => import('@/views/system/Department/index')
          },
          {
            path: '/system/activity',
            name: 'activity',
            meta: {
              title: '活动查询'
            },
            component: () => import('@/views/system/Activity/index')
          },
          {
            path: '/system/suser',
            name: 'suser',
            meta: {
              title: '用户查询'
            },
            component: () => import('@/views/system/User/index')
          },
          {
            path: '/system/stock',
            name: 'stock',
            meta: {
              title: '库存查询'
            },
            component: () => import('@/views/system/Stock/index')
          }
        ]
      },
      {
        path: '/business',
        name: 'business',
        component: RouteView,
        redirect: '/business/device',
        meta: {
          title: '业务预警',
          icon: ' icon-yujing'
        },
        children: [
          {
            path: '/business/device',
            name: 'device',
            meta: {
              title: '设备管理'
            },
            component: () => import('@/views/business/Device/index')
          }
        ]
      },
      {
        path: '/monitor',
        name: 'monitor',
        component: RouteView,
        redirect: '/monitor/general',
        meta: {
          title: '异常业务处理',
          icon: ' icon-rizhiyichang'
        },
        children: [
          {
            path: '/monitor/general',
            name: 'general',
            meta: {
              title: '通用监控设备'
            },
            component: () => import('@/views/monitor/General')
          }
        ]
      }
    ]
  }
]

export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    name: 'user',
    hidden: true,
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      }
      // {
      //   path: 'register',
      //   name: 'register',
      //   component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      // },
      // {
      //   path: 'register-result',
      //   name: 'registerResult',
      //   component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      // }
    ]
  }
  // {
  //   path: '/404',
  //   component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  // }
]
