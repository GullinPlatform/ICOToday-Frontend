<template>
  <div class="container container-padding">
    <div class="row">
      <div class="col-md-4 mb-5" v-if="loaded">
        <aside class="user-info-wrapper">
          <div class="user-cover" style="background-image: url(../../../static/img/account/user-cover-img.jpg);">
            <div class="info-label" v-if="user.info.is_verified"><i class="fa fa-id-badge"></i> Verified
            </div>
            <div class="info-label warning-label" data-toggle="tooltip" v-else><i class="fa fa-warning"></i> Unverified
            </div>
          </div>
          <div class="user-info">
            <div class="user-avatar">
              <img :src="user.info.avatar">
            </div>
            <div class="pl-2">
              <h4 class="mb-0">{{user.info.full_name}}</h4>
              <h6 class="text-muted mb-0 mt-1">{{user.info.title}} <span v-if="user.info.company" class="text-gray-dark">@ {{user.info.company.name}}</span></h6>
              <p>{{user.info.description}}</p>
              <a :href="user.info.facebook" target="_blank"
                 v-if="user.info.facebook">
                <i class="fa fa-facebook"></i>
              </a>
              <a :href="user.info.linkedin" target="_blank"
                 v-if="user.info.linkedin">
                <i class="fa fa-linkedin-square"></i>
              </a>
              <a :href="user.info.twitter" target="_blank"
                 v-if="user.info.twitter">
                <i class="fa fa-twitter"></i>
              </a>
              <a :href="user.info.telegram" target="_blank"
                 v-if="user.info.telegram">
                <i class="fa fa-telegram"></i>
              </a>
            </div>
          </div>
        </aside>
        <nav class="list-group">
          <router-link :to="{name:'user', params:{id:user.id}}" class="list-group-item"
                       :class="{active: $route.name==='user'}">
            <i class="fa fa-angle-right"></i>{{user.info.full_name}}'s Feed
          </router-link>
          <router-link :to="{name:'user_marked', params:{id:user.id}}" class="list-group-item"
                       :class="{active: $route.name==='user_marked'}">
            <i class="fa fa-angle-right"></i>{{user.info.full_name}}'s Subscriptions
          </router-link>
        </nav>
        <h6 class="text-muted text-normal text-uppercase mt-4" v-if="user.info.type===0">Project</h6>
        <nav class="list-group" v-if="user.info.type===0">
          <a href="javascript:void(0)" @click="projectModal(company.project)" class="list-group-item">
            <i class="fa fa-angle-right"></i> {{company.name}}
          </a>
        </nav>
        <h6 class="text-muted text-normal text-uppercase mt-4" v-if="user.info.type===2">Expert Center</h6>
        <nav class="list-group" v-if="user.info.type===2">
          <router-link :to="{name:'user_rated', params:{id:user.id}}" class="list-group-item"
                       :class="{active: $route.name==='user_rated'}">
            <i class="fa fa-angle-right"></i> {{user.info.full_name}}'s Ratings
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
    },
    computed: {
      ...mapGetters({
        user: 'user',
        company: 'current_company',
      })
    },
    beforeMount () {
      this.loaded = false
      this.$store.dispatch('getUser', this.$route.params.id)
        .then(() => {
          if (this.user.info.company) {
            this.$store.dispatch('getCompany', this.user.info.company.id)
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

