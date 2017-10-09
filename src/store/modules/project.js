import projectApi from '../../api/project-api'
import * as types from '../mutation-types'

// initial state
const state = {
  projects: [],
  promo_projects: [],
  current_project_search_result: {},
  current_project: {},
  current_project_rating_detail: [],
  unrated_projects: [],
  tags: [],
  project_stat: {}
}

const getters = {
  current_project: state => {
    return state.current_project
  },
  current_project_rating_detail: state => {
    return state.current_project_rating_detail
  },
  current_project_search_result: state => {
    return state.current_project_search_result
  },
  projects: state => {
    return state.projects
  },
  promo_projects: state => {
    return state.promo_projects
  },
  unrated_projects: state => {
    return state.unrated_projects
  },
  tags: state => {
    return state.tags
  },
  project_stat: state => {
    return state.project_stat
  },

}

const actions = {
  createProject ({commit}, formData) {
    return projectApi.createProject(formData)
      .then((response) => {
        commit(types.CREATE_PROJECT, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  updateProject ({commit}, formData) {
    return projectApi.updateProject(formData)
      .then((response) => {
        commit(types.UPDATE_PROJECT, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  getProject ({commit}, pk) {
    return projectApi.getProject(pk)
      .then((response) => {
        commit(types.GET_PROJECT, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  getProjectStat ({commit}, formData) {
    return projectApi.projectStat(formData)
      .then((response) => {
        commit(types.GET_PROJECT_STAT, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  searchProjects ({commit}, formData) {
    return projectApi.searchProjects(formData)
      .then((response) => {
        commit(types.SEARCH_PROJECTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  listProjects ({commit}, query_data) {
    return projectApi.searchProjects(query_data)
      .then((response) => {
        commit(types.LIST_PROJECTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  listProjectsByPage ({commit}, page) {
    return projectApi.listProjectsByPage(page)
      .then((response) => {
        commit(types.APPEND_PROJECTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  listUnratedProjects ({commit}) {
    return projectApi.listUnratedProjects()
      .then((response) => {
        commit(types.UNRATED_PROJECTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  listPromoProjects ({commit}) {
    return projectApi.listPromoProjects()
      .then((response) => {
        commit(types.PROMO_PROJECTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  listUserRatedProjects({commit}, id) {
    return projectApi.listUserRatedProjects(id)
      .then((response) => {
        commit(types.PROMO_PROJECTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  markProject ({dispatch, commit}, id) {
    return projectApi.markProject(id)
      .then((response) => {
        commit(types.MARK_PROJECT, response)
        dispatch('getSelfMarkedProject')
        return Promise.resolve(response)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  getAllProjectTags ({commit}) {
    return projectApi.getAllProjectTags()
      .then((response) => {
        commit(types.GET_PROJECT_TAGS, response)
        return Promise.resolve()
      })
  },

  getProjectRatingDetail ({commit}, id) {
    return projectApi.getProjectRatingDetail(id)
      .then((response) => {
        commit(types.GET_PROJECT_RATING_DETAIL, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  createProjectRatingDetail ({commit}, form_data) {
    return projectApi.createProjectRatingDetail(form_data)
      .then((response) => {
        commit(types.CREATE_PROJECT_RATING_DETAIL, response)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  updateProjectRatingDetail ({commit, dispatch}, form_data) {
    return projectApi.updateProjectRatingDetail(form_data)
      .then(() => {
        commit(types.UPDATE_PROJECT_RATING_DETAIL)
        dispatch('getProjectRatingDetail', id)
        return Promise.resolve()
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
}

const mutations = {
  [types.CREATE_PROJECT] (state, response) {},
  [types.GET_PROJECT] (state, response) {
    state.current_project = response
  },
  [types.UPDATE_PROJECT] (state, response) {},

  [types.MARK_PROJECT] (state, response) {},

  [types.GET_PROJECT_STAT] (state, response) {
    state.project_stat = response
  },
  [types.SEARCH_PROJECTS] (state, response) {
    state.current_project_search_result = response
  },
  [types.LIST_PROJECTS] (state, response) {
    state.projects = response
  },
  [types.UNRATED_PROJECTS] (state, response) {
    state.unrated_projects = response
  },


  [types.PROMO_PROJECTS] (state, response) {
    state.promo_projects = response
  },
  [types.APPEND_PROJECTS] (state, response) {
    // append new projects
    state.projects = [state.projects, response].reduce(function (r, o) {
      Object.keys(o).forEach(function (k) { r[k] = o[k] })
      return r
    }, {})
  },

  [types.GET_PROJECT_TAGS] (state, response) {
    state.tags = response
  },

  [types.GET_PROJECT_RATING_DETAIL] (state, response) {
    state.current_project_rating_detail = response
  },
  [types.CREATE_PROJECT_RATING_DETAIL] (state, response) {
    state.current_project_rating_detail.unshift(response)
  },
  [types.UPDATE_PROJECT_RATING_DETAIL] (state, response) {},
}

export default {
  state,
  actions,
  mutations,
  getters
}
