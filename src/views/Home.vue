<template>
  <div id="home">
    <Meta 
      :title="title" 
      :subTitle="subTitle" 
    />
    <h1>Independent Web Developer</h1>
    <Content />
    <v-btn class="cta">I Need A Website</v-btn>
    <v-btn class="cta">I Need A Contributor</v-btn>

  </div>
</template>

<script>
// @ is an alias to /src
import Meta from '../components/helpers/Meta.vue';
import Content from '@/components/content/Content.vue';

export default {
  name: "Home",
  components: {
    Meta,
    Content
  },
  props: {
    title: String
  },
  data() {
    return {
      subTitle: 'Home'
    }
  }
};
</script>

<style lang="less">
  h1 {
    font-size: 80px !important;
  }
  #home {
    width: 100vw;
    height: 100vh;
  }
  .cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    background-color: rgba(232, 60 , 56 , 1);
    color: rgba(245, 245, 245, 1);
  }
</style>
