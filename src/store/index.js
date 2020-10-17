import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../service/AuthService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adminLoggedIn:true,
    apiUrl: `http://localhost:5000/api`,
    email:null
  },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.email = auth.getEmail();
      } else {
        state.email = null;
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit('authenticate');
    }
  },
  modules: {
  }
})
