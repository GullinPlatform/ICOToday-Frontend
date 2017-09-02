<template>
    <div class="py-lg-4">
        <!-- ======== @Region: #header ======== -->
        <user-header></user-header>

        <!-- ======== @Region: #content ======== -->
        <div id="content">
            <div class="container" id="about">
                <div class="row">
                    <!-- sidebar -->
                    <user-sidebar></user-sidebar>
                    <!--main content-->
                    <div class="col-md-9">
                        <h3 v-if="$route.name === 'me' && me.type === 0">
                            My ICO
                        </h3>
                        <h3 v-else>
                            My Marked ICO
                        </h3>

                        <p v-if="$route.name === 'me' && me.type === 0" class="mb-4">My ICO Projects</p>
                        <p v-else class="mb-4">Marked ICO Projects</p>

                        <div class="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative" v-if="loaded" v-for="project in projects">
                            <div class="row align-items-center ">
                                <span class="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">我参与的</span>
                                <div class="col-md-2">
                                    <img src="static/img/customers/customer-2.png" alt="TSU"
                                         class="img-fluid hidden-sm-down"/>
                                </div>
                                <div class="col-md-8">
                                    <h4 class="mb-0">
                                        Drupal Developer
                                    </h4>
                                    <p class="text-muted mb-2 text-sm">@
                                        <a href="#" class="font-weight-bold text-muted">TSU</a>
                                        (Senior level, Full Time Employment)</p>
                                    <p class="text-muted mb-2 text-sm">
                                        <span class="d-block d-md-inline">
                                            <i class="fa fa-map-marker"></i> London, UK</span>
                                        <span class="d-block d-md-inline">
                                            <i class="fa fa-money ml-md-3"></i> $70USD/hour</span>
                                    </p>
                                </div>
                                <div class="col-md-2 text-md-center">
                                    <a href="#"
                                       class="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                                    <a href="#" class="text-muted text-xs op-7">
                                        <i class="fa fa-heart"></i> Shortlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import UserSidebar from 'components/UserSidebar'
  import UserHeader from 'components/UserHeader'

  export default {
    name: 'UserProjects',
    data () {
      return {
        loaded: false,
        projects: [],
      }
    },
    components: {
      'user-sidebar': UserSidebar,
      'user-header': UserHeader
    },
    methods: {
      markedProjects () {

      },
      proposedProject () {

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
          .catch(() => {
            this.errorMsg = 'Unable to login using provided email and password'
          })

      }
      // My Marked Projects
      else {

      }
    }
  }
</script>
