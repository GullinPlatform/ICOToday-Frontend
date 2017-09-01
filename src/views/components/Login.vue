<template>
  <div class="modal fade" id="login-modal" tabindex="2" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            登录
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <div>
            <div class="form-group">
              <input type="email" v-model="username" class="form-control email" placeholder="用户名" required>
            </div>
            <div class="form-group">
              <input type="password" @keyup.enter="login($event)" v-model="password" class="form-control password" placeholder="密码" required>
              <p class="text-danger">{{errorMsg}}</p>
            </div>
            <a @click="login($event)" class="btn btn-primary text-white">登录</a>
          </div>
        </div>
        <div class="modal-footer">
          <small>还没有账号?
            <a href="" data-toggle="modal" data-target="#signup-modal" data-dismiss="modal" class="signup">现在注册！</a>
          </small>
          <br />
          <small>
            <a href="#">忘记密码?</a>
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
      username: '',
      password: '',
      errorMsg: '',
    }
  },
  methods: {
    login(e) {
      e.preventDefault()
      var formData = {
        'username': this.username,
        'password': this.password
      }
      this.$store.dispatch('login', formData)
        .catch(() => {
          this.errorMsg = '用户名或密码错误'
        })

    },
  }
}

</script>
