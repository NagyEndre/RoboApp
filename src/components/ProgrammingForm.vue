<template>
  <form action="submit" @submit.prevent="">
    <div>
      <label for="robot-program">Robot program</label>
      <textarea name="robot-program" id="" rows="10"></textarea>
    </div>
    <button type="submit">Run</button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ProgrammingForm extends Vue {}
</script>

<style scoped>
textarea {
  width: 100%;
  resize: none;
  height: 15rem;
}
</style>
