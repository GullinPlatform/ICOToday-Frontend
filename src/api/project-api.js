import axios from 'axios'

import { API_ROOT } from '../config'

const apiCall = (method, url, form_data, params) => {
  return axios({
    method: method,
    url: url,
    data: form_data ? form_data : {},
    params: params ? params : {},
    baseURL: API_ROOT + '/pj/',
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
  createProject (form_data) {
    return apiCall('post', '', form_data)
  },
  getProject (id) {
    return apiCall('get', id + '/')
  },
  updateProject (form_data) {
    return apiCall('patch', form_data.get('id') + '/', form_data)
  },
  getProjectRatingDetail (id) {
    return apiCall('get', id + '/rating/')
  },

  searchProjects (form_data) {
    return apiCall('get', 'search/' + form_data.page + '/', {}, form_data)
  },
  listPromoProjects () {
    return apiCall('get', 'promo/')
  },
  closeOVertimeProjects () {
    return apiCall('get', 'close/')
  },

  markProject (id) {
    return apiCall('post', id + '/mark/')
  },

  getAllProjectTags () {
    return apiCall('get', '/tags/')
  }
}
