import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addGoods from '@/views/addGoods.vue'
import loginPage from '@/views/loginPage.vue'
import itemsPage from '@/views/itemsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/createGoods/:userName',
      name: 'createGoods',
      component: addGoods
    },
    {
      path: '/item/:item',
      name: 'item about',
      component: itemsPage
    }
  ]
})

export default router
