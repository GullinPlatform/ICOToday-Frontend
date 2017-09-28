<template>
  <div class="col-md-8" v-if="me.info.type===0">
    <div class="card-new-layout">
      <h6 class="text-muted text-normal text-uppercase ">Company Profile</h6>
      <hr class="mb-3 mt-2">
      <div class="form-group row">
        <p class="col-sm-2 col-form-label">Name
          <span class="text-danger">*</span>
        </p>
        <div class="col-sm-10">
          <input class="form-control" v-model="name">
        </div>
      </div>
      <div class="form-group row">
        <p class="col-sm-2 col-form-label">Description</p>
        <div class="col-sm-10">
          <textarea class="form-control" rows="4" v-model="description"></textarea>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-sm-10">
          <button @click="updateCompany()" class="btn btn-primary btn-block">
            Submit Change
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CompanyProfile',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Company Profile'
      }
    },
    data () {
      return {
        name: '',
        description: '',
      }
    },
    methods: {
      updateCompany () {
        const formData = {
          name: this.name,
          description: this.description,
          id: this.my_company.id
        }

        this.$store.dispatch('updateCompany', formData)
          .then(() => {
            this.edit = false
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your company profile info is updated!'})
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
    mounted () {
      this.name = this.current_company.name
      this.description = this.current_company.description
    },
    beforeMount () {
      // redirect non ico company user
      if (this.$store.getters.self_type !== 0) {
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
