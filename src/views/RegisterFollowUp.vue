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
      <div class="row justify-content-center mt-3">
        <button class="btn btn-secondary" @click="prevStep()">Prev</button>
        <button class="btn btn-primary" @click="nextStep()">Next</button>
      </div>
    </div>
    <div v-if="step===3">
      <div v-if="account_type===0 && loaded">
        <h2 class="text-center">
          We found some companies with similar name, is those yours?
        </h2>
        <div class="row justify-content-center mt-5">
          <div class="col-10">
            <nav class="list-group">
              <a class="list-group-item" href="#" v-for="result in search_result">{{result}}</a>
            </nav>
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
    <div v-if="step===10">
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
        step: 1,

        // User data
        selected_tags: [],
        company_name: ''
      }
    },
    methods: {
      nextStep () {
        // add
        this.step += 1

        // Investor
        if (this.step === 2 && this.account_type === 1) // Investor Chose Tags
          this.getAllProjectTags()

        else if (this.step === 3 && this.account_type === 1) { // Investor Finished
          this.step = 10
          this.addInterests()
        }
        // Company
        else if (this.step === 3 && this.account_type === 0) { // Company input and search
          this.searchCompany()
        }
        else if (this.step === 5 && this.account_type === 0) { // Company input detail data
          this.searchCompany()
        }

      },
      prevStep () {
        this.step -= 1
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
              this.step += 1
            else
              $('#similar-company-modal').modal('show')
          })
      }
    },
    computed: {
      ...mapGetters({
        tags: 'tags',
        search_result: 'current_company_search_result',
        login_status: 'login_status',
        register_follow_up_step: 'register_follow_up_step'
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

</style>
