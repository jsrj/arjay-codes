<template>
  <div id="about-skills">
    <h1>SKILLS</h1>
    <v-divider></v-divider>
    <br>
    <h3 id="technologies">TECHNOLOGIES</h3>
    <v-timeline>
      <!-- TODO: Populate skills from CMS service profile data -->
      <v-timeline-item fill-dot
        color="rgba(255, 166, 0, 1)"
        class="skill-item"
        v-for="(skill, index) in skills"
        :key="`${skill.name.split(' ').join('-')}-${index}`"
      >
        <template v-slot:opposite>
          <!-- Skill/Technology Icon -->
          <div class="skill-icon-wrapper">
            <v-img
              class="skill-logo"
              :src="skill.logoSrc"
              :alt="skill.name"
              :aspect-ratio="1"
            />
          </div>
        </template>
        <div class="py-3">
          <h2>{{skill.name}}</h2>
          <blockquote
            v-for="(block, index) in skill.descriptionText"
            :key="`${skill.name.split(' ').join('-')}-${index}`"
          >
            <br>
            {{block}}
            <br>
          </blockquote>
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
      skills: [
        {
          name: "HTML 5",
          logoSrc: "http://arjaycodes.com/assets/img/logos/HTML5.jpg",
          descriptionText: [
            "\"Hypertext Markup Language revision 5 (HTML5) is markup language for the structure and presentation of World Wide Web contents.",

            "HTML5 supports the traditional HTML and XHTML-style syntax and other new features in its markup, New APIs, XHTML and error handling.\""
          ]
        },
        {
          name: "CSS 3",
          logoSrc: "http://arjaycodes.com/assets/img/logos/CSS3.jpg",
          descriptionText: [
            "\"CSS (Cascading Style Sheets) consist of a group of formatting rules that you use to control the layout and appearance of the content on a web page.",

            "Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS standard used in the styling and formatting of Web pages. CSS3 incorporates the CSS2 standard with some changes and improvements.\""
          ]
        },
        {
          name: "Javascript (ES7)",
          logoSrc: "http://arjaycodes.com/assets/img/logos/javascript.jpg",
          descriptionText: [
            "\"...",

            "...\""
          ]
        },
        {
          name: "And many more!",
          logoSrc: "https://media.giphy.com/media/qKltgF7Aw515K/giphy.gif",
          descriptionText: [
          ]
        }
      ],
      education: []
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

    width: min-content;
    margin: 0 auto;

    background-color: black;
    border: 6px solid orange;
    border-radius: 100%;
  }
  .skill-item {
    margin: 6rem 0px 12px;
  }
  .skill-logo {
    width: 8rem;
    height: 100%;

    border: 3px solid black;
    border-radius: 100%;

    // filter: grayscale(100%);
    transition: filter 0.5s;
  }
  .skill-logo:hover {
    filter: none;
    transition: filter 0.5s;
  }
  /* Styles by ID      */
  #about-skills {
    margin-bottom: 12px;
  }
</style>


