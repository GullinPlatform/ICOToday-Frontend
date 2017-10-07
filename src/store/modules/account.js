import userApi from '../../api/account-api.js'
import * as types from '../mutation-types'
import router from '../../router/index'
/* global $:true */

// initial state
const state = {
  // self
  self: {},
  self_marked_posts: [],
  self_expert_application: {},

  // loaded user
  user: {},
  user_marked_posts: [],

  // other
  login_status: false,
  resend_email_until: '',
}

// getters
const getters = {
  login_status: state => state.login_status,
  is_verified: state => {
    if (!state.self || !state.self.info)
      return false
    else return state.self.info.is_verified
  },

  self: state => {
    if (state.login_status && state.self)
      return state.self
    else return {}
  },
  self_expert_application: state => {
    return state.self_expert_application
  },
  self_type: state => {
    if (state.login_status && state.self) {
      return state.self.info.type
    } else {
      return -2
    }
  },
  self_name: state => {
    if (state.login_status && state.self.info) {
      if (state.self.info.first_name || state.self.info.last_name) {
        return state.self.info.first_name + ' ' + state.self.info.last_name
      }
      else {
        return state.self.email
      }
    }
  },
  self_marked_posts: state => {
    if (state.login_status && state.self) {
      return state.self_marked_posts
    } else {
      return []
    }
  },
  self_company: state => {
    if (state.login_status && state.self && state.self.info.type === 0)
      return state.self.info.company
    else return ''
  },
  self_admin: state => {
    if (state.login_status && state.self && state.self.info.type === 0)
      return state.self.info.company_admin
    else return ''
  },

  user: state => {
    return state.user
  },
  user_marked_posts: state => {
    return state.user_marked_posts
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

  // resend email
  able_to_resend: state => {
    return !state.resend_email_until ? true : moment().isAfter(state.resend_email_until)
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
        return Promise.reject(error)
      })
  },
  getSelfMarkedProject ({commit}) {
    return userApi.getSelfMarkedProject()
      .then((response) => {
        commit(types.LOAD_SELF_MARKED_POST, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  updateSelf ({commit}, form_data) {
    return userApi.updateSelf(form_data)
      .then(() => {
        commit(types.UPDATE_SELF)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  setSelfType ({commit, dispatch}, form_data) {
    return userApi.setSelfType(form_data)
      .then(() => {
        dispatch('getSelf')
        commit(types.SET_SELF_TYPE)
        return Promise.resolve()
      })
      .catch((error) => {
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
        return Promise.reject(error)
      })
  },
  getUserMarkedProject ({commit}, pk) {
    return userApi.getUserMarkedProject(pk)
      .then((response) => {
        commit(types.LOAD_USER_MARKED_POST, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  signup ({commit, dispatch}, form_data) {
    return userApi.signup(form_data)
      .then(() => {
        dispatch('getSelf').then(() => {
          $('#signup-modal').modal('hide')
          commit(types.REGISTER_SUCCESS)
        })
        return Promise.resolve()
      })
      .catch((error) => {
        commit(types.LOGOUT)
        return Promise.reject(error)
      })
  },
  login ({commit, dispatch}, form_data) {
    return userApi.login(form_data)
      .then(() => {
        dispatch('getSelf').then(() => {
          $('#login-modal').modal('hide')
          commit(types.LOGIN_SUCCESS)
        })
        return Promise.resolve()
      })
      .catch(() => {
        commit(types.LOGOUT)
        return Promise.reject()
      })
  },
  logout ({commit}) {
    userApi.logout()
      .then(() => {
        commit(types.LOGOUT)
      })
  },
  tokenRefresh ({commit, dispatch}) {
    userApi.tokenRefresh()
      .then((response) => {
        commit(types.REFRESH_SUCCESS, response)
        dispatch('getSelf')
      })
      .catch(() => {
        commit(types.LOGOUT)

      })
  },
  logIP ({commit}, form_data) {
    userApi.logIP(form_data)
      .then((response) => {
        commit(types.LOG_IP)
        return Promise.resolve(response)
      })
      .catch((error) => {

        return Promise.reject(error)
      })
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
  resendConfirmEmail ({commit}) {
    commit(types.SET_RESEND_EMAIL_TIME_LIMIT)
    return userApi.resendConfirmEmail()
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  invitedResendEmail ({commit}, token) {
    commit(types.SET_RESEND_EMAIL_TIME_LIMIT)
    return userApi.invitedResendEmail(token)
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  changePassword ({}, form_data) {
    return userApi.changePassword(form_data)
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  forgetPasswordSendEmail ({}, email) {
    return userApi.forgetPasswordSendEmail(email)
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  forgetPasswordVerifyToken ({}, token) {
    return userApi.forgetPasswordVerifyToken(token)
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  forgetPasswordResetPassword ({}, form_data) {
    return userApi.forgetPasswordResetPassword(form_data)
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  sendTwoFactorEmail ({}) {
    return userApi.sendTwoFactorEmail()
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  verifyTwoFactorToken ({}, token) {
    return userApi.verifyTwoFactorToken(token)
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
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
  invitedSignup ({dispatch, commit}, form_data) {
    return userApi.invitedSignup(form_data)
      .then(() => {
        dispatch('getSelf').then(() => {
          commit(types.REGISTER_SUCCESS)
        })
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  searchUser ({}, search_token) {
    return userApi.searchUser(search_token)
      .then((response) => {
        return Promise.resolve(response)
      })
      .catch((error) => {

      })
  },

  addInterests ({}, form_data) {
    return userApi.addInterests(form_data)
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {

      })
  },

  getMyExpertApplication ({commit}, form_data) {
    return userApi.getMyExpertApplication(form_data)
      .then((response) => {
        commit(types.GET_SELF_EXPERT_APPLICATION, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  updateMyExpertApplication ({commit}, form_data) {
    return userApi.updateMyExpertApplication(form_data)
      .then((response) => {
        commit(types.UPDATE_SELF_EXPERT_APPLICATION, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  postMyExpertApplication ({commit}, form_data) {
    return userApi.postMyExpertApplication(form_data)
      .then(() => {
        commit(types.POST_SELF_EXPERT_APPLICATION, form_data.detail)
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
  [types.LOGIN_SUCCESS] (state) {
    state.login_status = true
  },
  [types.LOGOUT] (state) {
    state.login_status = false
    state.self = {}
    router.push({name: 'landing'})
  },
  [types.REGISTER_SUCCESS] (state) {
    state.login_status = true
  },

  [types.REGISTER_FAILED] (state) {
    state.login_status = false
  },

  [types.REFRESH_SUCCESS] (state, response) {
    state.login_status = true
  },
  [types.LOG_IP] (state) {},

  // load data
  [types.LOAD_SELF] (state, response) {
    state.self = response
    if (state.self.info.type === -1) {
      router.push({name: 'register_followup'})
    }
  },
  [types.LOAD_USER] (state, response) {
    state.user = response
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

  [types.UPDATE_SELF] (state) {},

  [types.GET_SELF_EXPERT_APPLICATION] (state, response) {
    state.self_expert_application = response
  },
  [types.UPDATE_SELF_EXPERT_APPLICATION] (state, response) {
    state.self_expert_application = response
  },
  [types.POST_SELF_EXPERT_APPLICATION] (state, form_data) {
    state.self_expert_application = form_data
  },

  // resend email
  [types.SET_RESEND_EMAIL_TIME_LIMIT] (state) {
    state.resend_email_until = moment().add(1, 'minutes')
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
