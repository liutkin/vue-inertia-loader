<template>
  <div id="app">
    <inertia-loader loading pulse>Loaded</inertia-loader>
  </div>
</template>

<script>
import Vue from "vue";
import InertiaLoader from "@/InertiaLoader.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    InertiaLoader,
  },
});
</script>

<style>
html {
  font-size: 16px;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  font-family: Helvetica, sans-serif;
  color: hsla(0, 0%, 0%, 0.9);
  font-size: 1rem;
  line-height: 1.5;
  background-color: white;
}
</style>
