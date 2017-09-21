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
  // Authorization
  getTeam (pk) {
    return client.get('/cp/' + pk + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  // Change User
  updateTeam (formData) {
    return client.put('/cp/' + formData.pk + '/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  // Change Team
  addTeamMember (formData) {
    return client.patch('/cp/' + formData.get('pk') + '/', formData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  remTeamMember (pk) {
    return client.delete('/cp/' + pk + '/')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
}

