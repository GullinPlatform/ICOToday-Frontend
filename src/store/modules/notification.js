import taskApi from '../../api/notification-api'
import * as types from '../mutation-types'
import router from '../../router/index'

const state = {
  unread_notifications: [],
  read_notifications: [],
  all_notifications: []
}

const getters = {
  notifications: state => {
    return state.unread_notifications
  },
  read_notifications: state => {
    return state.read_notifications
  },
  all_notifications: state => {
    return state.all_notifications
  },

}

const actions = {
  getNotifications ({commit}, page) {
    return taskApi.getNotifications(page)
      .then((response) => {
        commit(types.LOAD_UNREAD_NOTIFICATIONS, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  getReadNotifications ({commit}, page) {
    return taskApi.getReadNotifications(page)
      .then((response) => {
        commit(types.LOAD_READ_NOTIFICATIONS, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  getAllNotifications ({commit}, page) {
    return taskApi.getAllNotifications(page)
      .then((response) => {
        commit(types.LOAD_ALL_NOTIFICATIONS, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  readNotification ({commit, dispatch}, pk) {
    return taskApi.readNotification(pk)
      .then(() => {
        commit(types.READ_NOTIFICATION)
        dispatch('getNotifications')
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  readAllNotification ({commit, dispatch}) {
    return taskApi.readAllNotification()
      .then(() => {
        commit(types.READ_ALL_NOTIFICATION)
        dispatch('getNotifications')
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

  notificationDetail({}, notify){
    if(notify.related === 'wallet'){
      router.push({name:'me_wallet'})
    }
  }
}

const mutations = {
  [types.LOAD_UNREAD_NOTIFICATIONS] (state, response) {
    state.unread_notifications = response
  },
  [types.LOAD_READ_NOTIFICATIONS] (state, response) {
    state.read_notifications = response
  },
  [types.LOAD_ALL_NOTIFICATIONS] (state, response) {
    state.all_notifications = response
  },

  [types.READ_NOTIFICATION] (state) {},
  [types.READ_ALL_NOTIFICATION] (state) {},
}

export default {
  state,
  getters,
  actions,
  mutations
}
