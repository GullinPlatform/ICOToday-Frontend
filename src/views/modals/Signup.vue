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
            <input v-model.trim="email" type="text" class="form-control" name="email" placeholder="Email *"
                   required>
            <p class="text-danger font-bold">{{email_msg}}</p>
          </div>
          <div class="form-group">
            <input v-model="password" type="password" class="form-control" name="password"
                   placeholder="Password *" required>
          </div>
          <div class="card capcha-card form-group">
            <vue-recaptcha align="center"
                           ref="recaptcha"
                           :sitekey="sitekey"
                           @verify="onVerify"
                           @expired="onExpired">
            </vue-recaptcha>
          </div>
          <label class="custom-control custom-checkbox d-block">
            <input class="custom-control-input" type="checkbox" @keyup.enter="getToken($event)" v-model="check">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description"> I certify that I agree to the
              <router-link class="sign-up-link" :to="{name:'terms', query:{type:'terms'}}">ICOToday Terms and Services </router-link>
              and
              <router-link class="sign-up-link" :to="{name:'terms', query:{type:'privacy'}}">ICOToday Privacy Policy </router-link>
            </span>
          </label>

          <div class="row justify-content-center">
            <div class="col-sm-8">
              <a @click="register()" class="btn btn-primary btn-block text-white">Register</a>
            </div>
          </div>
          <p class="text-danger font-bold" v-show="error_msg">{{error_msg}}</p>

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
  import { SHA256 } from '../../config'
  import getIP from '../../api/ip.js'

  export default {
    name: 'SignUp',
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
        error_msg: '',
        sitekey: '6LervDEUAAAAANhKYg5MAXNtNGe84zeCnmsc0d1A',
      }
    },
    components: {VueRecaptcha},
    methods: {
      register () {
        this.email_msg = ''

        getIP().then((response) => {
          this.ip = response.ip
          const form_data = {
            email: this.email,
            password: SHA256(this.password),
            first_name: this.first_name,
            last_name: this.last_name,
            verified: this.verified,
            last_login_ip: this.response.ip
          }

          if (!(this.first_name && this.last_name && this.email && this.password)) {
            this.error_msg = 'Please make sure you filled all required fields'
          }
          else if (!this.check) {
            this.error_msg = 'Please check the user contract'
          }
          else {
            this.$store.dispatch('signup', form_data)
              .then(() => {
                this.$store.dispatch('cleanWhiteListEmail')
              })
              .catch((error) => {
                for (let e in error.data) {
                  if (e === 'email') this.email_msg = error.data[e][0]
                }
              })
          }
        })
      },
      onVerify (response) {
        this.verified = response
      },
      onExpired () {
        this.$refs.recaptcha.reset()
      },
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
