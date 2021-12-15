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
      state.tillage = Object.values(data)
    },
    saveLoading(state, status) {
      state.loading = status
    },
    clearFields(state) {
      state.fields = []
    },
    clearTillage(state) {
      state.tillage = []
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
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'tillage',
        '2021',
      )
      await setDoc(
        path,
        {
          [`${idCart}`]: {
            id: idCart,
            dateCreation: Date.now(),
            typeTillage,
            weather,
            tillageDepth,
            technics,
            startTillage,
            endTillage,
            notes,
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
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'tillage',
        '2021',
      )
      const dataTillage = await getDoc(path)
      if (dataTillage.exists()) {
        commit('saveTillage', dataTillage.data())
      }
      commit('saveLoading', false)
    },

    //удаление данных tillage
    async removeTillage({dispatch, commit}, {idField, idTillage}) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'tillage',
        '2021',
      )
      await updateDoc(path, {
        [`${idTillage}`]: deleteField(),
      })
      commit('saveLoading', false)
    },
    // изменение данных tillage
    async changeTillage(
      {dispatch, commit},
      {
        idTillage,
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
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'tillage',
        '2021',
      )
      await updateDoc(path, {
        [`${idTillage}.notes`]: notes,
        [`${idTillage}.weather`]: weather,
        [`${idTillage}.technics`]: technics,
        [`${idTillage}.endTillage`]: endTillage,
        [`${idTillage}.typeTillage`]: typeTillage,
        [`${idTillage}.tillageDepth`]: tillageDepth,
        [`${idTillage}.startTillage`]: startTillage,
      })
      commit('saveLoading', false)
    },
  },

  getters: {
    getFields(state) {
      return state.fields.sort((a, b) => a.dateCreation - b.dateCreation)
    },
    getLoading(state) {
      return state.loading
    },
    getTillage(state) {
      return state.tillage.sort((a, b) => b.dateCreation - a.dateCreation)
    },
  },
}
