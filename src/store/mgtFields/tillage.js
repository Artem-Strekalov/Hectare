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
    //добаление данных
    async addTillage(
      {commit, dispatch},
      {
        year,
        notes,
        square,
        idField,
        technics,
        endTillage,
        fertilizer,
        typeTillage,
        tillageDepth,
        startTillage,
        fertilizerRate,
        fertilizerManufacturer,
      },
    ) {
      commit('saveLoading', true)
      const idCart = uuidv4()
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
      await setDoc(
        path,
        {
          [`${idCart}`]: {
            notes,
            square,
            technics,
            id: idCart,
            endTillage,
            fertilizer,
            typeTillage,
            tillageDepth,
            startTillage,
            fertilizerRate,
            fertilizerManufacturer,
            dateCreation: Date.now(),
          },
        },
        {merge: true},
      )
      commit('saveLoading', false)
    },

    //получение данных
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
      dataTillage.exists()
        ? commit('saveTillage', dataTillage.data())
        : commit('saveTillage', [])
      commit('saveLoading', false)
    },

    //удаление данных
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

    // изменение данных
    async changeTillage(
      {dispatch, commit},
      {
        year,
        notes,
        square,
        idField,
        technics,
        idTillage,
        endTillage,
        fertilizer,
        typeTillage,
        tillageDepth,
        startTillage,
        fertilizerRate,
        fertilizerManufacturer,
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
        `${year}`,
      )
      await updateDoc(path, {
        [`${idTillage}.notes`]: notes,
        [`${idTillage}.square`]: square,
        [`${idTillage}.technics`]: technics,
        [`${idTillage}.endTillage`]: endTillage,
        [`${idTillage}.fertilizer`]: fertilizer,
        [`${idTillage}.typeTillage`]: typeTillage,
        [`${idTillage}.tillageDepth`]: tillageDepth,
        [`${idTillage}.startTillage`]: startTillage,
        [`${idTillage}.fertilizerRate`]: fertilizerRate,
        [`${idTillage}.fertilizerManufacturer`]: fertilizerManufacturer,
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
