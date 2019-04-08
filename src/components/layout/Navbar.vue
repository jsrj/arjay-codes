<template>
  <v-layout v-resize="onResize" wrap>
    <!-- 
      TODO: Configure so that nav drawer is shown on desktop, but v-toolbar is shown on mobile devices. 
      DO NOT display both since the page quickly becomes way too crowded. 
    -->
    <!-- Nav Drawer -->
        <!-- Main Toolbar -->
    <v-toolbar app dark clipped>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Arjay | Codes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-tab>
          <v-btn flat>Link One</v-btn>
          <v-btn flat>Link Two</v-btn>
          <v-btn flat>Link Three</v-btn>
        </v-tab>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer app fixed v-model="drawer" absolute :permanent="this.windowSize.x > 800" dark>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
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
export default {
  name: "Navbar",
  components: {},
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
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ]
    };
  }
}
</script>

<style lang="sass" scoped>
// .navbar
//   clear: both;
//   border: 4px solid orange;
//   margin-right: 250px;

// #nav-links
//   ali

// .home-icon
//   cursor: pointer !important;
  
//   v-btn
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active
//       color: #42b983;
</style>

