<template>
  <div class="navbar">
    <DevIdentifierTag tagName="Navbar" />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import DevIdentifierTag from '@/components/DevIdentifierTag.vue';

export default {
  name: "Navbar",
  components: {
    DevIdentifierTag
  },
  props: {}
}
</script>

<style lang="sass" scoped>
.navbar
  border: 2px solid black;
  
  a
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active
      color: #42b983;
</style>

