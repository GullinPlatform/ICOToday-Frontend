import axios from 'axios'

import { API_ROOT } from '../config'

const apiCall = (method, url, form_data, params) => {
  return axios({
    method: method,
    url: url,
    data: form_data ? form_data : {},
    params: params ? params : {},
    baseURL: API_ROOT + '/fd/',
    withCredentials: true,
  })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error.response.data))
}

export default {
  getComments (pk) {
    return apiCall('get', pk + '/')
  },

  postComment (form_data) {
    return apiCall('post', form_data.pk + '/', form_data)
  },

  replyComment (form_data) {
    return apiCall('post', form_data.pk + '/reply/', form_data)
  },

  editComment (form_data) {
    return apiCall('patch', form_data.pk + '/edit/', form_data)
  },

  deleteComment (pk) {
    return apiCall('delete', pk + '/edit/')
  },
}
