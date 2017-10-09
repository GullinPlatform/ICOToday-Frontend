<template>
  <div class="col-md-8" v-if="is_verified">
    <h6 class="text-muted text-normal text-uppercase ">Project Feed</h6>
    <hr class="mb-3 mt-2">
    <div class="card-new-layout text-center">
      <h6 class="m-0"><i class="fa fa-lightbulb-o"></i> Notice: The feed you post here will be shown on all your subscribers.</h6>
    </div>
    <div class="card-new-layout">
      <textarea class="form-control form-control-rounded" style="resize:none" v-model="content"
                rows="4" placeholder="Write your comment here...">
      </textarea>
      <div class="row justify-content-between mt-3">
        <button class="btn btn-sm btn-secondary m-0 ml-3">
          <i class="fa fa-camera"></i> Photo
        </button>

        <button @click="newFeed()" class="btn btn-sm btn-primary pull-right m-0 mr-3">
          Post
        </button>
      </div>
    </div>
    <div class="comment" v-if="loaded">
      <div class="media pos-relative card-new-layout" v-for="feed in feeds">
        <img :src="feed.creator.avatar"
             class="d-flex rounded-circle align-self-start mr-4" width="55">
        <div class="media-body">
          <h6 class="comment-title m-0">
            <router-link class="text-decoration-none text-gray-dark" :to="{name:'user', params:{id:feed.creator.id}}">{{feed.creator.full_name}}</router-link>
            <span class="text-muted">@ {{feed.creator.company.name}}</span>
            <small class="float-right">{{timeFromNow(feed.created)}}</small>
            <!--<span class="badge badge-primary" v-if="is_team_member">Team Member</span>-->
          </h6>

          <p class="mb-1">
            {{feed.content}}
          </p>
          <p class="mb-0">

            <a class="reply-link float-right" href="javascript:void(0)" v-if="feed.creator.account===me.id"
               @click="deleteID(feed.id)">
              <span v-if="delete_feed_id===feed.id">Cancel</span>
              <span v-else><i class="fa fa-times"></i> DELETE</span>
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
    <spinner class="mt-4" v-else></spinner>
    <div class="card-new-layout text-center" v-if="loaded&&!feeds.length">
      <h5>
        Nothing Here
      </h5>
      <p class="m-0">Please Check Back Later</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Spinner from 'components/Spinner'

  export default {
    name: 'CompanyFeed',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'My Feed'
      }
    },
    components: {Spinner},
    data () {
      return {
        loaded: false,
        uploading: false,
        reply_feed_box_show: false,
        reply_feed_box_index: '',
        delete_feed_id: '',
        error_message: '',

        content: '',
        image: '',
        reply: '',
      }
    },
    methods: {
      newFeed () {
        this.uploading = true
        const form_data = {
          content: this.content,
          company_id: this.self_company.id
        }
        this.$store.dispatch('newFeed', form_data)
          .then(() => {
            this.uploading = false
            this.content = ''
            this.image = ''
          })
      },
      newReply (id) {
        const form_data = {
          id: id,
          content: this.reply,
        }
        this.$store.dispatch('replyFeed', form_data)
          .catch(() => {
            this.$store.dispatch('toastr', {type: 'danger', title: 'Error', message: 'Please try again later.'})
            this.reply = ''
          })
      },
      loadCompanyFeed () {
        this.loaded = false
        this.$store.dispatch('companyFeed', this.self_company.id)
          .then(() => {
            this.loaded = true
          })
      },
      timeFromNow (time) {
        return moment(time).fromNow()
      },
      deleteFeed (id) {
        this.$store.dispatch('deleteFeed', id)
          .then(() => {
            this.loadCompanyFeed()
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
        username: 'self_name',
        self_company: 'self_company',
        is_verified: 'is_verified',
        login_status: 'login_status',
        feeds: 'company_feeds',
      })
    },
    beforeMount () {
      this.loadCompanyFeed()
    },
  }
</script>
