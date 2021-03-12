'use strict'
import './main.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'

// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  router,
  components: { App },
  template: '<App/>'
})
