import Vue from 'vue'
import Vuex from 'vuex'
import RobotBuilder from '@/logic/builders/RobotBuilder'
import { ToolBuilder } from '@/logic/builders/ToolBuilder'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    robot: {},
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
    setRobot(
      state,
      payload: { numOfJoints: number; builder: ToolBuilder<any> }
    ) {
      state.robot = new RobotBuilder(payload.builder)
        .buildJoints(payload.numOfJoints)
        .buildTool()
        .build()
    },
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
    openTool(state, payload: { fingerIndex: number }) {
      if (payload) {
        state.robot.tool.open(payload.fingerIndex)
      } else {
        state.robot.tool.open()
      }
    },
    closeTool(state, payload: { fingerIndex: number }) {
      if (payload) {
        state.robot.tool.close(payload.fingerIndex)
      } else {
        state.robot.tool.close()
      }
    },
  },
  actions: {},
  modules: {},
})
