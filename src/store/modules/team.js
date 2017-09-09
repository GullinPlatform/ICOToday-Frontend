import teamApi from '../../api/team-api'
import * as types from '../mutation-types'

// initial state
const state = {
  team: {},
  is_advisor: false
}

const getters = {
  current_team: state => {
    return state.team
  },
  current_team_members: state => {
    return state.team.members
  },
  is_advisor: state => {
    return state.is_advisor
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
  setIsAdvisor ({commit}, is_advisor) {
    commit(types.SET_IS_ADVISOR, is_advisor)
  }
}

const mutations = {
  [types.GET_TEAM] (state, response) {
    state.team = response
  },
  [types.UPDATE_TEAM] (state, response) {},
  [types.ADD_TEAM_MEMBER] (state, response) {},
  [types.REM_TEAM_MEMBER] (state, response) {},
  [types.SET_IS_ADVISOR] (state, is_advisor) {
    state.is_advisor = is_advisor
  },

}

export default {
  state,
  actions,
  mutations,
  getters
}
