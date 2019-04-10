<template>
  <v-btn fab large absolute bottom :loading="loading" class="outer-border" to="/">
    <div v-if="!profileImageURL" id="inner-wrapper">
      <div id="hemi-top">
        <span>Arjay</span>
      </div>
      <div id="hemi-bot">
        <span>Codes</span>
      </div>
    </div>
    <div v-else id="image-wrapper">
      <img :src="profileImageURL">
    </div>
  </v-btn>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    loading: Boolean,
    profileImageURL: String
  },
  data() {
    return {}
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

  #image-wrapper
    border-radius: 100%;
    box-shadow: 0px 0px 2px 7px white;
    display: flex;
    justify-content: center;
    img
      border-radius: 100%;
      box-shadow: 0px 0px 0px 6px black;
      width: 100%;


  #hemi-top
    display: flex;
    flex-direction: column-reverse;
    background-color: #ffffff;
    color: black;
    width: auto;
    height: 50%;

  #hemi-bot
    display: flex;
    flex-direction: column-reverse;
    background-color: #212121;
    color: white;
    width: 100%;
    height: 50%;
    span
      margin: 1rem;
</style>
