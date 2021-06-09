import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '../views/auth/Registration.vue'
import Authorization from '../views/auth/Authorization.vue'
import Home from '../views/auth/Home.vue'
import WelcomeScreen from '../views/auth/WelcomeScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'authorization',
    component: Authorization,
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomeScreen,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
