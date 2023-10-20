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
import CadastroGaragemView from '../views/CadastroGaragemView.vue'
import PagamentoView from '../views/PagamentoView.vue'



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
      path: '/cadastrocarro',
      name: '/cadastrocarro',
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
      path: '/hora/:carId',
      name: 'HoraView',
      component: HoraView,
      props: true, // Isso permite que você passe o parâmetro carId como uma propriedade
    },

    {
      path: '/previewform',
      name: '/previewform',
      component: PreviewFormView
    },

    {
      path: '/cadastrogaragem',
      name: '/cadastrogaragem',
      component: CadastroGaragemView
    },

    {
      path: '/pagamento',
      name: '/pagamento',
      component: PagamentoView
    },


  ]
})

export default router
