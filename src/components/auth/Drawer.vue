<template>
  <v-navigation-drawer 
    id="app-drawer" 
    v-model="inputValue" 
    app dark floating persistent
    mobile-break-point="991" width="260"
  >
    <v-layout class="fill-height" tag="v-list" column>
        <v-list-tile avatar>
          <v-list-tile-avatar color="white">
            <v-img rounded :src="profileIcon" height="34" contain />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">[User Name]</v-list-tile-title>
        </v-list-tile>

        <v-divider/>

        <v-list-tile v-if="responsive">[Responsive Mode]</v-list-tile>

        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          active-class="orange"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="link.text" />
        </v-list-tile>
      </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  components: {},
  props: {
    profileIcon: String
  },
  methods: {},
  mounted() {return {}},
  data: () => ({
    links: [
      {
        to: '/dashboard',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      },
      {
        to: '/user-profile',
        icon: 'mdi-account',
        text: 'User Profile'
      },
      {
        to: '/table-list',
        icon: 'mdi-clipboard-outline',
        text: 'Table List'
      },
      {
        to: '/typography',
        icon: 'mdi-format-font',
        text: 'Typography'
      },
      {
        to: '/icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons'
      },
      {
        to: '/maps',
        icon: 'mdi-map-marker',
        text: 'Maps'
      },
      {
        to: '/notifications',
        icon: 'mdi-bell',
        text: 'Notifications'
      }
    ],
    responsive: false
  })
}
</script>

<style lang="sass" scoped>
</style>

