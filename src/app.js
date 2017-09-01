import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

import router from './router'
import store from './store'

import RootLayout from 'views/layouts/RootLayout'
import * as cookie from './utils/cookie'

Vue.use(Router)
Vue.use(Resource)

sync(store, router)

// set csrf token for django
Vue.http.headers.common['X-CSRFToken'] = cookie.getCookie('csrftoken')

export const app = new Vue({
  el: '#app',
  data: {},
  beforeCreate() {
    const formData = { token: cookie.getCookie('token') }
    this.$store.dispatch('tokenVerify', formData)
    /* global Array:true Object:true */
  },
  router,
  store,
  components: { RootLayout }
})
