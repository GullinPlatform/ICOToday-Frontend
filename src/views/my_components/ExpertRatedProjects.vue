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
    name: 'AnalystRatedProjects',
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
    beforeCreate () {
      // redirect not verified user
      if (!this.$store.getters.is_verified) {
        this.$router.push({name: 'me_need_verify'})
      }
    },
    beforeMount () {
      // redirect non ico analyst user
      if (this.self_type !== 2) {
        this.$router.push({name: 'landing'})
      }
      this.loadRatedProjects()
    }
  }
</script>
