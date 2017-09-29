import projectApi from '../../api/project-api'
import * as types from '../mutation-types'

// initial state
const state = {
  projects: [],
  promo_projects: [],
  current_project: {},
  current_project_rating_detail: '',
  tags: []
}

const getters = {
  current_project: state => {
    return state.current_project
  },
  current_project_rating_detail: state => {
    return state.current_project_rating_detail
  },
  projects: state => {
    return state.projects
  },
  promo_projects: state => {
    return state.promo_projects
  },
  tags: state => {
    return state.tags
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
        console.log(error)
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
        console.log(error)
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
        console.log(error)
        return Promise.reject(error)
      })
  },
  getProjectRatingDetail ({commit}, id) {
    return projectApi.getProjectRatingDetail(id)
      .then((response) => {
        commit(types.GET_PROJECT_RATING_DETAIL, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  listProjects ({commit}, formData) {
    return projectApi.searchProjects(formData)
      .then((response) => {
        commit(types.LIST_PROJECTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
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
        console.log(error)
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
        console.log(error)
        return Promise.reject(error)
      })
  },

  getAllProjectTags ({commit}) {
    return projectApi.getAllProjectTags()
      .then((response) => {
        commit(types.GET_PROJECT_TAGS, response)
        return Promise.resolve()
      })
  }
}

const mutations = {
  [types.CREATE_PROJECT] (state, response) {},
  [types.GET_PROJECT] (state, response) {
    state.current_project = response
  },
  [types.UPDATE_PROJECT] (state, response) {},

  [types.GET_PROJECT_RATING_DETAIL] (state, response) {
    state.current_project_rating_detail = response
  },

  [types.MARK_PROJECT] (state, response) {},

  [types.LIST_PROJECTS] (state, response) {
    state.projects = response
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
}

export default {
  state,
  actions,
  mutations,
  getters
}
