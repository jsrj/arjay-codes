<template>
  <div class="outer-border">
    <div class="logo-content">
      A|C
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="sass" scoped>
.outer-border
  border: 3px solid black;
  border-radius: 100%;
  box-shadow: 0px 0px 0px 3px orange;
  margin: 1rem;

  .logo-content
    align-items: center;
    background-color: white;
    border-radius: 100%;
    color: black;
    display: flex;
    height: 2em;
    justify-content: center;
    padding: 1rem;
    width: 2em;
</style>

