<template>
  <ul>
    <li v-for="(joint, index) in joints" :key="index">
      Joint {{ index + 1 }}
      <span v-for="(value, key) in joint" :key="key">
        {{ key }}: {{ value }}</span
      >
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class JointDisplay extends Vue {
  get joints() {
    return this.$store.getters.joints
  }
}
</script>

<style scoped>
li {
  list-style: none;
  margin: 0.25rem 0;
}
</style>
