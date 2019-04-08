<template>
  <section class="base-content">
    <DevIdentifierTag tagName="BaseContent" :index="index" />
    <h1>{{ head }}</h1>
    <p>{{ block }}</p>
  </section>
</template>

<script>
import DevIdentifierTag from '@/components/helpers/DevIdentifierTag.vue';

export default {
  name: "BaseContent",
  components: {
    DevIdentifierTag
  },
  props: {
    index: Number,
    head: String,
    block: String
  }
}
</script>

<style lang="sass" scoped>
.base-content
  border: 2px solid black;

h3
  margin: 40px 0 0;

ul
  list-style-type: none;
  padding: 0;

li
  display: inline-block;
  margin: 0 10px;

a
  color: #42b983;
</style>
