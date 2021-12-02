import firebase from 'firebase/app'
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
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase
          .database()
          .ref(`/users/${uid}/regInfo`)
          .set({
            nameCompany,
            firstName,
            email,
          })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    //авторизация
    async authorization({dispatch}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
    },
    async logout({commit}) {
      commit('clearInfo')
      await firebase.auth().signOut()
    },
  },
  getters: {},
}
