import firebase from 'firebase/app'
const auth = {
  state: {
    user: null,
  },
  mutation: {},
  actions: {
    async regUser(commit, {email, password}) {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
    },
  },
  getters: {
    getUser(state) {
      return state.user
    },
    checkUser() {
      return state.user !== null
    },
  },
}
export default auth
