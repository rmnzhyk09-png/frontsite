import { createApp, h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './app.vue'
import './css/app.css'

import DashboardPage from './js/pages/DashboardPage.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp({
  render: () => h(App),
})

app.use(router)
app.mount('#app')
