<template>
  <div id="app">
    <loading-wrapper loading pulse>Loaded</loading-wrapper>
  </div>
</template>

<script>
import Vue from "vue";
import LoadingWrapper from "@/LoadingWrapper.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    LoadingWrapper,
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
