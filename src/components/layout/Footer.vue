<template>
  <div id="footer">
    <DevIdentifierTag tagName="footer" />
  </div>
</template>

<script>
import DevIdentifierTag from '@/components/helpers/DevIdentifierTag.vue';

export default {
  name: 'Footer',
  components: {
    DevIdentifierTag
  },
  props: {}
}
</script>

<style lang="sass" scoped>
  #footer
    border: 2px solid black;
</style>


