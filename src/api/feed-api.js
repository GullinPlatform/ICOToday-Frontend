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
    .catch((error) => {
      if (error) {
        console.log(error)
        return Promise.reject(error)
      }
      else
        return Promise.reject({})
    })
}

export default {
  newFeed (form_data) {
    return apiCall('post', 'new/', form_data)
  },
  deleteFeed (id) {
    return apiCall('delete', id + '/delete/')
  },
  replyFeed (form_data) {
    return apiCall('post', form_data.id + '/reply/', form_data)
  },

  myFeed () {
    return apiCall('get', 'my/')
  },
  companyFeed (id) {
    return apiCall('get', 'company/' + id + '/')
  },
  userFeed (id) {
    return apiCall('get', 'user/' + id + '/')
  },
}
