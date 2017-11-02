<template>
  <div class="modal fade" id="login-modal" tabindex="2" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            Login
          </h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input type="email" name="email" v-model="email" v-validate="'required|email'" class="form-control" placeholder="Email">
            <span v-show="errors.has('email')" class="text-danger"><i class="fa fa-warning"></i> {{ errors.first('email') }}</span>
          </div>
          <div class="form-group">
            <input type="password" name="password" v-model="password" v-validate="'required'" class="form-control" placeholder="Password" @keyup.enter="login($event)">
            <span v-show="errors.has('password')" class="text-danger"><i class="fa fa-warning"></i> {{ errors.first('password') }}</span>
          </div>
          <span v-show="error_message" class="text-danger"><i class="fa fa-warning"></i> {{ error_message }}</span>

          <div class="row justify-content-center">
            <div class="col-sm-6">
              <a href="javascript:void(0)" @click="login($event)" :disabled="errors.any()" class="btn btn-primary btn-block text-white">Login</a>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <small class="float-left">
            <router-link :to="{name:'forget_password'}" data-dismiss="modal" class="sign-up-link">Forget Password?</router-link>
          </small>
          <small>Do not have an account yet?
            <a href="javascript:void(0)" data-toggle="modal" data-target="#signup-modal" data-dismiss="modal" class="sign-up-link">Register Now!</a>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { SHA256 } from '../../config'

  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: '',
        error_message: '',
      }
    },
    methods: {
      login (e) {
        e.preventDefault()
        if (this.errors.any())
          return

        const form_data = {
          email: this.email,
          password: SHA256(this.password),
        }

        this.$store.dispatch('login', form_data)
          .then(() => {
            // Log IP
            this.$store.dispatch('logIP')
            // Clean up
            this.resetState()
          })
          .catch(() => {
            this.error_message = 'Unable to login using provided email and password'
            this.password = ''
          })
      },
      resetState () {
        this.email = ''
        this.password = ''
        this.error_message = ''
      }
    }
  }

</script>

<style scoped>
  .sign-up-link {
    text-decoration: none;
  }
</style>

