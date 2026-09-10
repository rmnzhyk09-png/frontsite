import { createRouter, createWebHistory } from 'vue-router'
import AvantiHome from '@/pages/avanti_home.vue'
import AvantiProfile from '@/pages/avanti_profile.vue'
import AvantiLogin from '@/pages/avanti_login.vue'
import AvantiBankLoading from '@/pages/avanti_bank_loading.vue'
import AvantiIban from '@/pages/avanti_iban.vue'

const routes = [
  { path: '/', name: 'home', component: AvantiHome },
  { path: '/profile', name: 'profile', component: AvantiProfile },
  { path: '/login', name: 'login', component: AvantiLogin },
  { path: '/bank-loading', name: 'bankLoading', component: AvantiBankLoading },
  { path: '/iban', name: 'iban', component: AvantiIban },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})