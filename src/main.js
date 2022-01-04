import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuelidate from 'vuelidate'
import {authApp} from './firebase'
import JsonExcel from 'vue-json-excel'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont'
import {onAuthStateChanged} from '@firebase/auth'
import vuescroll from 'vuescroll/dist/vuescroll-native'


Vue.use(vuescroll)
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.component('downloadExcel', JsonExcel)

let app
onAuthStateChanged(authApp, () => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
    }).$mount('#app')
  }
})
