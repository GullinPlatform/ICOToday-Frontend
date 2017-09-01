// vue
import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import user from './modules/user'
import question from './modules/question'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [PersistedState()],
  // state,
  // actions
  modules: {
    user,
    question
  }
})
export default store
