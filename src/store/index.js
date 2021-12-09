import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import fields from './fields'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    fields,
    users
  },
})
