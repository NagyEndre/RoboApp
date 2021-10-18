import Vue from 'vue'
import Vuex from 'vuex'
import { buildRobot } from '@/logic/RobotBuilder'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    robot: buildRobot(),
  },
  getters: {
    joints(state) {
      return state.robot.joints
    },
    robot(state) {
      return state.robot
    },
    fingers(state) {
      return state.robot.tool.parts
    },
  },
  mutations: {
    setJointCoordinates(
      state: any,
      payload: { joint: number; x: number; y: number; z: number }
    ): void {
      state.robot.joints[payload.joint - 1].set(payload.x, payload.y, payload.z)
    },
    openFinger(state, index: number) {
      state.robot.tool.parts[index].open()
    },
    closeFinger(state, index: number) {
      state.robot.tool.parts[index].close()
    },
  },
  actions: {},
  modules: {},
})
