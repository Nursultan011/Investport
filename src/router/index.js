import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Main/index.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../pages/Search/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About/index.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../pages/Articles/index.vue')
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: () => import('../pages/Articles/_id.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../pages/Profile/index.vue')
  },
  {
    path: '/apartment/:id',
    name: 'apartment',
    component: () => import('../pages/Apartment/_id.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../components/global/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})

export default router
