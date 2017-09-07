<template>
    <div>
        <!-- Page Title-->
        <div class="page-title">
            <div class="container pl-5 pr-5">
                <div class="column">
                    <h1 v-if="$route.name === 'me' && me.type === 0">
                        My ICO Projects
                    </h1>
                    <h1 v-else>
                        My Marked ICO Projects
                    </h1>
                </div>
                <div class="column">
                    <ul class="breadcrumbs">
                        <li>
                            <router-link :to="{name:'landing'}">Home</router-link>
                        </li>
                        <li class="separator">&nbsp;</li>
                        <li>
                            <router-link :to="{name:'me_settings'}">Account</router-link>
                        </li>
                        <li class="separator">&nbsp;</li>
                        <li>
                            My Marked ICO Projects
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Page Content-->
        <div class="container pl-5 pr-5">
            <div class="row">
                <user-header></user-header>
                <!--main content-->
                <div class="col-md-8">

                    <h6 class="text-muted text-normal text-uppercase">
                        My Marked ICO Projects
                    </h6>
                    <hr class="mb-3 mt-2">

                    <div class="product-card product-list" v-if="loaded" v-for="project in projects">
                        <router-link :to="{name:'post', params:{id: project.id}}" class="product-thumb">
                            <img :src="project.logo_image" alt="Logo"></router-link>
                        <div class="product-info">
                            <h3 class="product-title">
                                <router-link :to="{name:'post', params:{id: project.id}}"> {{project.title}}
                                </router-link>
                                <span v-if="project.status===0" class="badge badge-warning">Verifying</span>
                                <span v-else-if="project.status===1" class="badge badge-primary">Active</span>
                                <span v-else-if="project.status===2" class="badge badge-success"><i
                                        class="fa fa-check"></i> Completed</span>
                                <span v-else-if="project.status===3" class="badge badge-info"><i
                                        class="fa fa-star-o"></i> Promoting</span>
                                <span v-else-if="project.status===4" class="badge badge-warning"><i
                                        class="fa fa-star-o"></i> Premium</span>
                                <span v-else="project.status===5" class="badge badge-default"><i
                                        class="fa fa-check"></i> Closed</span>
                                <span class="text-sm text-info ml-2">{{project.rating}}/100</span>
                            </h3>
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
                    <div v-if="loaded && projects.length===0">
                        Nothing Here
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
        projects: [],
      }
    },
    head: {
      title () {
        return {
          inner: 'ICOToday',
          complement: 'Marked ICOs'
        }
      }
    },
    components: {
      UserHeader,
    },
    methods: {
      loadProjects () {
        // My Marked Projects
        this.$store.dispatch('getSelfMarkedPost')
          .then(() => {

          })
          .catch(() => {

          })
      },
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
      me () {
        return this.$store.getters.self
      }
    },
    beforeCreate () {
      // My Marked Projects
      this.$store.dispatch('getSelfMarkedPost')
        .then(() => {
          this.projects = this.$store.getters.self_marked_posts
          this.loaded = true
        })
    },
    watch: {
      '$route' () {
        this.loadProjects()
      }
    }
  }
</script>
