<template>
  <div id="portfolio-sublinks">
    <!-- ... -->
    <v-btn append flat :ripple="false" :value="1" class="link" active-class="link btn-active" v-for="(link, index) in dummyLinks" :key="index" tag="a" :to="link.routeTo">
      <span>{{link.name}}</span>
    </v-btn>
  </div>
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
          name: "BIO",
          routeTo: "/about"
        },
        {
          name: "PROJECTS",
          routeTo: "#"
        },
        {
          name: "DESIGN PORTFOLIO",
          routeTo: "#"
        },
        {
          name: "SKILLS",
          routeTo: "#"
        },
        {
          name: "CONTACT",
          routeTo: "#"
        },
        {
          name: "BLOG",
          routeTo: "#"
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
  /* Sub-component Variables*/
  /*------------------------*/
  /* Styles by Element */
  /* Styles by Class   */
  .link::before {
    color: transparent;
  }
  .link:hover {
    color: @secondary;
    background-color: @primary;
  }
  .btn-active {
    color: @primary;
    background-color: @secondary;
  }
  /* Styles by ID      */
</style>


