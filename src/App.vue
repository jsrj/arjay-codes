<template>
  <v-app id="app">
    <v-container fluid id="root">
      <!-- Top-Row -->
      <v-container fluid id="top-row">
        <v-layout id="logo-container">
          <Logo id="ac-logo" />
        </v-layout>
        <v-layout id="navg-container">
          <NavGem />
        </v-layout>
      </v-container>
      <!-- Top-Row -->

      <!-- Bot-Row -->
      <v-container fluid id="bot-row">
        <!-- Left Gutter -->
        <v-layout id="left" class="gutter">
          <TopReturn />
        </v-layout>
        <!-- Left Gutter -->

        <!-- Center Content -->
        <v-layout id="center-content">
          <router-view :title="title" />
        </v-layout>
        <!-- Center Content -->

        <!-- Right Gutter -->
        <v-layout id="right" class="gutter">

        </v-layout>
        <!-- Right Gutter -->
      </v-container>
      <!-- Bot-Row -->
    </v-container>
  </v-app>
</template>

<script>
// import Navbar from './components/layout/navigation/Navbar.vue';
import Logo   from './components/content/images/Logo.vue';
import NavGem from "@/components/layout/navigation/experimental/NavGem.vue";
import TopReturn from './components/layout/navigation/TopReturn.vue';

export default {
  components: {
    Logo,
    NavGem,
    TopReturn
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
  @neutralColor:      rgba(246, 238, 227, 1) !important;
  @detailColor:       rgba(232, 60 , 56 , 1) !important;
  @neutralDarkColor:  rgba(78 , 78 , 78 , 1) !important;
  @primaryColor:      rgba(255, 166, 0  , 1) !important;
  @secondaryColor:    rgba(145, 198, 250, 1) !important;
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    // height: 100vh !important;

    background-color: @neutralColor;
    border: 7px solid @neutralLightColor;
    color: @neutralDarkColor;

    #root {
      margin: 0px;
      padding: 0px;
    }
  }

  #top-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0px;
    padding: 0px;
    border: 2px solid blue;

    #logo-container {
      display: flex;
      flex-direction: row;
    }
    #navg-container {
      display: flex;
      flex-direction: row-reverse;
    }
  }

  #bot-row {
    display: flex;
    flex-direction: row;
    padding: 0px;
    border: 2px solid red;

    .gutter {
      display: flex;
      flex: 1;

      margin: 0px;
      padding: 0px;

      border: 2px solid orange;
    }
    #left {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-start;
    }
    #right {}
    #center-content {
      flex: 15;
      margin: 0px;
      padding: 0px;
      border: 2px solid lime;
    }
  }
</style>
