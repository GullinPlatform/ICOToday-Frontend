<template>
  <div class="container container-padding" v-if="loaded">
    <div class="row justify-content-center" v-if="token_valid&&!success">
      <div class="col-md-8">
        <div class="padding-top-3x hidden-md-up"></div>
        <h3 class="margin-bottom-1x">Password Reset</h3>
        <div class="row">
          <div class="col-sm-12 mt-2">
            <h6 class="text-muted text-normal text-uppercase ">Set Password</h6>
            <hr class="mb-3 mt-2">
            <div class="form-group">
              <div class="row">
                <div class="col-sm-12">
                  <input v-model="password1" type="password" class="form-control"
                         :class="{'border-danger': pass_mismatch}" name="first-name"
                         placeholder="Set Password">
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-sm-12">
                  <input v-model="password2" type="password" class="form-control"
                         :class="{'border-danger': pass_mismatch}" name="first-name"
                         placeholder="Repeat Password">
                </div>
              </div>
              <p class="text-danger">{{err_msg}}</p>
            </div>
          </div>
          <div class="col-12 text-center text-sm-right">
            <button class="btn btn-primary margin-bottom-none" @click="forgetPasswordResetPassword()">Reset</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" v-if="!token_valid">
      <div class="col-sm-8">
        <div class="card text-center">
          <div class="card-body">
            <h3 class="card-title"><i class="fa fa-times"></i> Ooops, Something went wrong</h3>
            <p class="text-danger">Error Message: {{err_msg}}</p>
            <p>Tips: Did you use the right URL?</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" v-if="success">
      <div class="col-sm-8">
        <div class="card text-center">
          <div class="card-body">
            <h3 class="card-title"><i class="fa fa-times"></i> Password Reset Successful!</h3>
            <a href="javascript:void(0)" data-toggle="modal" data-target="#login-modal">Login using new password</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InvitedRegister',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Reset Password',
      }
    },
    data () {
      return {
        loaded: false,
        token_valid: false,
        success: false,

        password1: '',
        password2: '',

        pass_mismatch: false,
        err_msg: ''
      }
    },
    methods: {
      forgetPasswordResetPassword () {
        if (this.password1 === this.password2) {
          const formData = {
            token: this.$route.query.token,
            password: this.password1
          }
          this.$store.dispatch('forgetPasswordResetPassword', formData)
            .then(() => {
              this.success = true
            })
            .catch((error) => {
              this.loaded = true
              this.err_msg = error.body.detail
            })
        }
        else {
          this.pass_mismatch = true
          this.err_msg = 'Password Mismatch'
        }
      }
    },
    computed: {
      login_status () {
        return this.$store.getters.login_status
      },
    },
    created () {
      if (!this.$route.query.hasOwnProperty('token')) {
        this.loaded = true
        this.err_msg = 'Token Not Found'
      } else {
        this.$store.dispatch('forgetPasswordVerifyToken', this.$route.query.token)
          .then(() => {
            this.loaded = true
            this.token_valid = true
          })
          .catch((error) => {
            this.loaded = true
            this.err_msg = error.body.detail
          })
      }
    },
    beforeCreate () {
      // redirect login user
      if (this.login_status) {
        this.$router.push({name: 'landing'})
      }
    }
  }
</script>
