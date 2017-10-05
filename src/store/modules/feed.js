import feedApi from '../../api/feed-api'

import * as types from '../mutation-types'

// initial state
const state = {
  my_feeds: [],
  project_feeds: [],
  user_feeds: [],
}

// getters
const getters = {
  my_feeds (state) {
    return state.my_feeds
  },
  project_feeds (state) {
    return state.project_feeds
  },
  user_feeds (state) {
    return state.user_feeds
  }
}

// actions
const actions = {
  newFeed ({commit}, form_data) {
    return feedApi.newFeed(form_data)
      .then((response) => {
        commit(types.POST_FEED, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  deleteFeed ({commit}, id) {
    return feedApi.deleteFeed(id)
      .then((response) => {
        commit(types.DELETE_FEED, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  replyFeed ({commit}, form_data) {
    return feedApi.replyFeed(form_data)
      .then((response) => {
        commit(types.REPLY_FEED, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  myFeed ({commit}) {
    return feedApi.myFeed()
      .then((response) => {
        commit(types.LOAD_MY_FEEDS, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  projectFeed ({commit}, id) {
    return feedApi.projectFeed(id)
      .then((response) => {
        commit(types.LOAD_PROJECT_FEEDS, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  userFeed ({commit}, id) {
    return feedApi.userFeed(id)
      .then((response) => {
        commit(types.LOAD_USER_FEEDS, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  // getComments ({commit}, pk) {
  //   return discussionApi.getComments(pk)
  //     .then((response) => {
  //       commit(types.GET_COMMENTS, response)
  //       return Promise.resolve(response)
  //     })
  //     .catch((error) => {
  //
  //       return Promise.reject(error)
  //     })
  // },
  //
  // postComment ({commit}, formData) {
  //   return discussionApi.postComment(formData)
  //     .then((response) => {
  //       commit(types.POST_COMMENT)
  //       commit(types.APPEND_COMMENT, response)
  //       return Promise.resolve(response)
  //     })
  //     .catch((error) => {
  //
  //       return Promise.reject(error)
  //     })
  // },
  //
  // editComment ({commit}, formData) {
  //   return discussionApi.editComment(formData)
  //     .then((response) => {
  //       commit(types.EDIT_COMMENT)
  //       return Promise.resolve(response)
  //     })
  //     .catch((error) => {
  //
  //       return Promise.reject(error)
  //     })
  // },
  //
  // deleteComment ({commit}, pk) {
  //   return discussionApi.deleteComment(pk)
  //     .then(() => {
  //       commit(types.REMOVE_COMMENT_LOCALLY, pk)
  //       commit(types.DELETE_COMMENT)
  //       return Promise.resolve()
  //     })
  //     .catch((error) => {
  //
  //       return Promise.reject(error)
  //     })
  // },
  //
  // replyComment ({commit}, formData) {
  //   return discussionApi.replyComment(formData)
  //     .then((response) => {
  //       commit(types.REPLY_COMMENT)
  //       commit(types.APPEND_REPLY, response)
  //       return Promise.resolve(response)
  //     })
  //     .catch((error) => {
  //
  //       return Promise.reject(error)
  //     })
  // },
}

// mutations
const mutations = {
  [types.LOAD_MY_FEEDS] (state, response) {
    state.my_feeds = response
  },
  [types.LOAD_PROJECT_FEEDS] (state, response) {
    state.project_feeds = response
  },
  [types.LOAD_USER_FEEDS] (state, response) {
    state.user_feeds = response
  },
  [types.APPEND_REPLY] (state, response) {
    for (let feed of state.my_feeds) {
      if (feed.id === parseInt(response.reply_to_id)) {
        feed.replies.unshift(response)
      }
    }
    for (let feed of state.project_feeds) {
      if (feed.id === parseInt(response.reply_to_id)) {
        feed.replies.unshift(response)
      }
    }
    for (let feed of state.user_feeds) {
      if (feed.id === parseInt(response.reply_to_id)) {
        feed.replies.unshift(response)
      }
    }
  },

  [types.POST_FEED] (state, response) {},
  [types.REPLY_FEED] (state, response) {},
  [types.DELETE_FEED] (state, response) {},

  // [types.GET_COMMENTS] (state, response) {
  //   state.current_post_comments = response
  // },
  // [types.APPEND_COMMENT] (state, response) {
  //   state.current_post_comments.unshift(response)
  // },
  // [types.APPEND_REPLY] (state, response) {
  //   for (let comment of state.current_post_comments) {
  //     if (comment.id === parseInt(response.reply_to_id)) {
  //       comment.replies.unshift(response)
  //     }
  //   }
  // },
  // [types.REMOVE_COMMENT_LOCALLY] (state, pk) {
  //   for (let comment of state.current_post_comments) {
  //     if (comment.id === parseInt(pk)) {
  //       state.current_post_comments.pop(comment)
  //       return
  //     }
  //     for (let reply of comment.replies) {
  //       if (reply.id === parseInt(pk)) {
  //         comment.replies.pop(reply)
  //         return
  //       }
  //     }
  //   }
  // },
  // [types.POST_COMMENT] (state, response) {},
  // [types.EDIT_COMMENT] (state, response) {},
  // [types.DELETE_COMMENT] (state, response) {},
  // [types.REPLY_COMMENT] (state, response) {},
}

export default {
  state,
  getters,
  actions,
  mutations
}
