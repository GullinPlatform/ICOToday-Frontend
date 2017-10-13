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
        <div class="col-sm-12">
          <textarea class="form-control" v-model="detail" placeholder="Please tell us more about you" rows="20"></textarea>
        </div>
      </div>
      <div class="form-group row justify-content-md-center">
        <div class="col-md-12">
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

  <div class="col-md-8 text-center" v-else-if="!is_verified">
    <h4 class="mt-3">
      You have to verify your email first
    </h4>
    <a href="javascript:void(0)" @click="" class="btn btn-primary mt-2">Resend Email</a>
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
        error_message: '',

        edit: false,

        detail: ''
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
        if (!this.detail) return
        this.uploading = true
        this.$store.dispatch('postMyAnalystApplication', {detail: this.detail})
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
      this.loaded = false
      this.$store.dispatch('getMyAnalystApplication')
        .then(() => {
          this.detail = this.$store.getters.self_analyst_application.detail
          this.loaded = true
        })
    },
  }
</script>
