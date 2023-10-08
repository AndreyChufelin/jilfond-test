export default {
  state() {
    return {
      users: [],
      user: {}
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    addUsers(state, users) {
      state.users.push(...users)
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async searchUsers({ commit }, queries) {
      commit('setUsers', [])

      const promises = queries.map(async (query) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${query}`)
        const users = await response.json()
        commit('addUsers', users)
      })

      await Promise.all(promises)
    },
    async getUsers({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      commit('setUsers', users)
    },
    async getUser({ commit }, id) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const user = await response.json()
      commit('setUser', user)
    }
  }
}
