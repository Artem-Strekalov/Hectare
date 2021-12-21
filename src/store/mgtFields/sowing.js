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
      state.tillage = []
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

    //удаление данных tillage
    async removeSowing({dispatch, commit}, {idField, idTillage, year}) {
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
        [`${idTillage}`]: deleteField(),
      })
      commit('saveLoading', false)
    },
    // изменение данных tillage
    async changeSowing(
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
    getSowing(state) {
      return state.sowing.sort((a, b) => b.dateCreation - a.dateCreation)
    },
  },
}
