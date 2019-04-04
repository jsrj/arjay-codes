<template>
  <div class="base-content">
    <p>BaseContent</p>
    <h1>{{ head }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "BaseContent",
  props: {
    head: String
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
