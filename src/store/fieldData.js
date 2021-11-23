export default {
  state: {
    data: [{id: 1, name: 'Участок №1', square: 60, status: 'Пахота'}],
  },
  actions: {
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
