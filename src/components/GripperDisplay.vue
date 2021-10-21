<template>
  <p>
    State: <span>{{ gripperState }}</span>
  </p>
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
