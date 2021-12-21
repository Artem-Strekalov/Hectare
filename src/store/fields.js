import {db} from '../firebase'
import {doc, setDoc, getDoc, updateDoc, deleteField} from 'firebase/firestore'
import {v4 as uuidv4} from 'uuid'

export default {
  state: {
    fields: [],
    loading: false,
  },

  mutations: {
    saveFields(state, fields) {
      state.fields = Object.values(fields)
    },
    saveLoading(state, status) {
      state.loading = status
    },
    clearFields(state) {
      state.fields = []
    },
   
  },

  actions: {
    //получение участков
    async loadFields({dispatch, commit}) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = await doc(db, 'fields', `${uid}`)
      const dataFields = await getDoc(path)
      if (dataFields.exists()) {
        commit('saveFields', dataFields.data())
      }
      commit('saveLoading', false)
    },

    //добавление участка
    async addField({commit, dispatch}, {name, status, square}) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const idField = uuidv4()
      const path = await doc(db, 'fields', `${uid}`)
      await setDoc(
        path,
        {
          [`${idField}`]: {
            id: idField,
            dateCreation: Date.now(),
            name,
            status,
            square,
          },
        },
        {merge: true},
      )
      commit('saveLoading', false)
    },

    //удаление участка
    async removeField({dispatch, commit}, idField) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = doc(db, 'fields', `${uid}`)

      await updateDoc(path, {
        [`${idField}`]: deleteField(),
      })
      commit('saveLoading', true)
    },

  },

  getters: {
    getFields(state) {
      return state.fields.sort((a, b) => a.dateCreation - b.dateCreation)
    },
    getLoading(state) {
      return state.loading
    },
    
  },
}
