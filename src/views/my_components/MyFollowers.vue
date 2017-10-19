<template>
  <div class="col-md-8">
    <h6 class="text-muted text-normal text-uppercase ">My Followers</h6>
    <hr class="mb-3 mt-2">
    <div class="card-new-layout">
      <div class="team team-grid mt-4">
        <div class="row">
          <div class="col-md-6 mb-4" v-for="follower in self_followers">
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
                <span class="text-muted text-sm mb-2">{{follower.title}}</span>
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
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'MyFollowers',
    data () {
      return {
        loaded: false,
        error_message: '',
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'My Followers'
      }
    },
    methods: {
      getFollowers () {
        this.loaded = false
        this.$store.dispatch('getSelfFollowers')
          .then(() => {
            this.loaded = true
          })
      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        self_followers: 'self_followers'
      })
    },
    beforeCreate () {
      // redirect not verified user
      if (!this.$store.getters.is_verified) {
        this.$router.push({name: 'me_need_verify'})
      }
    },
    beforeMount () {
      this.loaded = false
      this.getFollowers()
    }
  }
</script>
