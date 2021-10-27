<template>
  <div>
    <label>Robot:</label>
    <select name="" id="" v-model="selectedRobotName">
      <option v-for="robot in robots" :key="robot.name" :value="robot.name">
        {{ robot.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { MUTATIONS } from '@/store/store.const'
import robotConfigs from '@/model/robotConfigs.json'
import { ToolType } from '@/model/tools/ToolType'
import { GripperBuilder, RobotHandBuilder } from '@/logic/RobotBuilder'

@Component
export default class RobotSelector extends Vue {
  currentRobot = robotConfigs.robotConfigurations[0]
  selectedRobotName = this.currentRobot.name
  robots: RobotConfig[] = robotConfigs.robotConfigurations

  @Watch('selectedRobotName')
  onRobotChanged() {
    const currentRobot = this.robots.find(
      (robot) => robot.name === this.selectedRobotName
    )
    if (!currentRobot) {
      throw new Error('Could not find robot.')
    }

    let builder = this.getToolBuilder(currentRobot.toolType)

    this.$store.commit(MUTATIONS.SET_ROBOT, {
      numOfJoints: currentRobot.numberOfAxes,
      builder: builder,
    })
  }

  private getToolBuilder(toolType: string) {
    switch (toolType) {
      case ToolType.Gripper: {
        return new GripperBuilder()
      }
      case ToolType.RobotHand: {
        return new RobotHandBuilder()
      }
      default: {
        throw new Error('Unsupported tool type')
      }
    }
  }
}

interface RobotConfig {
  name: string
  numberOfAxes: number
  toolType: string
}
</script>
<style scoped>
div > label,
select {
  font-size: 1.2rem;
}
label {
  margin-right: 0.3rem;
  font-weight: bold;
}
select {
  border-radius: 0.3rem;
  background-color: wheat;
  color: forestgreen;
  padding: 0.1rem 0.2rem;
}
</style>
