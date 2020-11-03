<template>
  <div>
    Header
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  flex: none;
  padding: 1.5em;
  background-color: #3caefa;
  box-shadow: 0 0 8px 0 #3caefa;
  z-index: 100;
}
</style>
