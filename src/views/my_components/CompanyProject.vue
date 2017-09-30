<template>
  <div class="col-md-8">
    <div class="card-new-layout">
      <h6 class="text-muted text-normal text-uppercase ">Basic info</h6>
      <hr class="mb-3 mt-2">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Name <span class="text-danger">*</span></label>
        <div class="col-sm-10">
          <input class="form-control" v-model="name" type="text">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Icon <span class="text-danger">*</span></label>
        <div class="col-sm-10" v-if="!icon_change">
          <button type="button" class="mb-1 btn btn-secondary btn-sm"
                  @click="icon_change=true">
            <span><i class="fa fa-refresh"></i> Change</span>
          </button>
        </div>
        <div class="col-sm-6" v-if="icon_change">
          <avatar-editor :width=150 :height=150 ref="icon"
                         @vue-avatar-editor:image-ready="onImageReady">
          </avatar-editor>
          <avatar-editor-scale :width=200 :min=1 :max=3 :step=0.02 ref="icon_scale"
                               @vue-avatar-editor-scale:change-scale="onImageChangeScale">
          </avatar-editor-scale>
        </div>
        <div class="col-sm-4 text-center" v-if="icon_change">
          <img :src="icon.toDataURL()"
               class="img-thumbnail mb-2"
               width="100" height="100" v-if="icon">
          <h6 class="text-normal text-uppercase pt-2">Preview</h6>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Category <span class="text-danger">*</span></label>
        <div class="col-sm-10">
          <select class="form-control" v-model="category">
            <option value="" selected>-- Choose Category --</option>
            <option value="Platform">Platform</option>
            <option value="Business Services">Business Services</option>
            <option value="Internet">Internet</option>
            <option value="Investment">Investment</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Banking">Banking</option>
            <option value="Software">Software</option>
            <option value="Real Estate">Real Estate</option>
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
          <input class="form-control" v-model="description_short"
                 placeholder="Short description in one sentence (100 characters).">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Full  Description<span class="text-danger">*</span></label>
        <div class="col-sm-10">
            <textarea class="form-control" v-model="description_full"
                      placeholder="( Markdown Support Enabled )" rows="10"></textarea>
        </div>
      </div>
    </div>

    <div class="card-new-layout">
      <h6 class="text-muted text-normal text-uppercase ">ICO Detail</h6>
      <hr class="mb-3 mt-2">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">ICO Type<span class="text-danger">*</span></label>
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
        <label class="col-sm-2 col-form-label">ICO Goals </label>
        <div class="col-sm-3">
          <input class="form-control" placeholder="Soft Cap" v-model="minimum_goal"
                 type="number">
        </div>
        <div class="col-sm-3">
          <input class="form-control" placeholder="Hard Cap" v-model="maximum_goal"
                 type="number">
        </div>
        <div class="col-sm-4">
          <select class="form-control" v-model="coin_unit">
            <option value="" selected>-- Choose Unit --</option>
            <option value="BTC">BTC - Bitcoin</option>
            <option value="ETH">ETH - Ethereum</option>
            <option value="USD">USD - US Dollar</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Start Date </label>
        <div class="col-sm-10">
          <vue-datetime-picker class="vue-start-picker" id="start-picker"
                               ref="startPicker"
                               placeholder="Start Time"
                               v-model="start_datetime">
          </vue-datetime-picker>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">End Date </label>
        <div class="col-sm-10">
          <vue-datetime-picker class="vue-end-picker" id="end-picker"
                               ref="endPicker"
                               placeholder="End Time"
                               v-model="end_datetime">
          </vue-datetime-picker>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Ratio </label>
        <div class="col-sm-7">
          <input class="form-control" placeholder="Ex: 5000" v-model="ratio"
                 type="number">
        </div>
        <div class="col-sm-3"><p>{{coin_name}} = 1 {{coin_unit}}</p></div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">% Token for Sale</label>
        <div class="col-sm-10">
          <input class="form-control" v-model="equality_on_offer" placeholder="Ex: 30">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Accept</label>
        <div class="col-sm-10">
          <input class="form-control" v-model="accept" placeholder="Ex: ETH, BTC"
                 type="text">
        </div>
      </div>
    </div>

    <div class="card-new-layout">
      <h6 class="text-muted text-normal text-uppercase ">Supplement</h6>
      <hr class="mb-3 mt-2">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">White Paper</label>
        <div class="col-sm-10">
          <input class="form-control" v-model="white_paper"
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
        <label class="col-sm-2 col-form-label">Website</label>
        <div class="col-sm-10">
          <input class="form-control" v-model="website"
                 placeholder="https://example.com">
        </div>
      </div>
    </div>

    <div class="card-new-layout">
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
    </div>

    <div class="card-new-layout">
      <div class="form-group row m-0 justify-content-center">
        <div class="col-sm-4 text-center">
          <button class="btn btn-secondary" @click="projectModal()">
            Preview
          </button>
        </div>
        <div class="col-sm-4 text-center">
          <button class="btn btn-primary" @click="updateProject()" v-if="!uploading">
            Update
          </button>
          <button class="btn btn-primary" disabled v-else>
            Updating
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AvatarEditor from 'components/AvatarEditor'
  import AvatarEditorScale from 'components/AvatarEditorScale'
  import VueDatetimePicker from 'vue-bootstrap-datetimepicker'

  export default {
    name: 'CompanyProject',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'My Project'
      }
    },
    components: {
      VueDatetimePicker,
      AvatarEditor,
      AvatarEditorScale
    },
    data () {
      return {
        loaded: false,
        icon_change: false,
        uploading: false,

        // -- form info start --
        // Basic Info
        name: '',
        icon: null,
        category: '',
        description_short: '',
        description_full: '',
        // ICO info
        type: '',
        coin_name: '',
        minimum_goal: '',
        maximum_goal: '',
        coin_unit: '',
        start_datetime: '',
        end_datetime: '',
        ratio: '',
        equality_on_offer: '',
        accept: '',
        // Supplement
        white_paper: '',
        video_link: '',
        website: '',
        // Social Media
        medium: '',
        twitter: '',
        slack: '',
        telegram: '',
        // -- form info end --
      }
    },
    methods: {
      projectModal () {
        /* global $:true */
        this.$store.dispatch('getProject', this.current_project.id)
          .then(() => {
            $('#project-modal').modal('show')
          })
      },
      onImageReady (scale) {
        this.$refs.icon_scale.setScale(scale)
        this.avatar_cropped = true
        this.icon = this.$refs.icon.getImageScaled()
      },
      onImageChangeScale (scale) {
        this.$refs.icon.changeScale(scale)
        this.icon = this.$refs.icon.getImageScaled()
      },
      attachValue () {
        /* global moment:true */
        this.name = this.current_project.name
        this.description_short = this.current_project.description_short
        this.description_full = this.current_project.description_full
        this.category = this.current_project.category

        this.maximum_goal = this.current_project.maximum_goal
        this.minimum_goal = this.current_project.minimum_goal
        this.coin_unit = this.current_project.coin_unit
        this.type = this.current_project.type
        this.equality_on_offer = this.current_project.equality_on_offer
        this.accpet = this.current_project.accpet

        this.start_datetime = moment(this.current_project.start_datetime)
        this.end_datetime = moment(this.current_project.end_datetime)

        this.white_paper = null
        this.coin_name = this.current_project.coin_name
        this.ratio = this.current_project.ratio

        this.video_link = this.current_project.video_link
        this.website = this.current_project.website

        this.medium = this.current_project.medium
        this.twitter = this.current_project.twitter
        this.slack = this.current_project.slack
        this.telegram = this.current_project.telegram
      },
      updateProject () {
        // return if required fields left empty
        if (!(this.description_short && this.category && this.description_full)) {
          this.$store.dispatch('toastr', {
            type: 'danger',
            title: 'Error',
            message: 'Please Make Sure Fill Out Required Fields!'
          })
          return
        }

        // return if still uploading
        if (this.uploading)
          return

        // start uploading
        this.uploading = true

        /* global FormData */
        let formData = new FormData()
        formData.append('id', this.current_project.id)
        formData.append('name', this.name)
        // TODO: logo image should use blob to get
        if (this.icon)
          formData.append('logo_image', this.icon)
        formData.append('category', this.category)
        formData.append('description_short', this.description_short)
        formData.append('description_full', this.description_full)

        formData.append('type', this.type)
        formData.append('coin_name', this.coin_name)
        formData.append('minimum_goal', this.minimum_goal)
        formData.append('maximum_goal', this.maximum_goal)
        formData.append('coin_unit', this.coin_unit)

        if (this.start_datetime)
          formData.append('start_datetime', this.start_datetime.format('YYYY-MM-DD HH:mmZ'))

        if (this.end_datetime)
          formData.append('end_datetime', this.end_datetime.format('YYYY-MM-DD HH:mmZ'))

        formData.append('ratio', this.ratio)
        formData.append('equality_on_offer', this.equality_on_offer)
        formData.append('accept', this.accept)

        formData.append('white_paper', this.white_paper)
        formData.append('video_link', this.video_link)
        formData.append('website', this.website)

        formData.append('medium', this.medium)
        formData.append('twitter', this.twitter)
        formData.append('slack', this.slack)
        formData.append('telegram', this.telegram)

        formData.append('video_link', this.video_link)
        formData.append('website', this.website)

        this.$store.dispatch('updateProject', formData)
          .then(() => {
            this.$store.dispatch('toastr', {
              type: 'success',
              title: 'Success',
              message: 'Your Project Info is updated!'
            })
            this.uploading = false
          })
          .catch(() => {
            this.$store.dispatch('toastr', {
              type: 'danger',
              title: 'Error',
              message: 'Something happened, please try again later'
            })
            this.uploading = false
          })
      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        is_verified: 'is_verified',
        username: 'self_name',
        self_type: 'self_type',
        current_project: 'current_project',
        current_company: 'current_company'
      })
    },
    watch: {
      'current_project': function () {
        this.attachValue()
      }
    },
    beforeMount () {
      this.loaded = false
      // redirect non ico company user
      if (this.$store.getters.self_type !== 0) {
        this.route.push({name: 'landing'})
      }

      // My ICO Projects
      this.$store.dispatch('getProject', this.current_company.project)
        .then(() => {
          this.loaded = true
        })
    }
  }
</script>

<style>
  @import url("/static/css/glyphicons.css");

</style>
