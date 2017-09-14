<template>
    <!-- Page Content-->
    <div class="container padding-bottom-3x mb-2 mt-5">
        <div class="row">
            <user-header></user-header>
            <!--main content-->
            <div class="col-md-8">
                <h6 class="text-muted text-normal text-uppercase">
                    User Marked ICO Projects
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
  import UserHeader from 'components/UserHeader'
  import PostList from 'components/PostList'

  export default {
    name: 'UserMarkedProjects',
    data () {
      return {
        loaded: false,
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'User Subscribed ICOs'
      },
    },
    components: {
      UserHeader,
      PostList
    },
    computed: {
      user_marked_posts () {
        return this.$store.getters.user_marked_posts
      },
    },
    beforeMount () {
      // My ICO Projects
      this.loaded = false
      this.$store.dispatch('getUserMarkedPost', this.$route.params.id)
        .then(() => {
          this.loaded = true
        })
    }
  }
</script>
