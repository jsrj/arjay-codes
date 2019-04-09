<template>
  <v-layout v-resize="onResize" wrap>
    <!-- Nav Drawer -->
        <!-- Main Toolbar -->
    <v-toolbar app dark>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <Logo />
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link tag="v-btn" flat to="/">Home</router-link>
        <router-link tag="v-btn" flat to="/about">About</router-link>
        <v-btn  color="orange" @click.prevent="login"> Login - Register</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-layout>
  <!-- <v-navigation-drawer permanent app :v-model="null" :width="width" height="100vh">

      <v-spacer />
      <router-link to="/">
        <v-btn flat>Home</v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn flat>About</v-btn>
      </router-link>
      <router-link v-if="isAuthenticated" to="/user">
        <v-btn flat>Profile</v-btn>
      </router-link>
      <span v-if="isAuthenticated">&nbsp;|&nbsp;</span>
      <div>
        <v-btn flat v-if="isAuthenticated" @click.prevent="logout">Log Out</v-btn>
        <v-btn flat v-else @click.prevent="login">Log In</v-btn>
      </div>
  </v-navigation-drawer> -->
</template>

<script>
import Logo from '../content/Logo.vue';

export default {
  name: "Navbar",
  components: {
    Logo
  },
  props: {
    width: String
  },
  mounted() {
    this.onResize();
  },
  methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
      this.$router.push({ path: "/" });
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    },
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      console.log(this.windowSize.x);
      console.log(this.windowSize.y);
    }
  },
  data() {
    return {
      isAuthenticated: false,
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
