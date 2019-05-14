<template>
  <div id="content">
    <p>{{contentText}}</p>
  </div>
</template>

<script>
export default {
  name: "Content",
  components: {},
  props: {
    populateWith: String
  },
  methods: {
    getCatIpsum() {
      return "";
    }
  },
  mounted() {
    console.log(this.populateWith);
    this.contentText = this.populateWith && this.populateWith || this.getCatIpsum();
  },
  data() {
    return {
      contentText: null
    }
  }
}
</script>

<style lang="less" scoped>
  /* Page-global Variables  */
  /* Sub-component Variables*/
  /*------------------------*/
  /* Styles by Element */
  /* Styles by Class   */
  /* Styles by ID      */
</style>


