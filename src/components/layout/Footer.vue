<template>
  <div id="footer">
    <DevIdentifierTag tagName="footer" />
    <div id="footer-content">
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
  props: {},
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
    flex-direction: row;
    margin-left: 0.35rem;

    small
      border: 2px solid red;
</style>


