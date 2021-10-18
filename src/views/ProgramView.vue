<template>
  <section class="container">
    <base-card title="Robot program" id="program-editor">
      <programming-form></programming-form>
    </base-card>

    <base-card title="Joint display" id="joint-display">
      <joint-display></joint-display>
    </base-card>
    <base-card title="Robot hand display" id="tool-display">
      <robot-hand-display></robot-hand-display>
    </base-card>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BaseCard from '../components/BaseCard.vue'
import ProgrammingForm from '../components/ProgrammingForm.vue'
import JointDisplay from '../components/JointDisplay.vue'
import RobotHandDisplay from '../components/RobotHandDisplay.vue'

@Component({
  components: {
    BaseCard,
    ProgrammingForm,
    JointDisplay,
    RobotHandDisplay,
  },
})
export default class ProgramView extends Vue {}
</script>

<style scoped>
base-card {
  background-color: blue;
}
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
