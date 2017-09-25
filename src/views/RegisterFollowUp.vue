<template>
  <div class="container container-padding">
    <div v-if="step===1">
      <h2 class="text-center">
        Tell us more about you
      </h2>
      <div class="row justify-content-center mt-5">
        <div class="col-md-8">
          <div class="list-group">
            <a class="list-group-item flex-column align-items-start" :class="{active:account_type===1}" href="javascript:void(0)" @click="account_type=1">
              <div class="d-flex w-100 justify-content-between">
                <h4>I'm an Investor</h4>
              </div>
              <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small class="opacity-60">Donec id elit non mi porta.</small>
            </a>
            <a class="list-group-item flex-column align-items-start" :class="{active:account_type===0}" href="javascript:void(0)" @click="account_type=0">
              <div class="d-flex w-100 justify-content-between">
                <h4>I'm an ICO Company</h4>
              </div>
              <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small class="opacity-60">Donec id elit non mi porta.</small>
            </a>
            <a class="list-group-item flex-column align-items-start" :class="{active:account_type===2}" href="javascript:void(0)" @click="account_type=2">
              <div class="d-flex w-100 justify-content-between">
                <h4>I'm an Expert</h4>
              </div>
              <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small class="opacity-60">Donec id elit non mi porta.</small>
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
          What's your company name?
        </h2>
        <div class="row justify-content-center mt-5">
          <div class="col-10">
            <input class="form-control" v-model="company_name" placeholder="Company Name">
          </div>
        </div>
      </div>
      <div v-if="account_type===2">
        <h2 class="text-center">
          Expert Application
        </h2>
        <div class="row justify-content-center mt-5">
          <div class="col-10">
            <textarea class="form-control" v-model="expert_application" placeholder="Company Name"></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button class="btn btn-secondary" @click="prevStep()">Prev</button>
        <button class="btn btn-primary" @click="nextStep()">Next</button>
      </div>
    </div>
    <div v-if="step===3">
      <div v-if="account_type===0 && loaded">
        <h2 class="text-center">
          Complete Company Creation
        </h2>
        <div class="row justify-content-center mt-5">
          <div class="col-10">
            <div class="form-group row">
              <p class="col-sm-2 col-form-label">Name</p>
              <div class="col-sm-8">
                <input name="name" class="form-control" v-validate="'required'" v-model="company_name">
                <span v-show="errors.has('name')" class="text-danger">
                  <i class="fa fa-warning"></i> {{ errors.first('name') }}
                </span>
              </div>
            </div>
            <div class="form-group row">
              <p class="col-sm-2 col-form-label">Icon</p>

              <div class="col-sm-8">
                <div class="dropzone-area" v-if="!company_icon_loaded">
                  <div class="dropzone-text">
                    <i class="fa fa-cloud-upload"> </i>
                    <span>Drag file here or click to upload file</span>
                  </div>
                  <input name="icon" class="form-control" @change="onCompanyIconChange()" type="file">
                </div>
                <div v-else>
                  <button type="button" class="mb-1 btn btn-secondary">{{company_icon.name}}</button>
                  <button type="button" class="mb-1 btn btn-secondary" @click="removeCompanyIcon()">
                    <span><i class="fa fa-times"></i> Remove</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <p class="col-sm-2 col-form-label">Description</p>
              <div class="col-sm-8">
                <textarea name="description" class="form-control" v-validate="'required'" rows="4" v-model="company_description"></textarea>
                <span v-show="errors.has('description')" class="text-danger">
                  <i class="fa fa-warning"></i> {{ errors.first('description') }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <button class="btn btn-secondary" @click="prevStep()">Prev</button>
          <button class="btn btn-primary" @click="nextStep()">Next</button>
        </div>
      </div>
    </div>
    <div v-if="step===4">

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
        <router-link :to="{name:'landing'}" class="btn btn-outline-primary btn-sm text-primary">
          Explore
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'RegisterFollowUp',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Register'
      }
    },
    data () {
      return {
        // Page Control
        loaded: false,
        account_type: 1,

        // User data
        selected_tags: [],

        company_name: '',
        company_icon: null,
        company_description: '',
        company_icon_loaded: false,

        expert_application: ''
      }
    },
    methods: {
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
          this.searchCompany()
        }
        else if (this.step === 3 && this.account_type === 0) { // Company input detail data
          this.searchCompany()
          this.$store.dispatch('setFollowUpStep', 1)
        }
      },
      prevStep () {
        this.$store.dispatch('setFollowUpStep', -1)
      },
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

      onCompanyIconChange (e) {
        const file = e.target.files || e.dataTransfer.files
        if (!file.length) return
        this.company_icon = file[0]
        this.company_icon_loaded = true
      },
      removeCompanyIcon () {
        this.company_icon = null
        this.company_icon_loaded = false
      },

      setAccountType () {
        const form_data = {
          type: this.account_type
        }
        this.$store.dispatch('searchCompany', form_data)

      },

      getAllProjectTags () {
        this.loaded = false
        this.$store.dispatch('getAllProjectTags')
          .then(() => {
            this.loaded = true
          })
      },
      addInterests () {
        const form_data = {
          interests: this.selected_tags
        }
        this.$store.dispatch('addInterests', form_data)
      },

      searchCompany () {
        this.loaded = false
        const query_data = {
          token: this.company_name
        }
        this.$store.dispatch('searchCompany', query_data)
          .then(() => {
            this.loaded = true
            if (!this.search_result.length)
              this.$store.dispatch('setFollowUpStep', 1)
            else
              $('#similar-company-modal').modal('show')
          })
      },
      createCompany () {
        const form_data = new FormData()
        form_data.append('name', this.company_name)
        form_data.append('icon', this.company_icon)
        form_data.append('description', this.company_description)
        this.$store.dispatch('createCompany', form_data)
          .then(() => {
            this.$store.dispatch('setFollowUpStep', 10)
          })
      },

      postMyExpertApplication () {
        const form_data = {
          detail: this.expert_application
        }

        this.$store.dispatch('postMyExpertApplication', form_data)
          .then(() => {
            this.$store.dispatch('setFollowUpStep', 10)
          })
      }
    },
    computed: {
      ...mapGetters({
        tags: 'tags',
        search_result: 'current_company_search_result',
        login_status: 'login_status',
        step: 'register_follow_up_step'
      })
    },
    beforeCreate () {
      // redirect non login user
      if (!this.$store.getters.login_status) {
        this.$router.push({name: 'landing'})
      }
      // redirect set up user
      if (this.$store.getters.self.info.type !== -1) {
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
