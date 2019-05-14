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
    wakatime_getCodingActivity: async () => {
      let URL =  'https://wakatime.com/share/@arjay_jones/ae241bca-8e25-4e99-87cd-4d2791748b4a.json';
    },
    wakatime_getLanguages: async () => {
      let URL = 'https://wakatime.com/share/@arjay_jones/303efa31-5b2c-4f7b-9e0f-04af8dc8b782.json';
    },
    wakatime_getEditors: async () => {
      let URL = 'https://wakatime.com/share/@arjay_jones/2ba5f8c7-fe98-43a3-8917-fe201020d32b.json';
    },
    wakatime_getOperatingSystems: async () => {
      let URL = 'https://wakatime.com/share/@arjay_jones/d784ff4e-9bb5-41ed-8e0d-3972d0965872.json';
    }
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


