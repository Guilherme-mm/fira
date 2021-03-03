<template>
  <div id="private-root-template">
    <private-navbar />
    <router-view />
  </div>
</template>

<script>
import PrivateNavbar from '../../components/PrivateNavbar.vue'
export default {
  name: 'PrivateRoot',
  components: {
    PrivateNavbar
  },
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

<style scoped>
</style>
