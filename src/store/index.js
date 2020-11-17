import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookie from 'js-cookie'

export default createStore({
  strict: true,
  
 
  state: {
    user: '',
    token: null,
    isUserLoggedIn:false
  },
  plugins: [createPersistedState()],
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
      state.isUserLoggedIn = !!(user)

    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }

})
