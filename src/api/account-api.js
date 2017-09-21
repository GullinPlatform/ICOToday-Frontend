import axios from 'axios'

import { API_ROOT } from '../config'
import { getCookie } from '../utils/cookie'

const client = axios.create({
  baseURL: API_ROOT + '/ac/',
  withCredentials: true,
  headers: {
    'X-CSRF-TOKEN': getCookie('csrftoken'),
  },
})

export default {
  // Authorization
  login (formData) {
    return client.post('login/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  signup (formData) {
    return client.post('signup/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  passwordReset (formData) {
    return client.post('change_pass/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  tokenVerify (formData) {
    return client.post('check_login_status/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  tokenRefresh (formData) {
    return client.post('check_login_status/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  confirmEmail (token) {
    return client.get('email_verify/' + token + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  resendConfirmEmail () {
    return client.post('email_verify/', {})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  invitedSignup (formData) {
    return client.post('invited_signup/' + formData.token + '/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  invitedGetUser (token) {
    return client.get('invited_signup/' + token + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  invitedResendEmail (token) {
    return client.post('invited_resend/' + token + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  sendTwoFactorEmail () {
    return client.post('2factor/', {})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  verifyTwoFactorToken (token) {
    return client.get('2factor/', token)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  forgetPasswordSendEmail (email) {
    return client.post('forget/', {'email': email})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  forgetPasswordVerifyToken (token) {
    return client.get('forget/' + token + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  forgetPasswordResetPassword (formData) {
    return client.put('forget/' + formData.token + '/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  changePassword () {
    return client.get('change_pass/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  // Load User Data
  getSelf () {
    return client.get('me/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getUser (pk) {
    return client.get('' + pk + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getSelfCreatedPost () {
    return client.get('me/created_posts/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getUserCreatedPost (pk) {
    return client.get('' + pk + '/created_posts/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getSelfMarkedPost () {
    return client.get('me/marked_posts/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getUserMarkedPost (pk) {
    return client.get('' + pk + '/marked_posts/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  updateSelf (formData) {
    return client.put('me/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getMyExpertApplication () {
    return client.get('expert_apply/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  postMyExpertApplication (formData) {
    return client.post('expert_apply/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  updateMyExpertApplication (formData) {
    return client.put('expert_apply/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
}
