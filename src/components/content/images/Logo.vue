<template>
  <div id="logo">
    <v-btn fab large left absolute bottom :loading="loading" class="outer-border" to="/">
      <div id="inner-wrapper">
        <div id="hemi-top">
          <span>Arjay</span>
        </div>
        <div id="hemi-bot">
          <span>Codes</span>
        </div>
      </div>
    </v-btn>
  </div>
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

<style lang="less" scoped>
  @primary: rgba(33, 33, 33, 1) !important;
  @secondary: rgba(255, 166, 0, 1) !important;
  @tertiary: rgba(145, 198, 250,1 ) !important;

  .outer-border {
    overflow: hidden;
    padding: 0px;
    margin: 0px;
    border: 3px solid @primary;

    #inner-wrapper {
      height: 100%;
    }

    #hemi-top {
      display: flex;
      flex-direction: column-reverse;

      width: auto;
      height: 50%;

      background-color: @secondary;
      color: white;
    }

    #hemi-bot {
      display: flex;
      flex-direction: column;
      background-color: @primary;
      color: @secondary;
      width: auto;
      height: 50%;
      span {
        margin: 0rem 1rem;
      }
    }
  }
</style>
