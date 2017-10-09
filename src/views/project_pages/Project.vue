<template>
  <div class="container container-padding">
    <div class="modal-header card-new-layout">
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
    <div class="row">
      <div class="col-lg-8">
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
            <div class="col-md-3 col-sm-6 mb-3 text-center"
                 v-for="member in current_team_members"
                 v-if="!member.is_advisor">
              <router-link :to="{name:'user', params:{id:member.account}}"
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
        <!-- Advisors -->
        <div class="card-new-layout">
          <h6 class="text-muted text-normal text-uppercase">Advisors</h6>
          <hr class="mb-3 mt-2">
          <div class="row" v-if="team_loaded">
            <div class="col-md-3 col-sm-6 mb-3 text-center"
                 v-for="member in current_team_members"
                 v-if="member.is_advisor">
              <router-link :to="{name:'user', params:{id:member.account}}"
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
      <div class="col-lg-4">
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
        <div class="card-new-layout">
          <h6 class="text-muted text-normal text-uppercase">
            Updates
            <a class="float-right text-primary">> More</a>
          </h6>
          <hr class="mb-3 mt-2">
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
</template>

<script>
  import { mapGetters } from 'vuex'
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'Post',
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
          id: this.project.id,
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
          id: comment_id,
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
    },
    computed: {
      ...mapGetters({
        me: 'self',
        login_status: 'login_status',
        project: 'current_project',
        team_members: 'current_team_members',
        self_company: 'self_company',
        self_admin: 'self_admin',
      })
    },
    beforeMount () {
      this.team_loaded = false
      this.comments_loaded = false
      for (let p of this.self_marked_posts) {
        if (this.post.id === p.id)
          this.marked = true
      }
      this.$store.dispatch('getComments', this.$store.getters.current_project.id)
        .then(() => {
          this.comments_loaded = true
        })
      this.$store.dispatch('getTeam', this.$store.getters.current_project.team.id)
        .then(() => {
          this.team_loaded = true
        })
    },
  }
</script>

<style lang="scss" scoped>
  .padding-bottom-top-3x {
    padding-bottom: 48px !important;
    padding-top: 20px !important;
  }

  .mt-5 {
    margin-top: 3rem !important;
  }

  .light-grey-fixed {
    background-color: #f9f9f9;
    margin-bottom: -50px;
  }
</style>
