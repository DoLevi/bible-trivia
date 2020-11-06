<template>
  <div class="root">
    <Illustration />
    <Progress />
    <Questions />
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
  min-height: 800px;
  margin: 0 calc(100% / 6);
  padding: 6px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "illustration progress"
    "question question";
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  background-color: #ffffff;
  box-shadow: 0 0 2px 0 #646464;
}
</style>
