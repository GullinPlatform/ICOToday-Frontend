import * as types from '../mutation-types'

const state = {
  white_list_email: '',
  resend_email_until: '',
  is_advisor: false,

  register_follow_up_step: 1
}

const getters = {
  // Landing page white list email
  white_list_email: state => {
    return state.white_list_email
  },

  // Resend email global control
  able_to_resend: state => {
    return !state.resend_email_until ? true : moment().isAfter(state.resend_email_until)
  },

  // Is advisor when add team member
  is_advisor: state => {
    return state.is_advisor
  },
  register_follow_up_step: state => {
    return state.register_follow_up_step
  }
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
  followUpStep ({commit}, step_move) {
    commit(types.FOLLOW_UP_STEP, step_move)
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
  // Resend email global control
  [types.SET_RESEND_EMAIL_TIME_LIMIT] (state) {
    state.resend_email_until = moment().add(1, 'minutes')
  },
  // Is advisor when add team member
  [types.SET_IS_ADVISOR] (state, is_advisor) {
    state.is_advisor = is_advisor
  },
  // Register Follow Up Global Step
  [types.FOLLOW_UP_STEP] (state, step_move) {
    state.register_follow_up_step += step_move
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
