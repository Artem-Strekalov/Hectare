import firebase from 'firebase/app'
export default {
  actions: {
    //регистрация
    async register(
      {dispatch, commit},
      {email, password, nameCompany, userFirstName, userLastName},
    ) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({
            nameCompany,
            userFirstName,
            userLastName,
          })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    //авторизация
    async login({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    // выход
    async logout() {
      await firebase.auth().signOut()
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
  },
}
