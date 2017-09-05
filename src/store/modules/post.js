import postApi from '../../api/post-api'
import * as types from '../mutation-types'

// initial state
const state = {
  posts: [],
  promo_posts: [],
  current_post: {}
}

const getters = {
  current_post: state => {
    return state.current_post
  },
  posts: state => {
    return state.posts
  },
  promo_posts: state => {
    return state.promo_posts
  }
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
  applyPost ({commit}, id) {
    return postApi.applyPost(id)
      .then((response) => {
        commit(types.APPLY_POST, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  markPost ({commit}, id) {
    return postApi.markPost(id)
      .then((response) => {
        commit(types.MARK_POST, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  // TODO
  markedPosts ({commit}, id) {
    return postApi.markPost(id)
      .then((response) => {
        commit(types.MARK_POST, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  createdPosts ({commit}, id) {
    return postApi.markPost(id)
      .then((response) => {
        commit(types.MARK_POST, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  appliedPost ({commit}, id) {
    return postApi.markPost(id)
      .then((response) => {
        commit(types.MARK_POST, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  toastr ({commit}, data) {
    let toastOptions = {
      class: 'iziToast-' + data.type || '',
      title: data.title,
      message: data.message,
      animateInside: false,
      position: 'topRight',
      progressBar: false,
      icon: 'icon-bell',
      timeout: 3200,
      transitionIn: 'fadeInLeft',
      transitionOut: 'fadeOut',
      transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut'
    }
    /* global iziToast:true */
    iziToast.show(toastOptions)
  }
}

const mutations = {
  [types.ADD_POST] (state, response) {},
  [types.APPLY_POST] (state, response) {},
  [types.MARK_POST] (state, response) {},

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
}

export default {
  state,
  actions,
  mutations,
  getters
}
