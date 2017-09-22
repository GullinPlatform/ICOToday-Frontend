import axios from 'axios'

import { API_ROOT } from '../config'

const apiCall = (method, url, form_data, params) => {
  return axios({
    method: method,
    url: url,
    data: form_data ? form_data : {},
    params: params ? params : {},
    baseURL: API_ROOT + '/cp/',
    withCredentials: true,
  })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error.response.data))
}

export default {
  // Authorization
  getTeam (pk) {
    return apiCall('get', pk + '/')
  },
  // Change User
  updateTeam (form_data) {
    return apiCall('put', form_data.pk + '/', form_data)
  },
  // Change Team
  addTeamMember (form_data) {
    return apiCall('patch', form_data.get('pk') + '/', form_data)
  },
  remTeamMember (pk) {
    return apiCall('delete', pk + '/')
  },
}

