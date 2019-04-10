<template>
  <v-layout v-resize="onResize" wrap>
    <v-toolbar app dark>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"> -->
      <Logo :loading="isLoading" :profileImageURL="profile.picture" />
      <!-- </v-toolbar-side-icon> -->
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link tag="v-btn" flat to="/">Home</router-link>
        <router-link tag="v-btn" flat to="/about">About</router-link>
        <AuthLinks @profile-loading="toggleLoadingAnimation" @user-profile="getUserProfile" />
      </v-toolbar-items>
    </v-toolbar>
  </v-layout>
</template>

<script>
import Logo from '@/components/content/images/Logo.vue';
import NaviLinks from './NaviLinks.vue';
import AuthLinks from './AuthLinks.vue';
import { setTimeout } from 'timers';

export default {
  name: "Navbar",
  components: {
    Logo,
    NaviLinks,
    AuthLinks
  },
  props: {
    width: String
  },
  mounted() {
    this.onResize();
    // TODO: Remove these before deploying
    this.isLoading = true;
    setTimeout(() => {this.isLoading = false}, 1000);
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    },
    getUserProfile(user) {
      this.profile = user;
    },
    toggleLoadingAnimation(showAnim) {
      this.isLoading = showAnim;
    }
  },
  data() {
    return {
      isAuthenticated: false,
      isLoading: false,
      profile: {},
      drawer: null,
      windowSize: {
        x: 0,
        y: 0
      },
      items: [
        { 
          title: 'Home', 
          icon: 'dashboard',
          target: '/'
        },
        { 
          title: 'About', 
          icon: 'question_answer',
          target: 'about'
        }
      ]
    };
  }
}
</script>

<style lang="sass" scoped>
</style>
