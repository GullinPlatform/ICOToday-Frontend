<template>
  <div class="modal" id="project-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xlg modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="media">
            <img class="d-flex rounded mr-3" :src="project.logo_image" width="75" alt="Media">
            <div class="media-body">
              <h4 class="mt-0 mb-1 text-bold">{{project.name}} <span v-if="project.status===0" class="badge badge-info">Verifying</span></h4>
              <span class="d-block text-sm text-muted">{{project.description_short}}</span>
              <span class="badge badge-sm badge-default text-sm">{{project.category}}</span>
            </div>
          </div>
          <p class="mb-0">
            <button class="btn btn-outline-danger btn-sm btn-block" v-if="!marked"
                    @click="markProject()">
              <span><i class="fa fa-star-o"></i> Subscribe</span>
            </button>
            <button class="btn btn-danger btn-sm btn-block" v-else @click="unmarkProject()"
                    @mouseover="unsubscribe=true" @mouseleave="unsubscribe=false">
              <span v-if="unsubscribe">unsubscribe</span>
              <span v-else><i class="fa fa-check"></i> Subscribed</span>

            </button>
            <!--<router-link :to="{name:'project', params:{id:project.id}}" data-dismiss="modal" class="btn btn-outline-primary btn-sm mr-2">-->
            <!--Full Page-->
            <!--</router-link>-->
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
              <!--Team-->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Team Members</h6>
                <hr class="mb-3 mt-2">
                <div class="row" v-if="team_loaded">
                  <div class="col-sm-6 mb-3"
                       v-for="member in team_members"
                       v-if="!member.is_advisor">
                    <div class="d-table">
                      <router-link :to="{name:'user_created', params:{id:member.account}}" data-dismiss="modal">
                        <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                             width="100" :src="member.avatar">
                      </router-link>
                      <div class="pl-3 d-table-cell align-middle">
                        <h6>{{member.full_name}}
                          <span class="text-muted text-sm mb-2">{{member.title}}</span></h6>
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
                       v-if="member.is_advisor">
                    <div class="d-table">
                      <router-link :to="{name:'user_created', params:{id:member.account}}" data-dismiss="modal">
                        <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                             width="100" :src="member.avatar">
                      </router-link>
                      <div class="pl-3 d-table-cell align-middle">
                        <h6>{{member.full_name}}
                          <span class="text-muted text-sm mb-2">{{member.title}}</span></h6>
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
              <!--Feeds-->
              <div class="comment" v-if="feeds_loaded">
                <div class="media pos-relative card-new-layout" v-for="feed in feeds">
                  <img :src="feed.creator.avatar"
                       class="d-flex rounded-circle align-self-start mr-4" width="55">
                  <div class="media-body">
                    <h6 class="comment-title">{{feed.creator.full_name}}
                      <span class="text-muted">@ {{feed.creator.company.name}}</span>
                      <!--<span class="badge badge-primary" v-if="is_team_member">Team Member</span>-->
                    </h6>
                    <p class="mb-1">
                      {{feed.content}}
                    </p>
                    <p class="mb-0">
                      <i class="fa fa-calendar"></i> {{timeFromNow(feed.created)}}
                      <a class="reply-link float-right" href="javascript:void(0)" v-if="feed.creator.id===me.id"
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
                        <textarea rows="4" class="form-control" v-model="reply" placeholder="Reply"></textarea>
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
                        <h6 class="comment-title">{{reply.creator.full_name}}
                          <!--<span class="badge badge-primary" v-if="is_team_member">Team Member</span>-->
                        </h6>
                        <p class="mb-1">
                          {{reply.content}}
                        </p>
                        <p class="mb-0">
                          <i class="fa fa-calendar"></i> {{timeFromNow(reply.created)}}
                          <a class="reply-link float-right" href="javascript:void(0)"
                             v-if="reply.creator.id===me.id"
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

            <div class="col-lg-4 pr-md-0">
              <!--Score-->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Rating
                  <router-link :to="{name:'terms', query:{type:'rating'}}" data-dismiss="modal">
                    <i class="fa fa-question-circle"></i>
                  </router-link>
                </h6>
                <hr class="mb-3 mt-2">
                <h3>
                  <span class="text-sm text-black">
                  </span>
                </h3>
                <router-link :to="{name:'project_rating_detail', params:{id:project.id}}">
                  <h2 class="text-bold text-info text-center" v-if="project.rating">
                    {{project.rating}}/100</h2>
                </router-link>
                <h2 class="text-bold text-info text-center" v-if="!project.rating">No Score</h2>
              </div>
              <!-- Time -->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Time</h6>
                <hr class="mb-3 mt-2">
                <h2 class="text-center mb-0">
                  {{timeCounter(project.start_datetime, project.end_datetime)}}
                </h2>
                <p class="text-center"> {{formatTime(project.start_datetime, project.end_datetime)}}</p>
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
                          @click="project_detail=true;feed_detail=false;rating_derail=false">Back</button>
                </div>
              </div>
              <!--Other-->
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
                    <td class="text-bold">{{project.coin_name}}</td>
                  </tr>
                  <tr>
                    <td class="pl-1">Soft Cap</td>
                    <td class="text-bold">{{project.minimum_goal}} {{project.coin_unit}}</td>
                  </tr>
                  <tr>
                    <td class="pl-1">Hard Cap</td>
                    <td class="text-bold">{{project.maximum_goal}} {{project.coin_unit}}</td>
                  </tr>
                  <tr>
                    <td class="pl-1">Tokens for Sale</td>
                    <td class="text-bold">{{project.equality_on_offer}}%</td>
                  </tr>
                  <tr>
                    <td class="pl-1">Accepting</td>
                    <td class="text-bold">{{project.coin_unit}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!-- Social Media -->
              <div class="card-new-layout">
                <h6 class="text-muted text-normal text-uppercase">Social Media</h6>
                <hr class="mb-2 mt-2">
                <p class="text-center">
                  <a class="social-button shape-circle" :href="project.slack" v-if="project.slack"><i
                    class="fa fa-slack"></i></a>
                  <a class="social-button shape-circle" :href="project.twitter" v-if="project.twitter"><i
                    class="socicon-twitter"></i></a>
                  <a class="social-button shape-circle" :href="project.telegram" v-if="project.telegram"><i
                    class="socicon-telegram"></i></a>
                  <a class="social-button shape-circle" :href="project.medium" v-if="project.medium"><i
                    class="socicon-medium"></i></a>
                </p>
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
        new_reply: '',
        new_comment: '',
        delete_comment_id: 0,
        // UI Control
        project_detail: true,
        feed_detail: false,
        rating_derail: false,
        marked: false,
        unsubscribe: false,
        reply_feed_box_show: false,
        reply_feed_box_index: '',
        delete_feed_id: '',
        // Data Load Trigger
        team_loaded: false,
        feeds_loaded: false
      }
    },
    methods: {
      markProject () {
        this.$store.dispatch('markProject', this.project.id)
          .then(() => {
            this.marked = true
            this.$store.dispatch('toastr', {
              type: 'success',
              title: 'Success',
              message: 'The selected ICO is added to your subscription list, you\'ll receive free updates from now on'
            })
          })
      },
      unmarkProject () {
        this.$store.dispatch('markProject', this.project.id)
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
          pk: this.project.id,
          content: this.new_comment
        }
        this.$store.dispatch('projectComment', formData)
          .then(() => {
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'You have projected new comment!'})
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
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'You have projected new comment!'})
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
      timeFromNow (time) {
        return moment(time).fromNow()
      },
      deleteFeed (id) {
        this.$store.dispatch('deleteFeed', id)
          .then(() => {
            this.loadMyFeed()
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your feed is deleted.'})
          })
      },
      deleteID (id) {
        if (this.delete_feed_id === id)
          this.delete_feed_id = ''
        else
          this.delete_feed_id = id
      },
    },
    computed: {
      ...mapGetters({
        me: 'self',
        login_status: 'login_status',
        project: 'current_project',
        team_members: 'current_company_members',
        self_company: 'self_company',
        self_admin: 'self_admin',
        feeds: 'company_feeds',
      })
    },
    watch: {
      'project': function () {
        this.team_loaded = false
        this.feeds_loaded = false
        this.$store.dispatch('companyFeed', this.$store.getters.current_project.company)
          .then(() => {
            this.feeds_loaded = true
          })
        this.$store.dispatch('getCompanyMembers', this.$store.getters.current_project.company)
          .then(() => {
            this.team_loaded = true
          })
      }
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
</style>
