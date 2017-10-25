<template>
  <div class="col-md-8" v-if="is_verified">
    <h6 class="text-muted text-normal text-uppercase ">My Feed</h6>
    <hr class="mb-3 mt-2">
    <div class="card-new-layout">
      <textarea class="form-control form-control-rounded" style="resize:none" v-model="content"
                rows="4" placeholder="What's in your mind?">
      </textarea>
      <div class="row justify-content-between mt-3">
        <button class="btn btn-sm btn-secondary m-0 ml-3"><i class="fa fa-camera"></i> Photo</button>
        <button @click="newFeed()" class="btn btn-sm btn-primary pull-right m-0 mr-3">Post</button>
      </div>
    </div>
    <spinner class="mt-4" v-if="!loaded"></spinner>

    <div class="comment" v-else-if="loaded && my_feeds.length">
      <div class="media pos-relative card-new-layout" v-for="feed in my_feeds">
        <img :src="feed.creator.avatar"
             class="d-flex rounded-circle align-self-start mr-4" width="55">
        <div class="media-body">
          <h6 class="comment-title">
            <router-link class="text-decoration-none text-gray-dark" :to="{name:'user', params:{id:feed.creator.id}}" target="_blank">{{feed.creator.full_name}}</router-link>
            <span class="text-muted" v-if="feed.company_id">@ {{feed.creator.company.name}}</span>
          </h6>
          <p class="mb-1">
            {{feed.content}}
          </p>
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
              <h6 class="comment-title">
                <router-link class="text-decoration-none text-gray-dark" :to="{name:'user', params:{id:reply.creator.id}}" target="_blank">
                  {{reply.creator.full_name}}
                </router-link>
              </h6>
              <p class="mb-1">
                {{reply.content}}
              </p>
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

    <div class="comment" v-else-if="loaded && !my_feeds.length">
      <div class="media pos-relative card-new-layout">
        <div class="media-body text-center">
          <h6>You have no feeds right now ~</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Spinner from 'components/Spinner'

  export default {
    name: 'MyFeed',
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
      loadMyFeed () {
        this.loaded = false
        this.$store.dispatch('myFeed')
          .then(() => {
            this.loaded = true
          })
      },

      newFeed () {
        this.uploading = true
        const form_data = {
          content: this.content
        }
        this.$store.dispatch('newFeed', form_data)
          .then(() => {
            this.uploading = false
            this.content = ''
          })
      },
      newReply (id) {
        const form_data = {
          id: id,
          content: this.reply,
        }
        this.$store.dispatch('replyFeed', form_data)
          .then(() => {
            this.reply_feed_box_show = false
            this.reply_feed_box_index = ''
            this.reply = ''
          })
          .catch(() => {
            this.$store.dispatch('toastr', {type: 'danger', title: 'Error', message: 'Please try again later.'})
          })
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
        username: 'self_name',
        is_verified: 'is_verified',
        login_status: 'login_status',
        my_feeds: 'my_feeds'
      })
    },
    beforeCreate () {
      // redirect not verified user
      if (!this.$store.getters.is_verified) {
        this.$router.push({name: 'me_need_verify'})
      }
    },
    beforeMount () {
      this.loadMyFeed()
    }
  }
</script>
