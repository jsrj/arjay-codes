<template>
  <v-app id="app">
    <v-container fluid id="root">
      <!-- Left Gutter -->
      <v-layout fluid id="left" class="gutter">
        <!-- Logo -->
        <v-layout id="logo">
          <Logo />
        </v-layout>
        <!-- Logo -->

        <!-- Vertical Social Links -->
        <v-layout id="vertical-social-links">
          <span class="social-link">
            <strong>FB</strong>
          </span>
          <Droplet secondary />
          <span class="social-link">
            <strong>IG</strong>
          </span>
          <droplet primary />
          <span class="social-link">
            <strong>GH</strong>
          </span>
          <Droplet secondary />
          <span class="social-link">
            <strong>LI</strong>
          </span>
        </v-layout>
        <!-- Vertical Social Links -->

        <!-- Top Return -->
        <v-layout id="top-return">
          <TopReturn />
        </v-layout>
        <!-- Top Return -->
      </v-layout>
      <!-- Left Gutter -->
      <!-- Center Content -->
      <v-layout id="center-content">
        <router-view :title="title" />
        <v-divider id="bottom-spacer" />
      </v-layout>
      <!-- Center Content -->
      <!-- Right Gutter -->
      <v-layout id="right" class="gutter">
        <!-- Navigation & Hamburger -->   
        <NavGem id="nav" />
        <!-- Navigation & Hamburger -->

        <v-btn app fixed bottom right id="cta"><strong>GET STARTED</strong></v-btn>
      </v-layout>
      <!-- Right Gutter -->
    </v-container>
  </v-app>
</template>

<script>
// import Navbar from './components/layout/navigation/Navbar.vue';
import Logo   from './components/content/images/Logo.vue';
import Droplet from './components/content/images/Droplet.vue';
import NavGem from './components/layout/navigation/experimental/NavGem.vue';
import PortfolioLinks from './components/layout/navigation/sublinks/PortfolioSublinks.vue';
import TopReturn from './components/layout/navigation/TopReturn.vue';

export default {
  components: {
    Logo,
    Droplet,
    NavGem,
    PortfolioLinks,
    TopReturn
  },
  data() {
    return {
      title: "Arjay | Codes",
      windowWidth: (window.innerWidth > 0) ? window.innerWidth : screen.width
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
  @neutralColor:      rgba(256, 238, 207, 1) !important;
  @detailColor:       rgba(232, 60 , 56 , 1) !important;
  @neutralDarkColor:  rgba(78 , 78 , 78 , 1) !important;
  @primaryColor:      rgba(255, 166, 0  , 1) !important;
  @secondaryColor:    rgba(145, 198, 250, 1) !important;

  body {
    background-color: @neutralLightColor;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    height: 100vh !important;
    overflow: hidden;

    background-color: @neutralColor;
    border: 7px solid @neutralLightColor;
    border-radius: 25px;
    color: @neutralDarkColor;

    #root {
      display: flex;
      flex-direction: row;
      margin: 0px;
      padding: 0px;
    }
  }
  #cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    background-color: @detailColor;
    color: @neutralLightColor;
  }
  .gutter {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    max-width: 72px;
    max-height: 98vh;
  }
  #left {
    #logo {
      flex: 1 0;
    }
    #vertical-social-links {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 15 0;
      z-index: 2;
      .social-link {
        font-family: 'Share Tech Mono', monospace;
        // font-family: 'Major Mono Display', monospace;
        transform: rotate(90deg);
      }
      .droplet {
        margin: 0px;
      }
    }
    #top-return {
      flex: 0.5 0;
    }
  }
  @media screen and (max-width: 600px) {
    #right {
      padding: 0px 6px;
      border-left: 2px dotted @neutralDarkColor;
    }
  }
  #right {
    display: flex;
    flex-direction: column;
    flex: 1;
    #nav {
      margin-top: 45vh;
      display: flex;
      // transform: rotate(90deg);
      z-index: 2;
    }
  }
  #right > * {
    flex: 1;
  }
  #center-content {
    flex: 15;
    margin: 0px;
    padding: 0px;
    height: 89vh;
    overflow: scroll;
    scrollbar-width: 0px;
    scrollbar-base-color: transparent;
    scrollbar-color: transparent;

    #bottom-spacer {
      position: fixed;
      bottom: 32px;
      width: 50vw;
    }
  }
</style>
