<template>
  <div class="col-md-9">
    <h6 class="text-muted text-normal text-uppercase ">
      ICOToday Promotion Application
    </h6>
    <hr class="mb-3 mt-2">

    <div v-if="exists">
      <div class="alert alert-primary show text-center mb-4" v-if="promotion_application.status===0">
        <i class="fa fa-info-circle"></i> Status: <b>Processing</b>
      </div>
      <div class="alert alert-success show text-center mb-4" v-else-if="promotion_application.status===1">
        <i class="fa fa-info-circle"></i> Status: <b>Approved</b>
      </div>
      <div class="alert alert-success show text-center mb-4" v-else-if="promotion_application.status===2">
        <i class="fa fa-info-circle"></i> Status: <b>Declined</b>
      </div>
    </div>

    <div v-if="loaded&&!exists">
      <div class="card-new-layout">
        <div class="form-group row">
          <p class="col-sm-2 col-form-label">Duration<span class="text-danger text-small">*</span></p>
          <div class="col-sm-10">
            <select class="form-control" v-model="duration">
              <option value="7">1 Week - 10 ETHs</option>
              <option value="14">2 Weeks - 15 ETHs</option>
              <option value="28">4 Weeks - 20 ETHs</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <p class="col-sm-2 col-form-label">Eth wallet address<span class="text-danger text-small">*</span></p>
          <div class="col-sm-10">
            <input class="form-control" v-model="eth_wallet_address" placeholder="This helps us to make sure where we get payment from"/>
          </div>
        </div>
        <div class="form-group row">
          <p class="col-sm-2 col-form-label">Detail<span class="text-danger text-small">*</span></p>
          <div class="col-sm-10">
            <textarea class="form-control" v-model="detail" placeholder="Provide a detailed analysis of why you would like to be listed as one of our promoted ICOs. We only promote the best ICOs on our platform." rows="20"></textarea>
          </div>
        </div>
        <div class="form-group row justify-content-end">
          <div class="col-md-10">
            <button type="button" @click="submitPromotionApplication()" class="mb-1 btn btn-block btn-primary" :disabled="uploading">
              SUBMIT<span v-if="uploading">ING</span>
            </button>
            <p class="text-danger" v-if="error_message">{{error_message}}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="loaded&&exists">
      <div class="card-new-layout">
        <div class="form-group row">
          <span class="col-sm-2 col-form-label">Duration<span class="text-danger text-small">*</span></span>
          <div class="col-sm-10">
            <select class="form-control" v-model="duration" :disabled="!edit">
              <option value="7">1 Week - 10 ETHs</option>
              <option value="14">2 Weeks - 15 ETHs</option>
              <option value="28">4 Weeks - 20 ETHs</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <p class="col-sm-2 col-form-label">Eth wallet address<span class="text-danger text-small">*</span></p>
          <div class="col-sm-10">
            <input class="form-control" v-model="eth_wallet_address" :disabled="!edit" placeholder="This helps us to make sure where we get payment from"/>
          </div>
        </div>
        <div class="form-group row">
          <p class="col-sm-2 col-form-label">Detail<span class="text-danger text-small">*</span></p>
          <div class="col-sm-10 col-form-label">
            <textarea class="form-control" v-model="detail" rows="20" :disabled="!edit"></textarea>
          </div>
        </div>
      </div>
      <div class="form-group row card-new-layout justify-content-center m-0">
        <div class="col-md-6 m-0">
          <button type="button" @click="edit=true" class="mb-1 btn btn-block btn-secondary">
            EDIT
          </button>
        </div>
        <div class="col-md-6 m-0">
          <button type="button" @click="updatePromotionApplication()" class="mb-1 btn btn-block btn-primary" :disabled="uploading">
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
    name: 'CompanyPromotion',
    data () {
      return {
        edit: false,
        loaded: false,
        uploading: false,
        exists: false,
        error_message: '',

        duration: '7',
        eth_wallet_address: '',
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
            this.eth_wallet_address = this.promotion_application.eth_wallet_address
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
          eth_wallet_address: this.eth_wallet_address,
          detail: this.detail
        }
        this.$store.dispatch('submitPromotionApplication', form_data)
          .then(() => {
            this.uploading = false
            this.exists = true
            this.duration = this.promotion_application.duration
            this.eth_wallet_address = this.promotion_application.eth_wallet_address
            this.detail = this.promotion_application.detail
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your promotion application is submitted!'})
          })
      },
      updatePromotionApplication () {
        this.uploading = true
        const form_data = {
          duration: this.duration,
          detail: this.detail
        }
        this.$store.dispatch('updatePromotionApplication', form_data)
          .then(() => {
            this.uploading = false
            this.exists = true
            this.duration = this.promotion_application.duration
            this.detail = this.promotion_application.detail
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your promotion application is updated!'})
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
    beforeCreate () {
      // redirect not verified user
      if (!this.$store.getters.is_verified) {
        this.$router.push({name: 'me_need_verify'})
      }
    },
    beforeMount () {
      this.loaded = false

      // Redirect non company admin user
      if (!this.self_admin) {
        this.$router.push({name: 'landing'})
      }

      // Load company promotion application
      this.getPromotionApplication()
    }
  }
</script>
