<template>
    <div>
        <!-- Page Title-->
        <div class="page-title">
            <div class="container">
                <div class="column">
                    <h1>My Orders</h1>
                </div>
                <div class="column">
                    <ul class="breadcrumbs">
                        <li><a href="index.html">Home</a>
                        </li>
                        <li class="separator">&nbsp;</li>
                        <li><a href="account-orders.html">Account</a>
                        </li>
                        <li class="separator">&nbsp;</li>
                        <li>My Orders</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Page Content-->
        <div class="container padding-bottom-3x mb-2">
            <div class="row">
                <user-header></user-header>
                <!--main content-->
                <div class="col-md-8">
                    <h3 v-if="$route.name === 'me' && me.type === 0">
                        My ICO
                    </h3>
                    <h3 v-else>
                        My Marked ICO
                    </h3>

                    <p v-if="$route.name === 'me' && me.type === 0" class="mb-4">My ICO Projects</p>
                    <p v-else class="mb-4">Marked ICO Projects</p>

                    <div class="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative" v-if="loaded"
                         v-for="project in projects">
                        <div class="row align-items-center ">

                                <span class="pos-absolute pos-t pos-r bg-primary text-white text-sm px-1"
                                      v-if="project.status===1">Verified</span>
                            <div class="col-md-2">
                                <img :src="project.logo_image"
                                     class="img-fluid hidden-sm-down"/>
                            </div>
                            <div class="col-md-8">
                                <h4 class="mb-0">
                                    {{project.title}}
                                </h4>
                                <p class="text-muted mb-2 text-sm">By
                                    <span class="font-weight-bold text-uppercase">{{project.team.name}}</span>
                                <p class="text-muted mb-2 text-sm">
                                        <span class="d-block d-md-inline">
                                            <i class="fa fa-map-marker"></i> London, UK</span>
                                    <span class="d-block d-md-inline">
                                            <i class="fa fa-money ml-md-3"></i> $70USD/hour</span>
                                </p>
                            </div>
                            <div class="col-md-2 text-md-center">
                                <router-link :to="{name:'post', params:{id: project.id}}"
                                             class="btn btn-danger text-uppercase font-weight-bold d-lg-block">
                                    <span v-if="project.status!==0">DETAIL</span><span v-else>PREVIEW</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div v-if="loaded && projects.length===0">
                        Nothing Here
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import UserHeader from 'components/UserHeader'

  export default {
    name: 'UserProjects',
    data () {
      return {
        loaded: false,
        projects: [],
      }
    },
    head: {
      title () {
        return {
          inner: 'ICOToday',
          complement: (this.$route.name === 'me' && this.me.type === 0) ? 'My ICOs' : 'Marked ICOs'
        }
      }
    },
    components: {
      'user-header': UserHeader
    },
    methods: {
      markedProjects () {

      },
      proposedProject () {

      },
      loadProjects () {
        // My ICO Projects
        if (this.$route.name === 'me' && this.$store.getters.self.type === 0) {

          this.$store.dispatch('getSelfCreatedPost')
            .then(() => {
              this.projects = this.$store.getters.self_created_posts
              this.loaded = true
            })
            .catch(() => {

            })

        }
        // My Marked Projects
        else {
          this.$store.dispatch('getSelfMarkedPost')
            .then(() => {
              this.projects = this.$store.getters.self_marked_posts
              this.loaded = true
            })
            .catch(() => {

            })
        }
      }
    },
    computed: {
      me () {
        return this.$store.getters.self
      }
    },
    beforeCreate () {
      // My ICO Projects
      if (this.$route.name === 'me' && this.$store.getters.self.type === 0) {

        this.$store.dispatch('getSelfCreatedPost')
          .then(() => {
            this.projects = this.$store.getters.self_created_posts
            this.loaded = true
          })
      }
      // My Marked Projects
      else {
        this.$store.dispatch('getSelfMarkedPost')
          .then(() => {
            this.projects = this.$store.getters.self_marked_posts
            this.loaded = true
          })
      }
    },
    watch: {
      '$route' () {
        this.loadProjects()
      }
    }
  }
</script>
