<template>
    <div v-if="loaded">
        <div class="row justify-content-center mt-5">
            <div class="col-sm-8" v-if="token_valid">
                <div class="card text-center">
                    <div class="card-body">
                        <h3 class="card-title"><i class="fa fa-check"></i> Congratulations</h3>
                        <p>Your email address has been proved!</p>
                    </div>
                    <div class="card-footer text-muted">
                        <router-link :to="{name:'landing'}" class="btn btn-primary">Explore</router-link>
                    </div>
                </div>
            </div>
            <div class="col-sm-8" v-else>
                <div class="card text-center">
                    <div class="card-body">
                        <h3 class="card-title"><i class="fa fa-times"></i> Ooops, Something went wrong</h3>
                        <p class="text-danger">Error Message: {{err_msg}}</p>
                        <p>Tips: Did you use the right URL?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ConfirmEmail',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Email Verification',
      }
    },
    data () {
      return {
        loaded: false,
        title: '',
        token_valid: false,
        err_msg: ''
      }
    },
    created () {
      if (!this.$route.query.hasOwnProperty('token')) {
        this.loaded = true
        this.err_msg = 'Token Not Found'
      } else {
        this.$store.dispatch('confirmEmail', this.$route.query.token)
          .then(() => {
            this.loaded = true
            this.token_valid = true
          })
          .catch((error) => {
            this.loaded = true
            this.err_msg = error.body.detail
          })
      }
    }
  }
</script>
