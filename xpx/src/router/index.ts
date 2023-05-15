import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArView from '../views/ArView.vue'
import MainApp from '../views/MainApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: MainApp
    },
    {
      path: '/navigator',
      name: 'navigator',

      component: () => import('../views/NavigatorView.vue')
    },

    {
      path: '/speeddating',
      name: 'speeddating',
      component: () => import('../views/SpeedDating.vue')
    },
    {
      path: '/ar',
      name: 'artificial_reality',
      component: ArView
    }
  ]
})

export default router
