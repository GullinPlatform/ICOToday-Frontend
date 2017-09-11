<template>
    <div class="modal fade" id="add-member-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" v-if="!is_advisor">
                        Add Team Member
                    </h4>
                    <h4 class="modal-title" v-else>
                        Add Team Advisor
                    </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <h6 class="text-muted text-normal text-uppercase ">Avatar</h6>
                    <hr class="mb-3 mt-2">
                    <div class="row">
                        <div class="col-sm-4 text-center">
                            <img src="../../../static/img/account/default.jpg" v-if="!avatar_cropped"
                                 class="img-thumbnail rounded-circle mb-2"
                                 width="100" height="100">
                            <img :src="avatar_img.toDataURL()"
                                 class="img-thumbnail rounded-circle mb-2"
                                 width="100" height="100" v-else>
                            <h6 class="text-normal text-uppercase pt-2">Preview</h6>

                        </div>
                        <div class="col-sm-8 text-center">
                            <!--<div class="row">-->
                            <avatar-editor :width=150 :height=150 ref="member_avatar"
                                           @vue-avatar-editor:image-ready="onMemberImageReady">
                            </avatar-editor>
                            <avatar-editor-scale :width=200 :min=1 :max=3 :step=0.02 ref="member_avatar_scale"
                                                 @vue-avatar-editor-scale:change-scale="onMemberChangeScale">
                            </avatar-editor-scale>
                        </div>
                    </div>
                    <h6 class="text-muted text-normal text-uppercase ">Basic</h6>
                    <hr class="mb-3 mt-2">
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
                    </div>
                    <div class="form-group">
                        <input v-model="title" type="text" class="form-control"
                               placeholder="Title * (Ex. Co-Founder & CEO)">
                    </div>
                    <div class="form-group mb-1">
                            <textarea v-model="description" type="text" class="form-control"
                                      placeholder="Description"></textarea>
                    </div>
                    <h6 class="text-muted text-normal text-uppercase ">Social Media</h6>
                    <hr class="mb-3 mt-2">
                    <div class="form-group">
                        <input v-model="linkedin" type="text" class="form-control"
                               placeholder="LinkedIn">
                    </div>
                    <div class="form-group">
                        <input v-model="twitter" type="text" class="form-control"
                               placeholder="Twitter">
                    </div>
                    <div class="form-group">
                        <input v-model="facebook" type="text" class="form-control" placeholder="Facebook">
                    </div>
                    <div class="form-group">
                        <input v-model="telegram" type="text" class="form-control"
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
  import AvatarEditor from 'components/AvatarEditor'
  import AvatarEditorScale from 'components/AvatarEditorScale'

  export default {
    name: 'AddTeamMember',
    components: {
      AvatarEditor,
      AvatarEditorScale,
    },
    data () {
      return {
        avatar_cropped: false,
        avatar_img: '',

        first_name: '',
        last_name: '',

        email: '',
        title: '',
        description: '',

        linkedin: '',
        twitter: '',
        facebook: '',
        telegram: '',

        errorMsg: '',
      }
    },
    methods: {
      postTeamAdvisor () {
        /* global FormData:true $:true */
        const formData = new FormData()

        this.avatar_img.toBlob((blob) => {
          formData.append('avatar', blob, 'avatar.time' + Date.now() + '.png')
          formData.append('pk', this.$store.getters.self.info.team.id)
          formData.append('first_name', this.first_name)
          formData.append('last_name', this.last_name)
          formData.append('email', this.email)
          formData.append('title', this.title)
          formData.append('description', this.description)
          formData.append('linkedin', this.linkedin)
          formData.append('twitter', this.twitter)
          formData.append('facebook', this.facebook)
          formData.append('telegram', this.telegram)
          formData.append('is_advisor', this.is_advisor)

          this.$store.dispatch('addTeamMember', formData)
            .then(() => {
              this.$store.dispatch('getTeam', this.$store.getters.self.info.team.id).then(() => {
                this.avatar_cropped = false
                this.avatar_img = ''

                this.first_name = ''
                this.last_name = ''

                this.email = ''
                this.title = ''
                this.description = ''

                this.linkedin = ''
                this.twitter = ''
                this.facebook = ''
                this.telegram = ''

                this.errorMsg = ''

                $('#add-member-modal').modal('hide')
                this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Team member added.'})
              })
            })
            .catch((error) => {
              console.log(error)
            })
        })
      },
      onMemberImageReady (scale) {
        this.$refs.member_avatar_scale.setScale(scale)
        this.avatar_cropped = true
        this.avatar_img = this.$refs.member_avatar.getImageScaled()
      },
      onMemberChangeScale (scale) {
        this.$refs.member_avatar.changeScale(scale)
        this.avatar_img = this.$refs.member_avatar.getImageScaled()
      },
    },
    computed: {
      is_advisor () {
        return this.$store.getters.is_advisor
      }
    },
    watch: {
      is_advisor () {
        this.avatar_cropped = false
        this.avatar_img = ''

        this.first_name = ''
        this.last_name = ''

        this.email = ''
        this.title = ''
        this.description = ''

        this.linkedin = ''
        this.twitter = ''
        this.facebook = ''
        this.telegram = ''

        this.errorMsg = ''
      }
    }
  }

</script>
