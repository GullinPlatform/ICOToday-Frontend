import questionApi from '../../api/question-api'
import * as types from '../mutation-types'

// initial state
const state = {
  questions: {},
  current_question: {}
}

const getters = {
  current_question: state => {
    return state.current_question
  },
  questions: state => {
    return state.questions
  }
}

const actions = {
  postNewQuestion({ commit }, formData) {
    return questionApi.postQuestion(formData)
      .then((response) => {
        commit(types.POST_QUESTION, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  listQuestions({ commit }) {
    return questionApi.listQuestions()
      .then((response) => {
        commit(types.LIST_QUESTIONS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  getQuestion({ commit }, pk) {
    return questionApi.getQuestion(pk)
      .then((response) => {
        commit(types.GET_QUESTION, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  applyQuestion({ commit }, id) {
    return questionApi.applyQuestion(id)
      .then((response) => {
        commit(types.APPLY_QUESTION, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  markQuestion({ commit }, id) {
    return questionApi.markQuestion(id)
      .then((response) => {
        commit(types.MARK_QUESTION, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  // TODO
  markedQuestions({ commit }, id) {
    return questionApi.markQuestion(id)
      .then((response) => {
        commit(types.MARK_QUESTION, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  createdQuestions({ commit }, id) {
    return questionApi.markQuestion(id)
      .then((response) => {
        commit(types.MARK_QUESTION, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  appliedQuestion({ commit }, id) {
    return questionApi.markQuestion(id)
      .then((response) => {
        commit(types.MARK_QUESTION, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
}

const mutations = {
  [types.POST_QUESTION](state, response) {},
  [types.APPLY_QUESTION](state, response) {},
  [types.MARK_QUESTION](state, response) {},
  [types.LIST_QUESTIONS](state, response) {
    state.questions = response
  },
  [types.GET_QUESTION](state, response) {
    state.current_question = response
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
