<template>
  <div id="app">
    <header>
      <h1>RoboApp</h1>
    </header>
    <section>
      <base-card title="Robot program">
        <programming-form></programming-form>
      </base-card>
      <base-card title="Joint display">
        <joint-display></joint-display>
      </base-card>
      <base-card title="Robot">
        <p>{{ robot }}</p>
      </base-card>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseCard from './components/BaseCard.vue'
import ProgrammingForm from './components/ProgrammingForm.vue'
import JointDisplay from './components/JointDisplay.vue'

@Component({
  components: {
    BaseCard,
    ProgrammingForm,
    JointDisplay,
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
header {
  background: linear-gradient(178deg, forestgreen, orange);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px grey;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 2rem;
}
section {
  vertical-align: top;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
