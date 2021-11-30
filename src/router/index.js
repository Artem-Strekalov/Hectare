import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'authorization',
    component: () => import('../views/auth/Authorization.vue'),
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/auth/Registration.vue'),
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
  const currentUser = firebase.auth().currentUser
  const requierAuth = to.matched.some(record => record.meta.auth)

  if (requierAuth && !currentUser) {
    next('/')
  } else {
    next()
  }
})
export default router
