import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from '@/router/modules/product'
import mediaRoutes from '@/router/modules/media'
import orderRoutes from '@/router/modules/order'
import permissionRoutes from '@/router/modules/permission'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/LoginIndex.vue')
  },
  {
    path: '/',
    component: AppLayout,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '', // 默认子路由
        component: () => import('@/views/home/HomeIndex.vue'),
        meta: {
          title: '首页'
        }
      },
      productRoutes,
      mediaRoutes,
      orderRoutes,
      permissionRoutes
    ]
  }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

router.beforeEach(() => {
  nprogress.start() // 开始加载进度条
})

router.afterEach(() => {
  nprogress.done() // 结束进度条
})

export default router
