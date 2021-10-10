import Joint from '@/logic/Joint'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joints: [new Joint(1, 2, 3), new Joint(4, 5, 6), new Joint(7, 8, 9)],
  },
  getters: {
    joints(state) {
      return state.joints
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
