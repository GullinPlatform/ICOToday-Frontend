<template>
  <div class="col-md-8" v-if="loaded && is_verified && !self_analyst_application">
    <h6 class="text-muted text-normal text-uppercase ">
      ICOToday Analyst Application
    </h6>
    <hr class="mb-3 mt-2">
    <h6 class="text-muted">
      <i class="fa fa-lightbulb-o"></i> Tips: Complete your profile before submit your application will help us to review your application faster!
    </h6>
    <div class="card-new-layout">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Resume</label>
        <div class="col-sm-10">
          <div class="dropzone-area" v-if="!resume">
            <div class="dropzone-text ">
              <i class="fa fa-cloud-upload"> </i>
              <span>Drop image here or click to select</span>
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
        <label class="col-sm-2 col-form-label">Rating Example</label>
        <div class="col-sm-10">
          <div class="dropzone-area" v-if="!past_rating_example">
            <div class="dropzone-text ">
              <i class="fa fa-cloud-upload"> </i>
              <span>Drop image here or click to select</span>
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
        <label class="col-sm-2 col-form-label">LinkedIn</label>
        <div class="col-sm-10">
          <input class="form-control" v-model="linkedin" placeholder="https://linkedin.com/in/">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Questions</label>
        <div class="col-sm-10">
          <textarea class="form-control" v-model="detail" placeholder="Please tell us more about you" rows="20"></textarea>
        </div>
      </div>
      <div class="form-group row justify-content-md-end">
        <div class="col-md-10">
          <button type="button" @click="newAnalystApplication()" class="mb-1 btn btn-block btn-primary" :disabled="uploading">
            SUBMIT<span v-if="uploading">ING</span>
          </button>
          <p class="text-danger" v-if="error_message">{{error_message}}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-8" v-else-if="loaded && is_verified && self_analyst_application">
    <h6 class="text-muted text-normal text-uppercase ">
      ICOToday Analyst Application
    </h6>
    <hr class="mb-3 mt-2">
    <div class="alert alert-primary show text-center mb-4">
      <i class="fa fa-info-circle"></i> Your application is under review
    </div>
    <div class="card-new-layout">
      <div class="form-group row">
        <div class="col-sm-12">
          <textarea class="form-control" v-model="detail" :disabled="!edit" placeholder="( Markdown Support Enabled )" rows="20"></textarea>
        </div>
      </div>
    </div>
    <div class="card-new-layout">
      <div class="form-group row justify-content-center m-0">
        <div class="col-md-6 m-0">
          <button type="button" @click="edit=true" class="mb-1 btn btn-block btn-secondary">
            EDIT
          </button>
        </div>
        <div class="col-md-6 m-0">
          <button type="button" @click="updateAnalystApplication()" class="mb-1 btn btn-block btn-primary" :disabled="uploading">
            UPDAT<span v-if="uploading">ING</span><span v-else>E</span>
          </button>
          <p class="text-danger" v-if="error_message">{{error_message}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'MyAnalystApplication',
    data () {
      return {
        loaded: false,
        uploading: false,
        hovering: false,
        edit: false,
        error_message: '',

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
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Apply To Be ICOToday Analyst'
      }
    },
    methods: {
      newAnalystApplication () {
        this.uploading = true
        const form_data = new FormData()

        form_data.append('resume', this.resume)
        form_data.append('past_rating_example', this.past_rating_example)
        form_data.append('linkedin', this.linkedin)
        form_data.append('detail', this.detail)

        this.$store.dispatch('postMyAnalystApplication', form_data)
          .then(() => {
            this.uploading = false
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your application is submitted!'})
          })
      },
      updateAnalystApplication () {
        if (!this.detail) {
          this.$store.dispatch('toastr', {type: 'danger', title: 'Error', message: 'Detail cannot be empty!'})
          return
        }
        this.uploading = true
        this.$store.dispatch('updateMyAnalystApplication', {detail: this.detail})
          .then(() => {
            this.uploading = false
            this.edit = false
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your application is updated!'})
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
        me: 'self',
        is_verified: 'is_verified',
        self_analyst_application: 'self_analyst_application',
      })
    },
    beforeCreate () {
      // redirect non ico investor user
      if (this.$store.getters.self_type !== 1) {
        this.$router.push({name: 'landing'})
      }
      // redirect not verified user
      if (!this.$store.getters.is_verified) {
        this.$router.push({name: 'me_need_verify'})
      }
    },
    beforeMount () {
      this.loaded = false
      this.linkedin = this.me.info.linkedin
      this.$store.dispatch('getMyAnalystApplication')
        .then(() => {
          if (this.self_analyst_application.detail)
            this.detail = this.self_analyst_application.detail
          this.loaded = true
        })
    }
  }
</script>

<style>
  .dropzone-area {
    width: 100%;
    height: 100px;
    position: relative;
    border: 2px dashed #CBCBCB;
    border-radius: 22px;
  }

  .dropzone-area:hover {
    border: 2px dashed #0da9ef;
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
    font-family: Arial, Helvetica;
    line-height: 1.9;
  }
</style>
