
<template >
    <div class="light-grey">
    <!-- Page Content-->
    <div class="container padding-bottom-3x mb-2 mt-md-3 pl-3 pr-3 " style="padding-top:60px;">



        <div class="row post-modal">
          <div class="col-lg-3 ml-5">

              <div>

              <section>
                  <h3 class="widget-title mb-2">Unread</h3>
                  <h3 class="widget-title mb-2">Read</h3>
                  <h3 class="widget-title mb-2">All</h3>
              </section>
          </div>
        </div>

        <!-- Description -->
        <div class="col-lg-6 pl-md-0 pl-md-0 ml-5 " >
          <h3 class="text-left card-new-heading">Notifications</h3>
            <section class="card-new-layout">
              <div class="post-header">

                  <img class="d-flex rounded mr-3 ml-3" :src="post.logo_image" width="50" alt="Media">

                  <div class="media-body">
                      <p class="mt-0 mb-1">{{post.title}} <span style="color:#030303;font-size:12px; font-weight: normal;">has subsribed to your account</span></p>
                  </div>
              </div>
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
