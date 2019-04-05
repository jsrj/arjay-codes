<template>
  <div>
    <br />
    <div id="image-frame">
      <img src="https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif">
    </div>
    <h1>Sorry, An unknown error has occurred. :(</h1>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
#image-frame
  border: 12px solid black;
  border-radius: 100%;
  display: flex;
  margin: 0 auto;
  width: min-content;

  img
    border: 6px solid black;
    border-radius: 100%;
    box-shadow: 0px 0px 0px 6px #fc5a74;
    height: 100%;
    width: 20rem;
    margin: 0;
    padding: 2px;
</style>

