<template>
  <div id="app">
    <Navbar id="nav" />
    <router-view id="main" title="Arjay | Codes" />
    <Footer id="footer" :socialLinks="socialLinks" />
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


<style lang="sass">
#nav
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

#main
  padding: 10vh 0;

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100% !important;
</style>
