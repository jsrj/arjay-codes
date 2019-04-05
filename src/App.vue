<template>
  <div id="app">
    <Navbar />
    <router-view title="Arjay | Codes" />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
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
