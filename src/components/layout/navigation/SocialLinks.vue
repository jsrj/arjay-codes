<template>
  <div id="social-links">
    <a class="brand" href="https://www.facebook.com/arjay.codes/" target="_blank">
      <v-icon id="facebook" name="brands/facebook" />
    </a>
    <a class="brand" href="https://twitter.com/CodesArjay" target="_blank">
      <v-icon id="twitter" name="brands/twitter-square" />
    </a>
    <a class="brand" href="https://www.instagram.com/arjay.codes/" target="_blank">
      <v-icon id="instagram" name="brands/instagram" />
    </a>
    <a class="brand" href="https://github.com/jsrj/" target="_blank">
      <v-icon id="github" name="brands/github-square" />
    </a>
    <a class="brand" href="https://www.linkedin.com/in/arjayjones/" target="_blank">
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
  @iconSize: 20px;
  @primary: rgba(255, 255, 255, 1);
  @secondary: rgba(0, 0, 0, 1);
  @tertiary: rgba(145, 198, 250,1 );
  @noSpacing: 0px !important;
  @lightSpacing: 2px;
  @mediumSpacing: @lightSpacing * 2;
  @heavySpacing: @mediumSpacing * 2;

  /* Sub-component Variables*/

  /*------------------------*/

  /* Styles by Element */
  a {
    display: inline-flex;
    flex-direction: column;
    margin: @mediumSpacing;
  }
  /* Styles by Class   */
  .brand {
    height: @iconSize;
    width: @iconSize;

    padding: @lightSpacing;

    color: @primary;
    background-color: @secondary;
    border-radius: 3px;
  }
  .brand:hover {
    color: @tertiary;
  }

  /* Styles by ID      */
  #social-links {
    height: 100%;
  }
  #facebook {
    align-self: center;
  }
  #twitter {
    align-self: center;
  }
  #instagram {
    align-self: center;
  }
  #github {
    align-self: center;
  }
  #linkedin {
    align-self: center;
  }
</style>


