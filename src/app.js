import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'

import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'

import RootLayout from './views/layouts/RootLayout.vue'

Vue.use(Router)
Vue.use(VueHead)

sync(store, router)

// Move page to top after every url change
router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next()
})

export const app = new Vue({
  el: '#app',
  data: {},
  beforeCreate () {
    this.$store.dispatch('tokenVerify')
  },
  router,
  store,
  components: {RootLayout}
})
