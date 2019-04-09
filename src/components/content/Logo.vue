<template>
  <v-btn fab large :loading="contentLoading" class="outer-border">
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
    return { contentLoading: this.loading || false}
  }
}
</script>

<style lang="sass" scoped>
.outer-border
  border: 6px solid orange;
  box-shadow: 0px 0px 2px 2px black;
  margin-top: 12.4vh;
  overflow: hidden;
  padding: 0px;

  #inner-wrapper
    margin: 0px;
    padding: 0px;

  #hemi-top
    background-color: white;
    border-radius: 100em 100em 0 0;
    color: black;
    margin: 0px;
    width: 100%;
    height: 50%;

  #hemi-bot
    background-color: black important;
    color: white;
    width: 100%;
    height: 50%;
</style>
