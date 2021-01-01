export default [
  // auth routes
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/authPages/LoginPage.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/auth/github/success',
    name: 'authGithubSuccess',
    component: () => import('@/views/authPages/LoginPage.vue'),
    meta: {
      title: 'Login',
    },
  },
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

