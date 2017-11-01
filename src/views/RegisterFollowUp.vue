<template>
  <div class="container container-padding">
    <div v-if="step===1">
      <h2 class="text-center">
        Choose Account Type
      </h2>
      <div class="row justify-content-center mt-5">
        <div class="col-md-8">
          <div class="list-group">
            <a class="list-group-item flex-column align-items-start" :class="{active:account_type===1}" href="javascript:void(0)" @click="account_type=1">
              <div class="d-flex w-100 justify-content-between">
                <h4>Investor Account</h4>
              </div>
              <p class="m-0">Participate in Token Sales. Subscribe to ICOs and get updates. View detailed ratings and analysis. Follow your favorite analysts.</p>
              <small class="opacity-60">Click to select.</small>
            </a>
            <a class="list-group-item flex-column align-items-start" :class="{active:account_type===0}" href="javascript:void(0)" @click="account_type=0">
              <div class="d-flex w-100 justify-content-between">
                <h4>Company Account</h4>
              </div>
              <p class="m-0">List your ICO to reach our dedicated base of users. Run your ICO through our platform. Help you perform the KYC and AML requirements for the participants in your Token Sale. </p>
              <small class="opacity-60">Click to select.</small>
            </a>
            <a class="list-group-item flex-column align-items-start" :class="{active:account_type===2}" href="javascript:void(0)" @click="account_type=2">
              <div class="d-flex w-100 justify-content-between">
                <h4>Analyst Account</h4>
              </div>
              <p class="m-0">Become an Analyst on our platform and get paid to evaluate ICOs looking to get listed on our platform. Build your credibility and following in the industry. </p>
              <small class="opacity-60">Click to select.</small>
            </a>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button class="btn btn-primary" @click="nextStep()">Next</button>
      </div>
    </div>
    <div v-if="step===2">
      <div v-if="account_type===1">
        <h2 class="text-center">
          Your Interests
        </h2>
        <div class="row justify-content-center mt-5">
          <div class="col-lg-3 col-md-4 col-sm-6 mt-3" v-if="loaded" v-for="tag in tags">
            <div class="card project-tag-card text-center">
              <a href="javascript:void(0)" @click="popTag(tag)">
                <div class="card-body project-tag" v-if="!tagSelected(tag)">
                  {{tag.tag}}
                </div>
                <div class="card-body project-tag active" v-else>
                  {{tag.tag}}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="account_type===0">
        <h2 class="text-center">
          What's your project name?
        </h2>
        <div class="row justify-content-center mt-5">
          <div class="col-10">
            <input class="form-control" v-model="company_name" v-validate="'required'" placeholder="Project Name">
          </div>
          <h6 class="text-danger mt-3" v-if="error_message">{{error_message}}</h6>
        </div>
      </div>
      <div v-if="account_type===2">
        <h2 class="text-center">
          Analyst Application
        </h2>
        <div class="card-new-layout">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Resume <span class="text-danger">*</span></label>
            <div class="col-sm-10">
              <div class="dropzone-area" v-if="!resume">
                <div class="dropzone-text ">
                  <i class="fa fa-cloud-upload"> </i>
                  <span>Drop file here or click to select</span>
                </div>
                <input type="file" id="resume" @change="onFileChange(type='resume', $event)">
              </div>
              <div v-else>
                <button type="button" class="mb-1 btn btn-secondary">{{resume.name}}</button>
                <button type="button" class="mb-1 btn btn-secondary" @click="removeFile(type='resume')">
              <span>
                  <i class="fa fa-times"></i>
              </span>
                </button>
              </div>
            </div>

          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Rating Example <span class="text-danger">*</span></label>
            <div class="col-sm-10">
              <div class="dropzone-area" v-if="!past_rating_example">
                <div class="dropzone-text ">
                  <i class="fa fa-cloud-upload"> </i>
                  <span>Drop file here or click to select</span>
                </div>
                <input type="file" @change="onFileChange(type='example', $event)">
              </div>
              <div v-else>
                <button type="button" class="mb-1 btn btn-secondary">{{past_rating_example.name}}</button>
                <button type="button" class="mb-1 btn btn-secondary" @click="removeFile(type='example')">
              <span>
                  <i class="fa fa-times"></i>
              </span>
                </button>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">LinkedIn <span class="text-danger">*</span></label>
            <div class="col-sm-10">
              <input class="form-control" v-model="linkedin" placeholder="https://linkedin.com/in/">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Questions <span class="text-danger">*</span></label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="detail" placeholder="Please tell us more about you" rows="20"></textarea>
            </div>
          </div>
          <div class="form-group row justify-content-md-end">
            <div class="col-md-10">
              <p class="text-danger" v-if="error_message">{{error_message}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button class="btn btn-secondary" @click="prevStep()">Prev</button>
        <button class="btn btn-primary" @click="nextStep()" :disabled="uploading"><span v-if="uploading">Uploading</span><span v-else>Next</span></button>
      </div>
    </div>
    <div v-if="step>=10">
      <h2 class="text-center">
        You are all set
      </h2>
      <div class="text-center svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="-263.5 236.5 26 26">
          <g class="svg-success">
            <circle cx="-250.5" cy="249.5" r="12"/>
            <path d="M-256.46 249.65l3.9 3.74 8.02-7.8"/>
          </g>
        </svg>
      </div>
      <div class="row justify-content-center mt-3">
        <router-link :to="{name:'me'}" class="btn btn-outline-primary btn-sm text-primary" v-if="account_type===1">
          Explore
        </router-link>
        <router-link :to="{name:'company_project'}" class="btn btn-outline-primary btn-sm text-primary" v-if="account_type===0">
          Continue to My Project
        </router-link>
        <router-link :to="{name:'me'}" class="btn btn-outline-primary btn-sm text-primary" v-if="account_type===2">
          Explore
        </router-link>
      </div>
      <div class="text-center mt-4">
        <h6>Don't forget to join our <a href="https://t.me/joinchat/DDHesUIRiVuAx6Sne4XgLw" target="_blank"><i class="fa fa-telegram"></i> Telegram group</a></h6>
        <h6 class="text-center">And follow us on <a href="https://twitter.com/ICOToday_io" target="_blank"><i class="fa fa-twitter"></i> Twitter</a></h6>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Spinner from 'components/Spinner'

  export default {
    name: 'RegisterFollowUp',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Register'
      }
    },
    components: {Spinner},
    data () {
      return {
        // Page Control
        loaded: false,
        account_type: 1,
        uploading: false,
        // Utils
        error_message: '',

        // User data
        selected_tags: [],

        company_name: '',

        resume: null,
        past_rating_example: null,
        linkedin: '',
        detail: '1. What makes you qualified to be an ICO analyst?\n\n' +
        '2. What are the key measures and metrics you use to evaluate ICOs?\n\n' +
        '3. What are previous ICO you have be wrong with and why?\n\n' +
        '4. What would you say has been your best ICO evaluation and why?\n\n' +
        '5. Are there any conflicts of interest that could affect your judgment with analysis?\n\n'
      }
    },
    methods: {
      setAccountType () {
        const form_data = {type: this.account_type}
        this.$store.dispatch('setSelfType', form_data)
      },

      nextStep () {
        // Investor
        if (this.step === 1 && this.account_type === 1) { // Investor Chose Tags
          this.getAllProjectTags()
          // add
          this.$store.dispatch('setFollowUpStep', 1)
        }
        else if (this.step === 2 && this.account_type === 1) { // Investor Finished
          this.addInterests()
          this.setAccountType()
          this.$store.dispatch('setFollowUpStep', 10)
        }
        // Company
        else if (this.step === 2 && this.account_type === 0) { // Company input and search
          this.createCompany()
        }
        // Analyst
        else if (this.step === 2 && this.account_type === 2) { // Company input and search
          this.newAnalystApplication()
        }

        // Other
        else {
          this.$store.dispatch('setFollowUpStep', 1)
        }
      },
      prevStep () {
        this.$store.dispatch('setFollowUpStep', -1)
      },

      // Investor set tags
      tagSelected (tag) {
        for (let t of this.selected_tags) {
          if (t === tag)
            return true
        }
        return false
      },
      popTag (tag) {
        if (this.tagSelected(tag)) {
          const index = this.selected_tags.indexOf(tag)
          this.selected_tags.splice(index, 1)
        }
        else
          this.selected_tags.push(tag)
      },
      getAllProjectTags () {
        this.loaded = false
        this.$store.dispatch('getAllProjectTags')
          .then(() => {
            this.loaded = true
          })
      },
      addInterests () {
        const form_data = {interests: this.selected_tags}
        this.$store.dispatch('addInterests', form_data)
      },

      // Company create projects
      searchProject () {
        this.loaded = false
        if (!this.company_name) {
          this.loading = false
          return
        }
        const query_data = {
          token: this.company_name,
        }
        this.$store.dispatch('searchCompany', query_data)
          .then(() => {
            this.loaded = true
            if (!this.search_result.length) {
              this.createCompany()
            }
            else {
              $('#similar-project-modal').modal('show')
              this.$store.dispatch('setNewCompanyName', this.company_name)
            }
          })
      },
      createCompany () {
        this.loaded = false
        const form_data = new FormData()
        form_data.append('name', this.company_name)
        this.$store.dispatch('createCompany', form_data)
          .then(() => {
            this.setAccountType()
            this.$store.dispatch('setFollowUpStep', 10)
            this.loaded = true
          })
          .catch((error) => {
            this.error_message = error.response.data.detail
          })
      },

      // Analyst Post applications
      newAnalystApplication () {
        if (!(this.resume && this.past_rating_example && this.linkedin && this.detail)) {
          this.error_message = 'Please fill all required fields'
          return
        }

        this.uploading = true
        const form_data = new FormData()

        form_data.append('resume', this.resume)
        form_data.append('past_rating_example', this.past_rating_example)
        form_data.append('linkedin', this.linkedin)
        form_data.append('detail', this.detail)

        this.$store.dispatch('postMyAnalystApplication', form_data)
          .then(() => {
            this.uploading = false
            this.setAccountType()
            this.$store.dispatch('setFollowUpStep', 10)
          })
      },
      onFileChange (type, e) {
        const files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        console.log(e)
        if (type === 'resume') {
          this.resume = files[0]
        }
        else if (type === 'example') {
          this.past_rating_example = files[0]
        }
      },
      removeFile (type) {
        if (type === 'resume') {
          this.resume = null
        }
        else if (type === 'example') {
          this.past_rating_example = null
        }
      }
    },
    computed: {
      ...mapGetters({
        tags: 'tags',
        login_status: 'login_status',
        type: 'self_type',
        search_result: 'current_company_search_result',
        step: 'register_follow_up_step'
      })
    },
    created () {
      // redirect non login user
      if (!this.login_status) {
        this.$router.push({name: 'landing'})
      }
      // redirect set up user
      if (this.type !== -1) {
        this.$router.push({name: 'landing'})
      }
      // Clean up
      this.$store.dispatch('setFollowUpStep', 0)
    }
  }
