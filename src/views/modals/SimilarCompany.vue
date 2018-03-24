<template>
  <div class="modal fade" id="similar-project-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            We found some companies with similar names, is those yours?
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <h6 class="modal-title mb-3">
            If you are the member of the following projects, click it and send an apply request instead of creating a new project
          </h6>
          <div class="table-responsive shopping-cart">
            <table class="table">
              <tbody>
              <tr v-for="company in search_result">
                <td>
                  <div class="product-item">
                    <router-link class="product-thumb" :to="{name:'project', params:{id:company.project.id}}">
                      <img :src="company.project.logo_image">
                    </router-link>
                    <div class="product-info">
                      <h4 class="product-title">
                        <router-link :to="{name:'project', params:{id:company.project.id}}">
                          {{company.name}}
                        </router-link>
                      </h4>
                      <small>{{company.project.description_short}}</small>
                    </div>
                  </div>
                </td>
                <td class="text-center">
                  <button class="btn btn-outline-primary btn-sm" @click="applyCompany(company.id)">
                    Apply
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <h6 class="modal-title mb-3">
            Or if you believe someone else created your company, please contact us immediately at team@icotoday.io
          </h6>
          <hr class="mb-4">
          <div class="row justify-content-center">
            <a class="btn btn-secondary" @click="createCompany()">No, Create New Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SimilarCompanies',
    data () {
      return {
        email: '',
        password: '',
        error_message: '',
      }
    },
    methods: {
      applyCompany (id) {
        this.$store.dispatch('applyCompany', id)
          .then(() => {
            $('#similar-project-modal').modal('hide')
            this.$store.dispatch('setFollowUpStep', 10)
          })
      },
      createCompany () {
        const form_data = {
          name: this.new_company_name
        }
        this.$store.dispatch('createCompany', form_data)
          .then(() => {
            this.setAccountType()
            $('#similar-project-modal').modal('hide')
            this.$store.dispatch('setFollowUpStep', 10)
          })
      },
      setAccountType () {
        const form_data = {
          type: 0
        }
        this.$store.dispatch('setSelfType', form_data)
      },
    },
    computed: {
      ...mapGetters({
        search_result: 'current_company_search_result',

        new_company_name: 'new_company_name'
      })
    },
  }

</script>
