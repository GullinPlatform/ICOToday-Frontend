<template>
  <div class="col-md-8">
    <div class="alert alert-primary show text-center mb-4" v-if="promotion_application.status===0">
      <i class="fa fa-info-circle"></i> Status: <b>Processing</b>
    </div>

    <div class="alert alert-success show text-center mb-4" v-else-if="promotion_application.status===1">
      <i class="fa fa-info-circle"></i> Status: <b>Approved</b>
    </div>

    <div class="alert alert-success show text-center mb-4" v-else-if="promotion_application.status===2">
      <i class="fa fa-info-circle"></i> Status: <b>Declined</b>
    </div>

    <div class="card-new-layout" v-if="loaded&&!exists">
      <h6 class="text-muted text-normal text-uppercase ">
        ICOToday Promotion Application
      </h6>
      <hr class="mb-3 mt-2">
      <div class="form-group row">
        <p class="col-sm-2 col-form-label">Duration<span class="text-danger text-small">*</span></p>
        <div class="col-sm-10">
          <select class="form-control" v-model="duration">
            <option value="1">1 Day</option>
            <option value="7">1 Week</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <p class="col-sm-2 col-form-label">Detail<span class="text-danger text-small">*</span></p>
        <div class="col-sm-10">
          <textarea class="form-control" v-model="detail" placeholder="( Markdown Support Enabled )" rows="20"></textarea>
        </div>
      </div>
      <div class="form-group row justify-content-end">
        <div class="col-md-10">
          <button type="button" @click="submitPromotionApplication()" class="mb-1 btn btn-block btn-primary" :disabled="uploading">
            SUBMIT<span v-if="uploading">ING</span>
          </button>
          <p class="text-danger">{{error_message}}</p>
        </div>
      </div>
    </div>
    <div class="card-new-layout" v-else-if="loaded&&exists">
      <h6 class="text-muted text-normal text-uppercase ">
        ICOToday Promotion Application
      </h6>
      <hr class="mb-3 mt-2">
      <div class="form-group row">
        <p class="col-sm-2 col-form-label">Duration<span class="text-danger text-small">*</span></p>
        <div class="col-sm-10">
          <p v-if="duration===1">1 Day</p>
          <p v-else-if="duration===7">1 Week</p>
        </div>
      </div>
      <div class="form-group row">
        <p class="col-sm-2 col-form-label">Detail<span class="text-danger text-small">*</span></p>
        <div class="col-sm-10">
          <p>{{detail}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CompanyPromotion',
    data () {
      return {
        loaded: false,
        uploading: false,
        exists: false,
        error_message: '',

        duration: '1',
        detail: ''
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Promotion Application'
      }
    },
    methods: {
      getPromotionApplication () {
        this.$store.dispatch('getPromotionApplication')
          .then(() => {
            this.loaded = true
            this.exists = true
            this.duration = this.promotion_application.duration
            this.detail = this.promotion_application.detail
          })
          .catch(() => {
            this.loaded = true
            this.exists = false
          })
      },
      submitPromotionApplication () {
        this.uploading = true
        const form_data = {
          duration: this.duration,
          detail: this.detail
        }
        this.$store.dispatch('submitPromotionApplication', form_data)
          .then(() => {
            this.uploading = false
            this.exists = true
            this.duration = this.promotion_application.duration
            this.detail = this.promotion_application.detail
          })
      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        self_company: 'self_company',
        self_admin: 'self_admin',
        promotion_application: 'company_promotion_application',
      })
    },
    beforeMount () {
      this.loaded = false

      // Redirect non company admin user
      if (!this.self_admin) {
        this.$router.push({name: 'landing'})
      }

      // Load company wallet
      this.getPromotionApplication()
    }
  }
</script>
