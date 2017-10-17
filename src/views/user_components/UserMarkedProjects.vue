<template>
  <div class="col-md-8">
    <h6 class="text-muted text-normal text-uppercase">
      User Marked ICO Projects
    </h6>
    <hr class="mb-3 mt-2">
    <post-list :loaded="loaded" :posts="user_marked_posts"></post-list>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
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
      ...mapGetters({
        user_marked_posts: 'user_marked_posts',
      })
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
