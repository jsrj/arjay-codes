<template>
  <v-content>
    <v-container grid-list-sm mx-5 my-3 px-5>

      {{ /* TOP SECTION - START */  }}
      <v-layout column wrap>
        <v-flex text-lg-left class="display-1 font-weight-bold">Know What You Need?</v-flex>
        <v-flex text-md-left class="blockquote">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live theblind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large languageocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia.
        </v-flex>
      </v-layout>
      {{ /* TOP SECTION - END */  }}

      <v-divider></v-divider>
      
      {{ /* BOTTOM SECTION - START */  }}
      <v-layout row wrap ma-1 pa-2>
        <v-flex ma-2>
          <v-img alt="image" src="http://lorempixel.com/g/200/200/business/" />
        </v-flex>

        <v-flex>
          <v-layout column pa-2>
            <v-flex text-lg-left>Sub-Title</v-flex>
            <v-flex text-md-left>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <v-list>
            <v-list-tile><v-btn append to="#">I Need A Website</v-btn></v-list-tile>
            <v-list-tile><v-btn append to="#">I Need A Developer</v-btn></v-list-tile>
            <v-list-tile><em>Or read on...</em></v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
      {{ /* BOTTOM SECTION - END */  }}

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

