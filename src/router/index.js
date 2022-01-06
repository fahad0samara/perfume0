import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
 
    component: () => import( '../views/About.vue')
  },
  {
    path: '/',
    name: 'singin',

    component: () => import('../components/singin')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../components/login')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
