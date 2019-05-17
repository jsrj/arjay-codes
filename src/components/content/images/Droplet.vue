<template>
  <div 
    :class="this.dropletClasses" 
    :style="{
      marginTop: `${topMarginValue}px`,
      marginBottom: `${bottomMarginValue}px`
    }"
  />
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
  },
  mounted() {
    this.dropletClasses = (`
      ${this.$props.large ? 'large' : ''} ${
          this.$props.primary ? 'primary' 
          :
          this.$props.secondary ? 'secondary'
          :
          this.$props.transparent ? 'transparent'
          : ''
    } droplet`);
  },
  data() {
    return {
      dropletClasses: null,
      topMarginValue: this.$props.marginTop || 4,
      bottomMarginValue: this.$props.marginBottom || 4
    }
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
    border: @spacingScale * @spacingMultiplier solid black;
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

