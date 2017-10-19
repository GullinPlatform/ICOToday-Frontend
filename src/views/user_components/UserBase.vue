<template>
  <div class="container container-padding">
    <div class="row">
      <div class="col-md-4 mb-5" v-if="loaded">
        <aside class="user-info-wrapper">
          <div class="user-cover" style="background-image: url(../../../static/img/account/user-cover-img.jpg);">
            <div class="primary-label float-right" v-if="user_info.is_verified"><i class="fa fa-envelope-o mb-01"></i> Verified</div>
            <div class="warning-label float-right" v-else="!user_info.is_verified"><i class="fa fa-envelope-o mb-01"></i> Unverified</div>
            <div class="warning-label float-right mr-2" v-if="user_info.type===2"><i class="fa fa-star mb-01"></i> Analyst</div>
            <div class="info-label float-right mr-2" v-if="user_info.type===0"><i class="fa fa-building-o mb-01"></i> Project Owner</div>
          </div>
          <div class="user-info">
            <div class="user-avatar">
              <img :src="user_info.avatar">
            </div>
            <div class="pl-2">
              <h4 class="mb-0">{{user_info.full_name}}</h4>
              <h6 class="text-muted mb-0 mt-1">{{user_info.title}} <span v-if="user_info.company" class="text-gray-dark">@ {{user_info.company.name}}</span></h6>
              <p>{{user_info.description}}</p>
              <div>
                <a :href="user_info.facebook" target="_blank"
                   v-if="user_info.facebook">
                  <i class="fa fa-facebook"></i>
                </a>
                <a :href="user_info.linkedin" target="_blank"
                   v-if="user_info.linkedin">
                  <i class="fa fa-linkedin-square"></i>
                </a>
                <a :href="user_info.twitter" target="_blank"
                   v-if="user_info.twitter">
                  <i class="fa fa-twitter"></i>
                </a>
                <a :href="user_info.telegram" target="_blank"
                   v-if="user_info.telegram">
                  <i class="fa fa-telegram"></i>
                </a>
              </div>
              <button class="btn btn-danger btn-sm btn-block" @click="followUser()">Follow</button>
            </div>
          </div>
        </aside>
        <nav class="list-group">
          <router-link :to="{name:'user', params:{id:user_info.id}}" class="list-group-item"
                       :class="{active: $route.name==='user'}">
            <i class="fa fa-angle-right"></i>{{user_info.full_name}}'s Feed
          </router-link>
          <router-link :to="{name:'user_marked', params:{id:user_info.id}}" class="list-group-item"
                       :class="{active: $route.name==='user_marked'}">
            <i class="fa fa-angle-right"></i>{{user_info.full_name}}'s Subscriptions
          </router-link>
        </nav>
        <h6 class="text-muted text-normal text-uppercase mt-4" v-if="user_info.type===0">Project</h6>
        <nav class="list-group" v-if="user_info.type===0">
          <a href="javascript:void(0)" @click="projectModal(company.project)" class="list-group-item">
            <i class="fa fa-angle-right"></i> {{company.name}}
          </a>
        </nav>
        <h6 class="text-muted text-normal text-uppercase mt-4" v-if="user_info.type===2">Analyst Center</h6>
        <nav class="list-group" v-if="user_info.type===2">
          <router-link :to="{name:'user_rated', params:{id:user_info.id}}" class="list-group-item"
                       :class="{active: $route.name==='user_rated'}">
            <i class="fa fa-angle-right"></i> {{user_info.full_name}}'s Ratings
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
    name: 'UserBase',
    data () {
      return {
        loaded: false,
        window_width: 0
      }
    },
    methods: {
      getWindowWidth (event) {
        this.window_width = document.documentElement.clientWidth
      },

      projectModal (id) {
        if (this.window_width <= 768) {
          this.$router.push({name: 'project', params: {id: id}})
        }
        else {
          this.$store.dispatch('getProject', id)
            .then(() => {
              history.pushState({}, null, '/project/' + id)
              $('#project-modal').modal('show')
            })
        }
      },
      followUser () {
        this.$store.dispatch('followUser', this.$route.params.id)
          .then(() => {
            this.$store.dispatch('toastr', {type: 'success', title: 'Success', message: 'Your start following ' + this.user_info.full_name})
          })
      }
    },
    computed: {
      ...mapGetters({
        user_info: 'user_info',
        company: 'current_company',
      })
    },
    beforeMount () {
      this.loaded = false
      this.$store.dispatch('getUserInfo', this.$route.params.id)
        .then(() => {
          if (this.user_info.company) {
            this.$store.dispatch('getCompany', this.user_info.company.id)
              .then(() => {
                this.loaded = true
              })
          } else {
            this.loaded = true
          }
        })
    },
    mounted () {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getWindowWidth)
        //Init
        this.getWindowWidth()
      })
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.getWindowWidth)
    }
  }
</script>

<style scoped>
  a.list-group-item.router-link-active {
    background-color: #0da9ef !important;
    color: white !important;
  }
</style>
