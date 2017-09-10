import Vue from 'vue'
import Resource from 'vue-resource'

import { API_ROOT } from '../config'
import { getCookie } from '../utils/cookie'

Vue.use(Resource)

export default {
  // Authorization
  login (formData) {
    return Vue.http.post(API_ROOT + 'account/login/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  signup (formData) {
    return Vue.http.post(API_ROOT + 'account/signup/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  passwordReset (formData) {
    return Vue.http.post(API_ROOT + 'account/reset/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  tokenVerify (formData) {
    return Vue.http.post(API_ROOT + 'account/verify/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  tokenRefresh (formData) {
    return Vue.http.post(API_ROOT + 'account/refresh/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  // Load User Data
  getSelf () {
    return Vue.http.get(API_ROOT + 'account/me/', {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getUser (pk) {
    return Vue.http.get(API_ROOT + 'account/' + pk + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getSelfCreatedPost () {
    return Vue.http.get(API_ROOT + 'account/me/created_posts/', {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getUserCreatedPost (pk) {
    return Vue.http.get(API_ROOT + 'account/' + pk + '/created_posts/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getSelfMarkedPost () {
    return Vue.http.get(API_ROOT + 'account/me/marked_posts/', {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getUserMarkedPost (pk) {
    return Vue.http.get(API_ROOT + 'account/' + pk + '/marked_posts/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  // Change User
  updateSelf(formData) {
    return Vue.http.put(API_ROOT + 'account/me/', formData, {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  // Change Team

}
