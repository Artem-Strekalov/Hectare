import Vue from 'vue'
import VueRouter from 'vue-router'
import {authApp} from '../firebase'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: () => import('../views/auth/Auth.vue'),
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import('../views/auth/Reg.vue'),
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/auth/ForgotPassword.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {auth: true},
  },
  {
    path: '/management',
    name: 'management',
    component: () => import('../views/Management.vue'),
    meta: {auth: true},
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('../views/WelcomeScreen.vue'),
    meta: {auth: true},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

//защита роутеров
router.beforeEach((to, from, next) => {
  const currentUser = authApp.currentUser
  const requierAuth = to.matched.some(record => record.meta.auth)

  if (requierAuth && !currentUser) {
    next('/')
  } else {
    next()
  }
})
export default router
