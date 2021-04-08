<template>
  <div id="network-list-template">
    <div
      v-for="network in networks"
      :key="network.id"
    >
      {{ network.name }}
    </div>
  </div>
</template>

<script>
import NetworkListInterface from './NetworkListInterface'
import NetworkCollection from '../../model/network/NetworkCollection'

export default {
  name: 'NetworkList',
  components: {},
  props: {
    networks: {
      type: NetworkCollection,
      required: true,
      default: function () { return new NetworkCollection() }
    }
  },
  data: function () {
    return {}
  },
  created: function () {},
  methods: {}
}
</script>

<style scoped>
</style>
