import {v4 as uuidv4} from 'uuid'
import {db} from '../../firebase'
import {doc, setDoc, getDoc, updateDoc, deleteField} from 'firebase/firestore'
export default {
  state: {
    harvest: [],
  },
  mutations: {
    saveHarvest(state, data) {
      state.harvest = Object.values(data)
    },
    clearHarvest(state) {
      state.harvest = []
    },
  },
  actions: {
    async addHarvest(
      {commit, dispatch},
      {
        crop,
        year,
        notes,
        nature,
        square,
        idField,
        variety,
        quality,
        humidity,
        technics,
        threshed,
        endHarvest,
        startHarvest,
        averageYield,
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
        'harvest',
        `${year}`,
      )
      await setDoc(
        path,
        {
          [`${idCart}`]: {
            crop,
            notes,
            square,
            nature,
            variety,
            quality,
            humidity,
            technics,
            threshed,
            endHarvest,
            id: idCart,
            startHarvest,
            averageYield,
            dateCreation: Date.now(),
          },
        },
        {merge: true},
      )
      commit('saveLoading', false)
    },

    //получение данных
    async loadHarvestCart({dispatch, commit}, {idField, year}) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'harvest',
        `${year}`,
      )
      const dataHarvest = await getDoc(path)
      dataHarvest.exists()
        ? commit('saveHarvest', dataHarvest.data())
        : commit('saveHarvest', [])
      commit('saveLoading', false)
    },

    async removeHarvest({dispatch, commit}, {idField, idCart, year}) {
      commit('saveLoading', true)
      const uid = await dispatch('getUid')
      const path = await doc(
        db,
        'fields',
        `${uid}`,
        'management',
        `${idField}`,
        'harvest',
        `${year}`,
      )
      await updateDoc(path, {
        [`${idCart}`]: deleteField(),
      })
      commit('saveLoading', false)
    },

    // изменение данных
    async changeHarvest(
      {dispatch, commit},
      {
        crop,
        year,
        notes,
        idCart,
        nature,
        square,
        idField,
        variety,
        quality,
        humidity,
        technics,
        threshed,
        endHarvest,
        startHarvest,
        averageYield,
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
        'harvest',
        `${year}`,
      )
      await updateDoc(path, {
        [`${idCart}.crop`]: crop,
        [`${idCart}.notes`]: notes,
        [`${idCart}.square`]: square,
        [`${idCart}.nature`]: nature,
        [`${idCart}.variety`]: variety,
        [`${idCart}.quality`]: quality,
        [`${idCart}.humidity`]: humidity,
        [`${idCart}.technics`]: technics,
        [`${idCart}.threshed`]: threshed,
        [`${idCart}.endHarvest`]: endHarvest,
        [`${idCart}.averageYield`]: averageYield,
        [`${idCart}.startHarvest`]: startHarvest,
      })
      commit('saveLoading', false)
    },
  },
  getters: {
    getHarvest(state) {
      return state.harvest.sort((a, b) => b.dateCreation - a.dateCreation)
    },
  },
}
