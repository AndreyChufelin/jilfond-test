export default {
  state() {
    return {
      users: []
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    addUsers(state, users) {
      state.users.push(...users)
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
    }
  }
}
