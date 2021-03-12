<template>
  <div id="private-navbar-template">
    <div
      class="wrapper"
    >
      <!-- LOGO AREA -->
      <!-- NAVIGATION AREA -->

      <!-- BUTTONS AREA -->
      <div class="buttons-container">
        <!-- LOGOUT BUTTON-->
        <button
          v-if="authState.isAuthenticated"
          id="logout-button"
          @click="logout"
        >
          <font-awesome-icon icon="power-off" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPowerOff)

export default {
  name: 'PrivateNavbar',
  components: {
    FontAwesomeIcon
  },
  methods: {
    async logout () {
      await this.$auth.signOut()
    }
  }
}
</script>

<style scoped>
  .wrapper{
    background-color: #961d1dec;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }

  .buttons-container{
    grid-column-start: 9;
    grid-column-end: 11;
    display: flex;
    flex-direction: row-reverse;
  }
</style>
