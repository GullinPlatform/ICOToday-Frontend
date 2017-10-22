<template>
  <!--@modal - signup modal-->
  <div class="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            Sign Up
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">

          <div class="form-group">
            <div class="row">
              <div class="col-sm-6">
                <input name="first_name" v-model="first_name" v-validate="'required|alpha'" class="form-control" placeholder="First Name *">
                <span v-show="errors.has('first_name')" class="text-danger"><i class="fa fa-warning"></i> {{ errors.first('first_name') }}</span>
              </div>
              <div class="col-sm-6">
                <input name="last_name" v-model="last_name" v-validate="'required|alpha'" class="form-control" placeholder="Last Name *">
                <span v-show="errors.has('last_name')" class="text-danger"><i class="fa fa-warning"></i> {{ errors.first('last_name') }}</span>
              </div>
            </div>
          </div>

          <div class="form-group">
            <input type="email" name="email" v-model="email" v-validate="'required|email'" class="form-control" placeholder="Email *">
            <span v-show="errors.has('email')" class="text-danger"><i class="fa fa-warning"></i> {{ errors.first('email') }}</span>
            <span v-show="email_msg" class="text-danger"><i class="fa fa-warning"></i> {{ email_msg }}</span>
          </div>

          <div class="form-group">
            <input name="password" v-model="password" v-validate="'required'" type="password" class="form-control" placeholder="Password *">
            <span v-show="errors.has('password')" class="text-danger"><i class="fa fa-warning"></i> {{ errors.first('password') }}</span>
          </div>

          <!--<div class="card capcha-card form-group">-->
          <!--<vue-recaptcha align="center" ref="recaptcha" :sitekey="sitekey" @verify="onVerify" @expired="onExpired"></vue-recaptcha>-->
          <!--</div>-->

          <label class="custom-control custom-checkbox d-block">
            <input name="check" v-model="check" v-validate.initial="'required'" type="checkbox" class="custom-control-input" @keyup.enter="getToken($event)">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description"> I certify that I agree to the
              <router-link class="sign-up-link" :to="{name:'terms', query:{type:'terms'}}">ICOToday Terms and Services </router-link>
              and
              <router-link class="sign-up-link" :to="{name:'terms', query:{type:'privacy'}}">ICOToday Privacy Policy </router-link>
            </span>
          </label>

          <div class="row justify-content-center">
            <div class="col-sm-6">
              <a href="javascript:void(0)" @click="register()" :disabled="errors.any() || loading" class="btn btn-primary btn-block text-white">
                Register<span v-if="loading">ing</span>
              </a>
              <spinner v-show="loading"></spinner>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <small class="float-left">
            <router-link :to="{name:'forget_password'}" data-dismiss="modal" class="sign-up-link float-left">Forget Password? </router-link>
          </small>

          <small>Already Have Account？
            <a href="javascript:void(0)" data-toggle="modal" data-target="#login-modal" data-dismiss="modal" class="sign-up-link">Login Here! </a>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VueRecaptcha from 'vue-recaptcha'
  import Spinner from 'components/Spinner'
  import { SHA256 } from '../../config'
  import getIP from '../../api/ip.js'

  export default {
    name: 'SignUp',
    components: {VueRecaptcha, Spinner},
    data () {
      return {
        first_name: '',
        last_name: '',

        email: '',
        password: '',
        check: false,
        verified: '',
        ip: '',

        email_msg: '',
        sitekey: '6LcRUjIUAAAAAJ8u6wyy3mva4XchIbZ8-4fpyERM',
        loading: false
      }
    },
    methods: {
      register () {
        this.loading = true
        this.email_msg = ''

        this.$validator.validateAll().then((result) => {
          // If Invalid
//          if (!result || !this.verified) {
//            this.loading = false
//            return
//          }
          if (!result) {
            this.loading = false
            return
          }
          // Valid
          getIP()
            .then((response) => {
              const form_data = {
                email: this.email,
                password: SHA256(this.password),
                first_name: this.first_name,
                last_name: this.last_name,
                // verified: this.verified,
                last_login_ip: response.ip
              }

              this.$store.dispatch('signup', form_data)
                .then(() => {
                  this.$store.dispatch('cleanWhiteListEmail')
                  // Clean up
                  this.resetState()
                })
                .catch((error) => {
                  this.loading = false
                  console.log(error.response)
                  if (error.response.data.hasOwnProperty('email'))
                    this.email_msg = error.response.data.email[0]
                })
            })
            .catch(() => {
              const form_data = {
                email: this.email,
                password: SHA256(this.password),
                first_name: this.first_name,
                last_name: this.last_name,
                // verified: this.verified,
              }

              this.$store.dispatch('signup', form_data)
                .then(() => {
                  this.$store.dispatch('cleanWhiteListEmail')
                  // Clean up
                  this.resetState()
                })
                .catch((error) => {
                  this.loading = false
                  console.log(error.response)
                  if (error.response.data.hasOwnProperty('email'))
                    this.email_msg = error.response.data.email[0]
                })
            })
        })
      },
      onVerify (response) {
        this.verified = response
      },
      onExpired () {
        this.$refs.recaptcha.reset()
      },
      resetState () {
        this.first_name = ''
        this.last_name = ''
        this.email = ''
        this.password = ''
        this.check = false
        this.verified = ''
        this.ip = ''
        this.email_msg = ''
        this.sitekey = '6LcRUjIUAAAAAJ8u6wyy3mva4XchIbZ8-4fpyERM'
        this.loading = false
      }
    },
    computed: {
      white_list_email () {
        return this.$store.getters.white_list_email
      }
    },
    watch: {
      white_list_email: function () {
        this.email = this.white_list_email
      }
    }
  }

</script>

<style scoped>
  .sign-up-link {
    text-decoration: none;
  }

  .capcha-card {
    border-radius: 22px !important;
  }
</style>
