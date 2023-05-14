import Vue from 'vue'
import Vuex from 'vuex'
import Omega from '../STORE/OmegaDoors.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MSG: 'Hi'
  },
  actions: {
  },
  mutations: {
  },
  getters: {
  },
  modules: { Omega }
})
