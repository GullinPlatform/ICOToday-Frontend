<template>
    <!-- Page Content-->
    <div class="container padding-bottom-3x mb-2 mt-5">
        <div class="row">
            <my-header></my-header>
            <!--main content-->
            <div class="col-md-8" v-if="me.is_verified">
                <h6 class="text-muted">
                    <i class="fa fa-lightbulb-o"></i> Tips: The more information you provide, the faster your ICO gets approved
                </h6>
                <h6 class="text-muted text-normal text-uppercase ">Basic info</h6>
                <hr class="mb-3 mt-2">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Title <span class="text-danger">*</span></label>
                    <div class="col-sm-10">
                        <input class="form-control" v-model="title" type="text">
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
                            <input type="file" @change="onIconChange">
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
                    <label class="col-sm-2 col-form-label">Category <span class="text-danger">*</span></label>
                    <div class="col-sm-10">
                        <select class="form-control" v-model="category">
                            <option value="" selected>-- Choose Category --</option>
                            <option value="Platform">Platform</option>
                            <option value="Cryptocurrency">Cryptocurrency</option>
                            <option value="Businessservices">Businessservices</option>
                            <option value="Internet">Internet</option>
                            <option value="Investment">Investment</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Banking">Banking</option>
                            <option value="Software">Software</option>
                            <option value="Realestate">Realestate</option>
                            <option value="Casino&Gambling">Casino&Gambling</option>
                            <option value="Communication">Communication</option>
                            <option value="Tourism">Tourism</option>
                            <option value="Media">Media</option>
                            <option value="Health">Health</option>
                            <option value="Retail">Retail</option>
                            <option value="Sports">Sports</option>
                            <option value="Infrastructure">Infrastructure</option>
                            <option value="Energy">Energy</option>
                            <option value="Charity">Charity</option>
                            <option value="Education">Education</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Short Description <span class="text-danger">*</span></label>
                    <div class="col-sm-10">
                        <input class="form-control" v-model="description_short" type="text"
                               placeholder="Short description in one sentence (100 characters).">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Full  Description<span class="text-danger">*</span></label>
                    <div class="col-sm-10">
                        <textarea class="form-control" v-model="description_full" type="text"
                                  placeholder="( Markdown Support Enabled )" rows="10"></textarea>
                    </div>
                </div>
                <h6 class="text-muted text-normal text-uppercase ">ICO Detail</h6>
                <hr class="mb-3 mt-2">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ICO Type <span class="text-danger">*</span></label>
                    <div class="col-sm-10">
                        <select class="form-control" v-model="type">
                            <option value="" selected>-- Choose Type --</option>
                            <option value="0">Pre-ICO</option>
                            <option value="1">ICO</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Token Name </label>
                    <div class="col-sm-10">
                        <input class="form-control" v-model="coin_name" placeholder="Token Name" type="text">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ICO Unit </label>
                    <div class="col-sm-10">
                        <select class="form-control" v-model="coin_type">
                            <option value="" selected>-- Choose Unit --</option>
                            <option value="BTC">BTC - Bitcoin</option>
                            <option value="ETH">ETH - Ethereum</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ICO Goals </label>
                    <div class="col-sm-5">
                        <input class="form-control" placeholder="Soft Cap" v-model="minimum_goal"
                               type="number">
                    </div>
                    <div class="col-sm-5">
                        <input class="form-control" placeholder="Hard Cap" v-model="maximum_goal"
                               type="number">
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Start Date </label>
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
                    <label class="col-sm-2 col-form-label">End Date </label>
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
                    <label class="col-sm-2 col-form-label">Ratio </label>
                    <div class="col-sm-7">
                        <input class="form-control" placeholder="Ex: 5000" v-model="ratio"
                               type="number">
                    </div>
                    <div class="col-sm-3"><p>{{coin_name}} = 1 {{coin_type}}</p></div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">% of Token for Sale</label>
                    <div class="col-sm-10">
                        <input class="form-control" v-model="equality_on_offer" placeholder="Ex: 30"
                               type="text">
                    </div>
                </div>
                <h6 class="text-muted text-normal text-uppercase ">Supplement</h6>
                <hr class="mb-3 mt-2">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">White Paper </label>
                    <div class="col-sm-10">
                        <div class="dropzone-area" v-if="!white_paper_loaded">
                            <div class="dropzone-text">
                                <i class="fa fa-cloud-upload"> </i>
                                <span>Drag file here or click to upload file</span>
                            </div>
                            <input type="file" @change="onWhitePaperChange">
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
                    <label class="col-sm-2 col-form-label">Video Link </label>
                    <div class="col-sm-10">
                        <input class="form-control" v-model="video_link" placeholder="Youtube Video Link">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Website </label>
                    <div class="col-sm-10">
                        <input class="form-control" v-model="website"
                               placeholder="https://example.com">
                    </div>
                </div>
                <h6 class="text-muted text-normal text-uppercase ">Social Media</h6>
                <hr class="mb-3 mt-2">

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Medium</label>
                    <div class="col-sm-10">
                        <input class="form-control" v-model="medium" type="text">
                    </div>

                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Twitter</label>
                    <div class="col-sm-10">
                        <input class="form-control" v-model="twitter" type="text">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Slack</label>
                    <div class="col-sm-10">
                        <input class="form-control" v-model="slack" type="text">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Telegram</label>
                    <div class="col-sm-10">
                        <input class="form-control" v-model="telegram" type="text">
                    </div>
                </div>
                <div class="form-group row justify-content-md-center">
                    <div class="col-md-2"></div>
                    <div class="col-md-10">
                        <button type="button" @click="postNewPost()" class="mb-1 btn btn-block btn-primary" :disabled="uploading">
                            SUBMIT<span v-if="uploading">ING</span>
                        </button>
                        <p class="text-danger">{{error_message}}</p>
                        <h6 class="text-muted">
                            <i class="fa fa-lightbulb-o"></i> Tips: The more information you provide, the faster your ICO gets approved
                        </h6>
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
</template>

