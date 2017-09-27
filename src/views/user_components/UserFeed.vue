<template>
  <div class="container container-padding">
    <div class="row">
      <user-header></user-header>
      <!--main content-->
      <div class="col-md-8">
        <h6 class="text-muted text-normal text-uppercase">
          User Feed
        </h6>
        <hr class="mb-3 mt-2">
        <post-list :loaded="loaded" :posts="user_marked_posts"></post-list>
        <div class='mt-5' v-if="loaded && user_marked_posts.length===0">
          <div class="text-center">
            <h3 class="product-title">This user doesn't have any marked projects</h3>
            <router-link :to="{name:'landing'}" class="btn btn-outline-primary btn-sm text-primary">
              Explore
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UserHeader from 'src/views/components/UserHeader'

  export default {
    name: 'UserFeed',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'User Feed',
      }
    },
    data () {
      return {
        loaded: false
      }
    },
    components: {
      UserHeader
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
    },
    beforeMount () {
      // My ICO Projects
      this.loaded = false
      // Don't touch here!
      if (!this.$store.getters.user.info) {
        this.$store.dispatch('getUser', this.$route.params.id)
          .then(() => {
            if (this.$store.getters.user.info.team) {
              this.$store.dispatch('getTeam', this.$store.getters.user.info.team.id)
                .then(() => {
                  this.loaded = true
                })
            } else {
              this.loaded = true
            }
          })
      } else if (this.$store.getters.user.info.team && this.$store.getters.user.id === parseInt(this.$route.params.id)) {
        this.loaded = true
      } else if (this.$store.getters.user.info.team) {
        this.$store.dispatch('getTeam', this.$store.getters.user.info.team.id)
          .then(() => {
            this.loaded = true
          })
      }
    }
  }
</script>
