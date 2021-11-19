export default {
  state: {
    data: [
    ],
  },
  actions: {
    async fetchData({ commit }, field) {
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
