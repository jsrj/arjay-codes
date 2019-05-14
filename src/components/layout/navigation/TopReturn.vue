<template>
<v-container>
      <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn fab small flat
          id="back-to-top"
          :fixed="true"
          :right="true"
          :bottom="true"
          v-on="on"
          v-on:click.native="scrollToTop"
        >
          <v-icon name="chevron-up" />
        </v-btn>
      </template>
      <span>Back To Top</span>
    </v-tooltip>
</v-container>
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
  @secondary: rgba(255, 166, 0, 1);

  #back-to-top::before {
    color: transparent !important;
    background-color: transparent !important;
  }
  #back-to-top {
    color: @secondary;
    background-color: @primary;
  }
  #back-to-top:hover {
    color: @primary;
    background-color: @secondary;
  }
</style>


