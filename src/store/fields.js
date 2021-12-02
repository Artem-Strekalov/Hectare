import firebase from 'firebase/app'
import {v4 as uuidv4} from 'uuid'
export default {
  state: {
    data: [{id: 1, name: 'Участок №1', square: 60, status: 'Пахота'}],
    fields: {},
  },
  mutations: {
    setFields(state, field) {
      state.fields = field
    },
  },
  actions: {
    // добавление поля
    async addField({dispatch, commit}, {name, status, square}) {
      const uid = await dispatch('getUid')
      await firebase
        .database()
        .ref(`/users/${uid}/fields/${uuidv4()}`)
        .set({
          name,
          status,
          square,
        })
    },
    //загрузка полей

    async fetchData({commit}, field) {
      await commit('changeData', field)
    },
  },
  mutations: {
    changeData(state, field) {
      state.data.push(field)
    },
  },
  getters: {
    getData(state) {
      return state.data.reverse()
    },
  },
}
