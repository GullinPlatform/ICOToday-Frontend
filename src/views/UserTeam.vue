<template>
    <div>
        <!-- Page Content-->
        <div class="container padding-bottom-3x mb-2 mt-5">
            <div class="row">
                <user-header></user-header>
                <!--main content-->
                <div class="mt-5 hidden-md"></div>
                <!-- The team title -->
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="name">
                                {{current_team.name}}
                            </h3>
                            <h6>
                                {{current_team.description}}
                            </h6>
                        </div>
                    </div>
                    <!-- The team list -->
                    <div class="row pt-3">
                        <div class="col-sm-12">
                            <h3 class="name">
                                Team Members
                            </h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4" v-for="member in current_team_members" v-if="!member.is_advisor">
                            <div class="d-table">
                                <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                                     width="100" :src="member.avatar" alt="Team">
                                <div class="pl-3 d-table-cell align-middle">
                                    <h6>{{member.first_name}} {{member.last_name}}
                                        <span class="text-muted text-sm mb-2">{{member.title}}</span></h6>
                                    <p>{{member.description}}</p>
                                    <div class="social-bar">
                                        <a :href="member.facebook" target="_blank"
                                           class="social-button shape-circle branding-facebook"
                                           v-if="member.facebook">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                        <a :href="member.twitter" target="_blank"
                                           class="social-button shape-circle branding-twitter"
                                           v-if="member.twitter">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                        <a :href="member.linkedin" target="_blank"
                                           class="social-button shape-circle branding-linkedin"
                                           v-if="member.linkedin">
                                            <i class="fa fa-linkedin-square"></i>
                                        </a>
                                        <a :href="member.telegram" target="_blank"
                                           class="social-button shape-circle branding-linkedin"
                                           v-if="member.telegram">
                                            <i class="fa fa-telegram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- The advisor list -->
                    <div class="row pt-3">
                        <div class="col-sm-12">
                            <h3 class="name">
                                Advisors
                            </h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4" v-for="member in current_team_members" v-if="member.is_advisor">
                            <div class="d-table">
                                <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                                     width="100" :src="member.avatar" alt="Team">
                                <div class="pl-3 d-table-cell align-middle">
                                    <h6>{{member.first_name}} {{member.last_name}}
                                        <span class="text-muted text-sm mb-2">{{member.title}}</span></h6>
                                    <p>{{member.description}}</p>
                                    <div class="social-bar">
                                        <a :href="member.facebook" target="_blank"
                                           class="social-button shape-circle branding-facebook"
                                           v-if="member.facebook">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                        <a :href="member.twitter" target="_blank"
                                           class="social-button shape-circle branding-twitter"
                                           v-if="member.twitter">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                        <a :href="member.linkedin" target="_blank"
                                           class="social-button shape-circle branding-linkedin"
                                           v-if="member.linkedin">
                                            <i class="fa fa-linkedin-square"></i>
                                        </a>
                                        <a :href="member.telegram" target="_blank"
                                           class="social-button shape-circle branding-linkedin"
                                           v-if="member.telegram">
                                            <i class="fa fa-telegram"></i>
                                        </a>
                                    </div>
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
  import UserHeader from 'components/UserHeader'

  export default {
    name: 'UserTeam',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'User Team',
      }
    },
    data () {
      return {
        loaded: false
      }
    },
    components: {
      UserHeader
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      current_team () {
        return this.$store.getters.current_team
      },
      current_team_members () {
        return this.$store.getters.current_team_members
      },
    },
    beforeMount () {
      // My ICO Projects
      this.loaded = false
      // Don't touch here!
      if (!this.$store.getters.user.info) {
        this.$store.dispatch('getUser', this.$route.params.id)
          .then(() => {
            if (this.$store.getters.user.info.team) {
              this.$store.dispatch('getTeam', this.$store.getters.user.info.team.id)
                .then(() => {
                  this.loaded = true
                })
            } else {
              this.loaded = true
            }
          })
      } else if (this.$store.getters.user.info.team && this.$store.getters.user.id === parseInt(this.$route.params.id)) {
        this.loaded = true
      } else if (this.$store.getters.user.info.team) {
        this.$store.dispatch('getTeam', this.$store.getters.user.info.team.id)
          .then(() => {
            this.loaded = true
          })
      }
    }
  }
</script>
