import Vue from 'vue'
import Resource from 'vue-resource'

import { API_ROOT } from '../config'
import { getCookie } from '../utils/cookie'

Vue.use(Resource)

export default {
  // Authorization
  getTeam (pk) {
    return Vue.http.get(API_ROOT + 'account/team/' + pk + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  // Change User
  updateTeam (formData) {
    return Vue.http.put(API_ROOT + 'account/team/' + formData.pk + '/', formData, {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  // Change Team
  addTeamMember (formData) {
    return Vue.http.patch(API_ROOT + 'account/team/' + formData.pk + '/', formData, {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

}

