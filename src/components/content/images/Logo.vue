<template>
  <div id="logo">
    <v-btn app fab flat :loading="loading" class="outer-border" to="/">
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
  @neutral: rgba(255, 255, 255, 1) !important;
  @primary: rgba(33, 33, 33, 1) !important;
  @secondary: rgba(255, 166, 0, 1) !important;
  @tertiary: rgba(145, 198, 250,1 ) !important;

  span {
    font-size: 0.8rem;
  }
  .outer-border:hover {
    transform: rotate(0deg);
    transition: transform 0.4s;
  }
  .outer-border {
    overflow: hidden;
    border: 2px solid @neutral;
    box-shadow: 0px 0px 0px 3px @primary;
    transform: rotate(-45deg);

    #inner-wrapper {
      height: 100%;
    }

    #hemi-top {
      display: flex;
      flex-direction: column-reverse;

      width: auto;
      height: 50%;

      background-color: @neutral;
      color: @primary;
    }

    #hemi-bot {
      display: flex;
      flex-direction: column;
      background-color: orangered;
      color: @neutral;
      width: auto;
      height: 50%;
      span {
        margin: 0rem 1rem;
      }
    }
  }
</style>
