import axios from 'axios'

import { API_ROOT } from '../config'

const apiCall = (method, url, form_data, params) => {
  return axios({
    method: method,
    url: url,
    data: form_data ? form_data : {},
    params: params ? params : {},
    baseURL: API_ROOT + '/ms/',
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
  sendMessage (pk) {
    return apiCall('post', pk + '/')
  },
  loadMessages (pk) {
    return apiCall('get', pk + '/')
  },

  loadMoreMessages (pk) {
    return apiCall('get', pk + '/more/')
  },
  readMoreMessages (pk) {
    return apiCall('get', pk + '/read/')
  },
  getConversation (pk) {
    return apiCall('post', 'ac/' + pk + '/')
  }
}
