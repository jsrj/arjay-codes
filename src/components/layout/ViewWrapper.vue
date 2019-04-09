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
  },
  computed: {
    style() {}
  }
}
</script>

<style scoped>
</style>
