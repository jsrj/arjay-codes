<template>
  <div class="home">
    <Header />
    <Action />
    <BaseContent head="Welcome to Your Vue.js App"/>
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
  }
};
</script>
