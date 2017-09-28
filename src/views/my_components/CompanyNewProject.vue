<template>
  <div class="col-md-8" v-if="loaded && is_verified && !has_project">
    <div class="checkout-steps">
      <a :class="{active:step===4}" href="javascript:void(0)" @click="step=4">
        <span class="fa fa-check-circle-o text-success" v-show="step>4"></span> 4. Social Media
      </a>
      <a :class="{active:step===3}" href="javascript:void(0)" @click="step=3"><span class="angle"></span>
        <span class="fa fa-check-circle-o text-success" v-show="step>3"></span> 3. Supplement
      </a>
      <a :class="{active:step===2}" href="javascript:void(0)" @click="step=2"><span class="angle"></span>
        <span class="fa fa-check-circle-o text-success" v-show="step>2"></span> 2. ICO Detail
      </a>
      <a :class="{active:step===1}" href="javascript:void(0)" @click="step=1"><span class="angle"></span>
        <span class="fa fa-check-circle-o text-success" v-show="step>1"></span> 1. Basic Info
      </a>
    </div>
    <h6 class="text-muted">
      <i class="fa fa-lightbulb-o"></i> Tips: The more information you provide, the faster your ICO gets approved
    </h6>
    <div class="card-new-layout" v-show="step===1">
      <h6 class="text-muted text-normal text-uppercase ">Basic info</h6>
      <hr class="mb-3 mt-2">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Title <span class="text-danger">*</span></label>
        <div class="col-sm-10">
          <input name="title" class="form-control" v-model="title" v-validate="'required'">
          <span v-show="errors.has('title')" class="text-danger"><i class="fa fa-warning"></i> {{ errors.first('title') }}</span>
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
            <button type="button" class="mb-1 btn btn-secondary" @click="removeFile()">
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
    <div class="card-new-layout" v-show="step===2">
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
                               :config="{sideBySide:true}"
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
                               :config="{sideBySide:true}"
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
          <input class="form-control" v-model="equality_on_offer" placeholder="Ex: 30"
                 type="text">
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
    <div class="card-new-layout" v-show="step===3">
      <h6 class="text-muted text-normal text-uppercase ">Supplement</h6>
      <hr class="mb-3 mt-2">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">White Paper </label>
        <div class="col-sm-10">
          <input class="form-control" v-model="white_paper"
                 placeholder="https://example.com/white-paper.pdf">
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
    </div>
    <div class="card-new-layout" v-show="step===4">
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
    <div class="card-new-layout pt-1 pb-1">
      <div class="row justify-content-center">
        <div class="col-md-3">
          <button @click="step-=1" v-show="step>1" class="btn btn-block btn-secondary">
            PREV
          </button>
        </div>
        <div class="col-md-3">
          <button @click="step+=1" v-show="step<4" class="btn btn-block btn-primary">
            NEXT
          </button>
          <button @click="postNewPost()" v-show="step===4" class="btn btn-block btn-primary" :disabled="uploading">
            SUBMIT<span v-if="uploading">ING</span>
          </button>
        </div>
      </div>
      <p class="text-danger" v-show="error_message">{{error_message}}</p>
    </div>
  </div>
  <div class="col-md-8" v-else-if="loaded && is_verified && has_project">
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
          <button type="button" class="mb-1 btn btn-secondary" @click="removeFile()">
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
                             :config="{sideBySide:true}"
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
                             :config="{sideBySide:true}"
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
      <label class="col-sm-2 col-form-label">% of Token for Sale</label>
      <div class="col-sm-10">
        <input class="form-control" v-model="equality_on_offer" placeholder="Ex: 30"
               type="text">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Accept</label>
      <div class="col-sm-10">
        <input class="form-control" v-model="accept" placeholder="Ex: ETH, BTC"
               type="text">
      </div>
    </div>
    <h6 class="text-muted text-normal text-uppercase ">Supplement</h6>
    <hr class="mb-3 mt-2">
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">White Paper </label>
      <div class="col-sm-10">
        <input class="form-control" v-model="white_paper"
               placeholder="https://example.com/white-paper.pdf">
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

  <div class="col-md-8 text-center" v-else-if="loaded && !is_verified">
    <h4 class="mt-3">
      You have to verify your email first
    </h4>
    <a href="javascript:void(0)" @click="" class="btn btn-primary mt-2">Resend Email</a>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import VueDatetimePicker from 'vue-bootstrap-datetimepicker'

  export default {
    name: 'CompanyNewProject',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Create New ICO'
      }
    },
    components: {
      VueDatetimePicker
    },
    data () {
      return {
        // UI control
        loaded: false,
        has_project: false,
        step: 1,

        icon_loaded: false,
        uploading: false,
        error_message: '',

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
        video_link: 'https://youtube.com/embed/',
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
      nextStep () {

      },
      onIconChange (e) {
        const file = e.target.files || e.dataTransfer.files
        if (!file.length) return
        this.icon = file[0]
        this.icon_loaded = true
      },
      removeFile () {
        this.icon = null
        this.icon_loaded = false
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
      ...mapGetters({
        me: 'self',
        is_verified: 'is_verified',
        username: 'self_name',
        self_type: 'self_type',
        my_company: 'self_company',
        my_admin: 'self_company',
        current_company: 'current_company'
      })
    },
    beforeMount () {
      this.loaded = false
      // redirect non ico company user
      console.log(this.self_type)
      if (this.self_type !== 0) {
        this.$router.push({name: 'landing'})
      }

      // check loaded company
      if (this.current_company.id === this.my_company.id) {
        this.has_project = !!this.current_company.project
        this.loaded = true
      }
      // if company not loaded
      else {
        // load company
        this.$store.dispatch('getCompany', this.my_company.id)
        // if company loaded
          .then(() => {
            // check if company already has project,  !! can convert '' or {} to true/false
            this.has_project = !!this.current_company.project
            this.loaded = true
          })
      }
    }
  }
</script>

<style scoped>
  @import url("/static/css/glyphicons.css");

  .dropzone-area {
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1.25;
    color: #464a4c;
    height: 100px;
    border: 1px dashed #464a4c;
    border-radius: 22px;
  }

  .dropzone-area input {
    position: absolute;
    cursor: pointer;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .dropzone-text {
    position: absolute;
    top: 50%;
    text-align: center;
    transform: translate(0, -50%);
    width: 100%;
  }

  .dropzone-text span {
    display: block;
    line-height: 1.9;
  }
</style>
