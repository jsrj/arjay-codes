<template>
  <v-app id="root">

    <!-- Top-Row -->
    <v-container fluid id="top-row">
      <v-container id="logo-container">
        <Logo id="ac-logo" />
      </v-container>
      <v-container id="navg-container">
        <NavGem />
      </v-container>
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
      <v-layout fluid id="center-content">
        <router-view :title="title" />
      </v-layout>
      <!-- Center Content -->

      <!-- Right Gutter -->
      <v-layout id="right" class="gutter">
        <TopReturn />
      </v-layout>
      <!-- Right Gutter -->
    </v-container>
    <!-- Bot-Row -->
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
  #root {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    background-color: @neutralColor;
    border: 7px solid @neutralLightColor;
    color: @neutralDarkColor;
  }

  #top-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border: 2px solid black;

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

    border: 2px solid black;

    .gutter {
      display: flex;
      flex-direction: column;
      flex: 1;

      margin: 0px;
      padding: 0px;

      width: 100px !important;
      border: 2px solid black;
    }
    #left {}
    #right {}
    #center-content {
      flex: 15;
      margin: 0px;
      padding: 0px;
    }
  }
</style>