</script>

<style lang="scss" scoped>
  a.list-group-item:focus, a.list-group-item:active {
    background-color: #0da9ef !important;
    color: white !important;
  }

  .project-tag.active, .project-tag:active {
    background-color: #0da9ef !important;
    color: white !important;
    overflow: hidden;
  }

  .project-tag {
    font-size: 20px;
    font-weight: 500;
    text-transform: none;
    line-height: 1.3;
    color: #374250;
  }

  a {
    text-decoration: none !important;
  }

  .project-tag-card {
    overflow: hidden;
  }

  .svg-success {
    stroke-width: 2px;
    stroke: #8EC343;
    fill: none;
    & path {
      stroke-dasharray: 17px, 17px;
      stroke-dashoffset: 0px;
      -webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;
      animation: checkmark 0.25s ease-in-out 0.7s backwards;
    }
    & circle {
      stroke-dasharray: 76px, 76px;
      stroke-dashoffset: 0px;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      -webkit-animation: checkmark-circle 0.6s ease-in-out forwards;
      animation: checkmark-circle 0.6s ease-in-out forwards;
    }
  }

  @keyframes checkmark {
    0% {
      stroke-dashoffset: 17px;
    }

    100% {
      stroke-dashoffset: 0
    }
  }

  @keyframes checkmark-circle {
    0% {
      stroke-dashoffset: 76px;
    }

    100% {
      stroke-dashoffset: 0px;
    }
  }

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
