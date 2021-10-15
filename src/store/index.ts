import Finger from '@/logic/Finger'
import Joint from '@/logic/Joint'
import Vue from 'vue'
import Vuex from 'vuex'
import { getRobot } from '../logic/RobotApp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    robot: getRobot(),
    joints: [new Joint(1, 2, 3), new Joint(4, 5, 6), new Joint(7, 8, 9)],
    tool: { parts: [new Finger()] },
  },
  getters: {
    joints(state) {
      return state.joints
    },
    robot(state) {
      return state.robot
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
