import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'


export default createStore({
  strict: true,

  state: {
    user: localStorage.getItem("user") || "",
    isUserLoggedIn: false,
  },
  plugins: [createPersistedState()],
  mutations: {
    setUser(state, user) {
      state.user = user;
      if (user) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },
  },
});
