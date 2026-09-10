import { createRouter, createWebHistory } from 'vue-router'
import AvantiHome from '@/pages/avanti_home.vue'
import AvantiProfile from '@/pages/avanti_profile.vue'
import AvantiLogin from '@/pages/avanti_login.vue'

const routes = [
  { path: '/', name: 'home', component: AvantiHome },
  { path: '/profile', name: 'profile', component: AvantiProfile },
  { path: '/login', name: 'login', component: AvantiLogin },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})