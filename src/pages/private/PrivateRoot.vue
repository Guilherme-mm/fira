<template>
  <div id="private-root-template">
    <p>Private Root</p>
    <p>Hello {{ authenticatedUser.name }}</p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'PrivateRoot',
  data: function () {
    return {
      authenticatedUser: {}
    }
  },
  created: function () { this.loadAuthenticatedUserData() },
  methods: {
    async loadAuthenticatedUserData () {
      this.authenticatedUser = await this.$auth.getUser()
    }
  }
}
</script>

<style>
</style>
