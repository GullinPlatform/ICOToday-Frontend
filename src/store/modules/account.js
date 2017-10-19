import userApi from '../../api/account-api.js'
import projectApi from '../../api/project-api.js'
import * as types from '../mutation-types'
import router from '../../router/index'
/* global $:true */

// initial state
const state = {
  // self
  self: {},
  self_marked_posts: [],
  self_analyst_application: {},
  self_rated_projects: [],
  self_followings: [],
  self_followers: [],

  // loaded user
  user: {},
  user_info: {},
  user_marked_posts: [],
  user_rated_projects: [],
  user_followings: [],
  user_followers: [],

  // other
  login_status: false,
  resend_email_until: '',
  analysts: []
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
  self_analyst_application: state => {
    return state.self_analyst_application
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
    if (state.login_status && state.self)
      return state.self.info.company
    else return ''
  },
  self_admin: state => {
    if (state.login_status && state.self)
      return state.self.info.company_admin
    else return ''
  },
  self_rated_projects: state => {
    return state.self_rated_projects
  },

  self_followings: state => {
    return state.self_followings
  },
  self_followers: state => {
    return state.self_followers
  },

  user: state => {
    return state.user
  },
  user_info: state => {
    return state.user_info
  },
  user_marked_posts: state => {
    return state.user_marked_posts
  },
  user_name: state => {
    if (state.user.info) {
      if (state.user.info.first_name || state.user.info.last_name) {
        return state.user.info.first_name + ' ' + state.user.info.last_name
      }
      else {
        return state.user.email
      }
    }
  },
  user_rated_projects: state => {
    return state.user_rated_projects
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
        commit(types.LOAD_SELF_MARKED_PROJECT, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  getSelfRatedProject ({commit, state}) {
    return projectApi.listUserRatedProjects(state.self.info.id)
      .then((response) => {
        commit(types.LOAD_SELF_RATED_PROJECTS, response)
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

  getUser ({commit}, id) {
    return userApi.getUser(id)
      .then((response) => {
        commit(types.LOAD_USER, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  getUserInfo ({commit}, id) {
    return userApi.getUserInfo(id)
      .then((response) => {
        commit(types.LOAD_USER_INFO, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  getUserMarkedProject ({commit}, id) {
    return userApi.getUserMarkedProject(id)
      .then((response) => {
        commit(types.LOAD_USER_MARKED_PROJECT, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  getUserRatedProject ({commit}, id) {
    return projectApi.listUserRatedProjects(id)
      .then((response) => {
        commit(types.LOAD_USER_RATED_PROJECTS, response)
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
        dispatch('toastr', {type: 'info', title: 'New Notification', message: 'Welcome to ICOToday. As one of our early users, we have deposited 5 ICOCoins to your wallet.'})
        dispatch('getSelf').then(() => {
          commit(types.REGISTER_SUCCESS)
        })
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  followUser ({commit}, id) {
    return userApi.followUser(id)
      .then((response) => {
        commit(types.FOLLOW_USER, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  getSelfFollowers ({commit}) {
    return userApi.getSelfFollowers()
      .then((response) => {
        commit(types.LOAD_SELF_FOLLOWERS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  getSelfFollowings ({commit}) {
    return userApi.getSelfFollowings()
      .then((response) => {
        commit(types.LOAD_SELF_FOLLOWINGS, response)
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
        return Promise.reject(error)
      })
  },

  addInterests ({}, form_data) {
    return userApi.addInterests(form_data)
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  getMyAnalystApplication ({commit}, form_data) {
    return userApi.getMyAnalystApplication(form_data)
      .then((response) => {
        commit(types.GET_SELF_ANALYST_APPLICATION, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  updateMyAnalystApplication ({commit}, form_data) {
    return userApi.updateMyAnalystApplication(form_data)
      .then((response) => {
        commit(types.UPDATE_SELF_ANALYST_APPLICATION, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  postMyAnalystApplication ({commit}, form_data) {
    return userApi.postMyAnalystApplication(form_data)
      .then(() => {
        commit(types.POST_SELF_ANALYST_APPLICATION, form_data.detail)
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
    router.push({name: 'me'})
  },
  [types.LOGOUT] (state) {
    state.login_status = false
    state.self = {}
    router.push({name: 'landing'})
  },
  [types.REGISTER_SUCCESS] (state) {
    state.login_status = true
    router.push({name: 'register_followup'})
  },

  [types.REGISTER_FAILED] (state) {
    state.login_status = false
  },

  [types.REFRESH_SUCCESS] (state, response) {
    state.login_status = true
  },

  // load data
  [types.LOAD_SELF] (state, response) {
    state.self = response
    if (state.self.info.type === -1) {
      router.push({name: 'register_followup'})
    }
  },
  [types.UPDATE_SELF] () {},
  [types.LOAD_USER] (state, response) {
    state.user = response
  },
  [types.LOAD_USER_INFO] (state, response) {
    state.user_info = response
  },

  [types.LOAD_SELF_MARKED_PROJECT] (state, response) {
    state.self_marked_posts = response
  },
  [types.LOAD_USER_MARKED_PROJECT] (state, response) {
    state.user_marked_posts = response
  },

  [types.WHITE_LIST_EMAIL] (state, email) {
    state.white_list_email = email
  },
  [types.CLEAN_WHITE_LIST_EMAIL] (state) {
    state.white_list_email = ''
  },

  [types.GET_SELF_ANALYST_APPLICATION] (state, response) {
    state.self_analyst_application = response
  },
  [types.UPDATE_SELF_ANALYST_APPLICATION] (state, response) {
    state.self_analyst_application = response
  },
  [types.POST_SELF_ANALYST_APPLICATION] (state, form_data) {
    state.self_analyst_application = form_data
  },

  [types.LOAD_SELF_RATED_PROJECTS] (state, response) {
    state.self_rated_projects = response
  },

  [types.LOAD_USER_RATED_PROJECTS] (state, response) {
    state.user_rated_projects = response
  },
  // resend email
  [types.SET_RESEND_EMAIL_TIME_LIMIT] (state) {
    state.resend_email_until = moment().add(1, 'minutes')
  },

  // follow
  [types.FOLLOW_USER] (state, response) {
    state.self_followings.unshift(response)
  },

  [types.LOAD_SELF_FOLLOWINGS] (state, response) {
    state.self_followings = response
  },
  [types.LOAD_SELF_FOLLOWERS] (state, response) {
    state.self_followers = response
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
