<template>
  <div id="root">
    <Navbar />
    <ViewWrapper :title="title" />
    <Footer id="footer" :socialLinks="socialLinks" />
  </div>
</template>

<script>
import Navbar from './components/layout/navigation/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import ViewWrapper from './components/layout/ViewWrapper.vue';

export default {
  components: {
    Navbar,
    ViewWrapper,
    Footer
  },
  data() {
    return {
      title: "Arjay | Codes",
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
#root {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100% !important;
}
</style>
