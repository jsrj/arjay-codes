<template>
  <v-layout id="portfolio-sublinks">
    <v-btn append flat 
      :ripple="false" 
      :value="1" 
      class="link" 
      active-class="link btn-active" 
      v-for="(link, index) in dummyLinks" 
        :key="index" 
      tag="a" 
      :to="link.routeTo"
    >
      <strong><span>{{link.name}}</span></strong>
    </v-btn>
  </v-layout>
</template>

<script>


export default {
  name: "PortfolioSublinks",
  components: {},
  props: {},
  methods: {},
  mounted() {},
  data() {
    return {
      dummyLinks: [
        {
          name: "ABOUT",
          routeTo: "/about/bio"
        },
        {
          name: "PROJECTS",
          routeTo: "/about/projects"
        },
        // {
        //   name: "DESIGN PORTFOLIO",
        //   routeTo: "#"
        // },
        {
          name: "BLOG",
          routeTo: "/about/blog"
        },
        {
          name: "CONTACT",
          routeTo: "/about/contact"
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  /* Page-global Variables  */
  @primary: rgba(51, 51, 51, 1) !important;
  @secondary: rgba(255, 166, 0, 1) !important;
  @tertiary: rgba(145, 198, 250,1 ) !important;
  /* Sub-component Variables*/
  /*------------------------*/
  /* Styles by Element */
  /* Styles by Class   */
  .link::before {
    color: transparent;
  }
  .link:hover {
    color: @tertiary;
    background-color: @primary;
  }
  .link {
    font-family: 'Share Tech Mono', monospace;
  }
  .btn-active {
    color: @primary;
    background-color: @secondary;
  }
  /* Styles by ID      */
  #portfolio-sublinks {
    display: flex;
    flex-direction: row;
    position: fixed;
    right: 0;
    flex: 1;
  }
</style>


