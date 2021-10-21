<template>
  <section class="container">
    <programming-form id="program-editor"></programming-form>
    <joint-display id="joint-display"></joint-display>
    <robot-hand-display
      v-if="isRobothand"
      id="tool-display"
    ></robot-hand-display>
    <gripper-display v-else id="tool-display"></gripper-display>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProgrammingForm from '@/components/ProgrammingForm.vue'
import JointDisplay from '@/components/JointDisplay.vue'
import RobotHandDisplay from '@/components/RobotHandDisplay.vue'
import GripperDisplay from '@/components/GripperDisplay.vue'
import RobotHand from '@/model/RobotHand'

@Component({
  components: {
    ProgrammingForm,
    JointDisplay,
    RobotHandDisplay,
    GripperDisplay,
  },
})
export default class ProgramView extends Vue {
  isRobothand = this.$store.getters.robot.tool instanceof RobotHand
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(autofill, minmax(200px, 1fr));
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
