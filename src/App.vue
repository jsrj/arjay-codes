<template>
  <v-app id="root">
    <Logo id="ac-logo" />
    <NavGem id="" />
    <router-view :title="title" />
  </v-app>
</template>

<script>
// import Navbar from './components/layout/navigation/Navbar.vue';
import Logo   from './components/content/images/Logo.vue';
import NavGem from "@/components/layout/navigation/experimental/NavGem.vue";
import Footer from './components/layout/Footer.vue';

export default {
  components: {
    Logo,
    NavGem,
    Footer
  },
  data() {
    return {
      title: "Arjay | Codes"
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


<style lang="less">
  @neutralLightColor: rgba(245, 245, 245, 1) !important;
  @neutralDarkColor:  rgba(78 , 78 , 78 , 1) !important;
  @primaryColor:      rgba(255, 166, 0  , 1) !important;
  @secondaryColor:    rgba(145, 198, 250, 1) !important;
  #root {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    // overflow: hidden;

    height: 100vh !important;

    background-color: @neutralLightColor;
    border: 7px solid @neutralLightColor;
    color: @neutralDarkColor;
  }

</style>
