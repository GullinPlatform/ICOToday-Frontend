<template>
  <div class="container container-padding" v-if="loaded">
    <div class="row justify-content-center" v-if="token_valid">
      <div class="col-md-8">
        <div class="padding-top-3x hidden-md-up"></div>
        <h3 class="margin-bottom-1x">Welcome to ICOToday! {{user_name}}</h3>
        <p>Your ICO <span class="text-bold" v-if="user.info&&user.info.team">{{user.info.team.name}}</span>
          is Listed on ICOToday, Join Us to Gain Control of your ICO and Communicate Securely with Your Investors Directly!</p>
        <div class="row">
          <div class="col-sm-12">
            <h6 class="text-muted text-normal text-uppercase ">MY ACCOUNT</h6>
            <hr class="mb-3 mt-2">
            <div class="row">
              <div class="col-sm-4 text-center">
                <img :src="user.info.avatar"
                     class="img-thumbnail rounded-circle mb-2"
                     width="100" height="100">
              </div>
              <div class="col-sm-8">
                <div class="row">
                  <div class="col-sm-12">
                    <input :value="user.info.last_name + ' ' + user.info.first_name" disabled
                           class="form-control">
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-sm-12">
                    <input :value="user.email" disabled class="form-control">
                  </div>
                </div>
              </div>
            </div>
          </div>

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
            <button class="btn btn-primary margin-bottom-none" @click="invitedSignup()">Register</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" v-else>
      <div class="col-sm-8">
        <div class="card text-center">
          <div class="card-body">
            <h3 class="card-title"><i class="fa fa-times"></i> Ooops, Something went wrong</h3>
            <p class="text-danger">Error Message: {{err_msg}}</p>
            <p v-if="err_msg!='Token Expired'">Tips: Did you use the right URL?</p>
            <button class="btn btn-primary"
                    @click="invitedResendEmail()"
                    :disabled="sending || !able_to_resend"
                    v-if="err_msg==='Token Expired'">
              <span v-if="!sending && able_to_resend">Resend Invitation Email</span>
              <span v-else-if="sending && able_to_resend">Sending</span>
              <span v-else-if="!able_to_resend">Sent</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'InvitedRegister',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Invited Register',
      }
    },
    data () {
      return {
        loaded: false,
        token_valid: false,
        password1: '',
        password2: '',

        pass_mismatch: false,
        err_msg: '',
        sending: false
      }
    },
    methods: {
      invitedSignup () {
        if (this.password1 === this.password2) {
          const formData = {
            token: this.$route.query.token,
            password: this.password1
          }
          this.$store.dispatch('invitedSignup', formData)
            .then(() => {
              this.$router.push({name: 'me'})
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
      },
      invitedResendEmail () {
        if (this.sending || !this.able_to_resend)
          return

        this.sending = true
        this.$store.dispatch('invitedResendEmail', this.$route.query.token)
          .then(() => {
            this.sending = false
            this.$store.dispatch('toastr', {type: 'success', title: 'Email Sent', message: 'Please check your inbox.'})
          })
          .catch((error) => {
            this.sending = false
            this.loaded = true
            this.err_msg = error.body.detail
          })
      }
    },
    computed: {
      ...mapGetters({
        user: 'user',
        login_status: 'login_status',
        able_to_resend: 'able_to_resend',
      })
    },
    created () {
      if (!this.$route.query.hasOwnProperty('token')) {
        this.loaded = true
        this.err_msg = 'Token Not Found'
      } else {
        this.$store.dispatch('invitedGetUser', this.$route.query.token)
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
    beforeMount () {
      // redirect login user
      if (this.login_status) {
        this.$router.push({name: 'landing'})
      }
    }
  }
</script>
