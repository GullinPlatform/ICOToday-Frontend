<template>
  <div class="col-md-9">
    <h6 class="text-muted text-normal text-uppercase">
      Subscribed ICO Projects
    </h6>
    <hr class="mb-3 mt-2">
    <project-list :loaded="loaded" :projects="user_marked_projects"></project-list>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProjectList from 'src/views/components/ProjectList'

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
    components: {ProjectList},
    computed: {
      ...mapGetters({
        user_marked_projects: 'user_marked_projects',
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
