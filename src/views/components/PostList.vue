<template>
    <div v-if="loaded">
        <div class="product-card product-list"
             v-for="project in posts"
             @mouseover="subscribe_show=project.id" @mouseleave="subscribe_show=false">
            <a class="product-thumb" href="javascript:void(0)" @click="postModal(project.id)">
                <img :src="project.logo_image" alt="Logo">
            </a>
            <div class="product-info pt-2 pb-2">
                <h3 class="product-title" @click="postModal(project.id)">
                    {{project.title}}
                    <span class="text-muted text-sm"> {{project.description_short}}</span>
                    <span class="float-right text-bold text-primary ml-2"
                          v-if="project.rating">{{project.rating}}/100</span>
                    <span class="float-right text-bold text-primary ml-2" v-else>No Score</span>
                </h3>

                <div class="row" @click="postModal(project.id)">
                    <div class="col-sm-2">
                        Type
                        <h4 class="product-price" v-if="project.type===0">
                            Pre-ICO
                        </h4>
                        <h4 class="product-price" v-else>
                            ICO
                        </h4>
                    </div>
                    <div class="col-sm-3">
                        Time
                        <h4 class="product-price">
                            {{timeCounter(project.start_datetime, project.end_datetime)}}
                        </h4>
                    </div>
                    <div class="col-sm-4">
                        Soft Cap / Hard Cap
                        <h4 class="product-price">
                            {{project.minimum_goal}} / {{project.maximum_goal}} {{project.coin_type}}
                        </h4>
                    </div>
                    <div class="col-sm-3">
                        Token for Sale
                        <h4 class="product-price">
                            {{project.equality_on_offer}}%
                        </h4>
                    </div>
                </div>
                <span class="badge badge-sm badge-default">{{project.category}}</span>
                <a href="javascript:void(0)">
                    <span class="badge badge-sm badge-outline-danger float-right" @click="markPost(project.id, true)" v-if="!inSubscribeList(project.id)">
                        <i class="fa fa-star-o"></i> SUBSCRIBE
                   </span>
                    <span class="badge badge-sm badge-danger float-right" @click="markPost(project.id, false)" v-else>
                        <span ><i class="fa fa-check"></i> SUBSCRIBED</span>
                   </span>
                </a>
            </div>
        </div>
    </div>

</template>

<script>
  export default {
    name: 'PostList',
    props: {
      posts: {
        type: Array,
        default: []
      },
      loaded: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      timeCounter (start, end) {
        /* global moment:true */
        // Haven't start
        if (moment().diff(start, 'minutes') < 0) {
          let rest = -moment().diff(start, 'days') + ' days '

          if (rest === '0 days ') {
            rest = -moment().diff(start, 'hours') + ' hours '
          }
          if (rest === '0 hours ') {
            rest = -moment().diff(start, 'minutes') + ' minutes '
          }
          return 'Start in ' + rest
        }
        // Started
        else if (moment().diff(end, 'minutes') < 0) {
          let rest = -moment().diff(end, 'days') + ' days '

          if (rest === '0 days ') {
            rest = -moment().diff(end, 'hours') + ' hours '
          }
          if (rest === '0 hours ') {
            rest = -moment().diff(end, 'minutes') + ' minutes '
          }

          return 'End in ' + rest
        }
        // Ended
        else {
          let rest = moment().diff(end, 'days') + ' days '

          if (rest === '0 days ') {
            rest = moment().diff(end, 'hours') + ' hours '
          }
          if (rest === '0 hours ') {
            rest = moment().diff(end, 'minutes') + ' minutes '
          }

          return 'Ended ' + rest + 'ago'
        }
      },
      formatTime (start, end) {
        if (moment().diff(start, 'minutes') < 0) {

          return moment(start).format('MM/DD, hh:mm')
        }
        else {

          return moment(end).format('MM/DD, hh:mm')
        }
      },

      postModal (id) {
        /* global $:true */
        this.$store.dispatch('getPost', id)
          .then(() => {
            $('#post-modal').modal('show')
          })
      },

      markPost (id, mark) {
        if (!this.login_status) {
          $('#signup-modal').modal('show')
          return
        }

        this.$store.dispatch('markPost', id)
          .then(() => {
            if (mark) {
              this.$store.dispatch('toastr', {
                type: 'success',
                title: 'Success',
                message: 'The selected ICO is added to your subscription list, you\'ll receive free updates from now on'
              })
            } else {
              this.$store.dispatch('toastr', {
                type: 'success',
                title: 'Success',
                message: 'The selected ICO is removed from your subscription list, you\'ll no longer receive updates from this project'
              })
            }
          })
      },
      inSubscribeList (id) {
        for (let p of this.self_marked_posts) {
          if (id === p.id)
            return true
        }
        return false
      },
    },
    computed: {
      login_status () {
        return this.$store.getters.login_status
      },
      self_marked_posts () {
        return this.$store.getters.self_marked_posts
      }
    },
  }

</script>