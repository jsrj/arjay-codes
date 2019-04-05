<template>
  <div id="app">
    <Navbar />
    <router-view title="Arjay | Codes" />
    <Footer :socialLinks="socialLinks" />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      socialLinks: [
        {
          name: 'Facebook',
          href: 'https://www.facebook.com/arjay.codes/',
          iconName: ''
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com/codesarjay',
          iconName: ''
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/arjay.codes/',
          iconName: ''
        },
        {
          name: 'Github',
          href: 'https://github.com/jsrj',
          iconName: ''
        }
      ]
    }
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
