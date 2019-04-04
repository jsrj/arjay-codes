<template>
  <div class="home">
    <Header />
    <Action />
    <BaseContent v-for="content, index in contents" :head="content.head" :block="content.block" :index="index" />
    <LastAction />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/layout/Header.vue';
import Action from '../components/layout/Action.vue';
import BaseContent from '../components/content/BaseContent.vue';
import LastAction from '@/components/layout/LastAction.vue';

export default {
  name: "Home",
  components: {
    Header,
    Action,
    BaseContent,
    LastAction
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

<style lang="sass" scoped>
</style>
