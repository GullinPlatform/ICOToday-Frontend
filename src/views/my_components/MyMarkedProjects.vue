<template>
  <div class="col-md-8">
    <h6 class="text-muted text-normal text-uppercase">
      Subscribed ICO Projects
    </h6>
    <hr class="mb-3 mt-2">
    <project-list :loaded="loaded" :projects="self_marked_posts"></project-list>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProjectList from 'src/views/components/ProjectList'

  export default {
    name: 'MyMarkedProjects',
    data () {
      return {
        loaded: false,
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Subscribed ICOs'
      }
    },
    components: {
      ProjectList
    },
    methods: {
      loadProjects () {
        this.loaded = false
        // My Marked Projects
        this.$store.dispatch('getSelfMarkedProject')
          .then(() => {
            this.loaded = true
          })
      },
    },
    computed: {
      ...mapGetters({
        me: 'self',
        is_verified: 'is_verified',
        login_status: 'login_status',
        self_marked_posts: 'self_marked_posts'
      })
    },
    beforeMount () {
      this.loaded = false
      this.$store.dispatch('getSelfMarkedProject')
        .then(() => {
          this.loaded = true
        })
    },
  }
</script>
