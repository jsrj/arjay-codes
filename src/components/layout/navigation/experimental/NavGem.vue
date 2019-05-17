<template>
  <div id="nav-gem">
    <!-- Positioning and behavior element -->
    <v-speed-dial fixed top left
      id="container"
      direction="right"
      transition="slide-x"
      :open-on-hover="true"
    >
      <!-- NavGem primary display element -->
      <template v-slot:activator>
        <Logo id="ac-logo" />
        
        <!-- Purely Aesthetic element group -->
        <Droplet :top-margin="1" />
        <Droplet large secondary v-tooltip.right-end="'PAGE NAME'"/>
        <Droplet :bottom-margin="-2" />
        <!-- Purely Aesthetic element group -->
        <v-btn small fab flat id="menu-badge" color="rgba(255, 166, 0, 1)">
          <v-sheet id="menu-icon" flat>
            <div class="h-bar"></div>
            <div class="h-bar"></div>
            <div class="h-bar"></div>
          </v-sheet>
        </v-btn>
      </template>

      <!-- NavGem menu items #START -->
      <!-- <v-btn
        color="rgba(255, 166, 0, 1)"
        v-for="n in 4" 
        :key="n"
      >
        <v-icon>ICON_NAME</v-icon>
      </v-btn> -->
      <!-- NavGem menu items #END -->
    </v-speed-dial>
  </div>
</template>

<script>
import Logo from "@/components/content/images/Logo.vue";
import Droplet from "@/components/content/images/Droplet.vue";

export default {
  name: "NavGem",
  components: {
    Logo,
    Droplet
  },
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
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  #ac-logo {
    margin-bottom: 3px;
  }
  #menu-badge {
    overflow: hidden;
    background-color: @secondary;

    margin: 0px;

    border: 3px solid black;
    border-radius: 100%;
  }
  #menu-icon::before{
    color: transparent;
    background-color: transparent;
  }
  #menu-icon {
    display: flex;
    flex-direction: column;
    background-color: @secondary;
    z-index: 1 !important;

    .h-bar {
      width: 1.25rem;
      height: 1px;

      margin: 1px;
      padding: 0px;

      border: 2px solid black;
      border-radius: 1em;
    }
  }
</style>


