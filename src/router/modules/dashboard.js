// 工作台
import Layout from '@/layout/index.vue'

export default {
  path: '/dashboard',
  component: Layout,
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: {
        title: '工作台',
      },
    },
  ],
}
