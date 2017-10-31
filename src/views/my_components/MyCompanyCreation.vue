<template>
  <div class="col-md-8">
    <h6 class="text-muted text-normal text-uppercase ">Post My ICO</h6>
    <hr class="mb-3 mt-2">
    <div class="card-new-layout">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Project Name <span class="text-danger">*</span></label>
        <div class="col-sm-10">
          <input class="form-control" v-model="company_name" placeholder="What's your ICO Project name?">
          <h6 class="text-danger mt-3" v-if="error_message">{{error_message}}</h6>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button class="btn btn-primary" @click="createCompany()">Submit</button>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'MyCompanyCreation',
    data () {
      return {
        error_message: '',
        company_name: '',
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Post My ICO'
      }
    },
    methods: {
      createCompany () {
        if (!this.company_name)
          return

        const form_data = new FormData()
        form_data.append('name', this.company_name)
        this.$store.dispatch('createCompany', form_data)
          .then(() => {
            this.$store.dispatch('getSelf', form_data).then(() => {
              this.$router.push({name: 'company_new_project'})
            })
          })
          .catch((error) => {
            this.error_message = error.response.data.detail
          })
      },
    },
    beforeCreate () {
      // redirect not verified user
      if (!this.$store.getters.is_verified) {
        this.$router.push({name: 'me_need_verify'})
      }
      // Redirect non investor user
      if (this.$store.getters.self_type !== 1) {
        this.$router.push({name: 'landing'})
      }

    },
    beforeMount () {
      this.loaded = false
    }
  }
</script>
<style scoped>
  a {
    text-decoration: none;
  }
</style>
