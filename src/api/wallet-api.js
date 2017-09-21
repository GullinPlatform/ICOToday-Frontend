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
  getWallet () {
    return client.get(API_ROOT + 'wallet/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
}
