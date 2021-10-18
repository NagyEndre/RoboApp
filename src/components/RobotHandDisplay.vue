<template>
  <ul>
    <li v-for="(finger, index) in fingers" :key="index">
      Finger {{ index + 1 }}
      <span>
        {{ finger.isOpen ? 'Open' : 'Closed' }}
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class RobotHandDisplay extends Vue {
  get fingers() {
    return this.$store.getters.fingers
  }
}
</script>

<style scoped>
li {
  list-style: none;
  margin: 0.25rem 0;
}
span {
  border: 1px solid grey;
  padding: 0 0.5rem;
  background-color: wheat;
}
</style>
