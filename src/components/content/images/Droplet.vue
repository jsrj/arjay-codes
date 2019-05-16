<template>
    <!-- Large w/ Applied colors -->
    <div v-if="large && primary" class="droplet large primary"></div>
    <div v-else-if="large && secondary" class="droplet large secondary"></div>
    <div v-else-if="large && transparent" class="droplet large transparent"></div>

    <!-- Large w/out applied colors -->
    <div v-else-if="large" class="droplet large"></div>

    <div v-else-if="primary && !secondary" class="droplet primary"></div>
    <div v-else-if="secondary && !primary" class="droplet secondary"></div>

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
  @primary: rgba(255, 166, 0, 1) !important;
  @secondary: rgba(145, 198, 250,1 ) !important;

  .droplet {
    width: @spacingScale;
    height: @spacingScale;

    padding: @spacingScale / @spacingMultiplier;
    margin: @spacingScale * @spacingMultiplier;
    background-color: black;
    border: @spacingScale solid black;
    border-radius: 100%;
  }

  .large {
    padding: @spacingScale * @spacingMultiplier;
  }
  .primary {
    border-color: black !important;
    background-color: @primary !important;
  }
  .secondary {
    border-color: black !important;
    background-color: @secondary !important;
  }
  .transparent {
    border-color: black !important;
    background-color: transparent !important;
  }
</style>

