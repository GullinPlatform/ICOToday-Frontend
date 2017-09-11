<template>
    <div class="container padding-bottom-3x mb-2 mt-5 pl-3 pr-3" v-if="loaded">
        <div class="row justify-content-center" v-if="token_valid">
            <div class="col-md-8">
                <div class="padding-top-3x hidden-md-up"></div>
                <h3 class="margin-bottom-1x">Welcome to ICOToday! {{user_name}}</h3>
                <p>Your ICO Project is Listed on ICOToday, Join Us to Communicate with Your Investors Directly!</p>
                <div class="row">
                    <div class="col-sm-12">
                        <h6 class="text-muted text-normal text-uppercase ">MY ACCOUNT</h6>
                        <hr class="mb-3 mt-2">
                        <div class="row">
                            <div class="col-sm-4 text-center">
                                <img :src="user.info.avatar"
                                     class="img-thumbnail rounded-circle mb-2"
                                     width="100" height="100">
                            </div>
                            <div class="col-sm-8">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input :value="user.info.last_name + ' ' +user.info.first_name" disabled
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-sm-12">
                                        <input :value="user.email" disabled class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 mt-2">
                        <h6 class="text-muted text-normal text-uppercase ">Set Password</h6>
                        <hr class="mb-3 mt-2">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-sm-12">
                                    <input v-model="password1" type="password" class="form-control"
                                           :class="{'border-danger': pass_mismatch}" name="first-name"
                                           placeholder="Set Password">
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-12">
                                    <input v-model="password2" type="password" class="form-control"
                                           :class="{'border-danger': pass_mismatch}" name="first-name"
                                           placeholder="Repeat Password">
                                </div>
                            </div>
                            <p class="text-danger">{{err_msg}}</p>

                        </div>
                    </div>
                    <div class="col-12 text-center text-sm-right">
                        <button class="btn btn-primary margin-bottom-none" @click="invitedSignup()">Register</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center" v-else>
            <div class="col-sm-8">
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
    name: 'InvitedRegister',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Invited Register',
      }
    },
    data () {
      return {
        loaded: false,
        token_valid: false,
        password1: '',
        password2: '',

        pass_mismatch: false,
        err_msg: ''
      }
    },
    method: {
      invitedSignup () {
        if (this.password1 === this.password2) {
          const formData = {
            password: this.password1
          }
          this.$store.dispatch('invitedSignup', formData)
            .then(() => {
              this.$route.push({name: 'landing'})
            })
            .catch((error) => {
              this.loaded = true
              this.err_msg = error.body.detail
            })
        }
        else {
          this.pass_mismatch = true
          this.err_msg = 'Password Mismatch'
        }
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      user_name () {
        return this.$store.getters.user_name
      },
      me () {
        return this.$store.getters.self
      }
    },
    created () {
      if (!this.$route.query.hasOwnProperty('token')) {
        this.loaded = true
        this.err_msg = 'Token Not Found'
      } else {
        this.$store.dispatch('invitedGetUser', this.$route.query.token)
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