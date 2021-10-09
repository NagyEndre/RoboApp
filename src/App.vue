<template>
  <div id="app">
    <header>
      <h1>RoboApp</h1>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
* {
  margin: 0;
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
  font-family: "Poppins", sans-serif;
}
</style>
