import { createRouter, createWebHistory } from 'vue-router'
import GarageView from '../views/GarageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/garages',
      name: '/garages',
      component: GarageView
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import('../views/CarView.vue')
    }
  ]
})

export default router
