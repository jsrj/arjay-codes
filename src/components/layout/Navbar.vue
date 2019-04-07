<template>
  <div class="navbar" v-cloak>
    <DevIdentifierTag tagName="Navbar" />

    <router-link to="/">Home</router-link>&nbsp;|&nbsp;
    <router-link to="/about">About</router-link>&nbsp;|&nbsp;

    <router-link v-if="isAuthenticated" to="/user" tag="a" href="#">Profile</router-link>
    <span v-if="isAuthenticated">&nbsp;|&nbsp;</span>
    <a href="#" v-if="isAuthenticated" @click.prevent="logout">Log Out</a>
    <a v-else href="#" @click.prevent="login">Log In</a>
  </div>
</template>

<script>
import DevIdentifierTag from '@/components/helpers/DevIdentifierTag.vue';

export default {
  name: "Navbar",
  components: {
    DevIdentifierTag
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
      profile: {}
    };
  }
}
</script>

<style lang="sass" scoped>
.navbar
  border: 2px solid black;
  
  a
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active
      color: #42b983;
</style>

