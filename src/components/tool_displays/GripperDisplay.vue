<template>
  <base-card title="Gripper display">
    <p>
      State:
      <transition mode="out-in">
        <span :key="gripperState">{{ gripperState }}</span>
      </transition>
    </p>
  </base-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class GripperDisplay extends Vue {
  get gripperState() {
    return this.$store.getters.tool.isOpen ? 'Open' : 'Closed'
  }
}
</script>
<style scoped>

</style>
