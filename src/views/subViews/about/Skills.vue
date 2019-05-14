<template>
  <div id="about-skills">
    <h1>SKILLS</h1>
    <!-- TODO: Build a Google charts graph to display wakatime metrics -->
    <!-- TODO: Make chart container clickable to navigate to wakatime profile -->
    <v-timeline>
      <!-- TODO: Populate skills from CMS service profile data -->
      <v-timeline-item fill-dot
        color="rgba(255, 166, 0, 1)"
        class="skill-item"
        v-for="n in 8"
        :key="n"
      >
        <template v-slot:opposite>
          <!-- Skill/Technology Icon -->
          <div class="skill-icon-wrapper">
            <v-img
              class="skill-logo"
              src="http://arjaycodes.com/assets/img/logos/HTML5.jpg"
              alt="SKILL_NAME"
              :aspect-ratio="1"
            />
          </div>
        </template>
        <div class="py-3">
          <h2>[SKILL_NAME]</h2>
          <div>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
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
      let URL = 'https://wakatime.com/share/@arjay_jones/a3e58169-f85a-4547-8418-14b129a1c0c3.json';
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
    return {
      loadingMetrics: true
    }
  }
}
</script>

<style lang="less" scoped>
  /* Page-global Variables  */
  @primary: rgba(33, 33, 33, 1) !important;
  @secondary: rgba(255, 166, 0, 1) !important;
  /* Sub-component Variables*/
  /*------------------------*/
  /* Styles by Element */
  /* Styles by Class   */
  .skill-icon-wrapper {
    overflow: hidden;

    width: min-content;
    margin: 0 auto;

    background-color: black;
    border-radius: 100%;
  }
  .skill-item {
    margin: 6rem 0px 12px;
  }
  .skill-logo {
    width: 6rem;
    height: 100%;
  }
  /* Styles by ID      */
  #about-skills {
    margin-bottom: 12px;
  }
</style>


