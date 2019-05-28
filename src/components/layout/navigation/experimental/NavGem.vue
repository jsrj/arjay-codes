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
        <Droplet class="droplet" />
        <Droplet class="droplet" large secondary v-tooltip.right-end="'PAGE NAME'" />
        <Droplet class="droplet" />
        

        <!-- Full Screen Navigation Menu Dialog, Activator and content -->
        <v-dialog v-model="showMenu" fullscreen>
          <template v-slot:activator="{ on }">
            <v-btn small fab flat id="menu-badge" color="rgba(255, 166, 0, 1)" v-on="on">
              <v-sheet id="menu-icon" flat>
                <v-icon name="bars"></v-icon>
              </v-sheet>
            </v-btn>
          </template>
          <v-btn small fab flat @click="showMenu = false">X</v-btn>
        </v-dialog>
      </template>
    </v-speed-dial> 
  </div>
</template>

<script>
import Logo from "@/components/content/images/Logo.vue";
import Droplet from "@/components/content/images/Droplet.vue";
import { RadialMenu, RadialMenuItem } from "vue-radial-menu";

export default {
  name: "NavGem",
  components: {
    Logo,
    Droplet,
    RadialMenu,
    RadialMenuItem
  },
  props: {},
  methods: {},
  data () {
    return {
      showMenu: false
    }
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
    @media screen and (max-width: 800px) {
      display: none;
    }
    margin: 3px;
  }
  .droplet {
    @media screen and (max-width: 800px) {
      display: none;
    }
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
  }
</style>


