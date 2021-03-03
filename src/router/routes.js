// External dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'
import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue, { LoginCallback } from '@okta/okta-vue'

// Pages
import PublicHome from '@/pages/public-home/PublicHome.vue'
import PrivateRoot from '@/pages/private/PrivateRoot.vue'
import UserDashboard from '@/pages/private/user-dashboard/UserDashboard.vue'

Vue.use(VueRouter)

// Configuring the okta auth plugin
const oktaAuth = new OktaAuth({
  issuer: 'https://dev-51911371.okta.com',
  clientId: '0oa7bb14lbyxSqWIQ5d6',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
})

Vue.use(OktaVue, { oktaAuth })

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PublicHome
    },
    {
      path: '/login/callback',
      component: LoginCallback
    },
    {
      path: '/private',
      name: 'Private Environment',
      component: PrivateRoot,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'dashboard',
          name: 'User Dashboard',
          component: UserDashboard,
          meta: {
            requiresAuth: true
          }
        }
      ]
    }
  ]
})
