<template>
  <div class="container container-padding">
    <div class="row">
      <div class="col-md-8 pl-0 pr-0">
        <div class="post-header">
          <img class="d-flex rounded mr-3" :src="post.logo_image" width="75" alt="Media">
          <div class="media-body">
            <h3 class="mt-0 mb-1 text-bold">{{post.title}}</h3>
            <span class="d-block text-sm text-muted">
              {{post.description_short}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row post-modal">
      <div class="col-lg-8 pl-0 pt-4">
        <h3 class="text-left">Ratings By Advisors</h3>
        <ul class="comment mt-3 pl-3" v-if="loaded">
          <li class="media mb-3 pos-relative" v-for="detail in post_rating_details">
            <router-link :to="{name:'user_created', params:{id:detail.rater.id}}">
              <img :src="detail.rater.info.avatar"
                   class="d-flex rounded-circle align-self-start mr-4" width="55">
            </router-link>
            <div class="media-body">
              <h5 class="comment-title mb-0">{{raterName(detail.rater)}}
                <span class="text-muted">{{detail.rater.info.title}}</span>
              </h5>
              <div class="social-bar">
                <a :href="detail.rater.info.facebook" target="_blank"
                   class="social-link branding-facebook"
                   v-if="detail.rater.info.facebook">
                  <i class="fa fa-facebook"></i>
                </a>
                <a :href="detail.rater.info.twitter" class="social-link branding-twitter"
                   v-if="detail.rater.info.twitter">
                  <i class="fa fa-twitter"></i>
                </a>
                <a :href="detail.rater.info.linkedin" class="social-link branding-linkedin"
                   v-if="detail.rater.info.linkedin">
                  <i class="fa fa-linkedin-square"></i>
                </a>
                <a :href="detail.rater.info.telegram" class="social-link branding-linkedin"
                   v-if="detail.rater.info.telegram">
                  <i class="fa fa-telegram"></i>
                </a>
              </div>
              <span class="text-bold">
                                Score:
                                <span class="text-info mb-0" v-if="post.rating">{{post.rating}}/100</span>
                                <span class="text-info mb-0" v-else>No Score</span>
                            </span>
              <span class="d-block">
                                <vue-markdown>{{detail.detail}}</vue-markdown>
                            </span>
            </div>
          </li>

        </ul>
      </div>
      <div class="col-lg-4 pr-0">
        <section>
          <h3 class="widget-title mb-2">Rating <span class="text-sm text-black">
                            <router-link :to="{name:'post_rating_detail', params:{is:post.id}}">
                                <i class="fa fa-question-circle"></i></router-link>
                            </span>
          </h3>
          <h2 class="text-bold text-info text-center" v-if="post.rating">{{post.rating}}/100</h2>
          <h2 class="text-bold text-info text-center" v-else>No Score</h2>
        </section>
        <section>
          <h3 class="widget-title mb-2">Time</h3>
          <h2 class="text-center mb-0">
            {{timeCounter(post.start_datetime, post.end_datetime)}}
          </h2>
          <p class="text-center"> {{formatTime(post.start_datetime, post.end_datetime)}}</p>
        </section>
        <section class="mt-4">
          <hr class="mb-2">

          <button class="btn btn-outline-danger btn-sm btn-block" v-if="!marked" @click="markPost()">
            <span><i class="fa fa-star-o"></i> Subscribe</span>
          </button>
          <button class="btn btn-danger btn-sm btn-block" v-else @click="unmarkPost()"
                  @mouseover="unsubscribe=true" @mouseleave="unsubscribe=false">
            <span v-if="unsubscribe">unsubscribe</span>
            <span v-else><i class="fa fa-check"></i> Subscribed</span>

          </button>

          <a class="btn btn-outline-primary btn-sm btn-block text-primary"
             :href="post.white_paper">
            <i class="fa fa-file-o"></i>
            White paper
          </a>
          <a class="btn btn-outline-secondary btn-sm btn-block" :href="post.website">
            <a><i class="fa fa-globe"></i> Website</a>
          </a>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'PostRatingDetail',
    components: {
      'vue-markdown': VueMarkdown
    },
    data () {
      return {
        loaded: false,
        marked: false,
        unsubscribe: false,
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

          return moment(start).format('YYYY/MM/DD, hh:mm a')
        }
        else {

          return moment(end).format('YYYY/MM/DD, hh:mm a')
        }
      },
      raterName (creator) {
        if (creator.info.first_name && creator.info.last_name) {
          return creator.info.first_name + ' ' + creator.info.last_name
        } else {
          return creator.email
        }
      },
    },
    computed: {
      post () {
        return this.$store.getters.current_project
      },
      post_rating_details () {
        return this.$store.getters.current_project_rating_detail
      },
      login_status () {
        return this.$store.getters.login_status
      },
      me () {
        return this.$store.getters.self
      }
    },
    beforeCreate () {
      this.loaded = false
      this.$store.dispatch('getPostRatingDetail', this.$store.getters.current_project.id)
        .then(() => {
          this.loaded = true
        })
    }
  }
</script>
