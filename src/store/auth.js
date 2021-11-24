import firebase from 'firebase/app'
export default {
  state: {},
  mutations: {},
  actions: {
    // регистрация
    async registered({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const currentUser = firebase.auth().currentUser
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    //авторизация
    async authorization({dispatch}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        const currentUser = await firebase.auth().currentUser
        console.log(currentUser.uid)
      } catch (e) {
        throw e
      }
    },
    async logout({commit}) {
      await firebase.auth().signOut()
    },
  },
  getters: {},
}
