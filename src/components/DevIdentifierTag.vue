<template>
  <p class="tag">{{tagName}}-{{index || 0}}</p>
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
  margin-top: 0px !important;
</style>