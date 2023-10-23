import { createRouter, createWebHistory } from 'vue-router'
import Registration from "@/views/Registration";

const routes = [
  {
    path: '/',
    name: 'registration',
    meta: {layout: 'Empty'},
    component: Registration,
    beforeEnter: () => {
      if(localStorage.getItem('user')) {
        localStorage.clear('user')
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'Empty'},
    component: () => import('@/views/Autorization'),
    beforeEnter: () => {
      if(localStorage.getItem('user')) {
        localStorage.clear('user')
      }
    }
  },
  {
    path: '/home',
    name: 'home',
    meta: {layout: 'Main'},
    component: () => import('@/views/Home'),
    beforeEnter: () => {
      if(!localStorage.getItem('user')) {
        console.log('Авторизуйтесь!')
        router.push('/')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
