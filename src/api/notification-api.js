import axios from 'axios'

import { API_ROOT } from '../config'

const apiCall = (method, url, form_data, params) => {
  return axios({
    method: method,
    url: url,
    data: form_data ? form_data : {},
    params: params ? params : {},
    baseURL: API_ROOT + '/nt/',
    withCredentials: true,
  })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => {
      if (error)
        return Promise.reject(error)
      else
        return Promise.reject({})
    })
}

export default {
  getNotifications (page) {
    if (page)
      return apiCall('get', 'fetch/' + page + '/')
    else
      return apiCall('get', 'fetch/')
  },
  getReadNotifications (page) {
    if (page)
      return apiCall('get', 'fetch/read/' + page + '/')
    else
      return apiCall('get', 'fetch/read/')
  },
  getAllNotifications (page) {
    if (page)
      return apiCall('get', 'fetch/all/' + page + '/')
    else
      return apiCall('get', 'fetch/all/')
  },

  readNotification (pk) {
    return apiCall('post', 'read/' + pk + '/')
  },
  readAllNotification () {
    return apiCall('post', 'read/all/')
  }
}
