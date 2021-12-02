import firebase from 'firebase/app'
export default {
  state: {
    info: {},
  },
  mutations: {
    setInfo(state, info) {
      ///неправильно! исправь. копирование объекта
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    },
  },
  actions: {
    async loadInfo({dispatch, commit}) {
      const uid = await dispatch('getUid')
      const info = (
        await firebase
          .database()
          .ref(`users/${uid}/regInfo`)
          .once('value')
      ).val()
      commit('setInfo', info)
    },
  },
  getters: {
    getInfo(state) {
      return state.info
    },
  },
}
