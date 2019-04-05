<template>
  <div id="app">
    <Navbar />
    <router-view title="Arjay | Codes" />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
* {
  margin-top: 10px;
  margin-bottom: 10px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
