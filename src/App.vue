<template>
  <div class="root">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/layout/Header.vue";
import Main from "./components/layout/Main.vue";
import Footer from "./components/layout/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Main,
    Footer
  }
});

// #8A41FA #2B3FE3 #3CAEFA #2BE3D1 #6BFFA2
</script>

<style>
#app {
  font-family: Perpetua, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2be3d1;
  height: 100%;
}

#app > * {
  box-sizing: border-box;
}

.root {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
