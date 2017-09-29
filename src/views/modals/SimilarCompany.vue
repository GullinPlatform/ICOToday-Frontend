<template>
  <div class="modal fade" id="similar-project-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            We found some companies with similar name, is those yours?
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <h6 class="modal-title mb-3">
            If you believe you belong to one of those companies, click it and send a apply request instead of create a new company
          </h6>
          <div class="table-responsive shopping-cart">
            <table class="table">
              <tbody>
              <tr v-for="company in company_result">
                <td>
                  <div class="product-item">
                    <router-link class="product-thumb" :to="{name:'company', params:{id:company.id}}">
                      <img :src="company.company_icon">
                    </router-link>
                    <div class="product-info">
                      <h4 class="product-title">
                        <router-link :to="{name:'company', params:{id:company.id}}">
                          <small>{{company.description}}</small>
                        </router-link>
                      </h4>
                    </div>
                  </div>
                </td>
                <td class="text-center">
                  <router-link class="btn btn-outline-primary btn-sm" :to="{name:'company', params:{id:company.id}}">
                    Detail
                  </router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <hr class="mb-4">
          <div class="row justify-content-center">
            <a class="btn btn-secondary" @click="nextStep()">No, Continue Company Creation</a>
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
            this.$store.dispatch('setFollowUpStep', 100)
          })
      },
      nextStep () {
        $('#similar-project-modal').modal('hide')
        this.$store.dispatch('setFollowUpStep', 1)
      },
    },
    computed: {
      ...mapGetters({
        company_result: 'current_company_search_result'
      })
    },
  }

</script>
