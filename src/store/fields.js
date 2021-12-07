import {db} from '../firebase'
import {doc, setDoc, getDoc} from 'firebase/firestore'
import {v4 as uuidv4} from 'uuid'
export default {
  state: {
    fieds: {},
  },
  mutations: {
    saveFields(state, fields) {
      console.log(fields)
      state.fields = fields
    },
  },
  actions: {
    //получение участков
    async loadFields({dispatch, commit}) {
      const uid = await dispatch('getUid')
      const path = doc(db, 'data', `${uid}`, 'fields', 'id'  )
      const dataFields = await getDoc(path)

      if (dataFields.exists()) {
        commit('saveFields', dataFields.data())
      } else {
        commit('saveFields', null)
      }
    },
    //добавление участка
    async addField({commit, dispatch}, {name, status, square}) {
      let uid = await dispatch('getUid')
      try {
        const idField = uuidv4()
        const path = await doc(db, 'data', `${uid}`, 'fields', `${idField}`)
        await setDoc(path, {
          id: idField,
          name,
          status,
          square,
        })
      } catch (error) {}
    },
  },
  getters: {},
}
