import {db, authApp} from '../firebase'
import {doc, setDoc, getDoc, startAt} from 'firebase/firestore'
export default {
  state: {
    user: {},
  },
  mutations: {
    saveUser(state, user) {
      state.user = user
    },
    clearUser(state) {
      state.user = {}
    },
  },
  actions: {
    //получение данных о зарегистрированном пользователе
    async loadUser({dispatch, commit}) {
      const uid = await dispatch('getUid')
      const path = doc(db, 'users', `${uid}`)
      const dataUser = await getDoc(path)

      if (dataUser.exists()) {
        commit('saveUser', dataUser.data())
      } else {
        commit('saveUser', null)
      }
    },
    // заливаем данные о пользователе при регистрации
    async sendUsersInfo({dispatch, commit}, {firstName, nameCompany, email}) {
      let uid = await dispatch('getUid')
      try {
        await setDoc(doc(db, 'users', `${uid}`), {
          firstName,
          nameCompany,
          email,
        })
      } catch (error) {}
    },
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getCompany(state) {
      if (state.user) {
        return state.user.nameCompany
      }
      return null
    },
  },
}
