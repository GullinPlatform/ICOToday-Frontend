<template>
  <div class="col-md-8">
    <h6 class="text-muted text-normal text-uppercase ">Project Followers</h6>
    <hr class="mb-3 mt-2">
    <div class="card-new-layout" v-if="loaded&&project_subscribers.length">
      <div class="team team-grid">
        <div class="row">
          <div class="col-md-6 mb-4" v-for="follower in project_subscribers">
            <div class="d-table">
              <router-link :to="{name:'user', params:{id:follower.id}}">
                <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                     width="100" :src="follower.avatar">
              </router-link>
              <div class="pl-3 d-table-cell align-middle">
                <h6 class="mb-0">
                  <router-link class="text-gray-dark" :to="{name:'user', params:{id:follower.id}}" target="_blank">
                    {{follower.full_name}}
                  </router-link>
                  <i class="fa fa-check text-primary" v-if="follower.is_verified"></i>
                </h6>
                <span class="text-muted text-sm mb-2">{{follower.title}}</span> <span v-if="me.info.company" class="text-gray-dark">@ {{me.info.company.name}}</span>
                <p>{{follower.description}}</p>
                <div class="social-bar">
                  <a :href="follower.facebook" class="social-link branding-facebook"
                     v-if="follower.facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a :href="follower.twitter" class="social-link branding-twitter"
                     v-if="follower.twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a :href="follower.linkedin" class="social-link branding-linkedin"
                     v-if="follower.linkedin">
                    <i class="fa fa-linkedin-square"></i>
                  </a>
                  <a :href="follower.telegram" class="social-link branding-linkedin"
                     v-if="follower.telegram">
                    <i class="fa fa-telegram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-new-layout" v-else>
      <h6 class="mb-0 text-center">This project doesn't have subscribers now</h6>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CompanySubscribers',
    data () {
      return {
        loaded: false,
        error_message: '',
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Company Subscribers'
      }
    },
    methods: {
      getFollowers () {
        this.loaded = false
        // load company
        this.$store.dispatch('getCompany', this.my_company.id)
        // if company loaded
          .then(() => {
            // check if company already has project,  !! can convert '' or {} to true/false
            this.has_project = !!this.my_company.project
            // if does not have project
            if (!this.has_project) {
              this.$router.push({name: 'company_new_project'})
            }
            else {
              this.$store.dispatch('getProjectSubscribers', this.my_company.project)
                .then(() => {
                  this.loaded = true
                })
            }
          })

      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        my_company: 'self_company',
        project_subscribers: 'current_project_subscribers'
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
      this.getFollowers()
    }
  }
</script>
<style scoped>
  a {
    text-decoration: none;
  }
</style>
