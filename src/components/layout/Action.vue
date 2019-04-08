<template>
  <div class="action">
    <DevIdentifierTag tagName="Action" />
    <v-btn>I Need A Website</v-btn>
    &nbsp;
    <v-btn>I Need A Developer</v-btn>
  </div>
</template>

<script>
import DevIdentifierTag from '@/components/helpers/DevIdentifierTag.vue';

export default {
  name: "Action",
  components: {
    DevIdentifierTag
  },
  props: {}
}
</script>

<style lang="sass" scoped>
.action
  border: 2px solid black;
  padding-bottom: 1em;
  padding-top: 0px;
</style>

