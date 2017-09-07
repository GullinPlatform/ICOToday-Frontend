import Vue from 'vue'
import Resource from 'vue-resource'

import { API_ROOT } from '../config.js'
import { getCookie } from '../utils/cookie'

Vue.use(Resource)

export default {
  getComments (pk) {
    return Vue.http.get(API_ROOT + 'discussion/' + pk + '/', {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  postComment (formData) {
    return Vue.http.post(API_ROOT + 'discussion/' + formData.pk + '/', formData, {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  replyComment (formData) {
    return Vue.http.post(API_ROOT + 'discussion/' + formData.pk + '/reply/', formData, {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  editComment (formData) {
    return Vue.http.patch(API_ROOT + 'discussion/' + formData.pk + '/edit/', formData, {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  deleteComment (pk) {
    return Vue.http.delete(API_ROOT + 'discussion/' + pk + '/edit/', {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
}
