import Vue from 'vue'
import Resource from 'vue-resource'

import { API_ROOT } from '../config.js'
import { getCookie } from '../utils/cookie'

Vue.use(Resource)

export default {
  postPost (formData) {
    return Vue.http.post(API_ROOT + 'post/', formData, {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getPost (id) {
    return Vue.http.get(API_ROOT + 'post/' + id + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  listPosts () {
    return Vue.http.get(API_ROOT + 'post/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  listPromoPosts () {
    return Vue.http.get(API_ROOT + 'post/promo/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  listPostsByPage (page) {
    return Vue.http.get(API_ROOT + 'post/p/' + page + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  searchPosts (formData) {
    let query = '/?'

    if (formData.status) {
      query = query + 'status=' + formData.status + '&'
    }
    if (formData.category) {
      query = query + 'category=' + formData.category + '&'
    }
    if (formData.type) {
      query = query + 'type=' + formData.type + '&'
    }
    if (formData.keyword) {
      query = query + 'keyword=' + formData.keyword + '&'
    }

    return Vue.http.get(API_ROOT + 'post/search/' + formData.page + query)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  markPost (id) {
    return Vue.http.post(API_ROOT + 'post/' + id + '/mark/', {}, {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  updatePost (formData) {
    return Vue.http.patch(API_ROOT + 'post/' + formData.get('id') + '/', formData, {headers: {Authorization: 'TOKEN ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getPostRatingDetail (id) {
    return Vue.http.get(API_ROOT + 'post/' + id + '/rating/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}
