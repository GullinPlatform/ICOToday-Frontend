<template>
    <div class="container padding-bottom-3x mb-2 mt-3 pl-3 pr-3">
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
            <div class="col-md-4 text-center pt-2">
                <button class="btn btn-outline-danger btn-sm">
                    <span><i class="fa fa-star-o"></i> Mark for me</span>
                </button>
            </div>
        </div>
        <div class="row post-modal">
            <div class="col-lg-8 pl-0 pt-4">
                <h3 class="text-left">Ratings By Advisors</h3>
                <ul class="comment mt-3 pl-3" v-if="loaded">
                    <li class="media mb-3 pos-relative" v-for="detail in post_rating_details">
                        <img :src="detail.rater.info.avatar"
                             class="d-flex rounded-circle align-self-start mr-4" width="55">
                        <div class="media-body">
                            <h5 class="comment-title">{{raterName(detail.rater)}}
                                <span class="text-muted">{{detail.rater.info.title}}</span>

                                <h2 class="text-bold text-info text-center" v-if="post.rating">{{post.rating}}/100</h2>
                                <h2 class="text-bold text-info text-center" v-else>None</h2>
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
                            <span class="d-block">
                                {{detail.detail}}
                            </span>
                        </div>
                    </li>

                </ul>
            </div>
            <div class="col-lg-4 pr-0">
                <section>
                    <h3 class="widget-title mb-2">Rating</h3>
                    <h2 class="text-bold text-info text-center">{{post.rating}}/100</h2>
                </section>
                <section>
                    <h3 class="widget-title mb-2">Start Time</h3>
                    <h3>
                        {{formatTime(post.start_datetime, post.end_datetime)}}
                    </h3>
                </section>
                <section>
                    <h3 class="widget-title mb-2">Progress</h3>
                    200/5000 ETH Raised
                    <div class="progress mb-3">
                        <div class="progress-bar bg-info" role="progressbar"
                             style="width: 70%; height: 5px;"
                             aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </section>
                <section class="mt-5">
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
    name: 'Post',
    components: {
      'vue-markdown': VueMarkdown
    },
    data () {
      return {
        loaded: false
      }
    },
    methods: {
      formatTime (start, end) {
        /* global moment:true */
        // Haven't start
        if (moment().diff(start, 'minutes') < 0) {
          return moment(start).format('MMM DD hh:mm')
        } else {
          return moment(end).format('MMM DD hh:mm')
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
        return this.$store.getters.current_post
      },
      post_rating_details () {
        return this.$store.getters.current_post_rating_detail
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
      this.$store.dispatch('getPostRatingDetail', this.$store.getters.current_post.id)
        .then(() => {
          this.loaded = true
        })
    }
  }
</script>