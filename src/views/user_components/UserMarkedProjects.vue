<template>
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
</template>

<script>
  import PostList from 'src/views/components/ProjectList'

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
    components: {PostList},
    computed: {
      user_marked_posts () {
        return this.$store.getters.user_marked_posts
      },
    },
    beforeMount () {
      // My ICO Projects
      this.loaded = false
      this.$store.dispatch('getUserMarkedProject', this.$route.params.id)
        .then(() => {
          this.loaded = true
        })
    }
  }
</script>
