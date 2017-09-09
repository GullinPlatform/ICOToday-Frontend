<template>
    <div>
        <!-- Page Content-->
        <div class="container padding-bottom-3x mb-2 mt-5">
            <div class="row">
                <user-header></user-header>
                <!--main content-->
                <div class="col-md-8" v-if="me.type===0">

                    <h6 class="text-muted text-normal text-uppercase ">Basic Info</h6>
                    <hr class="mb-3 mt-2">

                    <div class="form-group row">
                        <p class="col-sm-2 col-form-label">Name
                            <span class="text-danger">*</span>
                        </p>
                        <div class="col-sm-8">
                            <p class="mt-2 ml-2 text-bold" v-show="!edit">{{name}}</p>
                            <input class="form-control" v-model="name" type="text" v-show="edit">
                        </div>
                    </div>
                    <div class="form-group row">
                        <p class="col-sm-2 col-form-label">Description</p>
                        <div class="col-sm-8">
                            <p class="mt-2 ml-2 text-bold" v-show="!edit">{{description}}</p>
                            <textarea class="form-control" rows="4" v-model="description" type="date"
                                      v-show="edit"></textarea>
                        </div>
                    </div>

                    <div class="form-group row justify-content-md-center">
                        <div class="col-sm-2">
                            <button @click="edit=!edit" class="btn btn-secondary">
                                <i class="fa fa-edit"></i> Edit
                            </button>
                        </div>
                        <div class="col-sm-4">
                            <button type="button" @click="updateTeam()" v-show="edit"
                                    class="btn btn-primary">Submit Change
                            </button>
                            <p class="text-primary">{{message}}</p>
                        </div>
                    </div>
                    <h6 class="text-muted text-normal text-uppercase ">Team members</h6>
                    <hr class="mb-3 mt-2">


                    <div class="team team-grid mt-4">
                        <div class="row">
                            <div class="col-md-3 col-sm-6 mb-3 text-center" v-for="member in team_members"
                                 v-if="!member.is_advisor">
                                <img class="img-thumbnail rounded-circle mb-2" height="100" width="100"
                                     :src="member.avatar" alt="Team Member">
                                <h6>{{member.first_name}} {{member.last_name}}</h6>
                                <p class="text-muted mb-2">{{member.title}}</p>
                                <div class="social-bar">
                                    <a :href="member.twitter" class="social-link branding-twitter"
                                       v-if="member.twitter">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a :href="member.linkedin" class="social-link branding-linkedin"
                                       v-if="member.linkedin">
                                        <i class="fa fa-linkedin-square"></i>
                                    </a>
                                    <a :href="member.telegram" class="social-link branding-linkedin"
                                       v-if="member.telegram">
                                        <i class="fa fa-telegram"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-3 text-center">
                                <div>
                                    <a href="javascript:void(0)" @click="popUpModal(false)">
                                        <img class="rounded-circle mb-2" height="100" width="100"
                                             src="../../static/img/services/add.png" alt="Team Member">
                                    </a>
                                    <h6>
                                        New Member
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 class="text-muted text-normal text-uppercase ">Team Advisors</h6>
                    <hr class="mb-3 mt-2">

                    <div class="team team-grid mt-4">
                        <div class="row">
                            <div class="col-md-3 col-sm-6 mb-3 text-center" v-for="member in team_members"
                                 v-if="member.is_advisor">
                                <img class="img-thumbnail rounded-circle mb-2" height="100" width="100"
                                     :src="member.avatar" alt="Team Member">
                                <h6>{{member.first_name}} {{member.last_name}}</h6>
                                <p class="text-muted mb-2">{{member.title}}</p>
                                <div class="social-bar">
                                    <a :href="member.twitter" class="social-link branding-twitter"
                                       v-if="member.twitter">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a :href="member.linkedin" class="social-link branding-linkedin"
                                       v-if="member.linkedin">
                                        <i class="fa fa-linkedin-square"></i>
                                    </a>
                                    <a :href="member.telegram" class="social-link branding-linkedin"
                                       v-if="member.telegram">
                                        <i class="fa fa-telegram"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-3 text-center">
                                <div class="team-member">
                                    <a href="javascript:void(0)" @click="popUpModal(true)">
                                        <img class="rounded-circle mb-2" height="100" width="100"
                                             src="../../static/img/services/add.png" alt="Team Advisor">
                                    </a>
                                    <h6>
                                        New Advisor
                                    </h6>
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
    data () {
      return {

        edit: false,

        name: '',
        description: '',

        message: ''
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'My Team'
      }
    },
    components: {
      'user-header': UserHeader,

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
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your team info is updated!'})
          })
          .catch(() => {
          })

      },
      popUpModal (is_advisor) {
        /* global $:true */
        this.$store.dispatch('setIsAdvisor', is_advisor)
        $('#add-member-modal').modal('show')
      }
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
