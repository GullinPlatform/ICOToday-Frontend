import * as types from '../mutation-types'

const state = {
  white_list_email: '',
  is_advisor: false,

  register_follow_up_step: 1,
  new_company_name: '',

  full_analysis_url: '',
}

const getters = {
  // Landing page white list email
  white_list_email: state => {
    return state.white_list_email
  },

  // Is advisor when add team member
  is_advisor: state => {
    return state.is_advisor
  },
  register_follow_up_step: state => {
    return state.register_follow_up_step
  },
  new_company_name: state => {
    return state.new_company_name
  },

  // url for full analysis
  full_analysis_url: state => {
    return state.full_analysis_url
  },
}

const actions = {
  // Landing page white list email
  whiteListEmail ({commit}, email) {
    commit(types.WHITE_LIST_EMAIL, email)
    $('#signup-modal').modal('show')
  },
  cleanWhiteListEmail ({commit}) {
    commit(types.CLEAN_WHITE_LIST_EMAIL)
  },

  // Is advisor when add team member
  setIsAdvisor ({commit}, is_advisor) {
    commit(types.SET_IS_ADVISOR, is_advisor)
  },

  // Register Follow Up Global Step
  setFollowUpStep ({commit}, step_move) {
    commit(types.FOLLOW_UP_STEP, step_move)
  },

  setNewCompanyName ({commit}, new_company_name) {
    commit(types.NEW_COMPANY_NAME, new_company_name)
  },

  // Get url of full analysis
  setFullAnalysis ({commit}, url) {
    commit(types.SET_FULL_ANALYSIS_URL, url)
  },

  // Global toastr trigger
  toastr ({commit}, data) {
    let toastOptions = {
      class: 'iziToast-' + data.type || '',
      title: data.title,
      message: data.message,
      animateInside: false,
      position: 'topRight',
      progressBar: false,
      icon: 'icon-bell',
      timeout: 3200,
      transitionIn: 'fadeInLeft',
      transitionOut: 'fadeOut',
      transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut'
    }
    /* global iziToast:true */
    iziToast.show(toastOptions)
  }
}

const mutations = {

  // Is advisor when add team member
  [types.SET_IS_ADVISOR] (state, is_advisor) {
    state.is_advisor = is_advisor
  },
  // Register Follow Up Global Step
  [types.FOLLOW_UP_STEP] (state, step_move) {
    if (step_move === 0)
      state.register_follow_up_step = 1
    state.register_follow_up_step += step_move
  },

  [types.NEW_COMPANY_NAME] (state, new_company_name) {
    state.new_company_name = new_company_name
  },
  [types.WHITE_LIST_EMAIL] (state, email) {
    state.white_list_email = email
  },
  [types.SET_FULL_ANALYSIS_URL] (state, url) {
    state.full_analysis_url = url
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
