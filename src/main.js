import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import vuetify from './plugins/vuetify'
import VueDatePicker from '@mathieustan/vue-datepicker'
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css'

Vue.use(VueDatePicker)


Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyDX7FaQ08Mo1TTPoi3wnncK3Zdfg4NFS4g',
  authDomain: 'hectare-cb91a.firebaseapp.com',
  databaseURL:
    'https://hectare-cb91a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'hectare-cb91a',
  storageBucket: 'hectare-cb91a.appspot.com',
  messagingSenderId: '819835781964',
  appId: '1:819835781964:web:005f7a33d74797486805e9',
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
    }).$mount('#app')
  }
})
