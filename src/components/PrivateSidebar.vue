<template>
  <div class="private-sidebar-template">
    <div
      class="wrapper"
    >
      <div class="menu-item">
        <router-link to="/private/dashboard">
          Dashboard
        </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/private/config/networks">
          Config/Networks
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivateSidebar'
}
</script>

<style scoped>
  .wrapper{
     background-color: #c52121e0;
     grid-template-columns: 1fr;
  }
</style>
