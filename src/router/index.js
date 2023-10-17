import { createRouter, createWebHistory } from 'vue-router'
import GarageView from '../views/GarageView.vue'
import CarView from '@/views/CarView.vue'
import AjudaView from '../views/AjudaView.vue'
import SobreView from '../views/SobreView.vue'
import NewCarView from '../views/NewCarView.vue'
import LoginView from '../views/LoginView.vue'
import CadastroClienteView from '../views/CadastroClienteView.vue'
import HoraView from '../views/HoraView.vue'
import PreviewFormView from '../views/PreviewFormView.vue'
import CadastroGaragemViewView from '../views/CadastroGaragemView.vue'


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
      component: CarView
    },
    {
      path: '/ajuda',
      name: '/ajuda',
      component: AjudaView
    },
    {
      path: '/sobre',
      name: '/sobre',
      component: SobreView
    },
    {
      path: '/novoCarro',
      name: '/novoCarro',
      component: NewCarView
    },
    {
      path: '/',
      name: '/login',
      component: LoginView
    },
    {
      path: '/cadastro',
      name: '/cadastro',
      component: CadastroClienteView
    },

    {
      path: '/hora',
      name: '/hora',
      component: HoraView
    },

    {
      path: '/previewform',
      name: '/previewform',
      component: PreviewFormView
    },

    {
      path: '/cadastrogaragem',
      name: '/cadastrogaragem',
      component: CadastroGaragemViewView
    },


  ]
})

export default router
