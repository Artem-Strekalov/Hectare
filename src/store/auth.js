import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {authApp, db} from '../firebase'
import {doc, setDoc} from 'firebase/firestore'

export default {
  state: {},
  mutations: {},
  actions: {
    // регистрация
    async registered(
      {dispatch, commit},
      {email, password, nameCompany, firstName},
    ) {
      try {
        await createUserWithEmailAndPassword(authApp, email, password)
      } catch (e) {
        throw e
      }
    },
    //получение id текущего пользователя
    getUid() {
      const user = authApp.currentUser
      return user ? user.uid : null
    },
    //авторизация
    async authorization({dispatch}, {email, password}) {
      try {
        await signInWithEmailAndPassword(authApp, email, password)
      } catch (e) {
        throw e
      }
    },
    async logout({commit}) {
      await signOut(authApp)
      commit('clearUser')
    },
  },
  getters: {},
}
