<template>
  <div class="question-root">
    <div class="question-query">What is a question?</div>
    <div class="question-result">Strong</div>
    <div class="question-result">Independent</div>
    <div class="question-result">Sensible</div>
    <div class="question-result">Not too shy to sing</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Questions"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question-root {
  grid-area: question;
  background-color: #4bdf82;
  box-shadow: 0 0 4px 0 #666666;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.question-query {
  grid-column-start: 1;
  grid-column-end: 3;
}

.question-result {
  margin: 0.5em;
  background-color: #2b3fe3;
  box-shadow: 0 0 3px 0 #1baf52;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.question-result:hover {
  box-shadow: 0 0 8px 5px #1baf52;
  outline: 4px solid #2b3fe3;
}
</style>
