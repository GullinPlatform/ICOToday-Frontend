<template>
  <div class="col-md-8">
    <h6 class="text-muted text-normal text-uppercase ">Followers</h6>
    <hr class="mb-3 mt-2">
    <div class="card-new-layout" v-if="loaded&&user_followers.length">
      <div class="team team-grid">
        <div class="row">
          <div class="col-md-6 mb-4" v-for="follower in user_followers">
            <div class="d-table">
              <router-link :to="{name:'user', params:{id:follower.id}}">
                <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                     width="100" :src="follower.avatar">
              </router-link>
              <div class="pl-3 d-table-cell align-middle">
                <h6 class="mb-0">
                  <router-link class="text-gray-dark" :to="{name:'user', params:{id:follower.id}}" target="_blank">
                    {{follower.full_name}}
                  </router-link>
                  <i class="fa fa-check text-primary" v-if="follower.is_verified"></i>
                </h6>
                <span class="text-muted text-sm mb-2">{{follower.title}}</span> <span v-if="follower.company" class="text-gray-dark">@ {{follower.company.name}}</span>
                <p>{{follower.description}}</p>
                <div class="social-bar">
                  <a :href="follower.facebook" class="social-link branding-facebook"
                     v-if="follower.facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a :href="follower.twitter" class="social-link branding-twitter"
                     v-if="follower.twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a :href="follower.linkedin" class="social-link branding-linkedin"
                     v-if="follower.linkedin">
                    <i class="fa fa-linkedin-square"></i>
                  </a>
                  <a :href="follower.telegram" class="social-link branding-linkedin"
                     v-if="follower.telegram">
                    <i class="fa fa-telegram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-new-layout" v-else-if="loaded&&!user_followers.length">
      <h6 class="mb-0 text-center">{{user_info.full_name}} has no followers</h6>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'UserFollowers',
    data () {
      return {
        loaded: false,
        error_message: '',
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'User Followers'
      }
    },
    methods: {
      getFollowers () {
        this.loaded = false
        this.$store.dispatch('getUserFollowers', this.$route.params.id)
          .then(() => {
            this.loaded = true
          })
      }
    },
    computed: {
      ...mapGetters({
        user_info: 'user_info',
        user_followers: 'user_followers',
      })
    },
    beforeMount () {
      this.loaded = false
      this.getFollowers()
    }
  }
</script>
<style scoped>
  a {
    text-decoration: none;
  }
</style>
