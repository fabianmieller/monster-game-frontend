import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'text-white bg-gray-900',
})

export default router
