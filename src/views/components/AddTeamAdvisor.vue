<template>
    <div class="modal fade" id="add-advisor-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">
                        Add Team Advisor
                    </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <h4 class="text-center">Avatar</h4>
                    <hr>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="col-md-2 text-md-center">
                                <!-- <img src="../../../static/img/homes/code.jpg" class="rounded-circle img-padded"
                                     width="100" height="100"> -->
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="form-group">
                                <div class="dropzone-area" v-if="!avatar_loaded">
                                    <div class="dropzone-text">
                                        <i class="fa fa-cloud-upload"> </i>
                                        <span>Drag file here or click to upload file</span>
                                    </div>
                                    <input type="file" required @change="onAvatarChange">
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 class="text-center">Basic</h4>
                    <hr>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-6">
                                <input v-model="first_name" type="text" class="form-control" name="first-name"
                                       placeholder="First Name *">
                            </div>
                            <div class="col-sm-6">
                                <input v-model="last_name" type="text" class="form-control" name="last-name"
                                       placeholder="Last Name *">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input v-model="email" type="text" class="form-control" name="email" placeholder="Email *">
                        <p class="text-danger">{{errorMsg}}</p>
                    </div>
                    <div class="form-group">
                        <input v-model="title" type="text" class="form-control" name="title"
                               placeholder="Title * (Ex. Co-Founder & CEO)">
                        <p class="text-danger">{{errorMsg}}</p>
                    </div>
                    <div class="form-group">
                            <textarea v-model="description" type="text" class="form-control" name="title"
                                      placeholder="Description"></textarea>
                        <p class="text-danger">{{errorMsg}}</p>
                    </div>
                    <h4 class="text-center">Social Media</h4>

                    <hr>
                    <div class="form-group">
                        <input v-model="linkedin" type="text" class="form-control" name="email"
                               placeholder="LinkedIn">
                        <p class="text-danger">{{errorMsg}}</p>
                    </div>
                    <div class="form-group">
                        <input v-model="twitter" type="text" class="form-control" name="title"
                               placeholder="Twitter">
                        <p class="text-danger">{{errorMsg}}</p>
                    </div>
                    <div class="form-group">
                        <input v-model="slack" type="text" class="form-control" name="title" placeholder="Slack">
                        <p class="text-danger">{{errorMsg}}</p>
                    </div>
                    <div class="form-group">
                        <input v-model="telegram" type="text" class="form-control" name="title"
                               placeholder="Telegram">
                        <p class="text-danger">{{errorMsg}}</p>
                    </div>
                    <a @click="postTeamAdvisor($event)" class="btn btn-block btn-primary text-white">Add Team Member</a>
                </div>
                <div class="modal-footer">
                    <small>
                        We'll send a confirmation message to the email address you provided, notice your team member to click the confirmation link
                    </small>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</template>


<script>
  export default {
    name: 'AddTeamMember',
    data () {
      return {
        avatar: '',

        first_name: '',
        last_name: '',

        email: '',
        title: '',
        description: '',

        linkedin: '',
        twitter: '',
        slack: '',
        telegram: '',

        avatar_loaded: false,

        errorMsg: '',

      }
    },
    methods: {
      postTeamAdvisor () {
        /* global FormData:true */
        const formData = new FormData()

        formData.append('pk', this.$store.getters.self.info.team.id)

        formData.append('avatar', this.avatar)
        formData.append('first_name', this.first_name)
        formData.append('last_name', this.last_name)
        formData.append('email', this.email)
        formData.append('title', this.title)
        formData.append('description', this.description)
        formData.append('linkedin', this.linkedin)
        formData.append('twitter', this.twitter)
        formData.append('slack', this.slack)
        formData.append('telegram', this.telegram)
        formData.append('is_advisor', true)

        this.$store.dispatch('addTeamMember', formData)
          .then(() => {
            this.$store.dispatch('getTeam', this.$store.getters.self.info.team.id)
          })
          .catch(() => {

          })
      },
      onAvatarChange (e) {
        var file = e.target.files || e.dataTransfer.files
        if (!file.length) return
        this.avatar = file[0]
        this.avatar_loaded = true
      },
    }
  }

</script>
