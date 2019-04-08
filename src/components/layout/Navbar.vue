<template>
  <v-toolbar app dense scroll-off-screen :scroll-threshold="1" class="navbar">

    <v-spacer />

    <router-link to="/">
      <v-btn flat>Home</v-btn>
    </router-link>

    &nbsp;|&nbsp;

    <router-link to="/about">
      <v-btn flat>About</v-btn>
    </router-link>

    &nbsp;|&nbsp;

    <router-link v-if="isAuthenticated" to="/user">
      <v-btn flat>Profile</v-btn>
    </router-link>

    <span v-if="isAuthenticated">&nbsp;|&nbsp;</span>

    <v-btn flat v-if="isAuthenticated" @click.prevent="logout">Log Out</v-btn>
    <v-btn flat v-else  @click.prevent="login">Log In</v-btn>
  </v-toolbar>
</template>

<script>
import DevIdentifierTag from '@/components/helpers/DevIdentifierTag.vue';

export default {
  name: "Navbar",
  components: {},
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
    }
  },
  data() {
    return {
      isAuthenticated: false,
      profile: {}
    };
  }
}
</script>

<style lang="sass" scoped>
.navbar
  border: 2px solid black;
  width: 20vw;
  background-color: transparent;
  z-index: 9;

.home-icon
  cursor: pointer !important;
  
  a
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active
      color: #42b983;
</style>

