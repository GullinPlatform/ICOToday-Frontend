<template>
  <div class="col-md-8">
    <h6 class="text-muted text-normal text-uppercase ">Members</h6>
    <hr class="mb-3 mt-2">
    <div class="card-new-layout">
      <h6 class="text-muted text-normal text-uppercase ">Team members</h6>
      <hr class="mb-3 mt-2">
      <div class="team team-grid mt-4">
        <div class="row">
          <div class="col-md-6 mb-4" v-for="member in company_members" v-if="member.type===0">
            <div class="d-table">
              <router-link :to="{name:'user', params:{id:member.account}}">
                <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                     width="100" :src="member.avatar">
              </router-link>
              <div class="pl-3 d-table-cell align-middle">
                <h6>
                  <router-link class="text-decoration-none text-gray-dark" :to="{name:'user', params:{id:member.account}}">{{member.full_name}}</router-link><i class="fa fa-check text-primary" v-if="member.is_verified"></i>
                  <span class="text-muted text-sm mb-2">{{member.title}}</span>
                </h6>

                <p>{{member.description}}</p>
                <div class="social-bar">
                  <a :href="member.facebook" class="social-link branding-facebook"
                     v-if="member.facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a :href="member.twitter" class="social-link branding-twitter"
                     v-if="member.twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a :href="member.linkedin" class="social-link branding-linkedin"
                     v-if="member.linkedin">
                    <i class="fa fa-linkedin-square"></i>
                  </a>
                  <a :href="member.telegram" class="social-link branding-linkedin"
                     v-if="member.telegram">
                    <i class="fa fa-telegram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="d-table">
              <a href="javascript:void(0)" @click="popUpModal(false)">
                <img class="rounded-circle mb-2" height="100" width="100"
                     src="../../../static/img/services/add.png" alt="Team Member">
              </a>
              <div class="pl-3 d-table-cell align-middle">
                <h6>
                  Add New Member
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-new-layout">
      <h6 class="text-muted text-normal text-uppercase ">Team Advisors</h6>
      <hr class="mb-3 mt-2">
      <div class="team team-grid mt-4">
        <div class="row">
          <div class="col-md-6 mb-4" v-for="member in company_members" v-if="member.type===3">
            <div class="d-table">
              <router-link :to="{name:'user', params:{id:member.account}}">
                <img class="d-block mx-auto img-thumbnail rounded-circle d-table-cell align-middle"
                     width="100" :src="member.avatar" alt="Team">
              </router-link>
              <div class="pl-3 d-table-cell align-middle">
                <h6>
                  <router-link class="text-decoration-none text-gray-dark" :to="{name:'user', params:{id:member.account}}">{{member.full_name}}</router-link><i class="fa fa-check text-primary" v-if="member.is_verified"></i>
                  <span class="text-muted text-sm mb-2">{{member.title}}</span>
                </h6>
                <p>{{member.description}}</p>
                <div class="social-bar">
                  <a :href="member.facebook" class="social-link branding-facebook"
                     v-if="member.facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a :href="member.twitter" class="social-link branding-twitter"
                     v-if="member.twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a :href="member.linkedin" class="social-link branding-linkedin"
                     v-if="member.linkedin">
                    <i class="fa fa-linkedin-square"></i>
                  </a>
                  <a :href="member.telegram" class="social-link branding-linkedin"
                     v-if="member.telegram">
                    <i class="fa fa-telegram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="d-table">
              <a href="javascript:void(0)" @click="popUpModal(true)">
                <img class="rounded-circle mb-2" height="100" width="100"
                     src="../../../static/img/services/add.png" alt="Team Advisor">
              </a>
              <div class="pl-3 d-table-cell align-middle">
                <h6>
                  Add New Advisor
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CompanyTeam',
    data () {
      return {}
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'My Team'
      }
    },
    methods: {
      popUpModal (is_advisor) {
        /* global $:true */
        this.$store.dispatch('setIsAdvisor', is_advisor)
        $('#add-member-modal').modal('show')
      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        my_company: 'self_company',
        self_type: 'self_type',
        company_members: 'current_company_members'
      })
    },
    beforeMount () {
      // redirect non ico company
      if (this.self_type !== 0) {
        this.$router.push({name: 'landing'})
      }

      this.$store.dispatch('getCompanyMembers', this.my_company.id)
    }
  }
</script>
