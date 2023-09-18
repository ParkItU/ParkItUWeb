import { createRouter, createWebHistory } from 'vue-router'
import GarageView from '../views/GarageView.vue'
import CarView from '@/views/CarView.vue'
import InfoCarView from '../views/InfoCarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/garages',
      component: GarageView
    },
    // {
    //   path: '/garages',
    //   name: '/garages',
    //   component: GarageView
    // },
    {
      path: '/cars',
      name: 'cars',
      component: CarView
    },
    {
      path: '/infos',
      name: '/infos',
      component: InfoCarView
    },
  ]
})

export default router
