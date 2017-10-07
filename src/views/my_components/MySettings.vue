<template>
  <div class="col-md-8">
    <h6 class="text-muted text-normal text-uppercase ">Settings</h6>
    <hr class="mb-3 mt-2">
    <div class="card-new-layout">
      <h6 class="text-muted text-normal text-uppercase ">Auth</h6>
      <hr class="mb-3 mt-2">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input class="form-control" :value="self.email" disabled>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-4">
          <button class="btn btn-secondary mr-3" @click="changePassword()">Change</button>
        </div>
      </div>
    </div>
    <div class="card-new-layout pt-1 pb-1">
      <div class="row justify-content-end">
        <div class="col-md-10">
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
  export default {
    name: 'MySettings',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Settings',
      }
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
          })
          .catch((error) => {
            this.message = error.body.detail
          })
      },
      changePassword () {
        this.$store.dispatch('sendTwoFactorEmail')
      }
    },
    computed: {
      self () {
        return this.$store.getters.self
      },
    },
    mounted () {
      this.me = this.self.info
    }
  }
</script>
