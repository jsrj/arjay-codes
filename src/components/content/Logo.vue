<template>
  <v-btn fab large absolute bottom :loading="loading" class="outer-border" to="/">
    <div id="inner-wrapper">
      <div id="hemi-top">
        <span>Arjay</span>
      </div>
      <div id="hemi-bot">
        <span>Codes</span>
      </div>
    </div>
  </v-btn>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    loading: Boolean
  },
  data() {
    return { showLoadingAnim: this.loading }
  }
}
</script>

<style lang="sass" scoped>
.outer-border
  border: 6px solid orange;
  box-shadow: 0px 0px 2px 2px black;
  overflow: hidden;
  padding: 0px;

  #inner-wrapper
    height: 100%;

  #hemi-top
    background-color: white;
    color: black;
    width: 100%;
    height: 50%;
    span
      margin-top: 50%;

  #hemi-bot
    background-color: black important;
    color: white;
    width: 100%;
    height: 50%;
    span
      margin: 20px;
</style>
