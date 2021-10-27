<template>
  <base-card title="Robot hand display">
    <ul>
      <li v-for="(finger, index) in fingers" :key="index">
        Finger {{ index + 1 }}
        <span>
          {{ finger.isOpen ? 'Open' : 'Closed' }}
        </span>
      </li>
    </ul>
  </base-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class RobotHandDisplay extends Vue {
  get fingers() {
    return this.$store.getters.tool.parts
  }
}
</script>

<style scoped>
li {
  margin: 0.25rem 0;
}
</style>
