<template>
  <div v-if="loaded">
    <div class="product-column product-list">
      <div class="row">
        <div class="col-sm-4">
          Company
        </div>
        <div class="col-sm-1 pl-0">
          Type
        </div>
        <div class="col-sm-2">
          Time
        </div>
        <div class="col-sm-2">
          Hard Cap
        </div>
        <div class="col-sm-1 pl-0">
          Tokens
        </div>
        <div class="col-sm-2">
          Score
        </div>
      </div>
    </div>
    <div class="product-card product-list"
         v-for="project in posts"
         @mouseover="subscribe_show=project.id" @mouseleave="subscribe_show=false">
      <div class="product-info">
        <h3 class="product-title" @click="postModal(project.id)"></h3>
        <div class="row" @click="postModal(project.id)">
          <div class="col-sm-1 pl-2 pr-2">
            <a class="product-thumb" href="javascript:void(0)" @click="postModal(project.id)">
              <img :src="project.logo_image" alt="Logo">
            </a>
          </div>

          <div class="col-sm-3">
            <div class="row">
              <div class="col-sm-5" style="padding-left:0"><h6>{{project.title}}</h6></div>
              <div class="col-sm-7"><span class="badge badge-sm badge-default">{{project.category}}</span>
              </div>
            </div>
            <div class="row product-short-descr">
              {{project.description_short}}
            </div>
          </div>
          <div class="col-sm-1 pl-0">
                        <span class="product-price" v-if="project.type===0">
                            Pre-ICO
                        </span>
            <span class="product-price" v-else>
                            ICO
                        </span>
          </div>
          <div class="col-sm-2">
            <p class="product-price">
              {{timeCounter(project.start_datetime, project.end_datetime)}}
            </p>
          </div>

          <div class="col-sm-2">
            <p class="product-price">
              {{project.maximum_goal}} {{project.coin_unit}}
            </p>
          </div>
          <div class="col-sm-1 pl-2">
            <p class="product-price">
              <span>{{project.equality_on_offer}}%</span>
            </p>
          </div>
          <div class="col-sm-2">
                    <span class="text-bold text-primary ml-2"
                          v-if="project.rating">{{project.rating}}/100</span>
            <span class="text-bold text-primary ml-2" v-else>No Score</span>
          </div>
        </div>


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
    data () {
      return {
        window_width: 0,
      }
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
          return 'Starts in ' + rest
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

          return 'Ends in ' + rest
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
        if (this.window_width <= 768) {
          this.$router.push({name: 'post', params: {id: id}})
        }
        else {
          this.$store.dispatch('getPost', id)
            .then(() => {
              $('#post-modal').modal('show')
            })
        }
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
      getWindowWidth (event) {
        this.window_width = document.documentElement.clientWidth
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
    mounted () {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getWindowWidth)

        //Init
        this.getWindowWidth()
      })
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.getWindowWidth)
    }
  }

</script>
