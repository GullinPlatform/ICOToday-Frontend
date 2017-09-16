<template>
    <div class="container padding-bottom-3x mb-2 mt-5 pl-3 pr-3">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
                <h2>Forgot your password?</h2>
                <p>Change your password in three easy steps. This helps to keep your new password secure.</p>
                <ol class="list-unstyled">
                    <li><span class="text-primary text-medium">1. </span>Fill in your email address below.</li>
                    <li><span class="text-primary text-medium">2. </span>We'll email you a temporary password reset link.</li>
                    <li><span class="text-primary text-medium">3. </span>Use the link to change your password on our secure website.</li>
                </ol>
                <div class="card mt-4" v-if="!sent">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="email">Enter your email address</label>
                            <input class="form-control" id="email" v-model="email">
                            <small class="form-text text-muted">Type in the email address you used when you registered with ICOToday. Then we'll email a password reset link to this address.</small>
                            <p class="form-text text-danger">{{error_message}}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary" @click="forgetPasswordSendEmail()">Send Link</button>
                    </div>
                </div>
                <div class="card text-center" v-else>
                    <div class="card-body"><h3 class="card-title"><i class="fa fa-check"></i> We have sent the email with the password reset link</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'ForgetPassword',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Forget Password',
      }
    },
    data () {
      return {
        email: '',
        sent: false,
        error_message: '',
      }
    },
    methods: {
      forgetPasswordSendEmail () {
        if (!this.email) {
          this.error_message = 'Please provide email'
          return
        }
        this.$store.dispatch('forgetPasswordSendEmail', this.email)
          .then(() => {
            this.sent = true
          })
          .catch(() => {
            this.loaded = true
            this.error_message = 'We are unable to find the account with this email provided, are you sure you put the right email address?'
          })
      }
    },
    computed: {
      login_status () {
        return this.$store.getters.login_status
      },
    },
    beforeCreate () {
      // redirect login user
      if (this.$store.login_status) {
        this.$router.push({name: 'landing'})
      }
    }
  }
</script>