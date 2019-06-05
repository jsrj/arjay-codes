<template>
  <v-layout>
    <v-btn fab small flat
      id="back-to-top"
      v-on:click.native="scrollToTop"
    >
      <v-icon name="level-up-alt" />
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  name: "TopReturn",
  methods: {
    scrollToTop: () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style lang="less" scoped>
  @primary: rgba(51, 51, 51, 1);
  @highlight: rgba(255, 166, 0, 1);

  #back-to-top::before {
    color: transparent !important;
    background-color: transparent !important;
  }
  #back-to-top {
    margin: 0 auto;
    color: @primary;
  }
  // #back-to-top:hover {
  //   color: @primary;
  //   background-color: @secondary;
  // }
</style>


