<template>
    <div>
        <!-- Page Content-->
        <div class="container padding-bottom-3x mb-2 mt-5">
            <!-- The team title -->
            <div class="row pl-3">
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
            <div class="row pt-5 pl-3">
                <div class="col-sm-12">
                    <h3 class="name">
                        Team Members
                    </h3>
                </div>
            </div>
            <div class="row pl-3">
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
            <div class="row pt-5 pl-3">
                <div class="col-sm-12">
                    <h3 class="name">
                        Advisors
                    </h3>
                </div>
            </div>
            <div class="row pl-3">
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
</template>
<script>
  import UserHeader from 'components/UserHeader'

  export default {
    name: 'Team',
    data () {
      return {
        loaded: false,
      }
    },
    components: {
      'user-header': UserHeader
    },
    methods: {},
    computed: {
      me () {
        return this.$store.getters.self
      },
      current_team () {
        return this.$store.getters.current_team
      },
      current_team_members () {
        return this.$store.getters.current_team_members
      }
    },
    beforeMount () {
      // My ICO Projects
      this.$store.dispatch('getTeam', this.$route.params.id)
        .then(() => {
          this.loaded = true
        })
        .catch(() => {

        })
    }
  }
</script>