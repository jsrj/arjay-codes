<template>
  <div id="about-skills">
    <h1>SKILLS</h1>
    <!-- TODO: Build a Google charts graph to display wakatime metrics -->
    <!-- TODO: Make chart container clickable to navigate to wakatime profile -->
  </div>
</template>

<script>
import About from "@/views/About.vue";

export default {
  extends: About,
  name: "About-Skills",
  components: {},
  props: {},
  methods: {
    wakatime_getCodingActivity: async () => {},
    wakatime_getLanguages: async () => {},
    wakatime_getEditors: async () => {},
    wakatime_getOperatingSystems: async () => {}
  },
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
  #about-skills {
    margin-bottom: 12px;
  }
</style>


