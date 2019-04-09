<template>
<div>
  <!-- IF user is not logged in, THEN display login - register button -->
  
  <!-- IF user is logged in, THEN do not display login - register button -->
</div>
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

