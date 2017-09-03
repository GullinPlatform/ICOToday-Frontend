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
                    <div class="col-md-9" v-if="me.is_verified && me.type===0">
                        <h3>
                            Team/Company Info
                        </h3>
                        <p class="mb-4">您提供的信息越完善，验证进度就会越快</p>

                        <h4>Basic Info <a href="javascript:void(0)" @click="edit=!edit"><i class="fa fa-edit"></i></a>
                        </h4>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Name
                                <span class="text-danger">*</span>
                            </label>
                            <div class="col-sm-10">
                                <p class="mt-2 ml-2 text-bold" v-show="!edit">{{name}}</p>
                                <input class="form-control" v-model="name" type="text" v-show="edit">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Description
                            </label>
                            <div class="col-sm-10">
                                <p class="mt-2 ml-2 text-bold" v-show="!edit">{{description}}</p>
                                <textarea class="form-control" rows="4" v-model="description" type="date"
                                          v-show="edit"></textarea>
                            </div>
                        </div>
                        <div class="form-group row justify-content-md-center">
                            <div class="col-md-10 offset-md-2">
                                <button type="button" @click="updateTeam()" v-show="edit"
                                        class="mb-1 btn btn-block btn-primary">Submit Change
                                </button>
                                <p class="text-primary">{{message}}</p>
                            </div>
                        </div>
                        <hr>
                        <h4>Team Members</h4>
                        <div class="team team-grid mt-4">
                            <div data-toggle="isotope-grid" class="row">
                                <div class="col-6 col-sm-4 col-md-3 grid-item" v-for="member in team_members" v-if="!member.is_advisor">
                                    <div class="team-member">
                                        <a href="team-member.htm" title="View Jimi's profile">
                                            <img src="assets/img/team/jimi.jpg" alt="Jimi" class="img-thumbnail">
                                        </a>
                                        <h5 class="name">
                                            <a href="team-member.htm" title="View Jimi's profile">{{member.first_name}} {{member.last_name}}</a>
                                        </h5>
                                        <p class="role">{{member.title}}</p>
                                        <div class="social-media-branding social-media-branding-xs">
                                            <a :href="member.twitter" class="social-link branding-twitter" v-if="member.twitter">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a :href="member.slack" class="social-link branding-facebook" v-if="member.slack">
                                                <i class="fa fa-slack"></i>
                                            </a>
                                            <a  :href="member.linkedin" class="social-link branding-linkedin"  v-if="member.linkedin">
                                                <i class="fa fa-linkedin-square"></i>
                                            </a>
                                            <a :href="member.telegram" class="social-link branding-linkedin"v-if="member.telegram">
                                                <i class="fa fa-telegram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-md-3 grid-item">
                                    <div class="team-member">
                                        <a href="" data-toggle="modal" data-target="#add-member-modal" data-dismiss="modal"
                                                class="mt-3 btn btn-lg btn-secondary btn-rounded">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5 class="name">
                                            New Member
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <h4>Advisors</h4>
                        <div class="team team-grid mt-4">
                            <div data-toggle="isotope-grid" class="row">
                                <div class="col-6 col-sm-4 col-md-3 grid-item" v-for="member in team_members"  v-if="member.is_advisor">
                                    <div class="team-member">
                                        <a href="team-member.htm" title="View Jimi's profile">
                                            <img src="assets/img/team/jimi.jpg" alt="Jimi" class="img-thumbnail">
                                        </a>
                                        <h5 class="name">
                                            <a href="team-member.htm" title="View Jimi's profile">{{member.first_name}} {{member.last_name}}</a>
                                        </h5>
                                        <p class="role">{{member.title}}</p>
                                        <div class="social-media-branding social-media-branding-xs">
                                            <a :href="member.twitter" class="social-link branding-twitter" v-if="member.twitter">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a :href="member.slack" class="social-link branding-facebook" v-if="member.slack">
                                                <i class="fa fa-slack"></i>
                                            </a>
                                            <a  :href="member.linkedin" class="social-link branding-linkedin"  v-if="member.linkedin">
                                                <i class="fa fa-linkedin-square"></i>
                                            </a>
                                            <a :href="member.telegram" class="social-link branding-linkedin"v-if="member.telegram">
                                                <i class="fa fa-telegram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-md-3 grid-item">
                                    <div class="team-member">
                                        <a href="" data-toggle="modal" data-target="#add-advisor-modal" data-dismiss="modal"
                                           class="mt-3 btn btn-lg btn-secondary btn-rounded">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5 class="name">
                                            New Advisor
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <add-team-member></add-team-member>
        <add-team-advisor></add-team-advisor>
        <!-- Modal End-->
    </div>
</template>

<script>
  import UserSidebar from 'components/UserSidebar'
  import UserHeader from 'components/UserHeader'
  import AddTeamMember from 'components/AddTeamMember'
  import AddTeamAdvisor from 'components/AddTeamAdvisor'

  export default {
    name: 'UserTeam',
    data () {
      return {

        edit: false,

        name: '',
        description: '',

        message: ''
      }
    },
    components: {
      'user-sidebar': UserSidebar,
      'user-header': UserHeader,
      'add-team-member': AddTeamMember,
      'add-team-advisor': AddTeamAdvisor,
    },
    methods: {
      updateTeam () {
        const formData = {
          name: this.name,
          description: this.description,
          pk: this.me.info.team.id
        }

        this.$store.dispatch('updateTeam', formData)
          .then(() => {
            this.edit = false
            this.$store.dispatch('getSelf')
          })
          .catch(() => {
          })

      },
    },
    mounted () {
      this.name = this.me.info.team.name
      this.description = this.me.info.team.description
    },
    beforeCreate () {
      this.$store.dispatch('getTeam', this.$store.getters.self.info.team.id)
    },
    computed: {
      me () {
        return this.$store.getters.self
      },
      team_members () {
        return this.$store.getters.current_team_members

      }
    },
  }
</script>
