import {doc, setDoc, getDoc, updateDoc, deleteField} from 'firebase/firestore'
import {v4 as uuidv4} from 'uuid'
import {db} from '../../firebase'
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
        startWork,
        endWork,
        weather,
        square,
        temperature,
        technics,
        typeWork,
        fertilizer,
        fertilizerManufacturer,
        fertilizerRate,
        plantProtectionAgent,
        manufacturerPra,
        praRate,
        notes,
        year,
        idField,
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
        'additional',
        `${year}`,
      )
      await setDoc(
        path,
        {
          [`${idCart}`]: {
            id: idCart,
            dateCreation: Date.now(),
            startWork,
            endWork,
            typeWork,
            weather,
            square,
            temperature,
            technics,
            fertilizer,
            fertilizerManufacturer,
            fertilizerRate,
            plantProtectionAgent,
            manufacturerPra,
            praRate,
            notes,
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
      if (dataAdditional.exists()) {
        commit('saveAdditional', dataAdditional.data())
      } else {
        commit('saveAdditional', [])
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
        'tillage',
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
    getAdditional(state) {
      return state.additional.sort((a, b) => b.dateCreation - a.dateCreation)
    },
  },
}
