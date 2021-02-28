<template>
  <div id="app">
    <router-link
      id="home-button"
      to="/"
      tag="button"
    >
      Home
    </router-link>

    <button
      v-if="authState.isAuthenticated"
      id="logout-button"
      @click="logout"
    >
      Logout
    </button>

    <button
      v-else
      id="login-button"
      @click="login"
    >
      Login
    </button>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    async login () {
      await this.$auth.signInWithRedirect()
    },
    async logout () {
      await this.$auth.signOut()
    }
  }
}
</script>

<style>
</style>
