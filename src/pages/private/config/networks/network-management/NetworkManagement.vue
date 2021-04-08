<template>
  <div id="network-management-template">
    <button
      type="button"
      @click="addNetwork()"
    >
      New Network
    </button>

    <network-list :networks="networks" />
  </div>
</template>

<script>
import NetworkManagementInterface from './NetworkManagementInterface'
import NetworkList from '../../../../../components/network-list/NetworkList.vue'
import Network from '../../../../../model/network/Network'
import NetworkCollection from '../../../../../model/network/NetworkCollection'

export default {
  name: 'NetworkManagement',
  components: {
    NetworkList
  },
  data: function () {
    return {
      networks: new NetworkCollection()
    }
  },
  created: function () {
    this.fetchNetworks()
  },
  methods: {
    fetchNetworks: function () {
      const testNetwork = new Network(1, 'Base Network')
      this.networks.push(testNetwork)
    }
  }
}
</script>

<style scoped>
</style>
