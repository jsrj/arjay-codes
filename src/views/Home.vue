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
import Action from '../components/Action.vue';
import Header from '../components/Header.vue';

export default {
  name: "home",
  components: {
    HelloWorld,
    Action,
    Header
  }
};
</script>
