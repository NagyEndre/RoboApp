import Vue from 'vue'
import Vuex from 'vuex'
import {
  buildRobot,
  createGripper,
  createRobotHand,
} from '@/logic/RobotBuilder'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    robot: buildRobot(createGripper()),
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
    tool(state) {
      return state.robot.tool
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
      state.robot.tool.open(index)
    },
    closeFinger(state, index: number) {
      state.robot.tool.close(index)
    },
    openGripper(state) {
      state.robot.tool.open()
    },
    closeGripper(state) {
      state.robot.tool.close()
    },
  },
  actions: {},
  modules: {},
})
