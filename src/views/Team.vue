<template>
    <div>
        <!-- Page Title-->
        <div class="page-title">
            <div class="container pl-5 pr-5">
                <div class="column">
                    <h1>
                        My ICO Projects
                    </h1>
                </div>
                <div class="column">
                    <ul class="breadcrumbs">
                        <li>
                            <router-link :to="{name:'landing'}">Home</router-link>
                        </li>
                        <li class="separator">&nbsp;</li>
                        <li>
                            <router-link :to="{name:'me_new_project'}">Account</router-link>
                        </li>
                        <li class="separator">&nbsp;</li>
                        <li>
                            My ICO Projects
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <!-- Page Content-->
        <div class="container pl-5 pr-5">
            <!-- The team title -->
            <div class="row">
                <div class="col-sm-12">
                    <h3 class="name">
                        Team Name
                    </h3>
                    <p>
                        Obruo proprius ullamcorper. Facilisi ibidem immitto neque vicis vulpes. Abigo appellatio conventio humo
                        lenis luctus nunc probo ullamcorper velit. Cui haero loquor lucidus quis suscipere.</p>
                    <p>
                        Appellatio quadrum sudo tamen. Causa commodo haero ludus metuo neo pneum quis tation. Damnum haero paratus
                        praesent proprius tamen. Consectetuer facilisis nisl ullamcorper valde velit vulputate.</p>
                    <p>
                        Aptent commoveo hendrerit huic importunus lobortis quis te tincidunt virtus. Aliquip aptent duis ea eum
                        nisl quadrum. Abico bene capto cui erat ibidem melior pecus te. Causa exerci lobortis valde. Causa
                        decet esse hos imputo minim si similis. Abbas et melior plaga suscipit velit vicis.</p>
                    <div class="social-media-branding">
                        <!--@todo: replace with real social share links -->
                        <a href="#" class="social-link branding-twitter"><i
                                class="fa fa-twitter-square"></i></a>
                        <a href="#" class="social-link branding-facebook"><i class="fa fa-facebook-square"></i></a>
                        <a href="#" class="social-link branding-linkedin"><i class="fa fa-linkedin-square"></i></a>
                        <a href="#" class="social-link branding-google-plus"><i
                                class="fa fa-google-plus-square"></i></a>
                    </div>
                </div>
            </div>
            <!-- The team list -->
            <div class="row pt-5">
                <div class="col-sm-12">
                    <h3 class="name">
                        Team Members
                    </h3>
                </div>
                <div class="col-sm-12 mb-4">
                    <div class="d-table"><img
                            class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                            width="150" src="../../static/img/team/04.jpg" alt="Team">
                        <div class="pl-3 d-table-cell align-middle">
                            <h6>Liana Mullen</h6>
                            <p class="text-muted mb-2">Lead Designer</p>
                            <div class="social-bar">
                                <a class="social-button shape-circle sb-behance" href="#">
                                    <i class="socicon-behance"></i>
                                </a>
                                <a class="social-button shape-circle sb-dribbble" href="#">
                                    <i class="socicon-dribbble"></i>
                                </a>
                                <a class="social-button shape-circle sb-instagram" href="#">
                                    <i class="socicon-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- The advisor list -->
            <div class="row pt-5">
                <div class="col-sm-12">
                    <h3 class="name">
                        Advisors
                    </h3>
                </div>
                <div class="col-sm-12 mb-4">
                    <div class="d-table">
                        <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                             width="150" src="../../static/img/team/03.jpg" alt="Team">
                        <div class="pl-3 d-table-cell align-middle">
                            <h6>Liana Mullen</h6>
                            <p class="text-muted mb-2">Lead Designer</p>
                            <div class="social-bar">
                                <a class="social-button shape-circle sb-behance" href="#">
                                    <i class="socicon-behance"></i>
                                </a>
                                <a class="social-button shape-circle sb-dribbble" href="#">
                                    <i class="socicon-dribbble"></i>
                                </a>
                                <a class="social-button shape-circle sb-instagram" href="#">
                                    <i class="socicon-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import UserHeader from 'components/UserHeader'

  export default {
    name: 'Team',
    data () {
      return {
        loaded: false,
        projects: [],
      }
    },
    components: {
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
      if (this.$route.name === 'me_created' && this.$store.getters.self.type === 0) {

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
  }
</script>