import {doc, setDoc, getDoc, updateDoc, deleteField} from 'firebase/firestore'
import {v4 as uuidv4} from 'uuid'
import {db} from '../../firebase'
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
        idField,
        startSowing,
        endSowing,
        square,
        technics,
        crop,
        variety,
        seedingRate,
        fertilizer,
        fertilizerRate,
        weather,
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
        'sowing',
        `${year}`,
      )
      await setDoc(
        path,
        {
          [`${idCart}`]: {
            id: idCart,
            dateCreation: Date.now(),
            startSowing,
            endSowing,
            square,
            technics,
            crop,
            variety,
            seedingRate,
            fertilizer,
            fertilizerRate,
            weather,
            notes,
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
      if (dataSowing.exists()) {
        commit('saveSowing', dataSowing.data())
      } else {
        commit('saveSowing', [])
      }
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
        idCart,
        idField,
        startSowing,
        endSowing,
        square,
        technics,
        crop,
        variety,
        seedingRate,
        fertilizer,
        fertilizerRate,
        weather,
        notes,
        year,
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
