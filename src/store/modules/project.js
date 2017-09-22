import postApi from '../../api/project-api'
import * as types from '../mutation-types'

// initial state
const state = {
  posts: [],
  promo_posts: [],
  current_post: {},
  current_post_rating_detail: '',
  tags: []
}

const getters = {
  current_post: state => {
    return state.current_post
  },
  current_post_rating_detail: state => {
    return state.current_post_rating_detail
  },
  posts: state => {
    return state.posts
  },
  promo_posts: state => {
    return state.promo_posts
  },
  tags: state => {
    return state.tags
  },
}

const actions = {
  postNewPost ({commit}, formData) {
    return postApi.postPost(formData)
      .then((response) => {
        commit(types.ADD_POST, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  listPosts ({commit}) {
    return postApi.listPosts()
      .then((response) => {
        commit(types.LIST_POSTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  listPromoPosts ({commit}) {
    return postApi.listPromoPosts()
      .then((response) => {
        commit(types.LIST_PROMO_POSTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  listPostsByPage ({commit}, page) {
    return postApi.listPostsByPage(page)
      .then((response) => {
        commit(types.APPEND_POSTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  searchPosts ({commit}, formData) {
    return postApi.searchPosts(formData)
      .then((response) => {
        commit(types.LIST_POSTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  searchPostsByPage ({commit}, formData) {
    return postApi.searchPosts(formData)
      .then((response) => {
        commit(types.APPEND_POSTS, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  getPost ({commit}, pk) {
    return postApi.getPost(pk)
      .then((response) => {
        commit(types.GET_POST, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  markPost ({dispatch, commit}, id) {
    return postApi.markPost(id)
      .then((response) => {
        commit(types.MARK_POST, response)
        dispatch('getSelfMarkedPost')
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  updatePost ({commit}, formData) {
    return postApi.updatePost(formData)
      .then((response) => {
        commit(types.UPDATE_POST, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  getPostRatingDetail ({commit}, id) {
    return postApi.getPostRatingDetail(id)
      .then((response) => {
        commit(types.GET_POST_RATING_DETAIL, response)
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  getAllProjectTags ({commit}) {
    return postApi.getAllProjectTags()
      .then((response) => {
        commit(types.GET_POST_TAGS, response)
        return Promise.resolve()
      })
  }

}

const mutations = {
  [types.ADD_POST] (state, response) {},
  [types.MARK_POST] (state, response) {},
  [types.UPDATE_POST] (state, response) {},

  [types.LIST_POSTS] (state, response) {
    state.posts = response
  },
  [types.LIST_PROMO_POSTS] (state, response) {
    state.promo_posts = response
  },
  [types.APPEND_POSTS] (state, response) {
    // append new posts
    state.posts = [state.posts, response].reduce(function (r, o) {
      Object.keys(o).forEach(function (k) { r[k] = o[k] })
      return r
    }, {})

  },
  [types.GET_POST] (state, response) {
    state.current_post = response
  },
  [types.GET_POST_RATING_DETAIL] (state, response) {
    state.current_post_rating_detail = response
  },
  [types.GET_POST_TAGS] (state, response) {
    state.tags = response
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
