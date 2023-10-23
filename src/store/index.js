import { createStore } from 'vuex'

export default createStore({
  state: {
    newUser: {},
    confirmUserO: {}
  },
  mutations: {
    CREATE_USER: (state, user) => {
      state.newUser = user
    },
    CONFIRM_USER: (state, user) => {
      state.confirmUserO = user
      console.log(state.confirmUserO)
      state.confirmUserO = ''
    }
  },
  getters: {
    GET_USER: state => {
      return state.newUser
    },
  },
  actions: {
  },
  modules: {
  }
})
