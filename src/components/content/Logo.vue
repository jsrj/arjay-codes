<template>
  <v-btn fab large :loading="contentLoading" class="outer-border">
      <div>Arjay</div>
      <div>Codes</div>
  </v-btn>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="sass" scoped>
.outer-border
  border: 6px solid orange;
  box-shadow: 0px 0px 2px 2px black;
  margin-top: 12.4vh;
  overflow: hidden;

  #logo-content-top
    background-color: white !important;
    border-top-left-radius: 100rem;
    border-top-right-radius: 100rem;
    color: black;

  #logo-content-bot
    background-color: black important;
    border-bottom-left-radius: 100rem;
    border-bottom-right-radius: 100rem;
    color: white;
</style>