<script>
  import MyHeader from 'components/MyHeader'
  import VueDatetimePicker from 'vue-bootstrap-datetimepicker'

  export default {
    name: 'UserNewProject',
    data () {
      return {
        // -- form info start --
        // Basic Info
        title: '',
        icon: null,
        category: '',
        description_short: '',
        description_full: '',
        // ICO info
        type: '',
        coin_name: '',
        coin_type: '',
        maximum_goal: '',
        minimum_goal: '',
        start_datetime: '',
        end_datetime: '',
        ratio: '',
        equality_on_offer: '',
        // Supplement
        white_paper: null,
        video_link: '',
        website: '',
        // Social Media
        medium: '',
        twitter: '',
        slack: '',
        telegram: '',
        // -- form info end --

        // UI control
        white_paper_loaded: false,
        icon_loaded: false,
        uploading: false,
        error_message: '',
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'New ICO'
      }
    },
    components: {
      MyHeader,
      VueDatetimePicker
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
      onStartDatetimeChanged (newStart) {
        const endPicker = this.$refs.endPicker.control
        endPicker.minDate(newStart)
      },
      onEndDatetimeChanged (newEnd) {
        const startPicker = this.$refs.startPicker.control
        startPicker.maxDate(newEnd)
      },

      postNewPost () {
        // return if required fields left empty
        if (!(this.title && this.description_short && this.icon && this.category && this.description_full && this.type)) {
          this.error_message = 'Please Make Sure Fill Out Required Fields'
          return
        }
        // return if still uploading
        if (this.uploading)
          return

        // start uploading
        this.uploading = true
        /* global FormData */
        let formData = new FormData()
        formData.append('title', this.title)
        formData.append('logo_image', this.icon)
        formData.append('category', this.category)
        formData.append('description_short', this.description_short)
        formData.append('description_full', this.description_full)
        formData.append('equality_on_offer', this.equality_on_offer)
        formData.append('maximum_goal', this.maximum_goal)
        formData.append('minimum_goal', this.minimum_goal)
        formData.append('coin_type', this.coin_type)
        formData.append('coin_name', this.coin_name)
        formData.append('ratio', this.ratio)
        formData.append('type', this.type)
        if (this.start_datetime)
          formData.append('start_datetime', this.start_datetime.format('YYYY-MM-DD HH:mmZ'))
        if (this.end_datetime)
          formData.append('end_datetime', this.end_datetime.format('YYYY-MM-DD HH:mmZ'))
        formData.append('white_paper', this.white_paper)
        formData.append('video_link', this.video_link)
        formData.append('website', this.website)
        formData.append('medium', this.medium)
        formData.append('twitter', this.twitter)
        formData.append('slack', this.slack)
        formData.append('telegram', this.telegram)

        this.$store.dispatch('postNewPost', formData)
          .then(() => {
            this.uploading = false
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your project is submitted!'})
            this.$router.push({name: 'me_created'})
          })
          .catch((error) => {
            this.uploading = false
            this.error_message = error.body
            console.log(error)
          })
      },
    },
    computed: {
      me () {
        return this.$store.getters.self
      }
    },
    beforeCreate () {
      // redirect non ico company user
      if (this.$store.getters.self.type !== 0) {
        this.$route.push({name: 'landing'})
      }
    }
  }
</script>

<style scoped>
    @import url("../../static/css/glyphicons.css");
</style>