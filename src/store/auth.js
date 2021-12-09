import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {authApp, db} from '../firebase'
export default {
  state: {},
  mutations: {},
  actions: {
    // регистрация
    async registered({dispatch, commit}, {email, password}) {
      await createUserWithEmailAndPassword(authApp, email, password)
    },

    //получение id текущего пользователя
    getUid() {
      const user = authApp.currentUser
      return user ? user.uid : null
    },

    //авторизация
    async authorization({dispatch}, {email, password}) {
      await signInWithEmailAndPassword(authApp, email, password)
    },

    async logout({commit}) {
      commit('clearUser')
      commit('clearFields')
      await signOut(authApp)
    },
  },
  getters: {},
}
