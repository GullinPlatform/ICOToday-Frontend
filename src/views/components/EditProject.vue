<template>
    <div class="modal fade" id="edit-project-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">
                        Edit Project
                    </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <h6 class="text-muted text-normal text-uppercase ">Basic info</h6>
                    <hr class="mb-3 mt-2">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Title <span class="text-red">*</span></label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="title" required type="text">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Icon <span class="text-red">*</span></label>
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
                        <label class="col-sm-2 col-form-label">Large Icon</label>
                        <div class="col-sm-10">
                            <div class="dropzone-area" v-if="!large_icon_loaded">
                                <div class="dropzone-text">
                                    <i class="fa fa-cloud-upload"> </i>
                                    <span>Drag file here or click to upload file</span>
                                </div>
                                <input type="file" @change="onLargeIconChange">
                            </div>

                            <div v-else>
                                <button type="button" class="mb-1 btn btn-secondary">{{large_icon.name}}</button>
                                <button type="button" class="mb-1 btn btn-secondary" @click="removeFile('l')">
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
                                          placeholder="( Markdown Support Enabled )" required rows="3"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Description<span class="text-red">*</span></label>
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
                            <input class="form-control" v-model="coin_name" placeholder="Token Name" required
                                   type="text">
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
                        <label class="col-sm-2 col-form-label">White Paper<span class="text-red">*</span></label>
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
                        <label class="col-sm-2 col-form-label">Video Link</label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="video_link" placeholder="Youtube Video Link">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Website <span class="text-red">*</span></label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="website" required
                                   placeholder="https://example.com">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-10">
                            <button type="button" @click="postNewPost()" class="mb-1 btn btn-block btn-primary">
                                Submit change
                            </button>
                            <p class="text-red">{{message}}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <small>
                        We'll send a confirmation message to the email address you provided, notice your team member to click the confirmation link
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
  import VueDatetimePicker from 'vue-bootstrap-datetimepicker'

  export default {
    name: 'EditProjectModal',
    data () {
      return {
        // -- form info start --
        title: '',
        icon: null,
        large_icon: null,
        description_short: '',
        description_full: '',

        maximum_goal: null,
        minimum_goal: null,
        coin_type: '',

        start_datetime: '',
        end_datetime: '',
        white_paper: null,

        coin_name: '',
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
    components: {
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
      onLargeIconChange (e) {
        var file = e.target.files || e.dataTransfer.files
        if (!file.length) return
        this.large_icon = file[0]
        this.large_icon_loaded = true
      },
      removeFile (name) {
        if (name === 'w') {
          this.white_paper = null
          this.white_paper_loaded = false
        } else if (name === 'i') {
          this.icon = null
          this.icon_loaded = false
        } else {
          this.large_icon = null
          this.large_icon_loaded = false
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
        formData.append('description_short', this.description_short)
        formData.append('description_full', this.description_full)
        formData.append('maximum_goal', this.maximum_goal)
        formData.append('minimum_goal', this.minimum_goal)
        formData.append('coin_type', this.coin_type)
        formData.append('start_datetime', this.start_datetime.format('YYYY-MM-DD HH:mmZ'))
        formData.append('end_datetime', this.end_datetime.format('YYYY-MM-DD HH:mmZ'))
        formData.append('coin_name', this.coin_name)
        formData.append('ratio', this.ratio)
        formData.append('white_paper', this.white_paper)
        formData.append('promote_image', this.large_icon)
        formData.append('logo_image', this.icon)
        formData.append('video_link', this.video_link)
        formData.append('website', this.website)

        this.$store.dispatch('postNewPost', formData)
          .then(() => {
            this.title = ''
            this.description_full = ''
            this.description_short = ''

            this.maximum_goal = null
            this.minimum_goal = null
            this.coin_type = ''
            this.coin_name = ''

            this.start_datetime = ''
            this.end_datetime = ''
            this.ratio = ''

            this.white_paper = null

            this.video_link = ''
            this.website = ''
            this.$router.push({name: 'me'})
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
      },
      current_post () {
        return this.$store.getters.current_post
      }
    },
    mounted () {
      this.title = this.current_post.title
      this.description_full = this.current_post.description_full

      this.maximum_goal = this.current_post.maximum_goal
      this.minimum_goal = this.current_post.minimum_goal
      this.coin_type = this.current_post.coin_type

      this.start_datetime = this.current_post.start_datetime
      this.end_datetime = this.current_post.end_datetime

      this.white_paper = null

      this.video_link = this.current_post.video_link
      this.website = this.current_post.website
    }
  }

</script>
