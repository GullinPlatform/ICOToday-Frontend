// import discussionApi from '../../api/discussion-api'

import * as types from '../mutation-types'

// initial state
const state = {
}

// getters
const getters = {
    // posts(state) {
    //     return state.posts
    // },
    currentPost(state) {
        return state.current_post
    }
}

// actions
const actions = {


}

// mutations
const mutations = {
    [types.POST_POST](state, response) {},
    [types.LOAD_POSTS](state, response) {
        state.posts = response
    },
    [types.LOAD_POST](state, response) {
        state.current_post = response
    },
    [types.POST_POST_COMMENT](state, response) {},
    [types.ADD_POST_VOTE](state, response) {},


    [types.ADD_MOMENT_SOLVE](state, response) {},
    [types.ADD_MOMENT_LIKE](state, response) {},
    [types.ADD_MOMENT_REPORT](state, response) {},

    [types.POST_MOMENT_COMMENT](state, response) {},
    [types.POST_CLASSROOM_TASK](state, response) {},

    [types.LOG_ERROR](state, error) {
        state.error_msg = error
        // TODO, need to handle errors
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
