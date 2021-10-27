<template>
  <base-card title="Robot program" class="relative">
    <form action="submit" @submit.prevent="runProgram">
      <textarea
        name="robot-program"
        autofocus="autofocus"
        rows="10"
        v-model="program"
      ></textarea>
      <button type="submit" class="btn-primary">Run</button>
    </form>
    <button id="btn_hint" @click="showHint = !showHint">
      <img src="@/assets/question.svg" />
    </button>
    <div v-if="showHint" id="command_hint">
      <h3>Commands</h3>
      <ul v-for="command in commandList" :key="command">
        <li>{{ command }}</li>
      </ul>
    </div>
  </base-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Interpreter from '@/logic/interpreter/Interpreter'

@Component
export default class ProgrammingForm extends Vue {
  program = ''
  showHint = false
  commandList = [
    'MOVE jointIndex XPos YPos ZPos',
    'OPEN [ ALL | fingerIndex | GRIPPER ]',
    'CLOSE [ ALL | fingerIndex | GRIPPER ]',
  ]
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
  text-transform: uppercase;
}
.relative {
  position: relative;
}
.btn-primary {
  color: white;
  background: green;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  font-family: 'Fira Sans', sans-serif;
  text-transform: uppercase;
}
h3 {
  margin-bottom: 0.5rem;
}
#btn_hint {
  background: white;
  color: black;
  padding: 0;
  border-radius: 50%;
  height: 1.6rem;
  width: 1.6rem;
  position: absolute;
  top: 1vh;
  right: 1vw;
}
#command_hint {
  text-align: left;
}
li {
  margin: 0.2rem;
  padding-left: 0.3rem;
}
</style>
