<template>
  <v-navigation-drawer permanent app :width="width" height="100vh">

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
  </v-navigation-drawer>
</template>

<script>
import DevIdentifierTag from '@/components/helpers/DevIdentifierTag.vue';
import { clearInterval, setInterval } from 'timers';

export default {
  name: "Navbar",
  components: {},
  props: {
    width: String
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
    }
  },
  data() {
    return {
      isAuthenticated: false,
      profile: {},
      menuIsMinimized: false
    };
  }
}
</script>

<style lang="sass" scoped>
.navbar
  clear: both;
  border: 4px solid orange;
  margin-right: 250px;

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

