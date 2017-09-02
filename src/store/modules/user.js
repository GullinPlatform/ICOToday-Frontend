import userApi from '../../api/user-api'
import * as cookie from '../../utils/cookie'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  // self
  self: {},
  self_marked_posts: [],
  self_created_posts: [],
  // loaded user
  user: {},
  user_marked_posts: [],
  user_created_posts: [],

  login_status: false,
  token: null,
  upload_file: null,

}

// getters
const getters = {
  login_status: state => state.login_status,

  self: state => {
    if (state.login_status && state.self)
      return state.self
    else return {}
  },
  self_marked_posts: state => {
    if (state.login_status && state.self) {
      return state.self_marked_posts
    } else {
      return []
    }
  },
  self_created_posts: state => {
    if (state.login_status && state.self) {
      return state.self_created_posts
    } else {
      return []
    }
  },

  user: state => {
    return state.user
  },
  user_marked_posts: state => {
    return state.user_marked_posts
  },
  user_created_posts: state => {
    return state.user_created_posts
  },

  self_name: state => {
    if (state.login_status && state.self) {
      if (state.self.info.first_name && state.self.info.last_name) {
        return state.self.info.first_name + ' ' + state.self.info.last_name
      }
      else {
        return state.self.email
      }
    }
  },

  loadedUser: state => {
    return state.user
  }
}

// actions
const actions = {
  getSelf ({commit}) {
    return userApi.getSelf()
      .then((response) => {
        commit(types.LOAD_SELF, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        commit(types.LOG_ERROR, error)
        return Promise.reject(error)
      })
  },
  getSelfMarkedPost ({commit}) {
    return userApi.getSelfMarkedPost()
      .then((response) => {
        commit(types.LOAD_SELF_MARKED_POST, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        commit(types.LOG_ERROR, error)
        return Promise.reject(error)
      })
  },
  getSelfCreatedPost ({commit}) {
    return userApi.getSelfCreatedPost()
      .then((response) => {
        commit(types.LOAD_SELF_CREATED_POST, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        commit(types.LOG_ERROR, error)
        return Promise.reject(error)
      })
  },

  getUser ({commit}, pk) {
    return userApi.getUser(pk)
      .then((response) => {
        commit(types.LOAD_USER, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        commit(types.LOG_ERROR, error)
        return Promise.reject(error)
      })
  },
  getUserMarkedPost ({commit}, pk) {
    return userApi.getUserMarkedPost(pk)
      .then((response) => {
        commit(types.LOAD_USER_MARKED_POST, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        commit(types.LOG_ERROR, error)
        return Promise.reject(error)
      })
  },
  getUserCreatedPost ({commit}, pk) {
    return userApi.getUserCreatedPost(pk)
      .then((response) => {
        commit(types.LOAD_USER_CREATED_POST, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        commit(types.LOG_ERROR, error)
        return Promise.reject(error)
      })
  },

  signup ({commit, dispatch}, formData) {
    return userApi.signup(formData)
      .then((response) => {
        /* global $ */
        $('#signup-modal').modal('hide')
        commit(types.REGSITER_SUCCESS, response)
        dispatch('getSelf')
      })
      .catch((error) => {
        console.log(error)
        // commit(types.REGSITER_FAILED, error)
        return Promise.reject(error)
      })
  },
  login ({commit, dispatch}, formData) {
    return userApi.login(formData)
      .then((response) => {
        /* global $ */
        $('#login-modal').modal('hide')
        commit(types.LOGIN_SUCCESS, response)
        dispatch('getSelf')
      })
      .catch((error) => {
        commit(types.LOGIN_FAILED, error)
        return Promise.reject(error)
      })
  },

  tokenVerify ({rootState, commit, dispatch}, formData) {
    userApi.tokenVerify(formData)
      .then((response) => {
        commit(types.VERIFY_SUCCESS, response)
        dispatch('getSelf')
      })
      .catch((error) => {
        if (rootState.route.name !== 'register') {
          dispatch('tokenRefresh', formData)
        }
        commit(types.LOG_ERROR, error)
      })
  },
  tokenRefresh ({rootState, commit, dispatch}, formData) {
    userApi.tokenRefresh(formData)
      .then((response) => {
        commit(types.REFRESH_SUCCESS, response)
        dispatch('getSelf')
      })
      .catch((error) => {
        commit(types.LOGIN_FAILED)
        commit(types.LOG_ERROR, error)
      })
  },

  logout ({commit}) {
    console.log('logout')
    commit(types.LOGOUT)
  },

  updateSelf ({commit}, formData) {
    userApi.updateSelf(formData)
      .then(() => {
        commit(types.UPDATE_SELF)
      })
      .catch((error) => {
        commit(types.LOG_ERROR, error)
      })
  },
  verifySelf ({commit}, formData) {
    userApi.verifySelf(formData)
      .then(() => {
        commit(types.VERIFY_SELF)
      })
      .catch((error) => {
        commit(types.LOG_ERROR, error)
      })
  },
}

// mutations
const mutations = {
  // auth
  [types.LOGIN_SUCCESS] (state, response) {
    cookie.setCookie('token', response.token)
    state.token = response.token
    state.login_status = true
  },
  [types.LOGOUT] (state) {
    cookie.delCookie('token')
    state.login_status = false
    state.token = null
    state.self = {}
  },
  [types.REGSITER_SUCCESS] (state, response) {
    cookie.setCookie('token', response.token)
    state.token = response.token
    state.login_status = true
  },
  [types.LOGIN_FAILED] (state, error) {
    state.login_status = false
    state.token = null
    state.error_msg = error
  },
  [types.REGSITER_FAILED] (state, error) {
    state.login_status = false
    state.token = null
    state.error_msg = error
  },
  [types.LOG_ERROR] (state, error) {
    state.error_msg = error
    // TODO, need to handle errors
  },

  [types.VERIFY_SUCCESS] (state, response) {
    state.token = response.token
    // state.login_status = true
  },
  [types.REFRESH_SUCCESS] (state, response) {
    cookie.setCookie('token', response.token)
    state.token = response.token
    // state.login_status = true
  },

  // load data
  [types.LOAD_SELF] (state, response) {
    state.self = response
  },
  [types.LOAD_USER] (state, response) {
    state.user = response
  },

  [types.LOAD_SELF_CREATED_POST] (state, response) {
    state.self_created_posts = response
  },
  [types.LOAD_USER_CREATED_POST] (state, response) {
    state.user_created_posts = response
  },

  [types.LOAD_SELF_MARKED_POST] (state, response) {
    state.self_marked_posts = response
  },
  [types.LOAD_USER_MARKED_POST] (state, response) {
    state.user_marked_posts = response
  },

  // post change
  [types.VERIFY_SELF] (state) {
    state.self.is_verified = 1
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}
