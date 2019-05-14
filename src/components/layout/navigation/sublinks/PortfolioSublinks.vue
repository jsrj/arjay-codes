<template>
  <div id="portfolio-sublinks">
    <!-- ... -->
    <v-btn append flat class="link" v-for="(link, index) in dummyLinks" :key="index" tag="a" :to="link.routeTo">
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
          routeTo: "#"
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
  /* Sub-component Variables*/
  /*------------------------*/
  /* Styles by Element */
  /* Styles by Class   */
  .link {
    color: limegreen;
  }
  /* Styles by ID      */
</style>


