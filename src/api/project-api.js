import axios from 'axios'

import { API_ROOT } from '../config'
import { getCookie } from '../utils/cookie'

const client = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
  headers: {
    'X-CSRF-TOKEN': getCookie('csrftoken'),
  },
})

export default {
  postPost (formData) {
    return client.post(API_ROOT + 'post/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getPost (id) {
    return client.get(API_ROOT + 'post/' + id + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  listPosts () {
    return client.get(API_ROOT + 'post/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  listPromoPosts () {
    return client.get(API_ROOT + 'post/promo/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  listPostsByPage (page) {
    return client.get(API_ROOT + 'post/p/' + page + '/')
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

    return client.get(API_ROOT + 'post/search/' + formData.page + query)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  markPost (id) {
    return client.post(API_ROOT + 'post/' + id + '/mark/', {})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  updatePost (formData) {
    return client.patch(API_ROOT + 'post/' + formData.get('id') + '/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getPostRatingDetail (id) {
    return client.get(API_ROOT + 'post/' + id + '/rating/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}
