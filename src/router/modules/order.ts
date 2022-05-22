import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/order',
  name: 'order',
  component: RouterView,
  children: [
    {
      path: 'order_list',
      name: 'order_list',
      component: () => import('@/views/order/list/ListIndex.vue')
    },
    {
      path: 'order_offline',
      name: 'order_offline',
      component: () => import('@/views/order/offline/OfflineIndex.vue')
    }
  ]
}

export default routes
