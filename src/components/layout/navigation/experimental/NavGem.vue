<template>
  <div id="nav-gem">
    <!-- Positioning and behavior element -->
    <v-speed-dial large fixed top left
      id="container"
      direction="right"
      transition="slide-x"
      :open-on-hover="true"
    >
      <!-- NavGem primary display element -->
      <template v-slot:activator>
        <v-btn large fab id="main-badge" color="rgba(255, 166, 0, 1)">
          <v-sheet id="menu-icon" flat>
            <div class="h-bar"></div>
            <div class="h-bar"></div>
            <div class="h-bar"></div>
          </v-sheet>
        </v-btn>
      </template>


          <!-- NavGem menu items #START -->
          <v-btn
            fab
            dark
            small
            color="green"
          >
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            color="indigo"
          >
            <v-icon>add</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            color="red"
          >
        <v-icon>delete</v-icon>
      </v-btn>
      <!-- NavGem menu items #END -->
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  name: "NavGem",
  components: {},
  props: {},
  methods: {},
  data () {
    return {}
  },
  created () {},
  mounted() {}
}
</script>

<style lang="less" scoped>
  @primary: rgba(33, 33, 33, 1) !important;
  @secondary: rgba(255, 166, 0, 1) !important;
  @tertiary: rgba(145, 198, 250,1 ) !important;
  @scaleX: 100%;
  @scaleY: 10vh;
  #container {
    padding: 8px;
    background-color: @primary;
    border-radius: 100%;
  }

  #main-badge {
    overflow: hidden;
    background-color: @tertiary;

    // border-radius: 100%;
  }

  #menu-icon::before{
    color: transparent;
    background-color: transparent;
  }
  #menu-icon {
    display: flex;
    flex-direction: column;
    background-color: @tertiary;

    .h-bar {
      width: 3rem;
      height: 1px;
      
      margin: 2px;
      padding: 0px;

      border: 4px solid black;
      border-radius: 1em;
    }
  }
</style>


