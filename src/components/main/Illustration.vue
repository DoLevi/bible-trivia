<template>
  <div class="illustration-root">
    <div class="verse" :v-if="verses">
      <p>
        {{ verses[0].content }}
      </p>
      <p>
        {{ verses[0].book }} {{ verses[0].chapterNum }}:{{ verses[0].verseNum }}
      </p>
    </div>

    <div>
      <img :src="illustration" alt="Illustration" />
      <div class="copyright-notice">
        ©BibleProject
      </div>
    </div>

    <div class="verse" :v-if="verses">
      <p>
        {{ verses[1].content }}
      </p>
      <p>
        {{ verses[1].book }} {{ verses[1].chapterNum }}:{{ verses[1].verseNum }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../../store/index";

export default defineComponent({
  name: "Illustration",
  computed: {
    verses: function() {
      return store.state.wrapperVerses;
    },
    illustration: function() {
      return store.getters.workingIllustrationPath;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.illustration-root {
  grid-area: illustration;
  background-color: #d9e1e8;
  padding: 0.25em;
  box-shadow: 0 0 4px 0 #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.copyright-notice {
  padding: 3px 6px;
  text-align: left;
  font-size: 0.75em;
  color: #282c37;
}

.verse {
  padding: 1em;
}

p {
  margin: 0.15em;
}

img {
  width: 100%;
}
</style>
