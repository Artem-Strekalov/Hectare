import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import fields from './fields'
import users from './users'
import tillage from './mgtFields/tillage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    fields,
    users,
    tillage,
  },
})
