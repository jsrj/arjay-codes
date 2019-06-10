<template>
  <div id="nav-gem">
    <!-- Positioning and behavior element -->
    <v-speed-dial app id="container">
      <!-- NavGem primary display element -->
      <template v-slot:activator>
        <!-- Full Screen Navigation Menu Dialog, Activator and content -->
        <v-dialog v-model="showMenu" transition="fade" fullscreen scrollable>

          <!-- Activator -->
          <template v-slot:activator="{ on }">
            <v-btn fab flat small
              id="opener"
              :style="{'display':(!showMenu)? '' : 'none'}" 
              color="rgba(255, 166, 0, 1)" 
              v-on="on"
            >
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
              <v-btn small fab flat @click="showMenu = false" class="menu-badge">
                <v-icon name="times" />
              </v-btn>
            </v-card-title>
            <!-- </v-layout> -->
            <!-- /Close Button -->

            <!-- Links Container -->
            <v-card-text id="menu-links">
              <v-layout
                v-for="(link, index) in links"
                :key="`${link.name.toLowerCase()}-${index}`"
                class="link-item"
              >
                <v-btn
                  append
                  flat
                  tag="a"
                  active-class="active-link"
                  :to="link.url || '#'"
                  @click="showMenu = false"
                  :class="`menu-link ${link.cta && 'prominent'}`"
                >
                  {{link.name}}
                </v-btn>
              </v-layout>
            </v-card-text>
            <!-- /Links Container -->
            
            <!-- Social Links & Message Container -->
            <v-card-actions id="menu-footer">
              <v-layout> Made with〘☕️ && ❤️〙by&nbsp;<a href="http://github.com/jsrj" target="_blank" color="orange">@jsrj</a></v-layout>
              <v-layout fluid id="message">&copy; Copyright 2019, Arjay|Codes</v-layout>
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
import SocialLinks from "@/components/layout/navigation/SocialLinks.vue";

export default {
  name: "NavGem",
  components: {
    Logo,
    Droplet,
    SocialLinks
  },
  props: {},
  methods: {},
  data () {
    return {
      showMenu: false,
      links: [
        {
          name: 'Home',
          url: '/',
          cta: false
        },
        {
          name: 'About',
          url: '/about',
          cta: false
        },
        {
          name: "PROJECTS",
          url: "/about/projects",
          cta: false
        },
        {
          name: "SERVICES",
          url: "#",
          cta: false
        },
        {
          name: "BLOG",
          url: "/about/blog",
          cta: false
        },
        {
          name: "GET IN TOUCH",
          url: "/about/contact",
          cta: true
        }
      ]
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
    // display: flex;
    // flex-direction: column;
    // flex-grow: 1;
    // align-items: center;
    // height: 100vh;
    // top: 5px;
    // left: 5px;
  }

  #menu {
    padding-top: 25vh;
    width: 100vw;
    height: 100vh;
    opacity: 0.82;
    background-image: linear-gradient(to right, @tertiary , transparent);
    border-radius: 0px;

    #close-button-row {
      flex-direction: row-reverse;
      min-height: 50px;
      max-height: 70px;
    }
    #menu-links {
      display: flex;
      flex-flow: column;
      margin: auto 0;

      .link-item {
        display: flex;
        flex-flow: row-reverse;
      }
      .link-item > a::before {
        background-color: transparent;
      }
      .link-item > a {
        border-right: 2px solid @secondary;
      }
      .link-item > a:hover {
        border-color: @tertiary;
      }
      .link-item.menu-link {
        font-family: 'Major Mono Display', monospace;
      }
      .active-link {
        color: @tertiary;
      }
      .prominent::before {
        opacity: 1;
        background-color: @secondary;
        color: @primary;
      }
      .prominent {
        color: @primary;
        font-size: 12pt !important;
        font-weight: 900;
      }
    }
    #menu-footer {
      display: flex;
      flex-direction: column;

      position: fixed;
      bottom: 0;
      left: 0;

      width: 100%;
      max-height: 52px;

      background-color: rgba(21, 21, 21, 1);
      border-top: 1px dashed white;
      box-shadow: 0px 0px 12px 8px skyblue;
      font-size: 7pt;

      a {
        color: orange;
        font-size: 10pt;
      }
    }
  }


  .menu-badge {
    overflow: hidden;
    opacity: 1;
    background-color: @secondary;

    border: 3px solid black;
    border-radius: 100%;
    color: @primary !important;
  }
  #opener {
    // top: 45%;
  }
  #menu-icon::before{
    color: transparent;
    background-color: transparent;
  }
  #menu-icon {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    z-index: 1 !important;
  }
</style>


