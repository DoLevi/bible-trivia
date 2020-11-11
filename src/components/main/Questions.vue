<template>
  <div class="question-root">
    <div class="question-query">{{ store.state.question }}</div>
    <div class="question-result" @click="answer(0)">
      {{ store.state.answers[0] }}
    </div>
    <div class="question-result" @click="answer(1)">
      {{ store.state.answers[1] }}
    </div>
    <div class="question-result" @click="answer(2)">
      {{ store.state.answers[2] }}
    </div>
    <div class="question-result" @click="answer(3)">
      {{ store.state.answers[3] }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../../store/index";

export default defineComponent({
  name: "Questions",
  data: function() {
    return {
      store
    };
  },
  methods: {
    answer: function(idx: number) {
      store.dispatch("submitAnswer", idx);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question-root {
  grid-area: question;
  background-color: #d9e1e8;
  box-shadow: 0 0 4px 0 #282c37;
  padding: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.question-query {
  grid-column-start: 1;
  grid-column-end: 3;
}

.question-result {
  margin: 4px;
  padding: 5px;
  background-color: #9baec8;
  box-shadow: 0 0 3px 0 #282c37;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
}

.question-result:hover {
  box-shadow: 0 0 4px 2px #282c37;
  outline: 2px solid #9baec8;
}
</style>
