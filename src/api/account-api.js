import axios from 'axios'

import { API_ROOT } from '../config'

const apiCall = (method, url, form_data, params) => {
  return axios({
    method: method,
    url: url,
    data: form_data ? form_data : {},
    params: params ? params : {},
    baseURL: API_ROOT + '/ac/',
    withCredentials: true,
  })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error.response.data))
}

export default {
  // Login Signup and Stay Login
  login (form_data) {
    return apiCall('post', 'login/', form_data)
  },
  logout () {
    return apiCall('post', 'logout/')
  },
  signup (form_data) {
    return apiCall('post', 'signup/', form_data)
  },
  tokenRefresh () {
    return apiCall('post', 'refresh_login_status/')
  },

  // Account Detail
  getSelf () {
    return apiCall('get', 'me/')
  },
  updateSelf (form_data) {
    return apiCall('put', 'me/', form_data)
  },
  getUser (pk) {
    return apiCall('get', pk + '/')
  },

  // Verification email
  invitedSignup (form_data) {
    return apiCall('post', 'invited_signup/' + form_data.token + '/', form_data)
  },
  invitedGetUser (token) {
    return apiCall('get', 'invited_signup/' + token + '/')
  },
  invitedResendEmail (token) {
    return apiCall('post', 'invited_resend/' + token + '/')
  },
  confirmEmail (token) {
    return apiCall('get', 'email_verify/' + token + '/')
  },
  resendConfirmEmail () {
    return apiCall('post', 'email_verify/')
  },

  // Change Password
  changePassword () {
    return apiCall('get', 'change_pass/')
  },
  forgetPasswordSendEmail (email) {
    return apiCall('post', 'forget/', {'email': email})
  },
  forgetPasswordVerifyToken (token) {
    return apiCall('get', 'forget/' + token + '/')
  },
  forgetPasswordResetPassword (form_data) {
    return apiCall('put', 'forget/' + form_data.token + '/', form_data)
  },

  // 2 Factor Authentication
  sendTwoFactorEmail () {
    return apiCall('post', '2factor/')
  },
  verifyTwoFactorToken (token) {
    return apiCall('get', '2factor/', token)
  },

  // Load User Data
  getSelfMarkedPost () {
    return apiCall('get', 'me/marked_projects/')
  },
  getUserMarkedPost (pk) {
    return apiCall('get', pk + '/marked_projects/')
  },

  // Search User
  searchUser (search_token) {
    return apiCall('get', 'search/', {}, search_token)
  },

  // Add Interests to user
  addInterests (form_data) {
    return apiCall('post', 'me/interests/', form_data)
  },

  // Expert Application
  getMyExpertApplication () {
    return apiCall('get', 'expert_apply/')
  },
  postMyExpertApplication (form_data) {
    return apiCall('post', 'expert_apply/', form_data)
  },
  updateMyExpertApplication (form_data) {
    return apiCall('put', 'expert_apply/', form_data)
  },
}
