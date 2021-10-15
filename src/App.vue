<template>
  <div id="app">
    <the-header></the-header>
    <section>
      <base-card title="Robot program">
        <programming-form></programming-form>
      </base-card>
      <div>
        <base-card title="Joint display">
          <joint-display></joint-display>
        </base-card>
        <base-card title="Robot hand display">
          <robot-hand-display></robot-hand-display>
        </base-card>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseCard from './components/BaseCard.vue'
import ProgrammingForm from './components/ProgrammingForm.vue'
import JointDisplay from './components/JointDisplay.vue'
import RobotHandDisplay from './components/RobotHandDisplay.vue'
import TheHeader from './components/TheHeader.vue'

@Component({
  components: {
    BaseCard,
    ProgrammingForm,
    JointDisplay,
    RobotHandDisplay,
    TheHeader,
  },
})
export default class App extends Vue {
  get robot() {
    const robot = this.$store.getters.robot
    console.log(robot)
    return this.$store.getters.robot
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
section {
  vertical-align: top;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
