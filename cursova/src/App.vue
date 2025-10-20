<template>
  <IntroPage/>
</template>

<script>
import IntroPage from './components/IntroPage.vue'

export default {
  name: 'App',
  components: {
    IntroPage,
  }
}
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: black; 
  overflow: hidden;
}
</style>
