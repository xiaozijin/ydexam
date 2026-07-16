import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../HomeView.vue') 
  },
  {
    path: '/hard-level',
    name: 'hard-level',
    component: () => import('../HardLevelView.vue')
  },
  {
    path: '/single',
    name: 'single',
    component: () => import('../SinglePractice.vue') 
  },
  {
    path: '/batch',
    name: 'batch',
    component: () => import('../BatchPractice.vue') 
  },
  {
    path: '/paper',
    name: 'paper',
    component: () => import('../PaperExam.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router