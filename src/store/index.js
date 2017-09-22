import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import account from './modules/account'
import company from './modules/company'
import feed from './modules/feed'
import message from './modules/message'
import notification from './modules/notification'
import project from './modules/project'
import utils from './modules/utils'
import wallet from './modules/wallet'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [PersistedState()],
  // state,
  // actions
  modules: {
    account,
    company,
    feed,
    message,
    notification,
    project,
    utils,
    wallet,
  }
})
export default store
