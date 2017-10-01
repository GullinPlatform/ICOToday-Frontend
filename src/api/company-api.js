import axios from 'axios'

import { API_ROOT } from '../config'

const apiCall = (method, url, form_data, params) => {
  return axios({
    method: method,
    url: url,
    data: form_data ? form_data : {},
    params: params ? params : {},
    baseURL: API_ROOT + '/cp/',
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
  // Everyone accessible
  getCompany (id) {
    return apiCall('get', id + '/')
  },
  getCompanyMembers (id) {
    return apiCall('get', id + '/members/')
  },
  applyCompany (id) {
    return apiCall('get', id + '/apply/')
  },
  searchCompany (search) {
    return apiCall('get', 'search/', {}, search)
  },

  // New Registered User Only
  createCompany (form_data) {
    return apiCall('post', '', form_data)
  },

  // Company Admin Operations
  updateCompany (form_data) {
    return apiCall('put', form_data['id'] + '/', form_data)
  },
  createCompanyMember (form_data) {
    return apiCall('post', 'member/', form_data)
  },
  addCompanyMember (id) {
    return apiCall('post', 'member/' + id + '/')
  },
  removeCompanyMember (id) {
    return apiCall('delete', 'member/' + id + '/')
  },
  approveCompanyMember (id) {
    return apiCall('post', 'member/approve/' + id + '/')
  },
  rejectCompanyMember (id) {
    return apiCall('delete', 'member/approve/' + id + '/')
  },
  addCompanyAdmin (id) {
    return apiCall('post', 'member/admin/' + id + '/')
  },
  getCompanyWallet () {
    return apiCall('get', 'wallet/')
  },
  submitPromotionApplication (form_data) {
    return apiCall('post', 'promotion/', form_data)
  },
  getPromotionApplication () {
    return apiCall('get', 'promotion/')
  },

  // Company Member Operations
  leaveCompany () {
    return apiCall('delete', 'leave/')
  },
  getCompanyAdminList () {
    return apiCall('get', 'member/admins/')
  },
}

