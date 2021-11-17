import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '../views/auth/Registration'
import Authorization from '../views/auth/Authorization.vue'
import Home from '../views/Home.vue'
import WelcomeScreen from '../views/WelcomeScreen.vue'
import FieldManagement from '../views/FieldManagement.vue'
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
  {
    path: '/field-management',
    name: 'fieldManagement',
    component: FieldManagement,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
