<template>
  <div class="col-md-8">
    <h6 class="text-muted text-normal text-uppercase">
      Rated Projects
    </h6>
    <hr class="mb-3 mt-2">
    <project-list :loaded="loaded" :projects="user_rated_projects"></project-list>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProjectList from 'src/views/components/ProjectList'

  export default {
    name: 'AnalystRatedProjects',
    data () {
      return {
        loaded: false
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'User Rated Projects'
      }
    },
    components: {
      ProjectList
    },
    methods: {
      loadRatedProjects () {
        this.$store.dispatch('getUserRatedProject', this.$route.params.id)
          .then(() => {
            this.loaded = true
          })

      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        user_rated_projects: 'user_rated_projects'
      })
    },
    beforeMount () {
      this.loadRatedProjects()
    }
  }
</script>
