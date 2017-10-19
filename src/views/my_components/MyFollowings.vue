<template>
  <div class="col-md-8">
    <h6 class="text-muted text-normal text-uppercase ">My Followings</h6>
    <hr class="mb-3 mt-2">
    <div class="card-new-layout" v-if="loaded&&self_followings.length">
      <div class="team team-grid">
        <div class="row">
          <div class="col-md-6 mb-4" v-for="following in self_followings">
            <div class="d-table">
              <router-link :to="{name:'user', params:{id:following.id}}">
                <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                     width="100" :src="following.avatar">
              </router-link>
              <div class="pl-3 d-table-cell align-middle">
                <h6 class="mb-0">
                  <router-link class="text-gray-dark" :to="{name:'user', params:{id:following.id}}" target="_blank">
                    {{following.full_name}}
                  </router-link>
                  <i class="fa fa-check text-primary" v-if="following.is_verified"></i>
                </h6>
                <span class="text-muted text-sm mb-2">{{following.title}}</span> <span v-if="me.info.company" class="text-gray-dark">@ {{me.info.company.name}}</span>
                <p>{{following.description}}</p>
                <div class="social-bar">
                  <a :href="following.facebook" class="social-link branding-facebook"
                     v-if="following.facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a :href="following.twitter" class="social-link branding-twitter"
                     v-if="following.twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a :href="following.linkedin" class="social-link branding-linkedin"
                     v-if="following.linkedin">
                    <i class="fa fa-linkedin-square"></i>
                  </a>
                  <a :href="following.telegram" class="social-link branding-linkedin"
                     v-if="following.telegram">
                    <i class="fa fa-telegram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-new-layout" v-else>
      <h6 class="mb-0 text-center">You are not following anyone</h6>
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
        complement: 'My Followings'
      }
    },
    methods: {
      getFollowings () {
        this.loaded = false
        this.$store.dispatch('getSelfFollowings')
          .then(() => {
            this.loaded = true
          })
      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        self_followings: 'self_followings'
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
      this.getFollowings()
    }
  }
</script>
<style scoped>
  a {
    text-decoration: none;
  }
</style>
