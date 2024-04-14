import { createRouter, createWebHashHistory } from 'vue-router'
import dashboard from './modules/dashboard'

const routes = [
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  dashboard,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
