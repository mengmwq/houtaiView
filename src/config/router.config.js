
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
    redirect: '/system',
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '/dashboard',
      //   name: 'dashboard',
      //   meta: {
      //     title: '首页',
      //     icon: 'home'
      //   },
      //   component: () => import('@/views/Dashboard')
      // },
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
              title: '超时未上新预警'
            },
            component: () => import('@/views/business/Device/index')
          },
          {
            path: '/business/editTab',
            name: 'editTab',
            meta: {
              title: '新'
            },
            component: () => import('@/views/business/Device/editTab')
          }
        ]
      },

        {
          path: '/monitor',
          name: 'monitor ',
          component: RouteView,
          meta: {
            title: '异常业务处理',
            icon: ' icon-rizhiyichang'
          },
          children: [
            {
              path: '/monitor/monitor',
              name: 'monitor',
              meta: {
                title: '重推支付单'
              },
              component: () => import('@/views/monitor/monitor')
            },
            {
              path: '/monitor/shunfen',
              name: 'shunfen',
              meta: {
                title: '顺丰重推订单'
              },
              component: () => import('@/views/monitor/shunfen')
            },
            {
              path: '/monitor/SingleBack',
              name: 'SingleBack',
              meta: {
                title: '导出退单数据'
              },
              component: () => import('@/views/monitor/SingleBack')
            },

            {
              path: '/Dataplatform/execl/selectPayOrderPushError',
              name: 'PaymentFailed',
              meta: {
                title: '导出商城推送支付单失败的订单',
                target:"_blank"
              },

            },
            {
              path: 'http://192.168.20.85:8888/Dataplatform/execl/deliveryOvertimeList',
              name: 'overtime',
              meta: {
                title: '导出超时未发货数据',
                target:"_blank"
              },

            },
            {
              path: 'http://192.168.20.85:8888/Dataplatform/execl/selectOverSoldOrder',
              name: 'oversell',
              meta: {
                title: '导出超售数据',
                target:"_blank"
              },

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
      },
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
  },
  // {
  //   path: '/404',
  //   component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  // }
]
