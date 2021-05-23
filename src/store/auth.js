import firebase from 'firebase/app'
import User from './user_help'
const auth = {
  state: {
    user: null,
  },
  mutation: {
    setUser(state, payload) {
      state.user = payload
    },
  },
  actions: {
    async registeredUser({commit}, {email, password}) {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      console.log(user)
      commit('setUser', new User(user.user.uid))
    },
  },
  getters: {
    user(state) {
      return state.user
    },
    checkUser(state) {
      return state.user !== null
    },
  },
}
export default auth
