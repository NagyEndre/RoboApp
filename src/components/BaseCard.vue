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
  @Prop({ type: String, required: true }) title!: string
}
</script>

<style scoped>
section {
  box-shadow: 0 2px 4px grey;
  width: 45%;
  height: min-content;
  padding: 1rem;
  border-radius: 0.5rem;
  display: inline-block;
  margin: 0.5rem 0.25rem;
  background: white;
}
h2 {
  border-bottom: 2px solid orange;
  margin-bottom: 1rem;
}
@media screen and (max-width: 800px) {
  section {
    width: 80%;
  }
}
</style>
