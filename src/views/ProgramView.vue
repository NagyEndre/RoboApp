<template>
  <section class="container">
    <programming-form id="program-editor"></programming-form>
    <joint-display id="joint-display"></joint-display>
    <component :is="toolView" id="tool-display"></component>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProgrammingForm from '@/components/ProgrammingForm.vue'
import JointDisplay from '@/components/JointDisplay.vue'
import RobotHandDisplay from '@/components/tool_displays/RobotHandDisplay.vue'
import GripperDisplay from '@/components/tool_displays/GripperDisplay.vue'
import RobotHand from '@/model/tools/RobotHand'

@Component({
  components: {
    ProgrammingForm,
    JointDisplay,
    RobotHandDisplay,
    GripperDisplay,
  },
})
export default class ProgramView extends Vue {
  get isRobothand() {
    return this.$store.getters.robot.tool instanceof RobotHand
  }
  get toolView() {
    return this.isRobothand ? 'robot-hand-display' : 'gripper-display'
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  margin: 1rem;
}
#program-editor {
  grid-column-start: 1;
  grid-column-end: span 2;
}
#joint-display {
  grid-column-start: 3;
}
#tool-display {
  grid-column-start: 4;
}
</style>
