<template>
  <v-content id="view-wrapper">
    <router-view id="view" :title="title" />
  </v-content>
</template>

<script>
export default {
  name: 'ViewWrapper',
  props: {
    title: String
    // offsetLeft: Number
  },
  computed: {
    style() {
      // return 'margin-left: '+this.offsetLeft+'px !important';
    }
  }
}
</script>

<style scoped>
</style>


