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
      if (error) {
        console.log(error)
        return Promise.reject(error)
      }
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

  projectStat () {
    return apiCall('get', 'stat/')
  },
  searchProjects (query_data) {
    return apiCall('get', 'search/', {}, query_data)
  },
  listPromoProjects () {
    return apiCall('get', 'promo/')
  },
  listUnratedProjects () {
    return apiCall('get', 'unrated/')
  },
  listUserRatedProjects (id) {
    return apiCall('get', 'rated/' + id + '/')
  },
  closeOvertimeProjects () {
    return apiCall('get', 'close/')
  },

  markProject (id) {
    return apiCall('post', id + '/mark/')
  },

  getAllProjectTags () {
    1
    return apiCall('get', '/tags/')
  },

  getProjectRatingDetail (id) {
    return apiCall('get', id + '/rating/')
  },
  createProjectRatingDetail (form_data) {
    return apiCall('post', form_data.id + '/rate/', form_data)
  },
  updateProjectRatingDetail (form_data) {
    return apiCall('put', form_data.id + '/rate/', form_data)
  },

}
