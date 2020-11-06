<template>
  <div>
    Illustration
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Illustration"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  grid-area: illustration;
  background-color: lightgray;
  padding: 0.25em;
  box-shadow: 0 0 4px 0 #666666;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
