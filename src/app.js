import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import VueIntercom from 'vue-intercom'
import VeeValidate from 'vee-validate'

import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'

import RootLayout from './views/layouts/RootLayout.vue'

Vue.use(VueIntercom, { appId: 'rvgar4pm' })
Vue.use(Router)
Vue.use(VueHead)

const config = {
  errorBagName: 'errors',
  fieldsBagName: 'fields',
  locale: 'en',
  dictionary: null,
  strict: true,
  delay: 500,
  classes: true,
  classNames: {
    valid: 'form-control-success', // model is valid
    invalid: 'form-control-danger', // model is invalid
  },
  events: 'input|blur',
  inject: true,
  validity: true,
  aria: true
}

Vue.use(VeeValidate, config)

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
    this.$store.dispatch('tokenRefresh')
  },
  router,
  store,
  components: {RootLayout}
})
