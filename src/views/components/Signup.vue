<template>
  <!--@modal - signup modal-->
  <div class="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            注册
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <div>
            <div class="form-group">
              <h5>
                账户类型
              </h5>
              <div class="btn-group" data-toggle="buttons">
                <label class="btn btn-primary active" @click="type=0">
                  <input type="radio" name="options" autocomplete="off" value="0" checked> 需求方
                </label>
                <label class="btn btn-primary" @click="type=1">
                  <input type="radio" name="options" autocomplete="off" value="1"> 技术提供方
                </label>
              </div>
              <div class="btn-group" data-toggle="buttons">
                <label class="btn btn-primary active" @click="is_company=true">
                  <input type="radio" name="options" id="option1" autocomplete="off" checked> 公司
                </label>
                <label class="btn btn-primary" @click="is_company=false">
                  <input type="radio" name="options" id="option2" autocomplete="off"> 个人
                </label>
              </div>
            </div>
            <hr>
  
            <h5>
              账户信息
            </h5>
            <div class="form-group">
              <input v-model="username" type="text" class="form-control" name="username" placeholder="用户名" required>
              <p class="text-danger font-bold">{{usernameMsg}}</p>
            </div>
            <div class="form-group">
              <input v-model="email" type="email" class="form-control" name="email" placeholder="邮箱" required>
              <p class="text-danger font-bold">{{emailMsg}}</p>
            </div>
            <div class="form-group">
              <input v-model="password" type="password" class="form-control" name="password" placeholder="密码" required>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" id="check" name="check" required class="form-check-input"> 我同意《深度计算用户许可协议》.
              </label>
            </div>
            <hr />
            <a @click="getToken()" class="btn btn-primary  text-white">注册</a>
          </div>
        </div>
        <div class="modal-footer">
          <small>已有账号？
            <a href="" data-toggle="modal" data-target="#login-modal" data-dismiss="modal" class="signup">点此登录！</a>
          </small>
          <br />
          <small>
            <a href="">忘记密码?</a>
          </small>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->
  
  <!--@modal - login modal-->
  </div>
  
  </div>
</template>
<script>
export default {
  name: 'SignUp',
  data() {
    return {
      checked: false,
      username: '',
      email: '',
      password: '',
      type: 0,
      is_company: true,

      usernameMsg: '',
      emailMsg: '',
      selectMsg: ''
    }
  },
  methods: {
    getToken() {
      this.usernameMsg = ''
      this.emailMsg = ''
      this.passwordMsg = ''
      this.lastMsg = ''
      this.firstMsg = ''
      const formData = {
        username: this.username.replace(/%20/g, ''),
        email: this.email.replace(/%20/g, ''),
        password: this.password,
        type: this.type,
        first_name: 'None',
        last_name: 'None',
        is_company: this.is_company
      }
      if (this.selectMsg === -1) { this.selectMsg = '此项不得为空' }
      else {
        this.$store.dispatch('signup', formData)
          .catch((error) => {
            for (let e in error.data) {
              if (e === 'email') this.emailMsg = error.data[e][0]
              else if (e === 'username') this.usernameMsg = error.data[e][0]
            }
          })
      }
    },
  }
}

</script>
