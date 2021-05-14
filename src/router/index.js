import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '../views/auth/Registration.vue'
import Authorization from '../views/auth/Authorization.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
  },
  {
    path: '/authorization',
    name: 'authorization',
    component: Authorization,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
