<template>
  <base-card title="Joint display">
    <table>
      <thead>
        <tr>
          <td>
            <h3>Joint</h3>
          </td>
          <td>X</td>
          <td>Y</td>
          <td>Z</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(joint, index) in joints" :key="index">
          <td>{{ index + 1 }}</td>
          <td v-for="(value, key) in joint" :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </base-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class JointDisplay extends Vue {
  get joints() {
    return this.$store.getters.joints
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
thead,
td:first-child {
  background-color: wheat;
}
table,
td {
  border: 1px solid grey;
  font-weight: bold;
}
td:first-child {
  padding: 0;
  max-width: 1rem;
}
</style>
