import axios from 'axios'

import { API_ROOT } from '../config'

const apiCall = (method, url, form_data, params) => {
  return axios({
    method: method,
    url: url,
    data: form_data ? form_data : {},
    params: params ? params : {},
    baseURL: API_ROOT + '/wl/',
    withCredentials: true,
  })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error.response.data))
}

export default {
  getWallet () {
    return apiCall('get', '')
  },
}
