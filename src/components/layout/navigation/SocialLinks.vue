<template>
  <div id="social-links">
    <a class="brand" href="#" target="_blank">
      <v-icon id="facebook" name="brands/facebook" />
    </a>
    <a class="brand" href="#" target="_blank">
      <v-icon id="twitter" name="brands/twitter-square" />
    </a>
    <a class="brand" href="#" target="_blank">
      <div id="instagram-wrapper">
        <v-icon id="instagram" name="brands/instagram" />
      </div>
    </a>
    <a class="brand" href="#" target="_blank">
      <v-icon id="github" name="brands/github-square" />
    </a>
    <a class="brand" href="#" target="_blank">
      <v-icon id="linkedin" name="brands/linkedin" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLinks",
  components: {},
  props: {},
  methods: {},
  mounted() {},
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
  /* Page-global Variables  */
  @primary: rgba(255, 255, 255, 1);
  @secondary: rgba(0, 0, 0, 1);
  @noPadding: 0px !important;
  @lightPadding: 2px;
  @mediumPadding: @lightPadding * 2;
  @heavyPadding: @mediumPadding * 2;

  /* Sub-component Variables*/

  /*------------------------*/

  /* Styles by Element */
  a {
    padding: @noPadding @mediumPadding;
  }
  /* Styles by Class   */
  .brand {
    padding: @lightPadding;

    color: @primary;
    background-color: @secondary;
  }
  .brand#instagram-wrapper {
    // padding: @lightPadding;

    background-color: @primary;
  }
  /* Styles by ID      */
  #social-links {
    display: flex;
    flex-direction: row;
    justify-content: center;

    height: 100%;

    padding: @heavyPadding;
  }
</style>


