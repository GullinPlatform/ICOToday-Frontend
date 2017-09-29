import walletApi from '../../api/wallet-api'
import * as types from '../mutation-types'

const state = {
  wallet: {},
}

const getters = {
  wallet: state => {
    return state.wallet
  },
}

const actions = {
  getWallet ({commit}) {
    return walletApi.getWallet()
      .then((response) => {
        commit(types.LOAD_WALLET, response)
        return Promise.resolve(response)
      })
      .catch((error) => {

        return Promise.reject(error)
      })
  },
}

const mutations = {
  [types.LOAD_WALLET] (state, response) {
    state.wallet = response
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
