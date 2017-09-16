import userApi from '../../api/user-api'
import * as cookie from '../../utils/cookie'
import * as types from '../mutation-types'
import router from '../../router/index'
/* global $:true */

// initial state
const state = {
  // self
  self: {},
  self_marked_posts: [],
  self_created_posts: [],
  self_expert_application: {},

  // loaded user
  user: {},
  user_marked_posts: [],
  user_created_posts: [],

  login_status: false,
  token: null,

  white_list_email: ''

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
  self_name: state => {
    if (state.login_status && state.self.info) {
      if (state.self.info.first_name && state.self.info.last_name) {
        return state.self.info.first_name + ' ' + state.self.info.last_name
      }
      else {
        return state.self.email
      }
    }
  },
  self_expert_application: state => { return state.self_expert_application },

  user: state => {
    return state.user
  },
  user_marked_posts: state => {
    return state.user_marked_posts
  },
  user_created_posts: state => {
    return state.user_created_posts
  },
  user_name: state => {
    if (state.user.info) {
      if (state.user.info.first_name && state.user.info.last_name) {
        return state.user.info.first_name + ' ' + state.user.info.last_name
      }
      else {
        return state.user.email
      }
    }
  },

  white_list_email: state => {
    return state.white_list_email
  },
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
  updateSelf ({commit}, formData) {
    return userApi.updateSelf(formData)
      .then(() => {
        commit(types.UPDATE_SELF)
        return Promise.resolve()
      })
      .catch((error) => {
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
        $('#signup-modal').modal('hide')
        commit(types.REGISTER_SUCCESS, response)
        dispatch('getSelf')
      })
      .catch((error) => {
        console.log(error)
        // commit(types.REGISTER_FAILED, error)
        return Promise.reject(error)
      })
  },
  login ({commit, dispatch}, formData) {
    return userApi.login(formData)
      .then((response) => {
        $('#login-modal').modal('hide')
        commit(types.LOGIN_SUCCESS, response)
        dispatch('getSelf')
      })
      .catch((error) => {
        commit(types.LOGIN_FAILED, error)
        return Promise.reject(error)
      })
  },
  logout ({commit}) {
    console.log('logout')
    commit(types.LOGOUT)
  },
  confirmEmail ({dispatch}, token) {
    return userApi.confirmEmail(token)
      .then(() => {
        dispatch('getSelf')
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  resendConfirmEmail () {
    return userApi.resendConfirmEmail()
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  resendTeamInviteEmail () {},

  forgetPasswordSendEmail ({commit}, email) {
    return userApi.forgetPasswordSendEmail(email)
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  forgetPasswordVerifyToken ({commit}, token) {
    return userApi.forgetPasswordVerifyToken(token)
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  forgetPasswordChangePassword ({commit}, formData) {
    return userApi.forgetPasswordChangePassword(formData)
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  whiteListEmail ({commit}, email) {
    commit(types.WHITE_LIST_EMAIL, email)
    $('#signup-modal').modal('show')
  },
  cleanWhiteListEmail ({commit}) {
    commit(types.CLEAN_WHITE_LIST_EMAIL)
  },

  invitedGetUser ({commit}, token) {
    return userApi.invitedGetUser(token)
      .then((response) => {
        commit(types.LOAD_USER, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  invitedSignup ({dispatch, commit}, formData) {
    return userApi.invitedSignup(formData)
      .then((response) => {
        commit(types.REGISTER_SUCCESS, response)
        dispatch('getSelf')
        return Promise.resolve()
      })
      .catch((error) => {
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
  tokenRefresh ({commit, dispatch}, formData) {
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

  getMyExpertApplication ({commit}, formData) {
    return userApi.getMyExpertApplication(formData)
      .then((response) => {
        commit(types.GET_SELF_EXPERT_APPLICATION, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  updateMyExpertApplication ({commit}, formData) {
    return userApi.updateMyExpertApplication(formData)
      .then((response) => {
        commit(types.UPDATE_SELF_EXPERT_APPLICATION, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  postMyExpertApplication ({commit}, formData) {
    return userApi.postMyExpertApplication(formData)
      .then(() => {
        commit(types.POST_SELF_EXPERT_APPLICATION, formData.detail)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  }
}

// mutations
const mutations = {
  // auth
  [types.LOGIN_SUCCESS] (state, response) {
    cookie.setCookie('token', response.token)
    state.token = response.token
    state.login_status = true
    router.push({name: 'landing'})
  },
  [types.LOGOUT] (state) {
    cookie.delCookie('token')
    state.login_status = false
    state.token = null
    state.self = {}
    router.push({name: 'landing'})
  },
  [types.REGISTER_SUCCESS] (state, response) {
    cookie.setCookie('token', response.token)
    state.token = response.token
    state.login_status = true
    router.push({name: 'landing'})
  },
  [types.LOGIN_FAILED] (state, error) {
    state.login_status = false
    state.token = null
    state.error_msg = error
  },
  [types.REGISTER_FAILED] (state, error) {
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

  [types.WHITE_LIST_EMAIL] (state, email) {
    state.white_list_email = email
  },
  [types.CLEAN_WHITE_LIST_EMAIL] (state) {
    state.white_list_email = ''
  },

  // post change
  [types.UPDATE_SELF] (state) {},

  [types.GET_SELF_EXPERT_APPLICATION] (state, response) {
    state.self_expert_application = response
  },
  [types.UPDATE_SELF_EXPERT_APPLICATION] (state, response) {
    state.self_expert_application = response
  },
  [types.POST_SELF_EXPERT_APPLICATION] (state, formData) {
    state.self_expert_application = formData
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
