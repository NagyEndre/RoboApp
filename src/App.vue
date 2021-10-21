<template>
  <div id="app">
    <the-header></the-header>
    <program-view></program-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TheHeader from './components/TheHeader.vue'
import ProgramView from './views/ProgramView.vue'

@Component({
  components: {
    TheHeader,
    ProgramView,
  },
})
export default class App extends Vue {
  get robot() {
    const robot = this.$store.getters.robot
    return this.$store.getters.robot
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: rgba(233, 164, 14, 0.116);
  min-width: 350px;
}
span {
  display: inline-block;
  width: 4rem;
  border: 1px solid grey;
  background-color: wheat;
  font-weight: bold;
}
li {
  list-style: none;
}
</style>
