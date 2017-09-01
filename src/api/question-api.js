import Vue from 'vue'
import Resource from 'vue-resource'

import { API_ROOT } from '../config.js'
import { getCookie } from '../utils/cookie'

Vue.use(Resource)

export default {
  postQuestion(formData) {
    return Vue.http.post(API_ROOT + 'question/', formData, { headers: { Authorization: 'TOKEN ' + getCookie('token') } })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getQuestion(id) {
    return Vue.http.get(API_ROOT + 'question/' + id + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  listQuestions() {
    return Vue.http.get(API_ROOT + 'question/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  applyQuestion(id) {
    return Vue.http.post(API_ROOT + 'question/' + id + '/apply/', {}, { headers: { Authorization: 'TOKEN ' + getCookie('token') } })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  markQuestion(id) {
    return Vue.http.post(API_ROOT + 'question/' + id + '/mark/', {}, { headers: { Authorization: 'TOKEN ' + getCookie('token') } })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  appliedQuestions() {
    return Vue.http.post(API_ROOT + 'question/applied/', {}, { headers: { Authorization: 'TOKEN ' + getCookie('token') } })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  markedQuestions() {
    return Vue.http.post(API_ROOT + 'question/marked/', {}, { headers: { Authorization: 'TOKEN ' + getCookie('token') } })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  createdQuestions() {
    return Vue.http.post(API_ROOT + 'question/created/', {}, { headers: { Authorization: 'TOKEN ' + getCookie('token') } })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

}
