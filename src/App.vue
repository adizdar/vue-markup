<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'app'
}
</script>

<style>
@import 'assets/style/github-markdown.css';

#app {
  /* Font optimization */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
  text-shadow: #fff 0px 1px 1px;
}
</style>
