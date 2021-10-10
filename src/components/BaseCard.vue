<template>
  <section>
    <h2>{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BaseCard extends Vue {
  @Prop() title!: string
}
</script>

<style scoped>
section {
  box-shadow: 0 2px 4px grey;
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
}
h2 {
  border-bottom: 2px solid orange;
  margin-bottom: 1rem;
}
@media screen and (max-width: 640px) {
  section {
    width: 80%;
  }
}
</style>
