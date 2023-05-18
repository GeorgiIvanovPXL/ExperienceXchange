import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ArView from '../views/ArView.vue'
import NavigatorView from '@/views/NavigatorView.vue'
import MainApp from '../views/MainApp.vue'
import ArNav from '../views/ArNav.vue'
import SpeedDatingVue from '../views/SpeedDating.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/main',
      component: MainApp,
      children: [
        {
          path: 'navigator',
          name: 'navigator',
          component: NavigatorView
        },
        {
          path: 'ar-nav',
          name: 'ar-nav',
          component: ArNav
        },
        {
          path: 'speeddating',
          name: 'speeddating',
          component: SpeedDatingVue
        },
        {
          path: 'ar',
          name: 'ar',
          component: ArView
        }
      ]
    }
  ]
})

export default router
