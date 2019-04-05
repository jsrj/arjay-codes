<template>
  <div class="header">
    <DevIdentifierTag tagName="Header" />
    <img alt="Vue logo" src="../../assets/logo.png" />
  </div>
</template>

<script>
import DevIdentifierTag from '@/components/helpers/DevIdentifierTag.vue';

export default {
  name: "Header",
  components: {
    DevIdentifierTag
  },
  props: {
  }
}
</script>

<style lang="sass" scoped>
.header
  :border: 2px solid black;
</style>
