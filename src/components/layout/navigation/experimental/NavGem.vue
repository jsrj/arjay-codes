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
        <v-dialog v-model="showMenu" transition="slide-x-transition" fullscreen scrollable>

          <!-- Activator -->
          <template v-slot:activator="{ on }">
            <v-btn small fab flat id="menu-badge" color="rgba(255, 166, 0, 1)" v-on="on">
              <v-sheet id="menu-icon" flat>
                <v-icon name="bars"></v-icon>
              </v-sheet>
            </v-btn>
          </template>
          <!-- /Activator -->
          
          <!-- Fullscreen Menu Content -->
          <v-card dark id="menu">
            <!-- Close Button -->
            <v-card-title id="close-button-row">
              <v-btn small fab flat fixed right top @click="showMenu = false">
                <v-icon name="times" />
              </v-btn>
            </v-card-title>
            <!-- </v-layout> -->
            <!-- /Close Button -->

            <!-- Links Container -->
            <v-card-text id="menu-links">
              <v-layout class="link-item">
                <v-btn>Link</v-btn>
              </v-layout>
              <v-layout class="link-item">
                <v-btn>Link</v-btn>
              </v-layout>
              <v-layout class="link-item">
                <v-btn>Link</v-btn>
              </v-layout>
              <v-layout class="link-item">
                <v-btn>Link</v-btn>
              </v-layout>
              <v-layout class="link-item">
                <v-btn>Link</v-btn>
              </v-layout>
            </v-card-text>
            <!-- /Links Container -->
            
            <!-- Social Links & Message Container -->
            <v-card-actions id="menu-footer">
              <v-btn>Social Link</v-btn>
              <!-- <v-container fluid id="footer-links"></v-container>
              <v-container fluid id="message"></v-container> -->
            </v-card-actions>
            <!-- /Social Links & Message Container -->
          </v-card>
          <!-- /Fullscreen Menu Content -->

        </v-dialog>
      </template>
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

  #menu {
    padding-top: 25vh;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 0px;

    #close-button-row {
      flex-direction: row-reverse;
      min-height: 70px;
      background-color: lime;
    }
    #menu-links {
      background-color: purple;
      display: flex;
      flex-flow: column;

      .link-item {
        display: flex;
        flex-flow: row-reverse;
      }
    }
    #menu-footer {
      background-color: orange;
      #footer-links {}
      #message {}
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


