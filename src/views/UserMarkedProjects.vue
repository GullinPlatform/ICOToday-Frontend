<template>
    <div>
        <!-- Page Content-->
        <div class="container padding-bottom-3x mb-2 mt-5">
            <div class="row">
                <user-header></user-header>
                <!--main content-->
                <div class="col-md-8">
                    <h6 class="text-muted text-normal text-uppercase">
                        User Marked ICO Projects
                    </h6>
                    <hr class="mb-3 mt-2">

                    <div class="product-card product-list" v-if="loaded" v-for="project in projects">
                        <router-link :to="{name:'post', params:{id: project.id}}" class="product-thumb">
                            <img :src="project.logo_image" alt="Logo"></router-link>
                        <div class="product-info">
                            <h3 class="product-title">
                                <router-link :to="{name:'post', params:{id: project.id}}"> {{project.title}}
                                </router-link>
                            </h3>
                            <div class="rating-stars">
                                Rate:
                                <i class="icon-star filled"></i>
                                <i class="icon-star filled"></i>
                                <i class="icon-star filled"></i>
                                <i class="icon-star filled"></i>
                                <i class="icon-star filled"></i>
                            </div>
                            <h4 class="product-price"> {{formatTime(project.start_datetime, project.end_datetime)}}</h4>
                            <p> {{project.description_short}}</p>
                            <div class="progress mb-1">
                                <div class="progress-bar bg-info" role="progressbar" style="width: 70%; height: 5px;"
                                     aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="product-buttons">
                                <button class="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip"
                                        title="" data-original-title="Whishlist"><i class="fa fa-star-o"></i>
                                </button>
                                <router-link :to="{name:'post', params:{id: project.id}}"
                                             class="btn btn-danger text-uppercase btn-sm">
                                    <span>DETAIL</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class='mt-5' v-if="loaded && projects.length===0">
                        <div class="text-center">
                            <h3 class="product-title">This user doesn't have any marked projects</h3>
                            <router-link :to="{name:'landing'}" class="btn btn-outline-primary btn-sm text-primary">
                                Explore
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import UserHeader from 'components/UserHeader'

  export default {
    name: 'UserMarkedProjects',
    data () {
      return {
        loaded: false,
      }
    },
    head: {
      title () {
        return {
          inner: 'ICOToday',
          complement: 'User Marked ICOs'
        }
      }
    },
    components: {
      UserHeader,
    },
    methods: {
      formatTime (start, end) {
        /* global moment:true */
        // Haven't start
        if (moment().diff(start, 'minutes') < 0) {
          return 'Start: ' + moment(start).format('MM/DD, hh:mm')
        } else {
          return 'End: ' + moment(end).format('MM/DD, hh:mm')
        }
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      projects () {
        return this.$store.getters.user_marked_posts
      }
    },
    beforeMount () {
      // My ICO Projects
      this.loaded = false
      this.$store.dispatch('getUserMarkedPost', this.$route.params.id)
        .then(() => {
          this.loaded = true
        })
    }
  }
</script>
