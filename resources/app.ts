import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './app.vue'
import './css/app.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./js/pages/HomePage.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./js/pages/ProfilePage.vue'),
    },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
