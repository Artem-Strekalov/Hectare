import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {authApp} from './firebase'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import {onAuthStateChanged} from '@firebase/auth'
import vuescroll from 'vuescroll/dist/vuescroll-native'
import 'material-design-icons-iconfont'
Vue.use(vuescroll, {
  ops: {
    rail: {
      background: '#01a99a',
      opacity: 0,
      size: '6px',
      specifyBorderRadius: false,
      gutterOfEnds: null,
      gutterOfSide: '2px',
      keepShow: false,
    },
  },

  name: 'myScroll',
})

Vue.use(Vuelidate)
Vue.config.productionTip = false
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
