<template>
  <div class="col-md-9">
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
        complement: 'My Subscriptions'
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
    beforeCreate () {
      // redirect not verified user
      if (!this.$store.getters.is_verified) {
        this.$router.push({name: 'me_need_verify'})
      }
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
