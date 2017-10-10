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
        <div class="modal-body" v-if="is_verified">
          <h6 class="text-muted text-normal text-uppercase">Email (Optional)</h6>
          <hr class="mb-3 mt-2">
          <div class="form-group">
            <input v-model="email" type="text" class="form-control" name="email" placeholder="Email">
            <small class="text-muted">
              We'll send a invitation message to the email address, once the team member registered account, you will get 5 ICTs as reward
            </small>
          </div>
          <h6 class="text-muted text-normal text-uppercase" :class="{'text-danger':avatar_missing}">Avatar</h6>
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
              <avatar-editor :width=150 :height=150 ref="member_avatar" @vue-avatar-editor:image-ready="onImageReady">
              </avatar-editor>
              <avatar-editor-scale :width=200 :min=1 :max=3 :step=0.02 ref="member_avatar_scale" @vue-avatar-editor-scale:change-scale="onImageChangeScale">
              </avatar-editor-scale>
            </div>
          </div>
          <h6 class="text-muted text-normal text-uppercase">Basic</h6>
          <hr class="mb-3 mt-2">
          <div class="form-group">
            <div class="row">
              <div class="col-sm-6">
                <input v-model="first_name" type="text" class="form-control" name="first-name" placeholder="First Name *">
              </div>
              <div class="col-sm-6">
                <input v-model="last_name" type="text" class="form-control" name="last-name" placeholder="Last Name *">
              </div>
            </div>
          </div>
          <div class="form-group">
            <input v-model="title" type="text" class="form-control" placeholder="Title * (Ex. Co-Founder & CEO)">
          </div>
          <div class="form-group mb-1">
            <textarea v-model="description" type="text" class="form-control" placeholder="Description"></textarea>
          </div>
          <h6 class="text-muted text-normal text-uppercase">Social Media</h6>
          <hr class="mb-3 mt-2">
          <div class="form-group">
            <input v-model="linkedin" type="text" class="form-control" placeholder="LinkedIn">
          </div>
          <div class="form-group">
            <input v-model="twitter" type="text" class="form-control" placeholder="Twitter">
          </div>
          <div class="form-group">
            <input v-model="facebook" type="text" class="form-control" placeholder="Facebook">
          </div>
          <div class="form-group">
            <input v-model="telegram" type="text" class="form-control" placeholder="Telegram">
          </div>
          <a @click="addTeamMember($event)" class="btn btn-block btn-primary text-white" :disabled="uploading">
            SUBMIT<span v-if="uploading">ING</span>
          </a>
          <p class="text-danger">{{error_message}}</p>
        </div>
        <div class="modal-body text-center" v-else="">
          <h4 class="mt-3">
            You have to verify your email first
          </h4>
          <a href="javascript:void(0)" @click="" class="btn btn-primary mt-2">Resend Email</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex'

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
        // avatar
        avatar_cropped: false,
        avatar_img: null,
        // form data
        first_name: '',
        last_name: '',
        email: '',
        title: '',
        description: '',
        linkedin: '',
        twitter: '',
        facebook: '',
        telegram: '',
        // error message
        error_message: '',
        // UI control
        avatar_missing: false,
        uploading: false,
      }
    },
    methods: {
      addTeamMember () {
        // If upload is in process, don't do anything
        if (this.uploading)
          return
        // Disable button
        this.uploading = true

        // Post with img or without img
        if (this.avatar_img)
          this.performPost()
        else {
          this.avatar_missing = true
          this.error_message = 'Avatar is required!'
          this.uploading = false
        }
      },

      performPost () {
        /* global FormData:true $:true */
        const formData = new FormData()
        this.avatar_img.toBlob((blob) => {
          formData.append('avatar', blob, 'avatar.time' + Date.now() + '.png')
          formData.append('first_name', this.first_name)
          formData.append('last_name', this.last_name)
          formData.append('email', this.email)
          formData.append('title', this.title)
          formData.append('description', this.description)
          formData.append('linkedin', this.linkedin)
          formData.append('twitter', this.twitter)
          formData.append('facebook', this.facebook)
          formData.append('telegram', this.telegram)
          formData.append('type', this.is_advisor ? 3 : 0)

          this.$store.dispatch('createCompanyMember', formData)
            .then(() => {
              this.$store.dispatch('getCompanyMembers', this.self_company.id).then(() => {
                this.dataReset()
                this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Team member added.'})
                $('#add-member-modal').modal('hide')
              })
            })
            .catch((error) => {
              this.uploading = false
              this.error_message = error.body.detail
              console.log(error)
            })
        })
      },

      onImageReady (scale) {
        this.$refs.member_avatar_scale.setScale(scale)
        this.avatar_cropped = true
        this.avatar_img = this.$refs.member_avatar.getImageScaled()
      },
      onImageChangeScale (scale) {
        this.$refs.member_avatar.changeScale(scale)
        this.avatar_img = this.$refs.member_avatar.getImageScaled()
      },

      dataReset () {
        this.avatar_cropped = false
        this.avatar_img = null

        this.first_name = ''
        this.last_name = ''

        this.email = ''
        this.title = ''
        this.description = ''

        this.linkedin = ''
        this.twitter = ''
        this.facebook = ''
        this.telegram = ''

        this.error_message = ''
        this.uploading = false
        this.avatar_missing = false
      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        self_company: 'self_company',
        is_verified: 'is_verified',
        is_advisor: 'is_advisor',
      })
    },
    watch: {
      is_advisor () {
        this.dataReset()
      }
    }
  }

</script>
