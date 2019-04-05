<template>
  <div class="action">
    <DevIdentifierTag tagName="Action" />
    <button>I Need A Website</button>
    &nbsp;
    <button>I Need A Developer</button>
  </div>
</template>

<script>
import DevIdentifierTag from '@/components/DevIdentifierTag.vue';

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

