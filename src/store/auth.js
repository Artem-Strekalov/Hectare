import firebase from 'firebase/app'
export default {
  actions: {
    // Регистрация
    async registered(
      {dispatch},
      {email, password, userFirstName, userLastName, nameCompany},
    ) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({
            userFirstName,
            userLastName,
            nameCompany,
          })
      } catch (e) {
        throw e
      }
    },
    // получаем id пользователя
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    // Авторизация
    async login({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
    },
    // Выход
    async logout({commit}) {
      await firebase.auth().signOut()
      commit('clearInfo')
    },
  },
}
