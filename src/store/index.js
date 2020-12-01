import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'


export default createStore({
  strict: true,

  state: {
    author: "",
    isUserLoggedIn: false,
  },
  plugins: [createPersistedState()],
  mutations: {
    setUser(state, author) {
      state.author = author;
      state.isUserLoggedIn = !!author;
    },
  },
  actions: {
    setUser({ commit }, author) {
      console.log("setUser was called", author);
      commit("setUser", author);
    },
  },
});
