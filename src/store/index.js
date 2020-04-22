import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: 1
  },
  mutations: {
    updateMap(state, payload) {
      state.map = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
