import {doc, setDoc, getDoc, updateDoc, deleteField} from 'firebase/firestore'
import {v4 as uuidv4} from 'uuid'
import {db} from '../../firebase'
export default {
  state: {
    tillage: [],
  },
  mutations: {
    saveTillage(state, data) {
      state.tillage = Object.values(data)
    },
    clearTillage(state) {
      state.tillage = []
    },
  },
  actions: {
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
        year,
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
        `${year}`,
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
    async loadTillageCart({dispatch, commit}, {idField, year}) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'tillage',
        `${year}`,
      )
      const dataTillage = await getDoc(path)
      if (dataTillage.exists()) {
        commit('saveTillage', dataTillage.data())
      } else {
        commit('saveTillage', [])
      }
      commit('saveLoading', false)
    },

    //удаление данных tillage
    async removeTillage({dispatch, commit}, {idField, idTillage, year}) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'tillage',
        `${year}`,
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
    getTillage(state) {
      return state.tillage.sort((a, b) => b.dateCreation - a.dateCreation)
    },
  },
}
