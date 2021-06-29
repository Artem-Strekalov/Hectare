import firebase from 'firebase/app'
export default {
  state: {
    helloPage: false,
  },
  mutations: {
    changeHelloPage(state, payload) {
      state.helloPage = payload
    },
  },
  actions: {
    // Регистрация
    async registered(
      {dispatch, commit},
      {email, password, userFirstName, userLastName, nameCompany},
    ) {
      try {
        commit('changeHelloPage', true)
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
        commit('changeHelloPage', false)
      } catch (e) {
        commit('changeHelloPage', false)
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
      commit('changeHelloPage', true)
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        commit('changeHelloPage', false)
      } catch (e) {
        commit('changeHelloPage', false)
        throw e
      }
    },
    // Выход
    async logout({commit}) {
      await firebase.auth().signOut()
      commit('clearInfo')
    },
  },
  getters: {
    statusHelloPage(state) {
      return state.helloPage
    },
  },
}
