<template>
  <div id="app">
    <the-header></the-header>
    <program-view></program-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheHeader from '@/components/TheHeader.vue'
import { GripperBuilder, RobotHandBuilder } from '@/logic/RobotBuilder'
import ProgramView from '@/views/ProgramView.vue'
import robotConfigs from '@/model/robotConfigs.json'

@Component({
  components: {
    TheHeader,
    ProgramView,
  },
})
export default class App extends Vue {
  currentRobot = robotConfigs.robotConfigurations[0]
  beforeMount() {
    let builder
    switch (this.currentRobot.toolType) {
      case ToolType.Gripper: {
        builder = new GripperBuilder()
        break
      }
      case ToolType.RobotHand: {
        builder = new RobotHandBuilder()
      }
    }
    this.$store.commit('setRobot', {
      numOfJoints: this.currentRobot.numberOfAxes,
      builder: builder,
    })
  }
}

enum ToolType {
  Gripper = 'Gripper',
  RobotHand = 'RobotHand',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: rgba(233, 164, 14, 0.116);
  min-width: 350px;
}
span {
  display: inline-block;
  width: 4rem;
  border: 1px solid grey;
  background-color: wheat;
  font-weight: bold;
}
li {
  list-style: none;
}
</style>
