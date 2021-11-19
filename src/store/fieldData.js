export default {
  state: {
    data: [
      {id: 1, name: 'Участок № 1', status: 'Задисковано', square: 100},
      {id: 2, name: 'Участок № 2', status: 'Пары', square: 200},
      {id: 3, name: 'Участок № 3', status: 'Посеяно', square: 15},
      {id: 4, name: 'Участок № 4', status: 'Пахота', square: 75},
      {id: 5, name: 'Участок № 4', status: 'Пахота', square: 75},
      {id: 6, name: 'Участок № 4', status: 'Пахота', square: 75},
    ],
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
      return state.data
    },
  },
}
