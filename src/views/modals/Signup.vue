<template>
    <!--@modal - signup modal-->
    <div class="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">
                        Register
                    </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <div>
                        <div class="form-group">
                            <h5>
                                Account Type
                            </h5>
                            <div class="row text-center">
                                <div class="col-sm-6">
                                    <a class="btn btn-outline-primary" @click="type=0" v-show="type===1">
                                        ICO Company</a>
                                    <a class="btn btn-primary  text-white" @click="type=0" v-show="type===0">
                                        ICO Company</a>
                                </div>
                                <div class="col-sm-6">
                                    <a class="btn btn-outline-primary" @click="type=1" v-show="type===0">
                                        ICO Investor</a>
                                    <a class="btn btn-primary  text-white" @click="type=1" v-show="type===1">
                                        ICO Investor</a>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <h5>
                            Account Info
                        </h5>
                        <div class="form-group" v-if="type===0">
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
                            <input v-model="email" type="text" class="form-control" name="email" placeholder="Email *"
                                   required>
                            <p class="text-danger font-bold">{{email_msg}}</p>
                        </div>
                        <div class="form-group" v-if="type===0">
                            <input v-model="team_name" type="text" class="form-control" name="team_name"
                                   placeholder="Company/Team Name *"
                                   required>
                        </div>
                        <div class="form-group">
                            <input v-model="password" type="password" class="form-control" name="password"
                                   placeholder="Password *" required>
                        </div>

                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" id="check" name="check" v-model="check" required class="form-check-input">
                                I Agree with
                                <router-link :to="{name:'terms', query:{type:'terms'}}">ICOToday User Contract.</router-link>
                            </label>
                        </div>
                        <hr/>
                        <a @click="getToken()" class="btn btn-primary  text-white">Register</a>
                        <p class="text-danger font-bold">{{error_msg}}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <small>Already Have Account？
                        <a href="" data-toggle="modal" data-target="#login-modal" data-dismiss="modal" class="signup">Login Here！</a>
                    </small>
                    <br/>
                    <small>
                        <a href="">Forgot Password?</a>
                    </small>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!--@modal - login modal-->
</template>
<script>
  export default {
    name: 'SignUp',
    data () {
      return {
        first_name: '',
        last_name: '',

        team_name: '',

        email: '',
        password: '',
        type: 1,

        check: false,

        email_msg: '',
        error_msg: ''
      }
    },
    methods: {
      getToken () {
        this.email_msg = ''
        this.team_msg = ''
        const formData = {
          email: this.email.replace(' ', ''),
          password: this.password,
          type: this.type,
          first_name: this.first_name,
          last_name: this.last_name,
          team_name: this.team_name,
        }

        if (!(this.first_name && this.last_name && this.email &&
            this.team_name && this.password) && this.type === 0) {
          this.error_msg = 'Please make sure filled all required fields'
        }
        else if (!(this.email && this.password) && this.type === 1) {
          this.error_msg = 'Please make sure filled all required fields'
        }
        else if (!this.check) {
          this.error_msg = 'Please check the user contract'
        }
        else {
          this.$store.dispatch('signup', formData)
            .then(() => {
              this.$store.dispatch('cleanWhiteListEmail')
            })
            .catch((error) => {
              for (let e in error.data) {
                if (e === 'email') this.email_msg = error.data[e][0]
              }
            })
        }
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
