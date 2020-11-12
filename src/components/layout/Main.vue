<template>
  <div class="root">
    <Questions />
    <Illustration />
    <Progress />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Progress from "../main/progress/Progress.vue";
import Illustration from "../main/Illustration.vue";
import Questions from "../main/Questions.vue";

export default defineComponent({
  name: "Main",
  components: {
    Progress,
    Illustration,
    Questions
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  flex: auto;
  padding: 6px calc(100% / 6 + 6px);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "question question"
    "illustration progress";
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  background-color: #e9f1f8;
}
</style>
