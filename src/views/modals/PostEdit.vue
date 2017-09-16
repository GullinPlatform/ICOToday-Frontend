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
                        <label class="col-sm-2 col-form-label">Title <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="title" required type="text">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Icon <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <button type="button" class="mb-1 btn btn-secondary btn-sm"
                                    v-if="!icon_change&&!icon_loaded"
                                    @click="icon_change=true">
                                <span><i class="fa fa-refresh"></i> Change</span>
                            </button>
                            <div class="dropzone-area" v-if="icon_change&&!icon_loaded">
                                <div class="dropzone-text">
                                    <i class="fa fa-cloud-upload"> </i>
                                    <span>Drag file here or click to upload file</span>
                                </div>
                                <input type="file" required @change="onIconChange">
                            </div>

                            <div v-if="icon_change&&icon_loaded">
                                <button type="button" class="mb-1 btn btn-secondary">{{icon.name}}</button>
                                <button type="button" class="mb-1 btn btn-secondary" @click="removeFile()">
                                    <span><i class="fa fa-times"></i> Remove</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Category <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <select class="form-control" v-model="category" required>
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
                        <label class="col-sm-2 col-form-label">Description Short
                            <span class="text-danger">*</span>
                        </label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="description_short" type="text"
                                   placeholder="Short description in one sentence (100 characters).">
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
                        <label class="col-sm-2 col-form-label">ICO Type <span class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <select class="form-control" v-model="type" required>
                                <option value="" selected>-- Choose Type --</option>
                                <option value="0">Pre-ICO</option>
                                <option value="1">ICO</option>
                            </select>
                        </div>
                    </div>
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
                                                 @change="onStartDatetimeChanged()">
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
                                                 @change="onEndDatetimeChanged()">
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
                            <input class="form-control" placeholder="Ex: 5000" v-model="ratio" required
                                   type="number">
                        </div>
                        <div class="col-sm-3"><p>{{coin_name}} = 1 {{coin_type}}</p></div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">% of Token for Sale <span
                                class="text-danger">*</span></label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="equality_on_offer" placeholder="Ex: 30" required
                                   type="text">
                        </div>
                    </div>
                    <h6 class="text-muted text-normal text-uppercase ">Supplement</h6>
                    <hr class="mb-3 mt-2">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">White Paper<span class="text-red">*</span></label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="white_paper" required
                                   placeholder="https://example.com/white-paper.pdf">
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

                    <div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-10">
                            <button type="button" @click="editPost()" class="mb-1 btn btn-block btn-primary">
                                Submit change
                            </button>
                        </div>
                    </div>
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
        description_short: '',
        description_full: '',
        category: '',

        type: '',
        maximum_goal: null,
        minimum_goal: null,
        coin_type: '',

        start_datetime: '',
        end_datetime: '',
        white_paper: '',
        equality_on_offer: '',

        coin_name: '',
        rating: '',
        ratio: '',

        video_link: '',
        website: '',

        medium: '',
        twitter: '',
        slack: '',
        telegram: '',

        // -- form info end --
        icon_change: false,
        icon_loaded: false,
      }
    },
    components: {
      'vue-datetime-picker': VueDatetimePicker
    },
    methods: {
      onIconChange (e) {
        var file = e.target.files || e.dataTransfer.files
        if (!file.length) return
        this.icon = file[0]
        this.icon_loaded = true
      },
      removeFile () {
          this.icon = null
          this.icon_loaded = false
      },

      editPost () {
        /* global FormData */
        let formData = new FormData()

        if (!(this.title && this.description_full && this.description_full &&
            this.maximum_goal && this.minimum_goal &&
            this.coin_type && this.start_datetime &&
            this.end_datetime && this.website)) {
          this.$store.dispatch('toastr', {
            type: 'danger',
            title: 'Error',
            message: 'Please Make Sure Fill Out Required Fields!'
          })
          return
        }

        formData.append('id', this.current_post.id)
        formData.append('title', this.title)
        formData.append('description_short', this.description_short)
        formData.append('description_full', this.description_full)
        formData.append('category', this.category)
        formData.append('maximum_goal', this.maximum_goal)
        formData.append('minimum_goal', this.minimum_goal)
        formData.append('equality_on_offer', this.equality_on_offer)
        formData.append('coin_type', this.coin_type)
        formData.append('ratio', this.ratio)
        formData.append('type', this.type)
        formData.append('start_datetime', this.start_datetime.format('YYYY-MM-DD HH:mmZ'))
        formData.append('end_datetime', this.end_datetime.format('YYYY-MM-DD HH:mmZ'))
        formData.append('coin_name', this.coin_name)
        formData.append('ratio', this.ratio)
        formData.append('medium', this.medium)
        formData.append('twitter', this.twitter)
        formData.append('slack', this.slack)
        formData.append('telegram', this.telegram)

        if (this.white_paper)
          formData.append('white_paper', this.white_paper)

        if (this.icon)
          formData.append('logo_image', this.icon)

        formData.append('video_link', this.video_link)
        formData.append('website', this.website)

        this.$store.dispatch('updatePost', formData)
          .then(() => {
            /* global $:true */
            $('#edit-project-modal').modal('hide')
            this.$router.push({name: 'me_created'})
            this.$store.dispatch('toastr', {
              type: 'success',
              title: 'Success',
              message: 'Your Project Info is updated!'
            })
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
    watch: {
      'current_post': function () {
        /* global moment:true */
        this.title = this.current_post.title
        this.description_short = this.current_post.description_short
        this.description_full = this.current_post.description_full
        this.category = this.current_post.category

        this.maximum_goal = this.current_post.maximum_goal
        this.minimum_goal = this.current_post.minimum_goal
        this.coin_type = this.current_post.coin_type
        this.type = this.current_post.type
        this.equality_on_offer = this.current_post.equality_on_offer

        this.start_datetime = moment(this.current_post.start_datetime)
        this.end_datetime = moment(this.current_post.end_datetime)

        this.white_paper = null
        this.coin_name = this.current_post.coin_name
        this.ratio = this.current_post.ratio

        this.video_link = this.current_post.video_link
        this.website = this.current_post.website

        this.medium = this.current_post.medium
        this.twitter = this.current_post.twitter
        this.slack = this.current_post.slack
        this.telegram = this.current_post.telegram
      }
    }
  }

</script>
