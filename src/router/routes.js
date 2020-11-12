export default [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/DashboardPage.vue'),
    meta: {
      title: 'Dashboard',
    },
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('@/views/GamePage.vue'),
    meta: {
      title: 'Game',
    },
  },
]

