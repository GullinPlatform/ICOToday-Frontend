<template>
    <div>
        <!-- Page Title-->
        <div class="page-title">
            <div class="container pl-5 pr-5">
                <div class="column">
                    <h1>New ICO Application</h1>
                </div>
                <div class="column">
                    <ul class="breadcrumbs">
                        <li>
                            <router-link :to="{name:'landing'}">Home</router-link>
                        </li>
                        <li class="separator">&nbsp;</li>
                        <li>
                            <router-link :to="{name:'me_new_project'}">Account</router-link>
                        </li>
                        <li class="separator">&nbsp;</li>
                        <li>New ICO Application</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Page Content-->
        <div class="container  pl-5 pr-5">
            <div class="row">
                <user-header></user-header>
                <!--main content-->
                <div class="col-md-8" v-if="self.is_verified">
                    <h6 class="text-muted text-normal text-uppercase ">Basic info</h6>
                    <hr class="mb-3 mt-2">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Title <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="title" required type="text">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Icon <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <div class="dropzone-area" v-if="!icon_loaded">
                                <div class="dropzone-text">
                                    <i class="fa fa-cloud-upload"> </i>
                                    <span>Drag file here or click to upload file</span>
                                </div>
                                <input type="file" required @change="onIconChange">
                            </div>

                            <div v-else>
                                <button type="button" class="mb-1 btn btn-secondary">{{icon.name}}</button>
                                <button type="button" class="mb-1 btn btn-secondary" @click="removeFile('i')">
                                        <span>
                                            <i class="fa fa-times"></i> Remove
                                        </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Description Short <span
                                class="text-danger">*</span></label>
                        <div class="col-sm-10">
                                <textarea class="form-control" v-model="description_short" type="text"
                                          placeholder="Short description in 200 characters." required rows="3"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Description Full <span
                                class="text-danger">*</span></label>
                        <div class="col-sm-10">
                                <textarea class="form-control" v-model="description_full" type="text"
                                          placeholder="( Markdown Support Enabled )" required rows="10"></textarea>
                        </div>
                    </div>
                    <h6 class="text-muted text-normal text-uppercase ">ICO Detail</h6>
                    <hr class="mb-3 mt-2">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">ICO Unit <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <select class="form-control" v-model="coin_type" required>
                                <option value="" selected>-- Choose Unit --</option>
                                <option value="BTC">BTC - Bitcoin</option>
                                <option value="ETH">ETH - Ethereum</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">ICO Goals <span class="text-danger">*</span></label>
                        <div class="col-sm-5">
                            <input class="form-control" placeholder="Minimum" v-model="minimum_goal" required
                                   type="number">
                        </div>
                        <div class="col-sm-5">
                            <input class="form-control" placeholder="Maximum" v-model="maximum_goal" required
                                   type="number">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Start Date <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <vue-datetime-picker class="vue-start-picker" id="start-picker"
                                                 ref="startPicker"
                                                 placeholder="Start Time"
                                                 v-model="start_datetime"
                                                 @change="onStartDatetimeChanged">
                            </vue-datetime-picker>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">End Date <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <vue-datetime-picker class="vue-end-picker" id="end-picker"
                                                 ref="endPicker"
                                                 placeholder="End Time"
                                                 v-model="end_datetime"
                                                 @change="onEndDatetimeChanged">
                            </vue-datetime-picker>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Token Name <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="coin_name" placeholder="Token Name" required type="text">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Ratio <span class="text-danger">*</span></label>
                        <div class="col-sm-7">
                            <input class="form-control" placeholder="Ex: 0.00005" v-model="ratio" required
                                   type="number">
                        </div>
                        <div class="col-sm-3"><p>Your Token = 1 {{coin_type}}</p></div>
                    </div>
                    <h6 class="text-muted text-normal text-uppercase ">Supplement</h6>
                    <hr class="mb-3 mt-2">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">White Paper <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <div class="dropzone-area" v-if="!white_paper_loaded">
                                <div class="dropzone-text">
                                    <i class="fa fa-cloud-upload"> </i>
                                    <span>Drag file here or click to upload file</span>
                                </div>
                                <input type="file" required @change="onWhitePaperChange">
                            </div>

                            <div v-else>
                                <button type="button" class="mb-1 btn btn-secondary">{{white_paper.name}}</button>
                                <button type="button" class="mb-1 btn btn-secondary" @click="removeFile('w')">
                                        <span>
                                            <i class="fa fa-times"></i> Remove
                                        </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Video Link <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="video_link" placeholder="Youtube Video Link">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Website <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="website" required
                                   placeholder="https://example.com">
                        </div>
                    </div>

                    <div class="form-group row justify-content-md-center">
                        <div class="col-md-10 offset-md-2">
                            <button type="button" @click="postNewPost()" class="mb-1 btn btn-block btn-primary">
                                Submit
                            </button>
                            <p class="text-danger">{{message}}</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-8 text-center" v-else>
                    <h4 class="mt-3">
                        You have to verify your email first
                    </h4>
                    <a href="javascript:void(0)" @click="" class="btn btn-primary mt-2">Resend Email</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import UserHeader from 'components/UserHeader'
  import VueDatetimePicker from 'vue-bootstrap-datetimepicker'

  export default {
    name: 'UserNewProject',
    data () {
      return {
        // -- form info start --
        title: '',
        icon: null,
        description_short: '',
        description_full: '',

        maximum_goal: null,
        minimum_goal: null,
        coin_type: '',

        start_datetime: '',
        end_datetime: '',
        white_paper: null,

        coin_name: '',
        rating: '',
        ratio: '',

        video_link: '',
        website: '',
        // -- form info end --

        white_paper_loaded: false,
        icon_loaded: false,
        large_icon_loaded: false,

        message: ''
      }
    },
    head: {
      title () {
        return {
          inner: 'ICOToday',
          complement: 'New ICO'
        }
      }
    },
    components: {
      'user-header': UserHeader,
      'vue-datetime-picker': VueDatetimePicker
    },
    methods: {
      onWhitePaperChange (e) {
        var file = e.target.files || e.dataTransfer.files
        if (!file.length) return
        this.white_paper = file[0]
        this.white_paper_loaded = true
      },
      onIconChange (e) {
        var file = e.target.files || e.dataTransfer.files
        if (!file.length) return
        this.icon = file[0]
        this.icon_loaded = true
      },
      removeFile (name) {
        if (name === 'w') {
          this.white_paper = null
          this.white_paper_loaded = false
        } else if (name === 'i') {
          this.icon = null
          this.icon_loaded = false
        }
      },

      postNewPost () {
        /* global FormData */
        let formData = new FormData()

        if (!(this.title && this.description_full &&
            this.maximum_goal && this.minimum_goal &&
            this.coin_type && this.start_datetime &&
            this.end_datetime && this.icon && this.website)) {
          this.message = 'Please Make Sure Fill Out Required Fields'
          return
        }

        formData.append('title', this.title)
        formData.append('description_full', this.description_full)
        formData.append('maximum_goal', this.maximum_goal)
        formData.append('minimum_goal', this.minimum_goal)
        formData.append('coin_type', this.coin_type)
        formData.append('start_datetime', this.start_datetime.format('YYYY-MM-DD HH:mmZ'))
        formData.append('end_datetime', this.end_datetime.format('YYYY-MM-DD HH:mmZ'))
        formData.append('white_paper', this.white_paper)
        formData.append('logo_image', this.icon)
        formData.append('video_link', this.video_link)
        formData.append('website', this.website)

        this.$store.dispatch('postNewPost', formData)
          .then(() => {
            this.title = ''
            this.description_full = ''

            this.maximum_goal = null
            this.minimum_goal = null
            this.coin_type = ''

            this.start_datetime = ''
            this.end_datetime = ''

            this.white_paper = null

            this.video_link = ''
            this.website = ''
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your project is submitted!'})
//            this.$router.push({name: 'me_created'})
          })
          .catch((error) => {
            console.log(error)
          })
      },
      onStartDatetimeChanged (newStart) {
        const endPicker = this.$refs.endPicker.control
        endPicker.minDate(newStart)
      },
      onEndDatetimeChanged (newEnd) {
        const startPicker = this.$refs.startPicker.control
        startPicker.maxDate(newEnd)
      }
    },
    computed: {
      self () {
        return this.$store.getters.self
      }
    }
  }
</script>

<style scoped>
    @import url("../../static/css/glyphicons.css");
</style>