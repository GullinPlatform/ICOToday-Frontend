<template>
  <div class="container container-padding">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="padding-top-3x hidden-md-up"></div>
        <h3 class="text-center">Welcome to ICOToday!</h3>
        <h6 class="margin-bottom-1x text-center text-muted" v-if="referrer">Your Referrer is {{referrer}}</h6>
        <div class="card-new-layout">
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
          <div class="form-group">
            <vue-recaptcha align="center" ref="recaptcha" :sitekey="sitekey" @verify="onVerify" @expired="onExpired"></vue-recaptcha>
          </div>
        
          <label class="custom-control custom-checkbox d-block">
            <input name="check" v-model="check" v-validate.initial="'required'" type="checkbox" class="custom-control-input" @keyup.enter="getToken($event)">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description"> I certify that I agree to the
              <router-link class="sign-up-link" :to="{name:'terms', query:{type:'terms'}}">ICOToday Terms and Services </router-link>
              and
              <router-link class="sign-up-link" :to="{name:'terms', query:{type:'privacy'}}">ICOToday Privacy Policy </router-link>
            </span>
          </label>
        </div>
        <div class="row justify-content-center">
          <div class="col-sm-6">
            <a href="javascript:void(0)" @click="register()" :disabled="errors.any() || loading" class="btn btn-primary btn-block text-white">
              Register<span v-if="loading">ing</span>
            </a>
            <spinner v-show="loading"></spinner>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VueRecaptcha from 'vue-recaptcha'
  import Spinner from 'components/Spinner'
  import { SHA256 } from '../config'

  export default {
    name: 'ReferredRegister',
    components: {VueRecaptcha, Spinner},
    data () {
      return {
        first_name: '',
        last_name: '',

        email: '',
        password: '',
        check: false,
        whitelist: true,
        invest_amount: '',
        verified: '',

        email_msg: '',
        sitekey: '6LcRUjIUAAAAAJ8u6wyy3mva4XchIbZ8-4fpyERM',
        loading: false,

        referrer: ''
      }
    },
    methods: {
      register () {
        if (this.loading) return

        this.loading = true
        this.email_msg = ''
        this.$validator.validateAll().then((result) => {
          // If Invalid
          if (!result || !this.verified) {
            this.loading = false
            return
          }

          // Valid
          const form_data = {
            email: this.email,
            password: SHA256(this.password),
            first_name: this.first_name,
            last_name: this.last_name,
            referrer: this.referrer,
            verified: this.verified,
            whitelist: this.whitelist,
            amount_to_invest: this.invest_amount ? this.invest_amount : 0,
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
        this.email_msg = ''
        this.sitekey = '6LcRUjIUAAAAAJ8u6wyy3mva4XchIbZ8-4fpyERM'
        this.loading = false
      },
      getReferrer () {
        this.referrer = this.$route.query.refer
      }
    },
    beforeMount () {
      this.getReferrer()
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
