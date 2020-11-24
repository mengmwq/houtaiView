import storage from 'store'

const app = {
  state: {
    isMobile: false
  },
  mutations: {
    is_mobile (state, type) {
      state.isMobile = type
    },
    sidebar_type (state, type) {
      state.sideCollapsed = type
      storage.set('sidebar_type', type)
    }
  }
}

export default app
