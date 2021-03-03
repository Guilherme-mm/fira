<template>
  <div id="public-home-template">
    <p>Fira Home</p>
    <router-link
      v-if="authState.isAuthenticated"
      id="access-button"
      to="/private/dashboard"
    >
      Access
    </router-link>

    <button
      v-else
      id="login-button"
      @click="login"
    >
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: 'PublicHome',
  methods: {
    async login () {
      await this.$auth.signInWithRedirect()
    }
  }
}
</script>

<style scoped>
</style>
