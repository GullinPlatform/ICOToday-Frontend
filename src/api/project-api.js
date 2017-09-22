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
    .catch((error) => Promise.reject(error.response.data))
}

export default {
  listPosts () {
    return apiCall('get', '')
  },
  postPost (form_data) {
    return apiCall('post', '', form_data)
  },
  getPost (id) {
    return apiCall('get', id + '/')
  },

  listPromoPosts () {
    return apiCall('get', 'promo/')
  },
  listPostsByPage (page) {
    return apiCall('get', 'p/' + page + '/')
  },
  searchPosts (form_data) {
    return apiCall('get', 'search/' + form_data.page + '/', {}, form_data)
  },

  markPost (id) {
    return apiCall('post', id + '/mark/')
  },
  updatePost (form_data) {
    return apiCall('patch', form_data.get('id') + '/', form_data)
  },
  getPostRatingDetail (id) {
    return apiCall('get', id + '/rating/')
  },

  getAllProjectTags () {
    return apiCall('get', '/tags/')

  }

}
