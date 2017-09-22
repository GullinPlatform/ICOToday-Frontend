import * as types from '../mutation-types'

const state = {
  white_list_email: '',
  resend_email_until: ''

}

const getters = {
  white_list_email: state => {
    return state.white_list_email
  },
  able_to_resend: state => {
    if (!state.resend_email_until)
      return true
    else if (moment().isAfter(state.resend_email_until))
      return true
    else
      return false

  }
}

const actions = {
  whiteListEmail ({commit}, email) {
    commit(types.WHITE_LIST_EMAIL, email)
    $('#signup-modal').modal('show')
  },
  cleanWhiteListEmail ({commit}) {
    commit(types.CLEAN_WHITE_LIST_EMAIL)
  },

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
