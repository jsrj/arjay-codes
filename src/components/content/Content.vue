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
    getBaconIpsum: async () => {
      try {
        let baconIpsum = await axios.get('https://baconipsum.com/api/?type=meat-and-filler?paras=1');
        return baconIpsum.data[0];
      } catch (e) {
        console.error(e);
      }
    }
  },
  beforeMount() {
    if (!this.populateWith) {
      this.getBaconIpsum().then(content => {
        this.contentText = content;
      });
    } else {
      this.contentText = this.populateWith;
    }
  },
  mounted() {},
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


