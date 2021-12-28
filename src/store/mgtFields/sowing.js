import {v4 as uuidv4} from 'uuid'
import {db} from '../../firebase'
import {doc, setDoc, getDoc, updateDoc, deleteField} from 'firebase/firestore'
export default {
  state: {
    sowing: [],
  },
  mutations: {
    saveSowing(state, data) {
      state.sowing = Object.values(data)
    },
    clearSowing(state) {
      state.sowing = []
    },
  },
  actions: {
    async addSowing(
      {commit, dispatch},
      {
        crop,
        year,
        notes,
        square,
        weather,
        variety,
        idField,
        technics,
        endSowing,
        fertilizer,
        startSowing,
        seedingRate,
        fertilizerRate,
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
        'sowing',
        `${year}`,
      )
      await setDoc(
        path,
        {
          [`${idCart}`]: {
            crop,
            notes,
            square,
            variety,
            weather,
            technics,
            endSowing,
            fertilizer,
            id: idCart,
            startSowing,
            seedingRate,
            fertilizerRate,
            dateCreation: Date.now(),
          },
        },
        {merge: true},
      )
      commit('saveLoading', false)
    },

    //получение данных
    async loadSowingCart({dispatch, commit}, {idField, year}) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'sowing',
        `${year}`,
      )
      const dataSowing = await getDoc(path)
      dataSowing.exists()
        ? commit('saveSowing', dataSowing.data())
        : commit('saveSowing', [])
      commit('saveLoading', false)
    },

    async removeSowing({dispatch, commit}, {idField, idCart, year}) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'sowing',
        `${year}`,
      )
      await updateDoc(path, {
        [`${idCart}`]: deleteField(),
      })
      commit('saveLoading', false)
    },

    // изменение данных
    async changeSowing(
      {dispatch, commit},
      {
        crop,
        year,
        notes,
        idCart,
        square,
        idField,
        variety,
        weather,
        technics,
        endSowing,
        fertilizer,
        startSowing,
        seedingRate,
        fertilizerRate,
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
        'sowing',
        `${year}`,
      )
      await updateDoc(path, {
        [`${idCart}.crop`]: crop,
        [`${idCart}.notes`]: notes,
        [`${idCart}.square`]: square,
        [`${idCart}.weather`]: weather,
        [`${idCart}.variety`]: variety,
        [`${idCart}.technics`]: technics,
        [`${idCart}.endSowing`]: endSowing,
        [`${idCart}.fertilizer`]: fertilizer,
        [`${idCart}.seedingRate`]: seedingRate,
        [`${idCart}.startSowing`]: startSowing,
        [`${idCart}.fertilizerRate`]: fertilizerRate,
      })
      commit('saveLoading', false)
    },
  },
  getters: {
    getSowing(state) {
      return state.sowing.sort((a, b) => b.dateCreation - a.dateCreation)
    },
  },
}
