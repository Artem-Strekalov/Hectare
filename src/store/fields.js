import {db} from '../firebase'
import {doc, setDoc, getDoc, updateDoc, deleteField} from 'firebase/firestore'
import {v4 as uuidv4} from 'uuid'
export default {
  state: {
    fields: [],
    tillage: [],
    loading: false,
  },

  mutations: {
    saveFields(state, fields) {
      state.fields = Object.values(fields)
    },
    saveTillage(state, data) {
      console.log(Object.values(data))
      state.tillage = data
    },
    clearFields(state) {
      state.fields = []
    },
    saveLoading(state, status) {
      state.loading = status
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
          [`${idField}`]: {id: idField, name, status, square},
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

    //добаление данных tillage
    async addTillage(
      {commit, dispatch},
      {
        idField,
        typeTillage,
        weather,
        tillageDepth,
        technics,
        startTillage,
        endTillage,
        notes,
      },
    ) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const idCart = uuidv4()
      const path = await doc(db, 'fields', `${uid}`, 'management', `${idField}`)
      await setDoc(
        path,
        {
          tillage: {
            [`${idCart}`]: {
              id: idCart,
              typeTillage,
              weather,
              tillageDepth,
              technics,
              startTillage,
              endTillage,
              notes,
            },
          },
        },
        {merge: true},
      )
      commit('saveLoading', false)
    },

    //получение данных tillage
    async loadTillageCart({dispatch, commit}, idField) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = await doc(db, 'fields', `${uid}`, 'management', `${idField}`)
      const dataTillage = await getDoc(path)
      if (dataTillage.exists()) {
        commit('saveTillage', dataTillage.data().tillage)
      }
      commit('saveLoading', false)
    },
  },

  getters: {
    getFields(state) {
      return state.fields
    },
    getLoading(state) {
      return state.loading
    },
    getTillage(state) {
      return state.tillage
    },
  },
}
