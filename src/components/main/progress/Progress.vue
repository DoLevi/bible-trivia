<template>
  <div class="progress-root">
    <ProgressStep
      v-for="step in steps"
      :key="step.value"
      :value="step.value"
      :selected="step.selected"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProgressStep from "./ProgressStep.vue";
import store, { progressSteps } from "../../../store/index";

export default defineComponent({
  name: "Progress",
  components: {
    ProgressStep
  },
  computed: {
    steps: function() {
      return progressSteps.map((step, idx) => ({
        value: step,
        selected: store.state.progress === idx
      }));
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress-root {
  grid-area: progress;
  background-color: #d9e1e8;
  box-shadow: 0 0 4px 0 #282c37;
  padding: 1em;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
}
</style>
