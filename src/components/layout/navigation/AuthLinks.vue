<template>
  <!-- IF user is logged in, THEN display logout button -->
    <!-- <v-btn append flat v-if="isAuthenticated" @click.prevent="logout"> -->
    <v-btn append flat v-if="isAuthenticated" to="/user">
      <img id="profile-image" :src="profile.picture">
    </v-btn>

  <!-- IF user is not logged in, THEN display login - register button -->
    <v-btn flat v-else color="orange" @click.prevent="login">Get Started</v-btn>
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
#profile-image
  border: 2px solid black;
  border-radius: 100%;
  box-shadow: 0px 0px 0px 2px white;
  width: 65%;
  height: 50%;
</style>

