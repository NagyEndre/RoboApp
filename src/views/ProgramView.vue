<template>
  <section>
    <base-card title="Robot program">
      <programming-form></programming-form>
    </base-card>
    <div>
      <base-card title="Joint display">
        <joint-display></joint-display>
      </base-card>
      <base-card title="Robot hand display">
        <robot-hand-display></robot-hand-display>
      </base-card>
    </div>
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
</style>
