<template>
  <div class="col-md-9">
    <h6 class="text-muted text-normal text-uppercase ">Profile</h6>
    <hr class="mb-3 mt-2">
    <div class="card-new-layout">
      <h6 class="text-muted text-normal text-uppercase">Avatar</h6>
      <hr class="mb-3 mt-2">
      <div class="row">
        <label class="col-sm-2 col-form-label">Avatar</label>
        <div class="col-sm-2">
          <img :src="self.info.avatar" v-if="!avatar_cropped"
               class="rounded-circle img-padded"
               width="100" height="100">
          <img :src="avatar_img.toDataURL()"
               class="rounded-circle img-padded"
               width="100" height="100" v-else>
        </div>
        <div class="col-sm-4" v-if="!avatar_change">
          <button class="btn btn-secondary mr-3" @click="avatar_change = true">Change</button>
        </div>
        <div class="col-sm-4" v-if="avatar_change">
          <avatar-editor :width=150 :height=150 ref="vueavatar"
                         @vue-avatar-editor:image-ready="onImageReady">
          </avatar-editor>
          <avatar-editor-scale :width=200 :min=1 :max=3 :step=0.02 ref="vueavatarscale"
                               @vue-avatar-editor-scale:change-scale="onChangeScale">
          </avatar-editor-scale>
        </div>
        <div class="col-sm-4" v-if="avatar_change">
          <button class="btn btn-primary mr-3" v-on:click="saveClicked">Update
          </button>
          <button class="btn btn-secondary"
                  @click="avatar_cropped=false; avatar_change=false; avatar_img='';">Cancel
          </button>
        </div>
      </div>
    </div>

    <div class="card-new-layout">
      <h6 class="text-muted text-normal text-uppercase ">Basic Info</h6>
      <hr class="mb-3 mt-2">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">First Name</label>
        <div class="col-sm-4">
          <input class="form-control" v-model.lazy="me.first_name" type="text" id="first_name">
        </div>
        <label class="col-sm-2 col-form-label">Last Name</label>
        <div class="col-sm-4">
          <input class="form-control" v-model.lazy="me.last_name" type="text" id="last_name">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Title</label>
        <div class="col-sm-10">
          <input class="form-control" v-model.lazy="me.title" type="text" placeholder="ex. CEO">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">About Me</label>
        <div class="col-sm-10">
          <textarea class="form-control" v-model.lazy="me.description" placeholder=""></textarea>
        </div>
      </div>
    </div>
    <div class="card-new-layout">
      <h6 class="text-muted text-normal text-uppercase ">Social Media</h6>
      <hr class="mb-3 mt-2">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">LinkedIn</label>
        <div class="col-sm-10">
          <input class="form-control" v-model.lazy="me.linkedin" type="text">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Twitter</label>
        <div class="col-sm-10">
          <input class="form-control" v-model.lazy="me.twitter" type="text">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Telegram</label>
        <div class="col-sm-10">
          <input class="form-control" v-model.lazy="me.telegram" type="text">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Facebook</label>
        <div class="col-sm-10">
          <input class="form-control" v-model.lazy="me.facebook" type="text">
        </div>
      </div>
    </div>

    <div class="card-new-layout pt-1 pb-1">
      <div class="row justify-content-end">
        <div class="col-md-10 ">
          <button type="button" @click="updateSelf()" class="mb-1 btn btn-block btn-primary">
            Submit Change
          </button>
          <p class="text-green">{{message}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AvatarEditor from 'src/views/components/AvatarEditor'
  import AvatarEditorScale from 'src/views/components/AvatarEditorScale'

  export default {
    name: 'MySettings',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Profile',
      }
    },
    components: {
      AvatarEditor,
      AvatarEditorScale,
    },
    data () {
      return {
        me: {},

        avatar_change: false,
        avatar_cropped: false,
        avatar_img: '',

        message: ''
      }
    },
    methods: {
      onChangeScale (scale) {
        this.$refs.vueavatar.changeScale(scale)
        this.avatar_img = this.$refs.vueavatar.getImageScaled()
      },
      saveClicked () {
        /* global FormData */

        let formData = new FormData()

        this.avatar_img.toBlob((blob) => {
          formData.append('avatar', blob, 'avatar.id' + this.self.id + '.png')
          this.$store.dispatch('updateSelf', formData)
            .then(() => {
              this.$store.dispatch('getSelf').then(() => {
                this.avatar_cropped = false
                this.avatar_change = false
                this.avatar_img = ''
                this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your avatar is updated!'})
              })
            })
            .catch((error) => {
              console.log(error)
            })
        })

      },
      onImageReady (scale) {
        this.$refs.vueavatarscale.setScale(scale)
        this.avatar_cropped = true
        this.avatar_img = this.$refs.vueavatar.getImageScaled()
      },
      updateSelf () {
        let formData = this.me
        delete formData['avatar']
        this.$store.dispatch('updateSelf', this.me)
          .then(() => {
            this.$store.dispatch('getSelf').then(() => {
              this.me = this.self.info
            })
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your info is updated!'})
            this.message = ''
          })
          .catch((error) => {
            this.message = error.response
          })
      },
    },
    computed: {
      self () {
        return this.$store.getters.self
      },
    },
    beforeCreate () {
      // redirect not verified user
      if (!this.$store.getters.is_verified) {
        this.$router.push({name: 'me_need_verify'})
      }
    },
    mounted () {
      this.me = this.self.info
    }
  }
</script>
