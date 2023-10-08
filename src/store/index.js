import { createStore } from 'vuex'
import users from './users'

export default createStore({
  modules: { users },
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
