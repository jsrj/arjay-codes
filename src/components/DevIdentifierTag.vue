<template>
  <div class="tag">{{tagName}}-{{index || 0}}</div>
</template>

<script>
export default {
  name: "DevIdentifierTag",
  props: {
    tagName: String,
    index: Number
  }
}
</script>

<style lang="sass" scoped>
.tag
  background-color: black;
  color: white;
  display: block !important;
  height: min-content !important;
  width: 100%;
  margin-top: 0px !important;
</style>