<template>
    <div class="py-lg-4">
        <!-- ======== @Region: #header ======== -->
        <user-header></user-header>
        <!-- ======== @Region: #content ======== -->
        <div id="content">
            <div class="container" id="about">
                <div class="row">
                    <!-- sidebar -->
                    <user-sidebar></user-sidebar>
                    <!--main content-->
                    <div class="col-md-9">
                        <h3>
                            Account Settings
                        </h3>
                        <p class="mb-4">Your Account Detail</p>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="col-md-2 text-md-center">
                                    <img src="../../static/img/homes/code.jpg" class="rounded-circle img-padded"
                                         width="100" height="100">
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <div class="dropzone-area" v-if="!avatar_loaded">
                                        <div class="dropzone-text">
                                            <i class="fa fa-cloud-upload"> </i>
                                            <span>Drag file here or click to upload file</span>
                                        </div>
                                        <input type="file" required @change="onAvatarChange">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">First Name</label>
                            <div class="col-sm-4">
                                <input class="form-control" v-model="me.first_name" type="text" id="first_name">
                            </div>
                            <label class="col-sm-2 col-form-label">Last Name</label>
                            <div class="col-sm-4">
                                <input class="form-control" v-model="me.last_name" type="text" id="last_name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="me.title" type="text" placeholder="ex. CEO">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Description</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" v-model="me.description" placeholder=""></textarea>
                            </div>
                        </div>
                        <hr>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">LinkedIn</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="me.linkedin" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Twitter</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="me.twitter" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Slack</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="me.slack" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Telegram</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="me.telegram" type="text">
                            </div>
                        </div>
                        <div class="form-group row justify-content-md-center">
                            <div class="col-md-10 offset-md-2">
                                <button type="button" @click="updateSelf()" class="mb-1 btn btn-block btn-primary">
                                    Submit Change
                                </button>
                                <p class="text-green">{{message}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import UserSidebar from 'components/UserSidebar'
  import UserHeader from 'components/UserHeader'

  export default {
    name: 'UserSettings',
    data () {
      return {
        me: {},

        avatar_loaded: false,
        message: ''
      }
    },
    components: {
      'user-sidebar': UserSidebar,
      'user-header': UserHeader
    },
    methods: {
      onAvatarChange () {},
      updateSelf () {
        this.message = '...'
        this.$store.dispatch('updateSelf', this.me)
          .then(() => {
            this.$store.dispatch('getSelf').then(() => {
              this.me = this.self.info
            })
            this.message = 'Updated Successfully.'
          })
          .catch((error) => {
            this.message = error.body.detail
          })
      }
    },
    computed: {
      self () {
        return this.$store.getters.self
      },
    },
    mounted () {
      this.me = this.self.info
    }
  }
</script>
