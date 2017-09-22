import companyApi from '../../api/company-api'
import * as types from '../mutation-types'

// initial state
const state = {
  team: {},

  company: {},
  company_members: [],
  company_admins: [],
  company_search_result: [],
}

const getters = {
  current_team: state => {
    return state.team
  },
  current_team_members: state => {
    return state.team.members
  },

  current_company: state => {
    return state.company
  },
  current_company_members: state => {
    return state.company_members
  },
  current_company_admins: state => {
    return state.company_members
  },
  current_company_search_result: state => {
    return state.company_search_result
  }
}

const actions = {
  getTeam ({commit}, pk) {
    return teamApi.getTeam(pk)
      .then((response) => {
        commit(types.GET_TEAM, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  updateTeam ({commit}, formData) {
    return teamApi.updateTeam(formData)
      .then(() => {
        commit(types.UPDATE_TEAM)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  addTeamMember ({commit}, formData) {
    return teamApi.addTeamMember(formData)
      .then(() => {
        commit(types.ADD_TEAM_MEMBER)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  remTeamMember ({commit}, pk) {
    return teamApi.remTeamMember(pk)
      .then(() => {
        commit(types.REM_TEAM_MEMBER)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  // Everyone accessible
  getCompany ({commit}, id) {
    return companyApi.getCompany(id)
      .then((response) => {
        commit(types.GET_COMPANY, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  getCompanyMembers ({commit}, id) {
    return companyApi.getCompanyMembers(id)
      .then((response) => {
        commit(types.GET_COMPANY, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  applyCompany ({commit}, id) {
    return companyApi.applyCompany(id)
      .then((response) => {
        commit(types.APPLY_COMPANY, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  searchCompany ({commit}, search) {
    return companyApi.searchCompany(search)
      .then((response) => {
        commit(types.SEARCH_COMPANY, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  // New Registered User Only
  createCompany ({commit},) {
    return companyApi.createCompany()
      .then((response) => {
        commit(types.CREATE_COMPANY, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  // Company Admin Operations
  updateCompany ({commit}, form_data) {
    return companyApi.updateCompany(form_data)
      .then((response) => {
        commit(types.UPDATE_COMPANY, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  createCompanyMember ({commit}, form_data) {
    return companyApi.createCompanyMember(form_data)
      .then((response) => {
        commit(types.CREATE_COMPANY_MEMBER, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  addCompanyMember ({commit}, id) {
    return companyApi.addCompanyMember(id)
      .then((response) => {
        commit(types.ADD_COMPANY_MEMBER, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  removeCompanyMember ({commit}, id) {
    return companyApi.removeCompanyMember(id)
      .then((response) => {
        commit(types.REMOVE_COMPANY_MEMBER, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  approveCompanyMember ({commit}, id) {
    return companyApi.approveCompanyMember(id)
      .then((response) => {
        commit(types.APPROVE_COMPANY_MEMBER, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  rejectCompanyMember ({commit}, id) {
    return companyApi.rejectCompanyMember(id)
      .then((response) => {
        commit(types.REJECT_COMPANY_MEMBER, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  addCompanyAdmin ({commit}, id) {
    return companyApi.addCompanyAdmin(id)
      .then((response) => {
        commit(types.ADD_COMPANY_ADMIN, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  // Company Member Operations
  leaveCompany () {
    return companyApi.leaveCompany()
      .then((response) => {
        commit(types.LEAVE_COMPANY, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  getCompanyAdminList () {
    return companyApi.getCompanyAdminList()
      .then((response) => {
        commit(types.GET_COMPANY_ADMINS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  }
}

const mutations = {
  [types.GET_TEAM] (state, response) {
    state.team = response
  },
  [types.UPDATE_TEAM] (state, response) {},
  [types.ADD_TEAM_MEMBER] (state, response) {},
  [types.REM_TEAM_MEMBER] (state, response) {},

  [types.GET_COMPANY] (state, response) {
    state.company = response
    if (response.members){
      state.company_members = response.members
    }
  },
  [types.GET_COMPANY_MEMBERS] (state, response) {
    state.company_members = response
  },
  [types.SEARCH_COMPANY] (state, response) {
    state.company_search_result = response
  },
  [types.CREATE_COMPANY] (state, response) {
    state.company = response
  },
  [types.UPDATE_COMPANY] (state, response) {
    state.company = response
  },
  [types.CREATE_COMPANY_MEMBER] (state, response) {
    state.company_members.push(response)
  },
  [types.ADD_COMPANY_MEMBER] (state, response) {
    state.company_members.push(response)
  },
  [types.REMOVE_COMPANY_MEMBER] (state, response) {},
  [types.APPROVE_COMPANY_MEMBER] (state, response) {
    state.company_members.push(response)
  },
  [types.REJECT_COMPANY_MEMBER] (state, response) {},
  [types.ADD_COMPANY_ADMIN] (state, response) {
    state.company_admins.push(response)
  },
  [types.GET_COMPANY_ADMINS] (state, response) {
    state.company_admins = response
  },

}

export default {
  state,
  actions,
  mutations,
  getters
}
