<template>
  <div class="light-grey">
    <!-- Page Content-->
    <div class="container padding-bottom-3x mb-2 mt-md-3 pl-3 pr-3 " style="padding-top:60px;">
      <div class="row post-modal">
        <div class="col-md-2">
          <nav class="list-group" id="components-list">
            <router-link class="list-group-item list-group-item-action" :class="{active:type==='unread'}" :to="{name:'notifications', query:{type:'unread'}}">Unread</router-link>
            <router-link class="list-group-item list-group-item-action" :class="{active:type==='read'}" :to="{name:'notifications', query:{type:'read'}}">Read</router-link>
            <router-link class="list-group-item list-group-item-action" :class="{active:type==='all'}" :to="{name:'notifications', query:{type:'all'}}">All</router-link>
          </nav>
        </div>
        <!-- Description -->
        <div class="col-md-10">
          <h6 class="text-muted text-normal text-uppercase">
            Notifications
          </h6>
          <hr class="mb-3 mt-2">
          <section class="card-new-layout" v-if="loaded" v-for="notify in current_notifications">
            <div class="widget-featured-posts">
              <div class="entry">
                <div class="entry-thumb">
                  <router-link :to="{name:'user', params:{id:notify.sender.id}}">
                    <img :src="notify.sender.avatar">
                  </router-link>
                </div>
                <div class="entry-content">
                  <h4 class="entry-title">
                    <router-link class="text-bold" :to="{name:'user', params:{id:notify.sender.id}}">{{notify.sender.full_name}}:</router-link>
                    {{notify.content}}
                  </h4>
                  <div class="entry-meta">
                    {{timeFromNow(notify.created)}}
                    <button class="btn btn-xm btn-secondary float-right" v-if="!notify.read" @click="readNotification(notify.id)">
                      Dismiss
                    </button>
                    <button class="btn btn-xm btn-outline-primary float-right mr-3" @click="notificationDetail(notify)">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <spinner v-else></spinner>
          <section class="card-new-layout" v-if="loaded && !current_notifications.length">
            <div class="text-center">
              <h6 class="dropdown-product-title mt-3">
                <i class="fa fa-bell-slash-o"></i> Nothing Here, yet
              </h6>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Spinner from 'components/Spinner'

  export default {
    name: 'NotificationFeed',
    components: {Spinner},
    data () {
      return {
        loaded: false,
        current_notifications: []
      }
    },
    methods: {
      getNotifications () {
        if (this.type === 'unread')
          this.getUnreadNotifications()
        else if (this.type === 'read')
          this.getReadNotifications()
        else if (this.type === 'all')
          this.getAllNotifications()
      },

      getUnreadNotifications () {
        this.loaded = false
        this.$store.dispatch('getNotifications')
          .then((response) => {
            this.current_notifications = response
            this.loaded = true
          })
      },
      getReadNotifications () {
        this.loaded = false
        this.$store.dispatch('getReadNotifications')
          .then((response) => {
            this.current_notifications = response
            this.loaded = true
          })
      },
      getAllNotifications () {
        this.loaded = false
        this.$store.dispatch('getAllNotifications')
          .then((response) => {
            this.current_notifications = response
            this.loaded = true
          })
      },

      readNotification (id) {
        this.$store.dispatch('readNotification', id)
          .then(() => {
            this.getNotifications()
          })
      },

      notificationDetail (notify) {
        this.$store.dispatch('notificationDetail', notify)
      },

      timeFromNow (time) {
        return  moment(time).fromNow()
      }
    },
    computed: {
      ...mapGetters({
        notifications: 'notifications',
        read_notifications: 'read_notifications',
        all_notifications: 'all_notifications',
        login_status: 'login_status',
        me: 'self',
      }),
      type () {
        if (this.$route.query.hasOwnProperty('type'))
          return this.$route.query.type
        return 'unread'
      }
    },
    beforeMount () {
      this.getNotifications()
    },
    watch: {
      '$route': function () {
        this.getNotifications()
      }
    }
  }
</script>

<style>
  a.list-group-item:hover, a.list-group-item:focus, a.list-group-item:active {
    background-color: #0da9ef !important;
    color: white !important;
  }

  .widget-featured-posts > .entry {
    margin-bottom: 0px;
  }
</style>
