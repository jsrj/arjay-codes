<template>
  <div class="last-action">
    <DevIdentifierTag tagName="LastAction" />
    <div class="la-container">
      <div class="la-panel">
        <h3>Title</h3>
        <p>Description</p>
        <ul>
          <li>Feature</li>
          <li>Feature</li>
          <li>Feature</li>
        </ul>
        <button>Call To Action</button>
      </div>
      <div class="la-panel">
        <h3>Title</h3>
        <p>Description</p>
        <ul>
          <li>Feature</li>
          <li>Feature</li>
          <li>Feature</li>
        </ul>
        <button>Call To Action</button>
      </div>  
    </div>  
  </div>  
</template>

<script>
import DevIdentifierTag from '@/components/DevIdentifierTag.vue';

export default {
  name: 'LastAction',
  components: {
    DevIdentifierTag
  },
  props: {},
  data() {}
}
</script>

<style lang="sass" scoped>
.last-action
  border: 2px solid black;

.la-container
  display: flex;
  flex-direction: row;
  justify-content: center;

  .la-panel
    padding: 5px;
</style>