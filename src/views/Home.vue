<template>
  <div id="home">
    <Meta 
      :title="title" 
      :subTitle="subTitle" 
      :description="description" 
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Meta from '../components/helpers/Meta.vue';

export default {
  name: "Home",
  components: {
    Meta
  },
  props: {
    title: String
  },
  data() {
    return {
      subTitle: 'Home',
      description: 'Home of Arjay | Codes',
      contents: [
        {
          head: 'Selling Points',
          block: 'List selling points of Arjay Codes here'
        },
        {
          head: 'Marketplace Highlights',
          block: 'Showcase certain aspects of the Arjay Codes marketplace'
        },
        {
          head: 'Flat Rate Services',
          block: 'Detail the different types of services that are provided at a flat rate.'
        }
      ],
      lastActionPanels: [
        {
          title: 'Hire Arjay|Codes',
          description: 'Description summarizing why you should hire Arjay|Codes',
          features: ['feature one', 'feature two', 'feature red', 'feature blue'],
          actionCall: 'Hire Me'
        },
        {
          title: 'Join Arjay|Codes',
          description: 'Description summarizing why developers/designers/artists should partner with Arjay|Codes.',
          features: ['feature one', 'feature two', 'feature red', 'feature blue'],
          actionCall: 'Join Me'
        }
      ]
    }
  }
};
</script>

<style lang="less">
  #home {
    width: 100vw;
    height: 100vh;
    // background-color: #366ed8;
  }
</style>
