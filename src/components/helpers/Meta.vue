<template>
  <div id="meta">
    <!-- Title -->
    <vue-headful v-if="subTitle != 'Home'" :title="title+' - '+subTitle" />
    <vue-headful v-else :title="title" />
  </div>  
</template>

<script>
export default {
  name: 'Meta',
  components: {},
  props: {
    title: String,
    subTitle: String,
    description: String,
    keywords: String,
    image: String,
    lang: String,
    ogLocale: String,
    url: String
  }
}
</script>

<style lang="sass" scoped>
#meta
  display: none !important;
</style>

