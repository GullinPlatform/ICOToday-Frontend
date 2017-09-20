<template>
  <div class="modal fade" id="login-modal" tabindex="2" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            Login
          </h4>
          <button type="button" class="close"  data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <div>
            <div class="form-group">
              <input type="email" v-model.trim="email" @change="error_message=''" class="form-control email" placeholder="Email" required>
            </div>
            <div class="form-group">
              <input type="password" @keyup.enter="login($event)" v-model="password" @change="error_message=''" class="form-control password" placeholder="Password" required>
              <p class="text-danger">{{error_message}}</p>
            </div>
            <a @click="login($event)" class="btn btn-primary text-white">Login</a>
          </div>
        </div>
        <div class="modal-footer">
          <small>Do not have an account yet?
            <a href="javascript:void(0)" data-toggle="modal" data-target="#signup-modal" data-dismiss="modal" class="signup">Register Now！</a>
          </small>
          <br />
          <small>
            <router-link :to="{name:'forget_password'}" data-dismiss="modal" >Forget Password?</router-link>
          </small>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error_message: '',
    }
  },
  methods: {
    login(e) {
      e.preventDefault()
      const formData = {
        'email': this.email,
        'password': this.password
      }
      this.$store.dispatch('login', formData)
        .catch(() => {
          this.error_message = 'Unable to login using provided email and password'
          this.password = ''
        })

    },
  }
}

</script>
