<template>
  <header>
    <h1>RoboApp</h1>
    <robot-selector></robot-selector>
  </header>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import RobotSelector from '@/components/RobotSelector.vue'

@Component({ components: { RobotSelector } })
export default class TheHeader extends Vue {}
</script>
<style scoped>
header {
  background: linear-gradient(160deg, forestgreen, orange);
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px grey;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
