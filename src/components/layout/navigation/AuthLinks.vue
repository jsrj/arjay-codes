<template>
  <!-- IF user is not logged in, THEN display login - register button -->
        <!-- <router-link v-if="isAuthenticated" to="/user">
        <v-btn flat>Profile</v-btn>
      </router-link>
      <span v-if="isAuthenticated">&nbsp;|&nbsp;</span>
      <div>
        <v-btn flat v-if="isAuthenticated" @click.prevent="logout">Log Out</v-btn>
        <v-btn flat v-else @click.prevent="login">Log In</v-btn>
      </div> -->
  <!-- IF user is logged in, THEN do not display login - register button -->
<div></div>
</template>

<script>
export default {
  name: 'AuthLinks',
  components: {},
  props: {},
  data() {
    return {
      isAuthenticated: false,
      profile: {},
      drawer: null,
    }
  },
  mounted() {},
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
  }
}
</script>

<style lang="sass" scoped>
</style>

