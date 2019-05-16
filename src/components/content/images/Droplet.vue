<template>
  <div v-if="large" class="droplet large"></div>

  <!-- Default droplet -->
  <div v-else class="droplet"></div>
</template>

<script>
export default {
  name: "Droplet",
  props: {
    'large': Boolean,
    'primary': Boolean,
    'secondary': Boolean,
    'transparent': Boolean,
    'top-margin': Number,
    'bottom-margin': Number
  }
}
</script>

<style lang="less" scoped>
  @spacingScale: 2px;
  @spacingMultiplier: 2;

  .droplet {
    width: @spacingScale;
    height: @spacingScale;

    padding: @spacingScale / @spacingMultiplier;
    margin: @spacingScale * @spacingMultiplier;
    background-color: black;
    border: @spacingScale solid black;
    border-radius: 100%;


    .large {
      padding: 4px !important;
    }
  }
</style>

