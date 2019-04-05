<template>
  <div class="last-action">
    <DevIdentifierTag tagName="LastAction" />
    <div class="la-container">
      <div class="la-panel" v-bind:key="index" v-for="(panel, index) in panels">
        <h3>{{panel.title}}</h3>
        <p>{{panel.description}}</p>
        <ul>
          <li v-bind:key="index" v-for="(feature, index) in panel.features">{{feature}}</li>
        </ul>
        <button>{{panel.actionCall}}</button>
      </div>
    </div>  
  </div>  
</template>

<script>
import DevIdentifierTag from '@/components/helpers/DevIdentifierTag.vue';

export default {
  name: 'LastAction',
  components: {
    DevIdentifierTag
  },
  props: {
    panels: [Object]
  },
  data() {}
}
</script>

<style lang="sass" scoped>
.last-action
  border: 2px solid black;
  display: flex;
  flex-direction: column;

.la-container
  border: 2px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 8px;

  .la-panel
    border: 2px solid blue;
    margin: 8px;
    padding: 5px;
</style>