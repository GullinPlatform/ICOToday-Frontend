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
            If you are the member of the following projects, click it and send a apply request instead of create a new project
          </h6>
          <div class="table-responsive shopping-cart">
            <table class="table">
              <tbody>
              <tr v-for="project in project_result">
                <td>
                  <div class="product-item">
                    <router-link class="product-thumb" :to="{name:'project', params:{id:project.id}}">
                      <img :src="project.logo_image">
                    </router-link>
                    <div class="product-info">
                      <h4 class="product-title">
                        <router-link :to="{name:'project', params:{id:project.id}}">
                          {{project.name}}
                        </router-link>
                      </h4>
                      <small>{{project.description_short}}</small>
                    </div>
                  </div>
                </td>
                <td class="text-center">
                  <button class="btn btn-outline-primary btn-sm" @click="applyCompany(project.company.id)">
                    Apply
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
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
        project_result: 'current_project_search_result',
        new_company_name: 'new_company_name'
      })
    },
  }

</script>
