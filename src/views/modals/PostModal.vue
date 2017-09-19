<template>
    <div class="modal" id="post-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-xlg modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="media">
                        <img class="d-flex rounded mr-3" :src="post.logo_image" width="75" alt="Media">
                        <div class="media-body">
                            <h3 class="mt-0 mb-1 text-bold">{{post.title}}
                            </h3>
                            <span class="d-block text-sm text-muted">
                                {{post.description_short}}
                            </span>
                            <span class="badge badge-sm badge-default">{{post.category}}</span>
                        </div>
                    </div>
                    <p class="mb-0">
                        <router-link :to="{name:'post', params:{id:post.id}}" data-dismiss="modal" class="btn btn-outline-primary btn-sm mr-2">
                            Full Page
                        </router-link>
                    </p>
                </div>
                <div class="modal-body light-grey">
                    <div class="row post-modal ml-3 mr-3 mb-3">
                        <div class="col-lg-8 pl-0">
                          <div  class="card-new-layout">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe :src="post.video_link" class="embed-responsive-item" allowfullscreen></iframe>
                            </div>
                          </div>
                            <p class="text-center">
                                <a class="social-button shape-circle" :href="post.slack" v-if="post.slack"><i
                                        class="fa fa-slack"></i></a>
                                <a class="social-button shape-circle" :href="post.twitter" v-if="post.twitter"><i
                                        class="socicon-twitter"></i></a>
                                <a class="social-button shape-circle" :href="post.telegram" v-if="post.telegram"><i
                                        class="socicon-telegram"></i></a>
                                <a class="social-button shape-circle" :href="post.medium" v-if="post.medium"><i
                                        class="socicon-medium"></i></a>
                            </p>
                        </div>
                        <div class="col-lg-4 pr-0">
                            <section class="card-new-layout">
                                <h3 class="widget-title mb-2">Rating
                                    <span class="text-sm text-black">
                                       <router-link :to="{name:'terms', query:{type:'rating'}}" data-dismiss="modal">
                                           <i class="fa fa-question-circle"></i>
                                       </router-link>
                                    </span>
                                </h3>
                                <router-link :to="{name:'post_rating_detail', params:{id:post.id}}">
                                    <h2 class="text-bold text-info text-center" v-if="post.rating">
                                        {{post.rating}}/100</h2>
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

                                <button class="btn btn-outline-danger btn-sm btn-block" v-if="!marked"
                                        @click="markPost()">
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

                    <div class="row post-modal ml-3 mr-3 mb-3">
                        <!-- Description -->
                        <div class="col-lg-8 pl-0">
                          <h3 class="text-left card-new-heading">Description</h3>
                          <section class="card-new-layout">
                              <vue-markdown class="card-new-text text-left" :source="post.description_full"></vue-markdown>
                            </section>
                        </div>
                        <!-- Financial -->
                        <div class="col-lg-4 pr-0">
                            <h3 class="text-left card-new-heading">Financial</h3>
                            <section class="table-responsive  card-new-layout">
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
                            </section>
                        </div>
                    </div>
                    <div class="row ml-3 mr-3">
                        <!-- Team -->
                          <div class="col-lg-8 pl-md-0 pl-md-0 " >
                          <h3 class="text-left card-new-heading">Team</h3>

                          <div class="card-new-layout">
                            <div class="row" v-if="team_loaded">
                                <div class="col-md-3 col-sm-6 mb-3 text-center"
                                     v-for="member in current_team_members"
                                     v-if="!member.is_advisor">
                                    <router-link :to="{name:'user_created', params:{id:member.account}}"
                                                 data-dismiss="modal">
                                        <img class="img-thumbnail rounded-circle mb-2" height="100" width="100"
                                             :src="member.avatar" alt="Team Member">
                                    </router-link>
                                    <h6>{{member.first_name}} {{member.last_name}}</h6>
                                    <p class="text-muted mb-2">{{member.title}}</p>
                                    <div class="social-bar">
                                        <a :href="member.facebook" target="_blank"
                                           class="social-link branding-facebook"
                                           v-if="member.facebook">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                        <a :href="member.twitter" class="social-link branding-twitter" target="_blank"
                                           v-if="member.twitter">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                        <a :href="member.linkedin" class="social-link branding-linkedin" target="_blank"
                                           v-if="member.linkedin">
                                            <i class="fa fa-linkedin-square"></i>
                                        </a>
                                        <a :href="member.telegram" class="social-link branding-linkedin" target="_blank"
                                           v-if="member.telegram">
                                            <i class="fa fa-telegram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="row ml-3 mr-3">
                        <!-- Advisors -->
                        <div class="col-lg-8 pl-md-0 pl-md-0 " >
                            <h3 class="text-left card-new-heading">Advisors</h3>

                            <div class="card-new-layout" v-if="team_loaded">
                              <div class="row">
                                <div class="col-md-3 col-sm-6 mb-3 text-center"
                                     v-for="member in current_team_members"
                                     v-if="member.is_advisor">
                                    <router-link :to="{name:'user_created', params:{id:member.account}}"
                                                 data-dismiss="modal">
                                        <img class="img-thumbnail rounded-circle mb-2" height="100" width="100"
                                             :src="member.avatar" alt="Team Member">
                                    </router-link>
                                    <h6>{{member.first_name}} {{member.last_name}}</h6>
                                    <p class="text-muted mb-2">{{member.title}}</p>
                                    <div class="social-bar">
                                        <a :href="member.facebook" target="_blank"
                                           class="social-link branding-facebook"
                                           v-if="member.facebook">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                        <a :href="member.twitter" class="social-link branding-twitter" target="_blank"
                                           v-if="member.twitter">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                        <a :href="member.linkedin" class="social-link branding-linkedin" target="_blank"
                                           v-if="member.linkedin">
                                            <i class="fa fa-linkedin-square"></i>
                                        </a>
                                        <a :href="member.telegram" class="social-link branding-linkedin" target="_blank"
                                           v-if="member.telegram">
                                            <i class="fa fa-telegram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="row ml-3 mr-3">
                        <!-- Comments -->
                        <div class="col-lg-8 pl-md-0 pl-md-0 " >
                            <h3 class="text-left card-new-heading">Comments</h3>
                            <ul class="comment mt-3 pl-3" v-if="comments_loaded">
                                <li class="media mb-3 pos-relative" v-for="comment in current_post_comments">
                                    <img :src="comment.creator.info.avatar"
                                         class="d-flex rounded-circle align-self-start mr-4" width="55">
                                    <div class="media-body">
                                        <h6 class="comment-title">{{commentCreatorName(comment.creator)}}
                                            <span class="badge badge-primary" v-if="is_team_member">Team Member</span>
                                        </h6>
                                        <p class="mb-1">
                                            {{comment.content}}
                                        </p>
                                        <p>
                                            <i class="fa fa-calendar"></i> {{formatTime(comment.created)}}
                                            <a class="reply-link float-right" href="javascript:void(0)"
                                               v-if="login_status"
                                               @click="reply_comment_box_index=comment.id;reply_comment_box_show=true">
                                                <i class="icon-reply"></i>Reply
                                            </a>
                                            <a class="reply-link float-right mr-3" href="javascript:void(0)"
                                               v-if="comment.creator.id===me.id"
                                               @click="preDeleteComment(comment.id)">
                                                <i class="fa fa-times"></i>
                                                <span v-if="delete_comment_id===comment.id">Cancel</span>
                                                <span v-else>delete</span>
                                            </a>
                                            <a class="reply-link text-danger float-right mr-3" href="javascript:void(0)"
                                               v-if="delete_comment_id===comment.id"
                                               @click="deleteComment(comment.id)">
                                                <i class="fa fa-times"></i>This will delete all replies, confirm?
                                            </a>
                                        </p>
                                        <!-- Nested reply area-->
                                        <div class="row"
                                             v-if="reply_comment_box_show&&reply_comment_box_index===comment.id">
                                            <div class="col-md-12 mb-2">
                                              <textarea rows="4" class="form-control" v-model="new_reply"
                                                        placeholder="Reply"></textarea>
                                            </div>
                                            <div class="col-md-12">
                                                <button class="btn btn-sm btn-primary float-right"
                                                        @click="newReply(comment.id)">
                                                    Reply
                                                </button>
                                                <button class="btn btn-sm btn-secondary float-right"
                                                        @click="reply_comment_box_show=!reply_comment_box_show">
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>

                                        <!-- Nested media object -->
                                        <div class="media mt-4 mb-2 pos-relative" v-for="reply in comment.replies">
                                            <img :src="reply.creator.info.avatar"
                                                 class="d-flex rounded-circle align-self-start mr-4"
                                                 width="55">
                                            <div class="media-body">
                                                <h6 class="comment-title">{{commentCreatorName(reply.creator)}}
                                                    <span class="badge badge-primary"
                                                          v-if="is_team_member">Team Member</span>
                                                </h6>
                                                <p class="mb-1">
                                                    {{reply.content}}
                                                </p>
                                                <p>
                                                    <i class="fa fa-calendar"></i> {{formatTime(reply.created)}}
                                                    <a class="reply-link float-right mr-3" href="javascript:void(0)"
                                                       v-if="reply.creator.id===me.id"
                                                       @click="preDeleteComment(reply.id)">
                                                        <i class="fa fa-times"></i>
                                                        <span v-if="delete_comment_id===reply.id">Cancel</span>
                                                        <span v-else>delete</span>
                                                    </a>
                                                    <a class="reply-link text-danger float-right mr-3"
                                                       href="javascript:void(0)"
                                                       v-if="delete_comment_id===reply.id"
                                                       @click="deleteComment(reply.id)">
                                                        <i class="fa fa-times"></i>Confirm
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="row" v-if="login_status">
                                <div class="col-md-12 mb-2">
                                    <label class="sr-only">Comment</label>
                                    <textarea rows="4" class="form-control" v-model="new_comment"
                                              placeholder="Comment"></textarea>
                                </div>
                            </div>
                            <button @click="newComment()" v-if="login_status" class="btn btn-primary float-right">
                                Submit
                            </button>
                            <button class="btn btn-sm btn-outline-secondary" data-toggle="modal"
                                    data-dismiss="modal" data-target="#login-modal"
                                    v-if="!login_status">Login to leave comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'PostModal',
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
      }
    },
    watch: {
      'post': function () {
        this.team_loaded = false
        this.comments_loaded = false

        this.$store.dispatch('getComments', this.$store.getters.current_post.id)
          .then(() => {
            this.comments_loaded = true
          })

        this.$store.dispatch('getTeam', this.$store.getters.current_post.team.id)
          .then(() => {
            this.team_loaded = true
          })
      }
    }
  }
</script>
