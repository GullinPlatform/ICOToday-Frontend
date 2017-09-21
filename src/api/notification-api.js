import axios from 'axios'

import { API_ROOT } from '../config'
import { getCookie } from '../utils/cookie'

const client = axios.create({
  baseURL: API_ROOT + '/nt/',
  withCredentials: true,
  headers: {
    'X-CSRF-TOKEN': getCookie('csrftoken'),
  },
})

export default {
  getNotifications () {
    return client.get('fetch/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  readNotification (pk) {
    return client.post('read/' + pk + '/', {})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}
