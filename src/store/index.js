// vue
import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import user from './modules/user'
import post from './modules/post'
import discussion from './modules/discussion'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [PersistedState()],
  // state,
  // actions
  modules: {
    user,
    post,
    discussion
  }
})
export default store
