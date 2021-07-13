import firebase from 'firebase/app'
export default {
  state: {
    helloPage: false,
    error: '',
    windowError: false,
  },
  mutations: {
    changeHelloPage(state, payload) {
      state.helloPage = payload
    },
    chahgeError(state, payload) {
      state.error = payload
    },
    showWindowError(state, payload) {
      state.windowError = payload
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
        commit('showWindowError', true)
        commit('chahgeError', e.message)
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
        commit('showWindowError', true)
        commit('chahgeError', e.message)
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
    getError(state) {
      let error = state.error
      if (error === 'The email address is badly formatted.') {
        error = 'Неверный формат e-mail'
      }
      switch (error) {
        case 'The email address is badly formatted.':
          error = 'Неверный формат e-mail'
          break
        case 'The password must be 6 characters long or more.':
          error = 'Пароль должен состоять из 6 или более символов'
          break
        case 'The email address is already in use by another account.':
          error = 'Этот e-mail уже зарегистрирован'
          break
        case 'The password is invalid or the user does not have a password.':
          error = 'Неверный пароль'
          break
        default:
          error
      }
      return error
    },
    getWindowError(state) {
      return state.windowError
    },
  },
}
