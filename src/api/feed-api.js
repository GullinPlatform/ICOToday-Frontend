import axios from 'axios'

import { API_ROOT } from '../config'
import { getCookie } from '../utils/cookie'

const client = axios.create({
  baseURL: API_ROOT + '/fd/',
  withCredentials: true,
  headers: {
    'X-CSRF-TOKEN': getCookie('csrftoken'),
  },
})

export default {
  getComments (pk) {
    return client.get(pk + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  postComment (formData) {
    return client.post(formData.pk + '/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  replyComment (formData) {
    return client.post(formData.pk + '/reply/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  editComment (formData) {
    return client.patch(formData.pk + '/edit/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  deleteComment (pk) {
    return client.delete(pk + '/edit/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
}
