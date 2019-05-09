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
  @primary: rgba(51, 51, 51, 1);
  @secondary: rgba(255, 166, 0, 1);
  @centered: 0 auto;
  @backgroundImage: url('');

  /* Headshot Image */
  @innerPadding: 0px;
  @outerPadding: 0px;
  @headshotWidth: 12em;
  @innerBorderWidth: 3px;
  @outerBorderWidth: 6px;

  /* Styles by Element */
  /* Styles by Class   */
  /* Styles by ID      */
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
</style>


