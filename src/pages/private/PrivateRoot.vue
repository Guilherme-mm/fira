<template>
  <div
    id="private-root-template"
    class="wrapper"
  >
    <!-- NAVBAR -->
    <div
      id="navbar-box"
      class="navbar-container"
    >
      <private-navbar />
    </div>

    <!-- SIDEBAR -->
    <div
      id="sidebar-box"
      class="sidebar-container"
    >
      <private-sidebar />
    </div>

    <!-- CONTENT -->
    <div
      id="content-box"
      class="content-container"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import PrivateNavbar from '../../components/PrivateNavbar.vue'
import PrivateSidebar from '../../components/PrivateSidebar.vue'

export default {
  name: 'PrivateRoot',
  components: {
    PrivateNavbar,
    PrivateSidebar
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
  .wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .navbar-container {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 1;
    grid-column-end: 13;
  }

  .sidebar-container {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .content-container {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 3;
    grid-column-end: 13;
  }
</style>
