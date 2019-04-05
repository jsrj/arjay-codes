<template>
  <div id="footer">
    <DevIdentifierTag tagName="footer" />
    <div id="footer-content">
      <div id="social-links">
        <a 
          class="social-link" 
          :key="index" 
          v-for="(socialLink, index) in socialLinks"
          :href="socialLink.href"
          target="_blank"
        >{{socialLink.name}}</a>
      </div>
      <small>&copy; {{currentYear}} Arjay Codes, all rights reserved. Powered by〘❤️ && ☕️〙.</small>
    </div>
  </div>
</template>

<script>
import DevIdentifierTag from '@/components/helpers/DevIdentifierTag.vue';

export default {
  name: 'Footer',
  components: {
    DevIdentifierTag
  },
  props: {
    socialLinks: [Object]
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="sass" scoped>
  #footer
    border: 2px solid black;

  #footer-content
    display: flex;
    flex-direction: column;
    align-items: center;
    #social-links
      display: flex;
      flex-direction: row;
      margin: 0;

      .social-link
        border: 2px solid red;
        margin: 0.25em;
    
    small
      border: 2px solid red;
      margin: 0px;
</style>


