<template>
  <base-card title="Gripper display">
    <p>
      State: <span>{{ gripperState }}</span>
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
