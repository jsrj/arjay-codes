<template>
  <v-content>
    <v-container grid-list-sm>
      <v-layout column wrap>
        <v-flex text-lg-left class="display-1 font-weight-bold">I Know What I Want</v-flex>
        <v-flex text-md-left class="blockquote">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live theblind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large languageocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia.
        </v-flex>
      </v-layout>

      <div class="row justify-content-center align-items-center pt-5">
        <div class="col-8 col-sm-3">
          <img alt="image" class="img-fluid" src="/imgs/draws/code.svg">
        </div>
        <div class="col-12 col-sm-6 m-auto pt-4 pt-sm-0">
          <h2><strong>Bootstrap</strong></h2>
          <p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
        </div>
        <div class="col-12 col-sm-3 text-center pt-4 pt-sm-0">
          <p><a class="btn btn-outline-primary" href="https://www.froala.com">Take a Tour</a></p>
          <p><a class="btn btn-primary" href="https://www.froala.com">Start Now</a></p>
          <p class="h5"><em>Some foo text</em></p>
        </div>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import DevIdentifierTag from '@/components/helpers/DevIdentifierTag.vue';

export default {
  name: "Action",
  components: {
    DevIdentifierTag
  },
  props: {}
}
</script>

<style lang="sass" scoped>
.action
  border: 2px solid black;
  padding-bottom: 1em;
  padding-top: 0px;
</style>

