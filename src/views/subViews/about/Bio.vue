<template :extends="About">
  <div id="about-bio">
    <Content />
    <Content />
  </div>
</template>

<script>
import About from "@/views/About.vue";
import Content from "@/components/content/Content.vue";

export default {
  extends: About,
  name: "About-Bio",
  components: {},
  props: {},
  methods: {
    // TODO: Add method to fetch content data blocks from CMS service
  },
  created() {},
  mounted() {},
  data() {
    return {}
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


