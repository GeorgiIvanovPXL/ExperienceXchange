import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ArView from '../views/ArView.vue'
import NavigatorView from '@/views/NavigatorView.vue'
import MainApp from '../views/MainApp.vue'
import OnboardingView from '@/views/OnboardingView.vue'
import ArNav from '../views/ArNavView.vue'
import VideoNav from '../views/VideoNavView.vue'
import SpeedDatingVue from '../views/SpeedDating.vue'
import PreDemo from '@/views/PreDemoView.vue'
import Demo from '@/views/DemoView.vue'
import ArArrived from '../views/ArArrivedView.vue'
import ReviewView from '../views/ReviewView.vue'
import ReviewLastView from '../views/ReviewLastView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ob',
      component: OnboardingView
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/video-nav',
      name: 'video-nav',
      component: VideoNav
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
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
          path: 'review',
          name: 'review',
          component: ReviewView
        },

        {
          path: 'review_last',
          name: 'review_last',
          component: ReviewLastView
        },

        {
          path: 'arrived',
          name: 'arrived',
          component: ArArrived
        },
        {
          path: 'pre-demo',
          name: 'pre-demo',
          component: PreDemo
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
