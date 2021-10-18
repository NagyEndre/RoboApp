<template>
  <form action="submit" @submit.prevent="runProgram">
    <div>
      <textarea
        name="robot-program"
        autofocus="autofocus"
        rows="10"
        v-model="program"
      ></textarea>
    </div>
    <button type="submit">Run</button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Interpreter from '../logic/Interpreter'

@Component
export default class ProgrammingForm extends Vue {
  program = ''
  runProgram() {
    const programLines = this.program.split('\n')

    programLines.forEach((line) => {
      new Interpreter(line).run()
    })
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  resize: none;
  height: 15rem;
  border: 1px solid orange;
  border-radius: 0.25rem;
  padding: 0.5rem;
}
button {
  color: white;
  background: green;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  font-family: 'Fira Sans', sans-serif;
  text-transform: uppercase;
}
</style>
