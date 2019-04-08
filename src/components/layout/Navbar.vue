<template>
  <v-toolbar app dense :scroll-off-screen="shrinkNav" :scroll-threshold="1" class="navbar">

    <v-spacer />
      <router-link to="/">
        <v-btn flat v-if="!shrinkNav" @click.prevent="shrinkNav = true">
          <font-awesome-icon icon="angle-up">
          </font-awesome-icon>
        </v-btn>
        <v-btn flat v-else @click.prevent="shrinkNav = false">
          <font-awesome-icon icon="angle-down">
          </font-awesome-icon>
        </v-btn>
        <v-btn flat>Home</v-btn>
      </router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/about">
        <v-btn flat>About</v-btn>
      </router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link v-if="isAuthenticated" to="/user">
        <v-btn flat>Profile</v-btn>
      </router-link>
      <span v-if="isAuthenticated">&nbsp;|&nbsp;</span>
      <div>
        <v-btn flat v-if="isAuthenticated" @click.prevent="logout">Log Out</v-btn>
        <v-btn flat v-else @click.prevent="login">Log In</v-btn>
      </div>
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
      profile: {},
      shrinkNav: false
    };
  }
}
</script>

<style lang="sass" scoped>
.navbar
  border: 4px solid orange;
  z-index: 9;

#nav-links
  ali

.home-icon
  cursor: pointer !important;
  
  v-btn
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active
      color: #42b983;
</style>

