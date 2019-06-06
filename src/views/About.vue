<template>
  <v-container class="about">
    <div id="column-container">
      <v-divider />
      <div id="headshot" class="component">
        <img src="@/components/content/images/static/headshot.jpg">
      </div>
    </div>
  </v-container>
</template>

<script>
import Content from "@/components/content/Content.vue";
import SocialLinks from "@/components/layout/navigation/SocialLinks.vue";
import PortfolioLinks from "@/components/layout/navigation/sublinks/PortfolioSublinks.vue";
import TopReturnButton from "@/components/layout/navigation/TopReturn.vue";

export default {
  name: "About",
  components: {
    Content,
    SocialLinks,
    PortfolioLinks,
    TopReturnButton
  },
  props: [ 'heading' ],
  methods: {},
  created() {},
  mounted() {},
  data() {
    return {
      subViewTitle: null
    }
  }
}
</script>

<style lang="less">
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
  h1 {
    padding: 0px;
    margin: 0px;
    margin-bottom: @outerBorderWidth;

    font-size: 22pt;
  }
  /* Styles by Class   */
  .component {
    margin: (@outerBorderWidth*2) 0;
  }
  /* Styles by ID      */
  #column-container {
    margin: @centered;
    // padding: 0px 6vw;
    // width: @innerContentWidth;
  }

  #headshot {
    display: flex;
    height: 100%;
    width: @headshotWidth;
    margin: @centered;
    margin-top: 25px;
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


