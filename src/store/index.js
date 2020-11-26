import { createStore } from 'vuex'



export default createStore({
 

  state: {
    user: localStorage.getItem("user") || "",
    isUserLoggedIn: false,
  },

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
