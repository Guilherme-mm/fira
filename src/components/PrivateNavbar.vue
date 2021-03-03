<template>
  <div id="private-navbar-template">
    <span>
      Navegation bar of the private env
    </span>
    <button
      v-if="authState.isAuthenticated"
      id="logout-button"
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: 'PrivateNavbar',
  methods: {
    async logout () {
      await this.$auth.signOut()
    }
  }
}
</script>

<style scoped>

</style>
