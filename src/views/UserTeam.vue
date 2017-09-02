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
                            Team/Company Settings
                        </h3>
                        <p class="mb-4">您提供的信息越完善，验证进度就会越快</p>

                        <h4>Basic Info</h4>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Team/Company Name
                                <span class="text-danger">*</span>
                            </label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="team_name" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Description
                            </label>
                            <div class="col-sm-10">
                                <textarea class="form-control" rows="4" v-model="description" type="date"></textarea>
                            </div>
                        </div>
                        <div class="form-group row justify-content-md-center">
                            <div class="col-md-10 offset-md-2">
                                <button type="button" @click="updateTeam()"
                                        class="mb-1 btn btn-block btn-primary">Submit Change
                                </button>
                                <p class="text-primary">{{message}}</p>
                            </div>
                        </div>
                        <hr>
                        <h4>Team Members</h4>
                        <div class="team team-grid mt-4">
                            <div data-toggle="isotope-grid" class="row">
                                <div class="col-6 col-sm-4 col-md-3 grid-item">
                                    <div class="team-member"><a href="team-member.htm" title="View Jimi's profile"><img
                                            src="assets/img/team/jimi.jpg" alt="Jimi" class="img-thumbnail"></a> <h5
                                            class="name"><a href="team-member.htm" title="View Jimi's profile">Jimi</a>
                                    </h5>
                                        <p class="role">Founder &amp; developer</p>
                                        <div class="social-media-branding social-media-branding-xs"><a href="#"
                                                                                                       class="social-link branding-twitter"><i
                                                class="fa fa-twitter-square"></i></a> <a href="#"
                                                                                         class="social-link branding-facebook"><i
                                                class="fa fa-facebook-square"></i></a> <a href="#"
                                                                                          class="social-link branding-linkedin"><i
                                                class="fa fa-linkedin-square"></i></a> <a href="#"
                                                                                          class="social-link branding-google-plus"><i
                                                class="fa fa-google-plus-square"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-md-3 grid-item">
                                    <div class="team-member"><a href="team-member.htm" title="View Adele's profile"><img
                                            src="assets/img/team/adele.jpg" alt="Adele" class="img-thumbnail"></a> <h5
                                            class="name"><a href="team-member.htm"
                                                            title="View Adele's profile">Adele</a></h5>
                                        <p class="role">Founder &amp; designer</p>
                                        <div class="social-media-branding social-media-branding-xs"><a href="#"
                                                                                                       class="social-link branding-twitter"><i
                                                class="fa fa-twitter-square"></i></a> <a href="#"
                                                                                         class="social-link branding-facebook"><i
                                                class="fa fa-facebook-square"></i></a> <a href="#"
                                                                                          class="social-link branding-linkedin"><i
                                                class="fa fa-linkedin-square"></i></a> <a href="#"
                                                                                          class="social-link branding-google-plus"><i
                                                class="fa fa-google-plus-square"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-md-3 grid-item">
                                    <div class="team-member"><a href="team-member.htm" title="View Bono's profile"><img
                                            src="assets/img/team/bono.jpg" alt="Bono" class="img-thumbnail"></a> <h5
                                            class="name"><a href="team-member.htm" title="View Bono's profile">Bono</a>
                                    </h5>
                                        <p class="role">The Tech Guy</p>
                                        <div class="social-media-branding social-media-branding-xs"><a href="#"
                                                                                                       class="social-link branding-twitter"><i
                                                class="fa fa-twitter-square"></i></a> <a href="#"
                                                                                         class="social-link branding-facebook"><i
                                                class="fa fa-facebook-square"></i></a> <a href="#"
                                                                                          class="social-link branding-linkedin"><i
                                                class="fa fa-linkedin-square"></i></a> <a href="#"
                                                                                          class="social-link branding-google-plus"><i
                                                class="fa fa-google-plus-square"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-md-3 grid-item">
                                    <div class="team-member"><a href="team-member.htm"
                                                                title="View Robert's profile"><img
                                            src="assets/img/team/robert.jpg" alt="Robert" class="img-thumbnail"></a> <h5
                                            class="name"><a href="team-member.htm"
                                                            title="View Robert's profile">Robert</a></h5>
                                        <p class="role">Junior designer</p>
                                        <div class="social-media-branding social-media-branding-xs"><a href="#"
                                                                                                       class="social-link branding-twitter"><i
                                                class="fa fa-twitter-square"></i></a> <a href="#"
                                                                                         class="social-link branding-facebook"><i
                                                class="fa fa-facebook-square"></i></a> <a href="#"
                                                                                          class="social-link branding-linkedin"><i
                                                class="fa fa-linkedin-square"></i></a> <a href="#"
                                                                                          class="social-link branding-google-plus"><i
                                                class="fa fa-google-plus-square"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-md-3 grid-item">
                                    <div class="team-member"><a href="team-member.htm" title="View Steve's profile"><img
                                            src="assets/img/team/steve.jpg" alt="Steve" class="img-thumbnail"></a> <h5
                                            class="name"><a href="team-member.htm"
                                                            title="View Steve's profile">Steve</a></h5>
                                        <p class="role">Sales Manager</p>
                                        <div class="social-media-branding social-media-branding-xs"><a href="#"
                                                                                                       class="social-link branding-twitter"><i
                                                class="fa fa-twitter-square"></i></a> <a href="#"
                                                                                         class="social-link branding-facebook"><i
                                                class="fa fa-facebook-square"></i></a> <a href="#"
                                                                                          class="social-link branding-linkedin"><i
                                                class="fa fa-linkedin-square"></i></a> <a href="#"
                                                                                          class="social-link branding-google-plus"><i
                                                class="fa fa-google-plus-square"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-md-3 grid-item">
                                    <div class="team-member"><a href="team-member.htm" title="View Jolie's profile"><img
                                            src="assets/img/team/jolie.jpg" alt="Jolie" class="img-thumbnail"></a> <h5
                                            class="name"><a href="team-member.htm"
                                                            title="View Jolie's profile">Jolie</a></h5>
                                        <p class="role">Marketing Expert</p>
                                        <div class="social-media-branding social-media-branding-xs"><a href="#"
                                                                                                       class="social-link branding-twitter"><i
                                                class="fa fa-twitter-square"></i></a> <a href="#"
                                                                                         class="social-link branding-facebook"><i
                                                class="fa fa-facebook-square"></i></a> <a href="#"
                                                                                          class="social-link branding-linkedin"><i
                                                class="fa fa-linkedin-square"></i></a> <a href="#"
                                                                                          class="social-link branding-google-plus"><i
                                                class="fa fa-google-plus-square"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-md-3 grid-item">
                                    <div class="team-member"><a href="team-member.htm" title="View Obama's profile"><img
                                            src="assets/img/team/obama.jpg" alt="Obama" class="img-thumbnail"></a> <h5
                                            class="name"><a href="team-member.htm"
                                                            title="View Obama's profile">Obama</a></h5>
                                        <p class="role">Project Manager</p>
                                        <div class="social-media-branding social-media-branding-xs"><a href="#"
                                                                                                       class="social-link branding-twitter"><i
                                                class="fa fa-twitter-square"></i></a> <a href="#"
                                                                                         class="social-link branding-facebook"><i
                                                class="fa fa-facebook-square"></i></a> <a href="#"
                                                                                          class="social-link branding-linkedin"><i
                                                class="fa fa-linkedin-square"></i></a> <a href="#"
                                                                                          class="social-link branding-google-plus"><i
                                                class="fa fa-google-plus-square"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-md-3 grid-item">
                                    <div class="team-member">
                                        <a href="team-member.htm" class="mt-5">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5 class="name">
                                            <a href="team-member.htm"
                                               title="View Kate's profile">Add New Team Member</a>
                                        </h5>
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
  import UserSidebar from 'components/UserSidebar'
  import UserHeader from 'components/UserHeader'

  export default {
    name: 'Team',
    data () {
      return {
        file: null,

        team_name: '',
        description: '',

        message: ''
      }
    },
    components: {
      'user-sidebar': UserSidebar,
      'user-header': UserHeader
    },
    methods: {
      onFileChange (e) {
        var file = e.target.files || e.dataTransfer.files
        if (!file.length) return
        this.file = file[0]
      },
      updateTeam () {
        /* global FormData */
        let formData = new FormData()
        if (this.self.is_company) {
          formData.append('company_name', this.company_name)
          formData.append('company_register_file', this.file)
          formData.append('company_phone', this.company_phone)
          formData.append('company_contact', this.company_contact)
          formData.append('company_email', this.tech_tags)
          formData.append('company_address', this.company_address)
          formData.append('company_field', this.company_field)
        }
        this.$store.dispatch('verifySelf', formData)
          .catch((error) => {
            console.log(error)
          })
      },
    },
    mounted () {
      this.team_name = this.me.info.team.name
      this.description = this.me.info.team.description

    },
    computed: {
      me () {
        return this.$store.getters.self
      },
    },
  }
</script>
