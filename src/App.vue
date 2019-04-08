<template>
  <div id="root">
    <Navbar :width="menuWidth" />
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
      menuWidth: 125,
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
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch {
      // Supress the 'not logged in' error as we can illegitimately get that
      // when processing the callback url
    }
  }
}
</script>


<style>
#main {
  padding: 10vh 0;
}

#root {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100% !important;
}
</style>
