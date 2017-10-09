<template>
  <div class="col-md-8">
    <h6 class="text-muted text-normal text-uppercase">
     My Rated Projects
    </h6>
    <hr class="mb-3 mt-2">
    <project-list :loaded="loaded" :projects="self_rated_projects"></project-list>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProjectList from 'src/views/components/ProjectList'

  export default {
    name: 'ExpertRatedProjects',
    data () {
      return {
        loaded: false
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'My Rated Projects'
      }
    },
    components: {
      ProjectList
    },
    methods: {
      loadRatedProjects () {
        this.$store.dispatch('getSelfRatedProject')
          .then(() => {
            this.loaded = true
          })

      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        self_type: 'self_type',
        self_rated_projects: 'self_rated_projects'
      })
    },
    beforeMount () {
      // redirect non ico expert user
      if (this.self_type !== 2) {
        this.$router.push({name: 'landing'})
      }
      this.loadRatedProjects()
    }
  }
</script>
