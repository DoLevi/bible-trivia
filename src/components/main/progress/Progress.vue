<template>
  <div class="progress-root">
    <ProgressStep v-for="step in steps" :key="step" :value="step" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProgressStep from "./ProgressStep.vue";
import { progressSteps } from "../../../store/index";

export default defineComponent({
  name: "Progress",
  data: function() {
    return {
      steps: progressSteps
    };
  },
  components: {
    ProgressStep
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress-root {
  background-color: #6bffa2;
  box-shadow: 0 0 4px 0 #3caefa;
  padding: 1em;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
}
</style>
