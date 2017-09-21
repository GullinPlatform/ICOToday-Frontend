import discussionApi from '../../api/feed-api'

import * as types from '../mutation-types'

// initial state
const state = {
  current_post_comments: []
}

// getters
const getters = {
  current_post_comments (state) {
    return state.current_post_comments
  }
}

// actions
const actions = {
  getComments ({commit}, pk) {
    return discussionApi.getComments(pk)
      .then((response) => {
        commit(types.GET_COMMENTS, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  postComment ({commit}, formData) {
    return discussionApi.postComment(formData)
      .then((response) => {
        commit(types.POST_COMMENT)
        commit(types.APPEND_COMMENT, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  editComment ({commit}, formData) {
    return discussionApi.editComment(formData)
      .then((response) => {
        commit(types.EDIT_COMMENT)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  deleteComment ({commit}, pk) {
    return discussionApi.deleteComment(pk)
      .then(() => {
        commit(types.REMOVE_COMMENT_LOCALLY, pk)
        commit(types.DELETE_COMMENT)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  replyComment ({commit}, formData) {
    return discussionApi.replyComment(formData)
      .then((response) => {
        commit(types.REPLY_COMMENT)
        commit(types.APPEND_REPLY, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
}

// mutations
const mutations = {
  [types.GET_COMMENTS] (state, response) {
    state.current_post_comments = response
  },
  [types.APPEND_COMMENT] (state, response) {
    state.current_post_comments.unshift(response)
  },
  [types.APPEND_REPLY] (state, response) {
    for (let comment of state.current_post_comments) {
      if (comment.id === parseInt(response.reply_to_id)) {
        comment.replies.unshift(response)
      }
    }
  },
  [types.REMOVE_COMMENT_LOCALLY] (state, pk) {
    for (let comment of state.current_post_comments) {
      if (comment.id === parseInt(pk)) {
        state.current_post_comments.pop(comment)
        return
      }
      for (let reply of comment.replies) {
        if (reply.id === parseInt(pk)) {
          comment.replies.pop(reply)
          return
        }
      }
    }
  },
  [types.POST_COMMENT] (state, response) {},
  [types.EDIT_COMMENT] (state, response) {},
  [types.DELETE_COMMENT] (state, response) {},
  [types.REPLY_COMMENT] (state, response) {},
}

export default {
  state,
  getters,
  actions,
  mutations
}
