<template>
  <div class="modal" id="project-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xlg modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header ml-3 mr-3">
          <div class="media">
            <img class="d-flex rounded mr-3" :src="project.logo_image" width="75" alt="Media">
            <div class="media-body">
              <h4 class="mt-0 mb-1 text-bold">{{project.name}} <span v-if="project.status===0" class="badge badge-info"><i class="fa fa-warning"></i> Verifying</span></h4>
              <span class="d-block text-sm text-muted">{{project.description_short}}</span>
              <span class="badge badge-sm badge-default text-sm">{{project.category}}</span>
            </div>
          </div>
          <p class="mb-0">
            <button class="btn btn-warning btn-sm btn-block" v-if="!subscribed"
                    @click="subscribeProject()">
              <span><i class="fa fa-star-o"></i> Subscribe</span>
            </button>
            <button class="btn btn-warning btn-sm btn-block" v-else @click="unsubscribeProject()"
                    @mouseover="unsubscribe=true" @mouseleave="unsubscribe=false">
              <span v-if="unsubscribe">unsubscribe</span>
              <span v-else><i class="fa fa-check"></i> Subscribed</span>
            </button>
          </p>
        </div>
        <div class="modal-body light-grey">
          <div class="row project-modal ml-3 mr-3 mb-3">
            <div class="col-lg-8 pl-md-0" v-if="project_detail">
              <!--Video-->
              <div class="card-new-layout">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe :src="project.video_link" class="embed-responsive-item" allowfullscreen></iframe>
                </div>
              </div>
              <!--Description-->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Description</h6>
                <hr class="mb-3 mt-2">
                <vue-markdown class="text-left" :source="project.description_full"></vue-markdown>
              </div>
              <!--Token Sale Plan-->
              <div class="card-new-layout" v-if="project.token_sale_plan">
                <h6 class="text-muted text-normal text-uppercase">Token Sale Plan</h6>
                <hr class="mb-3 mt-2">
                <div class="text-left">{{project.token_sale_plan}}</div>
              </div>
              <!--Team-->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Team Members</h6>
                <hr class="mb-3 mt-2">
                <div class="row" v-if="team_loaded">
                  <div class="col-sm-6 mb-3"
                       v-for="member in team_members"
                       v-if="member.type!=3">
                    <div class="d-table">
                      <router-link :to="{name:'user', params:{id:member.id}}" target="_blank">
                        <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                             width="100" :src="member.avatar">
                      </router-link>
                      <div class="pl-3 d-table-cell align-middle">
                        <h6 class="mb-0">
                          <router-link class="text-gray-dark" :to="{name:'user', params:{id:member.id}}" target="_blank">
                            {{member.full_name}}
                          </router-link>
                          <i class="fa fa-check text-primary" v-if="member.is_verified"></i>
                        </h6>
                        <span class="text-muted text-sm mb-2">{{member.title}}</span>
                        <p>{{member.description}}</p>
                        <div class="social-bar">
                          <a :href="member.facebook" class="social-link branding-facebook" target="_blank"
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
              <!-- Advisors -->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Advisors</h6>
                <hr class="mb-3 mt-2">
                <div class="row" v-if="team_loaded">
                  <div class="col-sm-6 mb-3"
                       v-for="member in team_members"
                       v-if="member.type===3">
                    <div class="d-table">
                      <router-link :to="{name:'user', params:{id:member.id}}" target="_blank">
                        <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                             width="100" :src="member.avatar">
                      </router-link>
                      <div class="pl-3 d-table-cell align-middle">
                        <h6 class="mb-0">
                          <router-link class="text-gray-dark" :to="{name:'user', params:{id:member.id}}" target="_blank">
                            {{member.full_name}}
                          </router-link>
                          <i class="fa fa-check text-primary" v-if="member.is_verified"></i>
                        </h6>
                        <span class="text-muted text-sm mb-2">{{member.title}}</span>
                        <p>{{member.description}}</p>
                        <div class="social-bar">
                          <a :href="member.facebook" class="social-link branding-facebook" target="_blank"
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
            </div>
            <div class="col-lg-8 pl-md-0" v-else-if="feed_detail">
              <!--If user not login-->
              <div class="card-new-layout text-center" v-if="!login_status">
                <h4 class="mt-3">
                  <!--TODO: Need change the text-->
                  This information is reserved for our login user
                </h4>
                <a href="javascript:void(0)" data-toggle="modal" data-target="#signup-modal" data-dismiss="modal" class="btn btn-primary mt-2">Sign Up</a>
              </div>
              <!--Feeds-->
              <div class="comment" v-else-if="feeds_loaded">
                <div class="media pos-relative card-new-layout" v-if="!feeds.length">
                  <div class="media-body text-center">
                    <h5 class="m-0">No updates right now, try come back later?</h5>
                  </div>
                </div>
                <div class="media pos-relative card-new-layout" v-for="feed in feeds">
                  <img :src="feed.creator.avatar"
                       class="d-flex rounded-circle align-self-start mr-4" width="55">
                  <div class="media-body">
                    <h6 class="comment-title">
                      <router-link :to="{name:'user', params:{id:feed.creator.id}}" class="text-gray-dark" target="_blank">
                        {{feed.creator.full_name}}
                      </router-link>
                      <span class="text-muted">@ {{feed.creator.company.name}}</span>
                    </h6>
                    <p class="mb-1">{{feed.content}}</p>
                    <p class="mb-0">
                      <i class="fa fa-clock-o"></i> {{timeFromNow(feed.created)}}
                      <a class="reply-link float-right" href="javascript:void(0)" v-if="feed.creator.account===me.id"
                         @click="deleteID(feed.id)">
                        <span v-if="delete_feed_id===feed.id">Cancel</span>
                        <span v-else><i class="fa fa-times"></i> delete</span>
                      </a>
                      <a class="reply-link text-danger float-right mr-3" href="javascript:void(0)"
                         v-if="delete_feed_id===feed.id"
                         @click="deleteFeed(feed.id)">
                        <i class="fa fa-times"></i>Confirm
                      </a>
                      <a class="reply-link float-right mr-3" href="javascript:void(0)"
                         v-if="login_status"
                         @click="reply_feed_box_index=feed.id;reply_feed_box_show=true">
                        <i class="icon-reply"></i>Reply
                      </a>

                    </p>
                    <!-- Nested reply area-->
                    <div class="row" v-if="reply_feed_box_show&&reply_feed_box_index===feed.id">
                      <div class="col-md-12 mt-2">
                        <textarea rows="4" class="form-control" v-model="new_reply" placeholder="Leave your reply here..."></textarea>
                      </div>
                      <div class="col-md-12">
                        <button class="btn btn-sm btn-primary float-right"
                                @click="newReply(feed.id)">
                          Reply
                        </button>
                        <button class="btn btn-sm btn-secondary float-right"
                                @click="reply_feed_box_show=!reply_feed_box_show">
                          Cancel
                        </button>
                      </div>
                    </div>

                    <!-- Nested media object -->
                    <div class="media mt-4 pos-relative" v-for="reply in feed.replies">
                      <img :src="reply.creator.avatar"
                           class="d-flex rounded-circle align-self-start mr-4"
                           width="55">
                      <div class="media-body">
                        <h6 class="comment-title">
                          <router-link :to="{name:'user', params:{id:reply.creator.id}}" class="text-gray-dark" target="_blank">
                            {{feed.creator.full_name}}
                          </router-link>
                        </h6>
                        <p class="mb-1">{{reply.content}}</p>
                        <p class="mb-0">
                          <i class="fa fa-clock-o"></i> {{timeFromNow(reply.created)}}
                          <a class="reply-link float-right" href="javascript:void(0)"
                             v-if="reply.creator.account===me.id"
                             @click="deleteID(reply.id)">
                            <i class="fa fa-times"></i>
                            <span v-if="delete_feed_id===reply.id">Cancel</span>
                            <span v-else>delete</span>
                          </a>
                          <a class="reply-link text-danger float-right mr-3"
                             href="javascript:void(0)"
                             v-if="delete_feed_id===reply.id"
                             @click="deleteFeed(reply.id)">
                            <i class="fa fa-times"></i>Confirm
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 pl-md-0" v-else-if="rating_derail">
              <!--If user not login-->
              <div class="card-new-layout text-center" v-if="!login_status">
                <h4 class="mt-3">
                  <!--TODO: Need change the text-->
                  This information is reserved for our login user
                </h4>
                <a href="javascript:void(0)" data-toggle="modal" data-target="#signup-modal" data-dismiss="modal" class="btn btn-primary mt-2">Sign Up</a>
              </div>
              <!--Ratings-->
              <div class="comment" v-else-if="ratings_loaded">
                <div class="media pos-relative card-new-layout" v-if="!rating_details.length">
                  <div class="media-body text-center">

                    <h5 class="m-0" v-if="self_type===2">Be the first one to rate this project!</h5>

                    <h5 class="m-0" v-else>No ratings right now, try come back later?</h5>
                  </div>
                </div>

                <div class="card-new-layout" v-if="self_type===2 && !selfRated()">
                  <h6 class="text-muted text-normal text-uppercase ">New Rating</h6>
                  <hr class="mb-3 mt-2">
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Score</label>
                    <div class="col-sm-10">
                      <input class="form-control" v-model="new_rating_detail_score" placeholder="Between 0 and 100">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Pros</label>
                    <div class="col-sm-10">
                      <textarea class="form-control"
                                style="resize:none" rows="4"
                                placeholder="What's the good part of this project?"
                                v-model="new_rating_detail_pros">
                      </textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Cons</label>
                    <div class="col-sm-10">
                      <textarea class="form-control"
                                style="resize:none" rows="4"
                                placeholder="What's the 'not that good' part of this project?"
                                v-model="new_rating_detail_cons">
                      </textarea>
                    </div>
                  </div>

                  <div class="row justify-content-end">
                    <div class="col-sm-10">
                      <button @click="newRating()" class="btn btn-sm btn-primary btn-block">Post</button>
                    </div>
                  </div>
                </div>

                <div class="media pos-relative card-new-layout" v-for="detail in rating_details">
                  <img :src="detail.rater.avatar"
                       class="d-flex rounded-circle align-self-start mr-4" width="55">
                  <div class="media-body">
                    <h6 class="comment-title">
                      <router-link :to="{name:'user', params:{id:detail.rater.id}}" class="text-gray-dark" target="_blank">
                        {{detail.rater.full_name}}
                      </router-link>
                      <span class="text-muted" v-if="detail.rater.title">{{detail.rater.title}}</span>
                      <span class="float-right"><i class="fa fa-clock-o"></i> {{timeFromNow(detail.created)}}</span>
                    </h6>
                    <p class="mb-1 rating-detail">{{detail.content}}</p>
                    <h5 class="mb-0">
                      Score: <span class="text-bold text-primary">{{detail.score}}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 pr-md-0">
              <!--Score-->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Rating
                  <router-link :to="{name:'terms', query:{type:'rating'}}" target="_blank">
                    <i class="fa fa-question-circle"></i>
                  </router-link>

                  <a class="float-right text-primary" href="javascript:void(0)" v-if="!rating_derail"
                     @click="project_detail=false;feed_detail=false;rating_derail=true">> Detail</a>
                  <a class="float-right text-primary" href="javascript:void(0)" v-else
                     @click="project_detail=true;feed_detail=false;rating_derail=false">> Back</a>
                </h6>
                <hr class="mb-3 mt-2">
                <h2 class="text-bold text-info text-center mb-0" v-if="project.rating">
                  <a href="javascript:void(0)" @click="rating_derail=true;project_detail=false;feed_detail=false">{{project.rating}}/100</a>
                </h2>
                <h2 class="text-bold text-info text-center mb-0" v-else>
                  <a href="javascript:void(0)" @click="rating_derail=true;project_detail=false;feed_detail=false">No Score</a>
                </h2>
                <div class="text-center" v-if="rating_derail">
                  <button class="btn btn-primary btn-sm"
                          @click="project_detail=true;feed_detail=false;rating_derail=false">Back
                  </button>
                </div>
              </div>
              <!-- Time -->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Time</h6>
                <hr class="mb-3 mt-2">
                <h2 class="text-center mb-0">
                  {{timeCounter(project.start_datetime, project.end_datetime)}}
                </h2>
                <p class="text-center mb-0 mt-2"> {{formatTime(project.start_datetime, project.end_datetime)}}</p>
                <div class="text-center">
                  <button class="btn btn-danger btn-sm" @click="autoInvest()" v-if="timeNotEnd(project.start_datetime, project.end_datetime)"><i class="fa fa-bitcoin"></i> PURCHASE TOKEN</button>
                </div>
              </div>
              <!--Updates-->
              <div class="card-new-layout widget-featured-posts">
                <h6 class="text-muted text-normal text-uppercase">
                  Updates
                  <a class="float-right text-primary" href="javascript:void(0)" v-if="!feed_detail"
                     @click="project_detail=false;feed_detail=true;rating_derail=false">> More</a>
                  <a class="float-right text-primary" href="javascript:void(0)" v-else
                     @click="project_detail=true;feed_detail=false;rating_derail=false">> Back</a>
                </h6>
                <hr class="mb-3 mt-2">
                <div class="entry mb-0 mt-3" v-for="(feed, index) in feeds" v-if="!feed_detail&&feeds_loaded&&index<2">
                  <div class="entry-thumb"><a href="#"><img :src="feed.creator.avatar" alt="Post"></a></div>
                  <div class="entry-content">
                    <h4 class="entry-title">{{feed.content}}</h4>
                    <p class="m-0">
                      <span class="entry-meta">by {{feed.creator.full_name}}</span>
                      <span class="entry-meta float-right">{{timeFromNow(feed.created)}}</span>
                    </p>
                  </div>
                </div>
                <spinner v-if="!feeds_loaded"></spinner>
                <div class="text-center" v-if="feeds_loaded&&!feeds.length">
                  Nothing Here~
                </div>
                <div class="text-center" v-if="feed_detail">
                  <button class="btn btn-primary btn-sm"
                          @click="project_detail=true;feed_detail=false;rating_derail=false">Back
                  </button>
                </div>
              </div>
              <!-- Financial -->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Financial</h6>
                <hr class="mb-2 mt-2">
                <table class="table mb-0">
                  <tbody>
                  <tr>
                    <td class="pl-1">ICO Type</td>
                    <td class="text-bold" v-if="project.type===0">Pre-ICO</td>
                    <td class="text-bold" v-else>ICO</td>
                  </tr>
                  <tr>
                    <td class="pl-1">Token Name</td>
                    <td class="text-bold" v-if="project.coin_name">{{project.coin_name}}</td>
                    <td class="text-bold" v-else>-</td>
                  </tr>
                  <tr>
                    <td class="pl-1">Initial Price</td>
                    <td class="text-bold" v-if="project.initial_price">$ {{project.initial_price}}</td>
                    <td class="text-bold" v-else>-</td>
                  </tr>
                  <tr>
                    <td class="pl-1">Soft Cap</td>
                    <td class="text-bold" v-if="project.minimum_goal&&project.coin_unit">{{project.minimum_goal}} {{project.coin_unit}}</td>
                    <td class="text-bold" v-else>-</td>
                  </tr>
                  <tr>
                    <td class="pl-1">Hard Cap</td>
                    <td class="text-bold" v-if="project.maximum_goal&&project.coin_unit">{{project.maximum_goal}} {{project.coin_unit}}</td>
                    <td class="text-bold" v-else>-</td>
                  </tr>
                  <tr>
                    <td class="pl-1">Tokens for Sale</td>
                    <td class="text-bold" v-if="project.equality_on_offer">{{project.equality_on_offer}}%</td>
                    <td class="text-bold" v-else>-</td>
                  </tr>
                  <tr>
                    <td class="pl-1">Accepting</td>
                    <td class="text-bold" v-if="project.coin_unit">{{project.coin_unit}}</td>
                    <td class="text-bold" v-else>-</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!--Link-->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Link</h6>
                <hr class="mb-3 mt-2">
                <a class="btn btn-outline-primary btn-sm btn-block text-primary"
                   :href="project.white_paper" target="_blank">
                  <i class="fa fa-file-o"></i> White paper
                </a>
                <a class="btn btn-outline-secondary btn-sm btn-block" :href="project.website" target="_blank">
                  <i class="fa fa-globe"></i> Website
                </a>
              </div>
              <!-- Social Media -->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Social Media</h6>
                <hr class="mb-2 mt-2">
                <div class="text-center">
                  <a class="social-button shape-circle" :href="project.slack" v-if="project.slack"><i
                    class="fa fa-slack"></i></a>
                  <a class="social-button shape-circle" :href="project.twitter" v-if="project.twitter"><i
                    class="socicon-twitter"></i></a>
                  <a class="social-button shape-circle" :href="project.telegram" v-if="project.telegram"><i
                    class="socicon-telegram"></i></a>
                  <a class="social-button shape-circle" :href="project.medium" v-if="project.medium"><i
                    class="socicon-medium"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import VueMarkdown from 'vue-markdown'
  import Spinner from 'components/Spinner'

  export default {
    name: 'ProjectModal',
    components: {
      VueMarkdown,
      Spinner
    },
    data () {
      return {
        // rating
        new_rating_detail_pros: '',
        new_rating_detail_cons: '',
        new_rating_detail_score: null,

        // UI Control
        project_detail: true,
        feed_detail: false,
        rating_derail: false,

        // Subscription
        subscribed: false,
        unsubscribe: false,

        // reply
        new_reply: '',
        reply_feed_box_show: false,
        reply_feed_box_index: '',
        delete_feed_id: '',

        // Data Load Trigger
        team_loaded: false,
        feeds_loaded: false,
        ratings_loaded: false,
      }
    },
    methods: {
      // Data Loading
      loadMembers () {
        this.team_loaded = false
        this.$store.dispatch('getCompanyMembers', this.$store.getters.current_project.company.id)
          .then(() => {
            this.team_loaded = true
          })
      },
      loadFeed () {
        this.feeds_loaded = false
        this.$store.dispatch('companyFeed', this.$store.getters.current_project.company.id)
          .then(() => {
            this.feeds_loaded = true
          })
      },
      loadRatingDetail () {
        this.ratings_loaded = false
        this.$store.dispatch('getProjectRatingDetail', this.$store.getters.current_project.id)
          .then(() => {
            this.ratings_loaded = true
          })
      },

      // Subscriptions
      subscribeProject () {
        if (!this.login_status) {
          $('#signup-modal').show()
          return
        }
        this.$store.dispatch('markProject', this.project.id)
          .then(() => {
            this.subscribed = true
            this.$store.dispatch('toastr', {
              type: 'success',
              title: 'Success',
              message: 'The selected ICO is added to your subscription list, you\'ll receive updates from now on'
            })
          })
      },
      unsubscribeProject () {
        this.$store.dispatch('markProject', this.project.id)
          .then(() => {
            this.subscribed = false
            this.$store.dispatch('toastr', {
              type: 'success',
              title: 'Success',
              message: 'The selected ICO is removed from your subscription list'
            })
          })
      },

      // Feed features
      newReply (feed_id) {
        const form_data = {
          id: feed_id,
          content: this.new_reply
        }
        this.$store.dispatch('replyFeed', form_data)
          .then(() => {
            this.new_reply = ''
            // UI Control
            this.reply_feed_box_show = false
            this.reply_feed_box_index = -1
          })
      },
      deleteFeed (id) {
        this.$store.dispatch('deleteFeed', id)
          .then(() => {
            this.loadFeed()
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your feed is deleted.'})
          })
      },
      deleteID (id) {
        if (this.delete_feed_id === id)
          this.delete_feed_id = ''
        else
          this.delete_feed_id = id
      },

      // Rating Details
      newRating () {
        const form_data = {
          id: this.$store.getters.current_project.id,
          score: this.new_rating_detail_score,
          content: 'Pros: \n' + this.new_rating_detail_pros + '\nCons: \n' + this.new_rating_detail_cons
        }
        this.$store.dispatch('createProjectRatingDetail', form_data)
          .catch(() => {
            this.$store.dispatch('toastr', {
              type: 'danger',
              title: 'Error',
              message: 'Please try again later'
            })

          })
      },

      // Auto Investment
      autoInvest () {
        this.$store.dispatch('toastr', {
          type: 'warning',
          title: 'Warning',
          message: 'The auto investment feature will be released after our ICO!'
        })
      },

      // utils
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
      timeFromNow (time) {
        return moment(time).fromNow()
      },
      timeNotEnd (start, end) {
        if (moment().diff(start, 'minutes') < 0 || moment().diff(end, 'minutes') < 0) {
          return true
        } else {
          return false
        }
      },
      selfRated () {
        for (let detail of this.rating_details) {
          if (detail.rater.id === this.me.info.id)
            return true
        }
        return false
      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        login_status: 'login_status',
        project: 'current_project',
        marked_projects: 'self_marked_posts',
        team_members: 'current_company_members',
        self_type: 'self_type',
        self_company: 'self_company',
        self_admin: 'self_admin',
        feeds: 'company_feeds',
        rating_details: 'current_project_rating_detail'
      })
    },
    watch: {
      'project': function () {
        this.loadMembers()
        this.loadFeed()
        this.loadRatingDetail()
        // Check if project is marked
        this.subscribed = false
        for (let marked_project of this.marked_projects) {
          if (marked_project.id === this.project.id) {
            this.subscribed = true
          }
        }
      }
    },
    mounted () {
      $('#project-modal').on('hidden.bs.modal', function () {history.back()})
    }
  }
</script>

<style scoped>
  .table td {
    border-top: 0 !important;
  }

  .table tr {
    border-bottom: 1px solid #e9ecef;
  }

  .table tr:last-child {
    border-bottom: 0 !important;
  }

  .entry-meta {
    display: inline !important;
  }

  a {
    text-decoration: none;
  }

  .rating-detail {
    white-space: pre-line;
  }
</style>
