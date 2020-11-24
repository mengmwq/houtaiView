import storage from 'store'

const user = {
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    }
  },
  actions: {
    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        // commit('SET_ROLES', [])
        storage.remove('Access-token')
      })
    }
  }
}

export default user
