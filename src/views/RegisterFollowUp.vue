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
        <button class="btn btn-secondary" @click="prevStep()">Prev</button>
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
      <div class="row justify-content-center mt-3">
        <button class="btn btn-secondary" @click="prevStep()">Prev</button>
        <button class="btn btn-primary" @click="nextStep()">Next</button>
      </div>
    </div>


    <div v-if="step===10">
      <div v-if="account_type===1">
        <h2 class="text-center">
          You are all set
        </h2>
        <div class="row justify-content-center mt-5">
          <div class="col-lg-3 col-md-4 col-sm-6 mt-3">
            <router-link :to="{name:'landing'}" class="btn btn-outline-primary btn-sm text-primary">
              Explore
            </router-link>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button class="btn btn-secondary" @click="prevStep()">Prev</button>
        <button class="btn btn-primary" @click="nextStep()">Next</button>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'RegisterFollowUp',
    data () {
      return {
        loaded: false,

        account_type: 1,
        step: 1,
        selected_tags: [],
      }
    },
    methods: {
      nextStep () {
        this.step += 1
        if (this.step === 2 && this.account_type === 1) // Investor Chose Tags
          this.getAllProjectTags()

        else if (this.step === 3 && this.account_type === 1) {// Investor Finished
          this.step = 10
          this.addInterests()
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
      }
    },
    computed: {
      tags () {
        return this.$store.getters.tags
      },
    },
  }
</script>

<style scoped>
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
</style>
