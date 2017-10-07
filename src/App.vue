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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
