
<template >
    <div class="light-grey">
    <!-- Page Content-->
    <div class="container padding-bottom-3x mb-2 mt-md-3 pl-3 pr-3 " style="padding-top:60px;">



        <div class="row post-modal">
          <div class="col-lg-3">

              <div>
                <div class="post-header">
                    <img class="d-flex rounded mr-3" :src="post.logo_image" width="75" alt="Media">
                    <div class="media-body">
                        <h3 class="mt-0 mb-1 text-bold">{{post.title}}</h3>
                        <span class="d-block text-sm text-muted">
                                {{post.description_short}}
                        </span>
                        <span class="badge badge-sm badge-default">{{post.category}}</span>
                    </div>
                </div>
              <section>
                  <h3 class="widget-title mb-2">Home</h3>
                  <h3 class="widget-title mb-2">About</h3>
                  <h3 class="widget-title mb-2">Ratings</h3>
                  <h3 class="widget-title mb-2">Comments</h3>
              </section>
          </div>
        </div>

            <div class="col-lg-6 pl-0 pr-0 mr-0">


              <div  class="card-new-layout mr-3 mb-3">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe :src="post.video_link" class="embed-responsive-item" allowfullscreen></iframe>
                </div>
              </div>
                <p class="text-center">
                    <a class="social-button shape-circle" href="javascript:void(0)"><i class="fa fa-slack"></i></a>
                    <a class="social-button shape-circle" href="javascript:void(0)"><i
                            class="socicon-twitter"></i></a>
                    <a class="social-button shape-circle" href="javascript:void(0)"><i class="socicon-telegram"></i></a>
                    <a class="social-button shape-circle" href="javascript:void(0)"><i
                            class="socicon-medium"></i></a>
                </p>
            </div>
            <div class="col-lg-3 pr-md-0  ">
                <section class="card-new-layout">
                    <h3 class="widget-title mb-2">Rating <span class="text-sm text-black">
                        <router-link :to="{name:'terms', query:{type:'rating'}}" target="_blank">
                            <i class="fa fa-question-circle"></i></router-link>
                        </span>
                    </h3>
                    <router-link :to="{name:'post_rating_detail', params:{id:post.id}}">
                        <h2 class="text-bold text-info text-center" v-if="post.rating">{{post.rating}}/100</h2>
                    </router-link>
                    <h2 class="text-bold text-info text-center" v-if="!post.rating">No Score</h2>
                </section>
                <div class="card-new-layout">
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
                       :href="post.white_paper" target="_blank">
                        <i class="fa fa-file-o"></i>
                        White paper
                    </a>
                    <a class="btn btn-outline-secondary btn-sm btn-block" :href="post.website" target="_blank">
                        <a><i class="fa fa-globe"></i> Website</a>
                    </a>
                </section>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 pr-md-0  ">
          </div>
            <!-- Description -->
            <div class="col-lg-6 pl-md-0 pl-md-0 " >
              <h3 class="text-left card-new-heading">Updates</h3>
                <section class="card-new-layout">
                  <div class="post-header">

                      <img class="d-flex rounded mr-3 ml-3" :src="post.logo_image" width="50" alt="Media">

                      <div class="media-body">
                          <h4 class="mt-0 mb-1">{{post.title}}</h4>
                      </div>
                  </div>
                    <vue-markdown class="card-new-text">{{post.description_full}}</vue-markdown>
                    <hr>
                    <br><br>
                </section>

                <section class="card-new-layout">
                  <div class="post-header">

                      <img class="d-flex rounded mr-3 ml-3" :src="post.logo_image" width="50" alt="Media">

                      <div class="media-body">
                          <h4 class="mt-0 mb-1">{{post.title}}</h4>
                      </div>
                  </div>
                    <vue-markdown class="card-new-text">{{post.description_full}}</vue-markdown>
                </section>

                <section class="card-new-layout">
                  <div class="post-header">

                      <img class="d-flex rounded mr-3 ml-3" :src="post.logo_image" width="50" alt="Media">

                      <div class="media-body">
                          <h4 class="mt-0 mb-1">{{post.title}}</h4>
                      </div>
                  </div>
                    <vue-markdown class="card-new-text">{{post.description_full}}</vue-markdown>
                </section>
            </div>
            <!-- Financial -->
            <div class="col-lg-3 pr-md-0 ">
                <h3 class="text-left card-new-heading">Financial</h3>
                <div class="table-responsive card-new-layout">
                    <table class="table">
                        <tbody>
                        <tr>
                            <td class="text-bold pl-1">ICO Type</td>
                            <td v-if="post.type===0">Pre-ICO</td>
                            <td v-else>ICO</td>
                        </tr>
                        <tr>
                            <td class="text-bold pl-1">Token Name</td>
                            <td>{{post.coin_name}}</td>
                        </tr>
                        <tr>
                            <td class="text-bold pl-1">Soft Cap</td>
                            <td>{{post.minimum_goal}} {{post.coin_unit}}</td>
                        </tr>
                        <tr>
                            <td class="text-bold pl-1">Hard Cap</td>
                            <td>{{post.maximum_goal}} {{post.coin_unit}}</td>
                        </tr>
                        <!--<tr>-->
                        <!--<td class="text-bold pl-1">Bonus</td>-->
                        <!--<td></td>-->
                        <!--</tr>-->
                        <tr>
                            <td class="text-bold pl-1">Tokens for Sale</td>
                            <td>{{post.equality_on_offer}}%</td>
                        </tr>
                        <tr>
                            <td class="text-bold pl-1">Accepting</td>
                            <td>{{post.coin_unit}}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    name: 'CompanyPage',
    components: {
      'vue-markdown': VueMarkdown
    },
    data () {
      return {
        new_reply: '',
        new_comment: '',
        delete_comment_id: 0,
        // UI Control
        reply_comment_box_show: false,
        reply_comment_box_index: -1,
        marked: false,
        unsubscribe: false,
        // Data Load Trigger
        team_loaded: false,
        comments_loaded: false
      }
    },
    methods: {
      commentCreatorName (creator) {
        if (creator.info.first_name && creator.info.last_name) {
          return creator.info.first_name + ' ' + creator.info.last_name
        } else {
          return creator.email
        }
      },
      newComment () {
        const formData = {
          pk: this.post.id,
          content: this.new_comment
        }
        this.$store.dispatch('postComment', formData)
          .then(() => {
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'You have posted new comment!'})
            this.new_comment = ''
          })
      },
      newReply (comment_id) {
        const formData = {
          pk: comment_id,
          content: this.new_reply
        }
        this.$store.dispatch('replyComment', formData)
          .then(() => {
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'You have posted new comment!'})
            this.new_reply = ''
            // UI Control
            this.reply_comment_box_show = false
            this.reply_comment_box_index = -1
          })
      },
      preDeleteComment (comment_id) {
        this.delete_comment_id === 0 ? this.delete_comment_id = comment_id : this.delete_comment_id = 0
      },
      deleteComment (comment_id) {
        this.$store.dispatch('deleteComment', comment_id)
          .then(() => {
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'You removed your comment!'})
            this.new_comment = ''
          })
      },
      markPost () {
        this.$store.dispatch('markPost', this.post.id)
          .then(() => {
            this.marked = true
            this.$store.dispatch('toastr', {
              type: 'success',
              title: 'Success',
              message: 'The selected ICO is added to your subscription list, you\'ll receive free updates from now on'
            })
          })
      },
      unmarkPost () {
        this.$store.dispatch('markPost', this.post.id)
          .then(() => {
            this.marked = false
            this.$store.dispatch('toastr', {
              type: 'success',
              title: 'Success',
              message: 'The selected ICO is removed from your subscription list'
            })
          })
      },
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
        if (!end) {
          return moment(start).format('MMM DD [at] hh:mma')
        }
        if (moment().diff(start, 'minutes') < 0) {
          return moment(start).format('YYYY/MM/DD, hh:mm a')
        }
        else {
          return moment(end).format('YYYY/MM/DD, hh:mm a')
        }
      },
    },
    computed: {
      post () {
        return this.$store.getters.current_post
      },
      current_team_members () {
        return this.$store.getters.current_team_members
      },
      current_team () {
        return this.$store.getters.current_team
      },
      current_post_comments () {
        return this.$store.getters.current_post_comments
      },
      login_status () {
        return this.$store.getters.login_status
      },
      me () {
        return this.$store.getters.self
      },
      is_team_member () {
        for (let member of this.current_team_members) {
          if (this.me.info.id === member.id) {
            return true
          }
        }
        return false
      },
      self_marked_posts () {
        return this.$store.getters.self_marked_posts
      },
    },
    beforeMount () {
      this.team_loaded = false
      this.comments_loaded = false
      for (let p of this.self_marked_posts) {
        if (this.post.id === p.id)
          this.marked = true
      }
      this.$store.dispatch('getComments', this.$store.getters.current_post.id)
        .then(() => {
          this.comments_loaded = true
        })
      this.$store.dispatch('getTeam', this.$store.getters.current_post.team.id)
        .then(() => {
          this.team_loaded = true
        })
    },
  }
</script>
