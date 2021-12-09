import {db} from '../firebase'
import {doc, setDoc, getDoc} from 'firebase/firestore'
import {v4 as uuidv4} from 'uuid'
export default {
  state: {
    fields: [],
  },

  mutations: {
    saveFields(state, fields) {
      state.fields = Object.values(fields)
    },
    clearFields(state) {
      state.fields = []
    },
  },

  actions: {
    //получение участков
    async loadFields({dispatch, commit}) {
      const uid = await dispatch('getUid')
      const path = await doc(db, 'fields', `${uid}`)
      const dataFields = await getDoc(path)
      if (dataFields.exists()) {
        commit('saveFields', dataFields.data())
      }
    },

    //добавление участка
    async addField({commit, dispatch}, {name, status, square}) {
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
    },
  },

  getters: {
    getFields(state) {
      return state.fields
    },
  },
}
