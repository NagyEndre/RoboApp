import Vue from 'vue'
import Vuex from 'vuex'
import { buildRobot, createRobotHand } from '@/logic/RobotBuilder'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    robot: buildRobot(createRobotHand()),
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
      if (payload.x) {
        state.robot.joints[payload.joint - 1].X = payload.x
      }
      if (payload.y) {
        state.robot.joints[payload.joint - 1].Y = payload.y
      }
      if (payload.z) {
        state.robot.joints[payload.joint - 1].Z = payload.z
      }
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
