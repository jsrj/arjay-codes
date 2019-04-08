<template>
  <div class="container">
      <div class="col-md-2">
        <img :src="profile.picture" alt="User's profile picture" class="rounded-circle img-fluid profile-picture">
      </div>
      <div class="col-md">
        <h2>{{ profile.name }}</h2>
        <p>{{ profile.email }}</p>
      </div>
    <br />
    <div class="row">
      <h1>Auth0 Profile</h1>
      <pre v-highlightjs class="rounded"><code class="json">{{ JSON.stringify(profile, null, 2) }}</code></pre>
    </div>
    <br />
    <!-- <div class="row">
      <h1>User Management Service Info</h1>
      <pre v-if="info" v-highlightjs class="rounded"><code class="json">{{ JSON.stringify(info, null, 2) }}</code></pre>
      <p v-else>Loading User Management Service Info...</p>
    </div>
    <br />
    <div class="row">
      <h1>Patched User Profile</h1>
      <pre v-if="patchedProfile" v-highlightjs class="rounded"><code class="json">{{ JSON.stringify(patchedProfile, null, 2) }}</code></pre>
      <p v-else>Loading Updated Profile...</p>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "user",
  components: {},
  mounted () {
    
    // TODO: Implement JWT security in these calls
    // Get user profile from ac-user-management-svc
    // axios
    //   .get(`https://ac-user-management-dev-v0.herokuapp.com/users?username=${this.$auth.profile.name}`)
    //   .then(response => {
        
    //     const svc = response.data
    //     this.info = svc
    //     const updatedUser = {};

    //     // Diff user profile data against that provided by Auth0
    //     if (this.$auth.profile.given_name && (svc.firstname === 'not-set' || svc.firstname === 'anonymous')) {
    //       updatedUser['firstname'] = this.$auth.profile.given_name;
    //     }
    //     if (this.$auth.profile.family_name && (response.data.lastname === 'not-set' || svc.lastname === 'anonymous')) {
    //       updatedUser['lastname'] = this.$auth.profile.family_name;
    //     }
    //     if (this.$auth.profile.nickname && svc.displayname === 'not-set') {
    //       updatedUser['displayname'] = this.$auth.profile.nickname;
    //     }

    //     // Auto-update user profile data with Auth0 wherever anything has not been set
    //     axios
    //       .patch("https://ac-user-management-dev-v0.herokuapp.com/users?username=newtestguy", updatedUser)
    //       .then(patched => (this.patchedProfile = patched.data))
    //       .catch(err => console.log(err))
    //   })
    //   .catch(err => console.log(err))
  },
  data() {
    /** -- Trimmed User Profile Schema --
      @param {String}  given_name     - Same as firstName
      @param {String}  family_name    - Same as lastName
      @param {String}  nickname       - Usable as display name,
      @param {String}  name           - Concatenation of firstName and lastName
      @param {String}  picture        - URL to profile picture image; Use as default unless user specifies one
      @param {String}  updated_at     - Timestamp of last user update from Auth0
      @param {Boolean} email_verified - Indicates that user has verified email via confirmation mail
      @param {String}  iss            - Issuer URL
      @param {String}  sub            - Subscriber ID
      @param {Number}  iat            - Long timestamp of token issued-at
      @param {Number}  exp            - Long timestamp of token expiration
    */
    return {
      profile: this.$auth.profile,
      info: this.info,
      patchedProfile: this.patchedProfile
    };
  },
  methods: {
    handleLoginEvent(data) {
      this.profile = data.profile;
    }
  }
};
</script>

<style lang="sass" scoped>
#profile-container
  width: 25vw;
  margin: 0 auto;
  margin-top: 10vh;

  #profile-info
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  </style>

