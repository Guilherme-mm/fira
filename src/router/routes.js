// External dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Internal Dependencies
import auth from '@/modules/auth'

// Pages
import PublicHome from '@/pages/public-home/PublicHome.vue'
import Login from '@/pages/login/Login.vue'
import UserRoot from '@/pages/user/UserRoot.vue'

Vue.use(VueRouter)

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PublicHome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/login/callback'
    },
    {
      path: '/user/:id',
      name: 'User Environment',
      component: UserRoot,
      beforeEnter: requireAuth,
      children: [

      ]
    }
  ]
})
