<template>
  <!-- Page Content-->
  <div class="container container-padding">
    <div class="row">
      <div class="col-md-4 mb-5">
        <aside class="user-info-wrapper">
          <div class="user-cover" style="background-image: url(../../../static/img/account/user-cover-img.jpg);">
            <div>
              <div class="primary-label float-right" v-if="is_verified"><i class="fa fa-envelope-o mb-01"></i> Verified</div>
              <div class="warning-label float-right" v-else="!is_verified"><i class="fa fa-envelope-o mb-01"></i> Unverified</div>
              <div class="warning-label float-right mr-2" v-if="type===2"><i class="fa fa-star mb-01"></i> Analyst</div>
              <div class="info-label float-right mr-2" v-if="type===0"><i class="fa fa-building-o mb-01"></i> Project Owner</div>
            </div>
          </div>
          <div class="user-info">
            <div class="user-avatar">
              <router-link class="edit-avatar" :to="{name:'me_profile'}"></router-link>
              <img :src="me.info.avatar" alt="User">
            </div>
            <div class="pl-2">
              <h4 class="mb-0">{{username}}</h4>
              <h6 class="text-muted mb-0 mt-1">{{me.info.title}} <span v-if="me.info.company" class="text-gray-dark">@ {{me.info.company.name}}</span></h6>
              <p>{{me.info.description}}</p>
              <a :href="me.info.facebook" target="_blank"
                 v-if="me.info.facebook">
                <i class="fa fa-facebook"></i>
              </a>
              <a :href="me.info.linkedin" target="_blank"
                 v-if="me.info.linkedin">
                <i class="fa fa-linkedin-square"></i>
              </a>
              <a :href="me.info.twitter" target="_blank"
                 v-if="me.info.twitter">
                <i class="fa fa-twitter"></i>
              </a>
              <a :href="me.info.telegram" target="_blank"
                 v-if="me.info.telegram">
                <i class="fa fa-telegram"></i>
              </a>
            </div>
          </div>
        </aside>
        <nav class="list-group">
          <router-link :to="{name:'me'}" class="list-group-item"
                       :class="{active: $route.name==='me'}">
            <i class="fa fa-angle-right"></i> Feed
          </router-link>
          <router-link :to="{name:'me_marked'}" class="list-group-item"
                       :class="{active: $route.name==='me_marked'}">
            <i class="fa fa-angle-right"></i> My Subscriptions
          </router-link>
          <router-link :to="{name:'me_wallet'}"  class="list-group-item with-badge"
                       :class="{active: $route.name==='me_wallet'}">
            <i class="fa fa-angle-right"></i> My Wallet
            <span class="badge badge-warning badge-pill">NEW!</span>
          </router-link>
          <router-link :to="{name:'me_profile'}" class="list-group-item"
                       :class="{active: $route.name==='me_profile'}">
            <i class="fa fa-angle-right"></i> Profile
          </router-link>
          <router-link :to="{name:'me_settings'}" class="list-group-item"
                       :class="{active: $route.name==='me_settings'}">
            <i class="fa fa-angle-right"></i> Settings
          </router-link>
        </nav>

        <h6 class="text-muted text-normal text-uppercase mt-4" v-if="type===0"> PROJECT MANAGEMENT</h6>
        <nav class="list-group" v-if="type===0">
          <router-link :to="{name:'company_new_project'}" class="list-group-item"
                       :class="{active: $route.name==='company_new_project' || $route.name==='company_project'}">
            <i class="fa fa-angle-right"></i> Project
          </router-link>
          <router-link :to="{name:'company_feed'}" class="list-group-item"
                       :class="{active: $route.name==='company_feed'}">
            <i class="fa fa-angle-right"></i> Project Feed
          </router-link>
          <router-link :to="{name:'company_wallet'}" class="list-group-item"
                       :class="{active: $route.name==='company_wallet'}">
            <i class="fa fa-angle-right"></i> Project Wallet
          </router-link>
          <router-link :to="{name:'company_team'}" class="list-group-item"
                       :class="{active: $route.name==='company_team'}">
            <i class="fa fa-angle-right"></i> Project Members
          </router-link>
          <router-link :to="{name:'company_promotion'}" class="list-group-item"
                       :class="{active: $route.name==='company_promotion'}">
            <i class="fa fa-angle-right"></i> Promotion Application
          </router-link>
        </nav>

        <h6 class="text-muted text-normal text-uppercase mt-4" v-if="type===1">Analyst</h6>
        <nav class="list-group" v-if="type===1">
          <router-link :to="{name:'me_analyst_apply'}" class="list-group-item with-badge"
                       :class="{active: $route.name==='me_analyst_apply'}">
            <i class="fa fa-angle-right"></i> Apply To Be ICOToday Analyst
            <span class="badge badge-warning badge-pill">NEW!</span>
          </router-link>
        </nav>
        <h6 class="text-muted text-normal text-uppercase mt-4" v-if="type===2">Analyst Center</h6>
        <nav class="list-group" v-if="type===2">
          <router-link :to="{name:'analyst_rated_projects'}" class="list-group-item"
                       :class="{active: $route.name==='analyst_rated_projects'}">
            <i class="fa fa-angle-right"></i> My Rated Projects
          </router-link>
          <router-link :to="{name:'analyst_unrated_projects'}" class="list-group-item"
                       :class="{active: $route.name==='analyst_unrated_projects'}">
            <i class="fa fa-angle-right"></i> Unrated Projects
          </router-link>
        </nav>

        <h6 class="text-muted text-normal text-uppercase mt-4" v-if="type===3">My Project</h6>
        <nav class="list-group" v-if="type===3">
          <a href="javascript:void(0)" @click="projectModal(my_company.project)" class="list-group-item">
            <i class="fa fa-angle-right"></i> Project
          </a>
          <router-link :to="{name:'company_feed'}" class="list-group-item"
                       :class="{active: $route.name==='company_feed'}">
            <i class="fa fa-angle-right"></i> Project Feed
          </router-link>
        </nav>
      </div>
      <!--main content-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'MyBase',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'My ICO Projects'
      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        username: 'self_name',
        is_verified: 'is_verified',
        type: 'self_type',
        my_company: 'self_company',
        my_admin: 'self_admin',
      })
    },
    methods: {
      projectModal (id) {
        this.$store.dispatch('getProject', id)
          .then(() => {
            history.pushState({}, null, '/project/' + id)
            $('#project-modal').modal('show')
          })
      },
    },
    beforeCreate () {
      // redirect non login user
      if (!this.$store.getters.login_status) {
        this.$router.push({name: 'landing'})
      }
      // redirect not verified user
      if (!this.$store.getters.is_verified) {
        this.$router.push({name: 'me_need_verify'})
      }
    }
  }
</script>
