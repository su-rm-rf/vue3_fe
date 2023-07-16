import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const routes:any = [
  {
    path: '/signin',
    component: () => import('@/components/common/Signin.vue'),
  },
  {
    path: '/',
    component: () => import('@/components/common/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/common/Dashboard.vue'),
      },
      {
        path: '/category',
        component: () => import('@/components/category/index.vue'),
      },
      {
        path: '/category/:id',
        component: () => import('@/components/category/detail.vue'),
      },
      {
        path: '/user',
        component: () => import('@/components/user/index.vue'),
      },
      {
        path: '/todo',
        component: () => import('@/components/todo/index.vue'),
      },
      {
        path: '/todo/:id',
        component: () => import('@/components/todo/Detail.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/todo/edit/:id',
        component: () => import('@/components/todo/Edit.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/about',
        component: () => import('@/components/common/About.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/components/common/404.vue')
      },
    ]
  },
]

const router = createRouter({
  history: process.env.isClient ? createWebHistory() : createMemoryHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  console.warn(to, from)
  const isAuthenticated = !!localStorage.token
  if (!isAuthenticated && to.path !== '/signin') {
    next({ path: '/signin' })
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  console.log(to, from)
  next()
})

export default router