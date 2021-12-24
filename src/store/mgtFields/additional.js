import {v4 as uuidv4} from 'uuid'
import {db} from '../../firebase'
import {doc, setDoc, getDoc, updateDoc, deleteField} from 'firebase/firestore'
export default {
  state: {
    additional: [],
  },
  mutations: {
    saveAdditional(state, data) {
      state.additional = Object.values(data)
    },
    clearAdditional(state) {
      state.additional = []
    },
  },
  actions: {
    //добаление данных
    async addAdditional(
      {commit, dispatch},
      {
        year,
        notes,
        square,
        idField,
        endWork,
        weather,
        praRate,
        technics,
        typeWork,
        startWork,
        fertilizer,
        temperature,
        fertilizerRate,
        manufacturerPra,
        plantProtectionAgent,
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
        'additional',
        `${year}`,
      )
      await setDoc(
        path,
        {
          [`${idCart}`]: {
            notes,
            square,
            weather,
            praRate,
            endWork,
            typeWork,
            technics,
            startWork,
            id: idCart,
            fertilizer,
            temperature,
            fertilizerRate,
            manufacturerPra,
            plantProtectionAgent,
            fertilizerManufacturer,
            dateCreation: Date.now(),
          },
        },
        {merge: true},
      )
      commit('saveLoading', false)
    },

    //получение данных
    async loadAdditionalCart({dispatch, commit}, {idField, year}) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'additional',
        `${year}`,
      )
      const dataAdditional = await getDoc(path)
      dataAdditional.exists()
        ? commit('saveAdditional', dataAdditional.data())
        : commit('saveAdditional', [])
      commit('saveLoading', false)
    },

    //удаление данных tillage
    async removeAdditional({dispatch, commit}, {idField, idCart, year}) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'additional',
        `${year}`,
      )
      await updateDoc(path, {
        [`${idCart}`]: deleteField(),
      })
      commit('saveLoading', false)
    },

    // изменение данных
    async changeAdditional(
      {dispatch, commit},
      {
        year,
        notes,
        square,
        idCart,
        praRate,
        idField,
        endWork,
        weather,
        technics,
        typeWork,
        startWork,
        fertilizer,
        temperature,
        fertilizerRate,
        manufacturerPra,
        plantProtectionAgent,
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
        'additional',
        `${year}`,
      )
      await updateDoc(path, {
        [`${idCart}.notes`]: notes,
        [`${idCart}.square`]: square,
        [`${idCart}.weather`]: weather,
        [`${idCart}.endWork`]: endWork,
        [`${idCart}.praRate`]: praRate,
        [`${idCart}.technics`]: technics,
        [`${idCart}.typeWork`]: typeWork,
        [`${idCart}.startWork`]: startWork,
        [`${idCart}.fertilizer`]: fertilizer,
        [`${idCart}.temperature`]: temperature,
        [`${idCart}.fertilizerRate`]: fertilizerRate,
        [`${idCart}.manufacturerPra`]: manufacturerPra,
        [`${idCart}.plantProtectionAgent`]: plantProtectionAgent,
        [`${idCart}.fertilizerManufacturer`]: fertilizerManufacturer,
      })
      commit('saveLoading', false)
    },
  },
  getters: {
    getAdditional(state) {
      return state.additional.sort((a, b) => b.dateCreation - a.dateCreation)
    },
  },
}
