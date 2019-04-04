<template>
  <div class="home">
    <Header />
    <Action />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Action from '../components/layout/Action.vue';
import Header from '../components/layout/Header.vue';

export default {
  name: "home",
  components: {
    HelloWorld,
    Action,
    Header
  }
};
</script>
