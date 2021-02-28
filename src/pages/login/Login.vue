<template>
  <div id="login-template">
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
      You need to login first.
    </p>

    <form
      autocomplete="off"
      @submit.prevent="login"
    >
      <label>
        <input
          v-model="email"
          placeholder="email"
        >
      </label>

      <label>
        <input
          v-model="pass"
          placeholder="password"
          type="password"
        >
      </label>

      <br>

      <button type="submit">
        login
      </button>

      <p
        v-if="error"
        class="error"
      >
        Bad login information
      </p>
    </form>
  </div>
</template>

<script>
import auth from '@/modules/auth'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      pass: '',
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, (error, loggedIn) => {
        if (error) {
          console.error(error)
        }

        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/private/')
        }
      })
    }
  }
}
</script>

<style>
  .error {
    color: red;
  }
</style>
