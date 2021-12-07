import {db} from '../firebase'
import {doc, setDoc} from 'firebase/firestore'
import {v4 as uuidv4} from 'uuid'
export default {
  state: {
    fieds: [],
  },
  mutations: {},
  actions: {
    //добавление участка
    async addField({commit, dispatch}, {name, status, square}) {
      let uid = await dispatch('getUid')
      try {
        await setDoc(doc(db, 'fields', `${uid}`), {
          name,
          status,
          square,
        })
      } catch (error) {}
    },
  },
  getters: {},
}
