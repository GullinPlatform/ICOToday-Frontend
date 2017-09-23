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
            <input type="email" v-model.trim="email" class="form-control email" placeholder="Email" required>
          </div>
          <div class="form-group">
            <input type="password" @keyup.enter="login($event)" v-model="password" class="form-control password" placeholder="Password" required>
          </div>

          <div class="row justify-content-center">
            <div class="col-sm-8">
              <a @click="login($event)" class="btn btn-primary btn-block text-white">Login</a>
            </div>
          </div>
          <p class="text-danger font-bold" v-show="error_message">{{error_message}}</p>

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
  import getIP from '../../api/ip'

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

        const form_data = {
          email: this.email,
          password: SHA256(this.password),
        }

        this.$store.dispatch('login', form_data)
          .catch(() => {
            this.error_message = 'Unable to login using provided email and password'
            this.password = ''
          })

        // Log IP
        getIP().then((response) => {
          this.$store.dispatch('logIP', response)
        })
      },
    }
  }

</script>

<style scoped>
  .sign-up-link {
    text-decoration: none;
  }
</style>

