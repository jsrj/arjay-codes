<template>
  <div class="about">
    <div id="headshot">
      <img src="@/components/content/images/static/headshot.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {};
  }
}
</script>

<style lang="less" scoped>
/* Page-global Variables */
  @primary: rgba(0, 0, 0, 1);
  @secondary: rgba(255, 166, 0, 1);
  @centered: 0 auto;

  /* Headshot Image */
  @innerPadding: 0px;
  @headshotWidth: 12em;
  @innerBorderWidth: 2px;
  @outerBorderWidth: 8px;

  /* Styles by Element */
  /* Styles by Class   */
  /* Styles by ID      */
  #headshot {
    display: flex;
    height: 100%;
    margin: @centered;
    width: @headshotWidth;

    overflow: hidden;
    border-radius: 100%;
    border: @outerBorderWidth solid @secondary;
  }
  #headshot > img {
    border-radius: 100%;
    border: @innerBorderWidth solid @primary;

    padding: @innerPadding;
  }
</style>


