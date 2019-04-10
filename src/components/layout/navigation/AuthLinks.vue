<template>
  <!-- IF user is logged in, THEN display logout button -->
    <v-btn flat v-if="isAuthenticated" @click.prevent="logout">Log Out</v-btn>

  <!-- IF user is not logged in, THEN display login - register button -->
    <v-btn flat v-else color="orange" @click.prevent="login">
      Log In&nbsp;&#5867;&nbsp;Sign Up
    </v-btn>
  <!-- <router-link v-if="isAuthenticated" to="/user">
    <v-btn flat>Profile</v-btn>
  </router-link> -->
</template>

<script>
export default {
  name: 'AuthLinks',
  components: {},
  props: {},
  data() {
    return {
      isAuthenticated: false,
      profileIsLoading: false,
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
      this.$emit('user-profile', this.profile);
    },
    sendLoadingSignal() {
      this.$emit('profile-loading', this.profileIsLoading);
      console.log(`sending loading signal value of ${this.profileIsLoading}`);
      this.profileIsLoading = !this.profileIsLoading;
    }
  }
}
</script>

<style lang="sass" scoped>
</style>

