<template>
  <div class="about">
    <div id="column-container">
      <div id="headshot">
        <img src="@/components/content/images/static/headshot.jpg">
      </div>
      <SocialLinks />
      <hr />
      <!-- Portfolio sub-links -->
    </div>
  </div>
</template>

<script>
import SocialLinks from '@/components/layout/navigation/SocialLinks.vue';

export default {
  name: "about",
  components: {
    SocialLinks
  },
  props: {},
  methods: {},
  mounted() {},
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
  /* Page-global Variables */
  @primary: rgba(51, 51, 51, 1);
  @secondary: rgba(255, 166, 0, 1);
  @centered: 0 auto;
  @spaceCentered: 6px auto;
  @backgroundImage: url('');

  /* Headshot Image        */
  @innerPadding: 0px;
  @outerPadding: 0px;
  @headshotWidth: 12em;
  @innerBorderWidth: 3px;
  @outerBorderWidth: 6px;
  @innerContentWidth: 60%;

  /*-----------------------*/

  /* Styles by Element */
  /* Styles by Class   */
  /* Styles by ID      */
  #column-container {
    margin: @centered;
    width: @innerContentWidth;
  }

  #headshot {
    display: flex;
    height: 100%;
    width: @headshotWidth;

    margin: @centered;
    padding: @outerPadding;

    overflow: hidden;
    border-radius: 100%;
    border: @outerBorderWidth solid @secondary;
  }
  #headshot > img {
    padding: @innerPadding;

    border-radius: 100%;
    border: @innerBorderWidth solid @primary;
  }

  #horizontal-break {
    height: 1px;
    margin: @spaceCentered;
    border: 1px solid black;
  }
</style>


