<template>
  <form action="submit" @submit.prevent="run">
    <div>
      <textarea name="robot-program" id="" rows="10"></textarea>
    </div>
    <button type="submit">Run</button>
  </form>
</template>

<script lang="ts">
import store from '@/store'
import { Vue, Component } from 'vue-property-decorator'
import Interpreter from '../logic/Interpreter'

@Component
export default class ProgrammingForm extends Vue {
  run() {
    console.log('Interpreting and running program..')
    // break by new lines
    //new Interpreter('move j1 3 4 5').run()

    store.commit('setJointCoordinates', {
      joint: 1,
      x: 99,
      y: 99,
      z: 99,
    })
    store.commit('setJointCoordinates', {
      joint: 3,
      x: 69,
      y: 69,
      z: 69,
    })

    store.commit('setFinger', { index: 1, isOpen: false })
    store.commit('setFinger', { index: 4, isOpen: false })
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
