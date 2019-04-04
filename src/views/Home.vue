<template>
  <div class="home">
    <Header />
    <Action />
    <BaseContent v-for="content, index in contents" :head="content.head" :block="content.block" :index="index" />
  </div>
</template>

<script>
// @ is an alias to /src
import Action from '../components/layout/Action.vue';
import Header from '../components/layout/Header.vue';
import BaseContent from '../components/content/BaseContent.vue';

export default {
  name: "Home",
  components: {
    Action,
    Header,
    BaseContent
  },
  props: {},
  data() {
    return {
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
      ]
    }
  }
};
</script>
