<template>
    <div>
        <!-- Page Title-->
        <div class="page-title">
            <div class="container">
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
                            <router-link :to="{name:'me_new_project'}">Account</router-link>
                        </li>
                        <li class="separator">&nbsp;</li>
                        <li v-if="$route.name === 'me' && me.type === 0">
                            My ICO Projects
                        </li>
                        <li v-else>
                            My Marked ICO Projects
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Page Content-->
        <div class="container padding-bottom-3x mb-2">
            <div class="row">
                <user-header></user-header>
                <!--main content-->
                <div class="col-md-8">
                    <h6 v-if="$route.name === 'me' && me.type === 0" class="text-muted text-normal text-uppercase ">
                        My ICO Projects
                    </h6>
                    <h6 class="text-muted text-normal text-uppercase " v-else>
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
                                <button class="btn btn-outline-primary btn-sm"
                                        @click="getProjectAndShowModal(project.id)"
                                        v-if="me.info.team&&project.team.id===me.info.team.id&&project.status==0">
                                    EDIT
                                </button>
                                <button class="btn btn-outline-primary btn-sm"
                                        v-else-if="me.info.team&&project.team.id===me.info.team.id&&project.status!=0">
                                    UPDATE
                                </button>
                                <router-link :to="{name:'post', params:{id: project.id}}"
                                             class="btn btn-danger text-uppercase btn-sm">
                                    <span v-if="project.status!==0">DETAIL</span>
                                    <span v-else>PREVIEW</span>
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
    name: 'UserProjects',
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
          complement: (this.$route.name === 'me' && this.me.type === 0) ? 'My ICOs' : 'Marked ICOs'
        }
      }
    },
    components: {
      UserHeader,
    },
    methods: {
      loadProjects () {
        // My ICO Projects
        if (this.$route.name === 'me' && this.$store.getters.self.type === 0) {

          this.$store.dispatch('getSelfCreatedPost')
            .then(() => {
              this.projects = this.$store.getters.self_created_posts
              this.loaded = true
            })
            .catch(() => {

            })

        }
        // My Marked Projects
        else {
          this.$store.dispatch('getSelfMarkedPost')
            .then(() => {

            })
            .catch(() => {

            })
        }
      },
      getProjectAndShowModal (id) {
        this.$store.dispatch('getPost', id)
          .then(() => {
            /* global $:true */
            $('#edit-project-modal').modal('show')
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
      // My ICO Projects
      if (this.$route.name === 'me' && this.$store.getters.self.type === 0) {
        this.$store.dispatch('getSelfCreatedPost')
          .then(() => {
            this.projects = this.$store.getters.self_created_posts
            this.loaded = true
          })
      }
      // My Marked Projects
      else {
        this.$store.dispatch('getSelfMarkedPost')
          .then(() => {
            this.projects = this.$store.getters.self_marked_posts
            this.loaded = true
          })
      }
    },
    watch: {
      '$route' () {
        this.loadProjects()
      }
    }
  }
</script>
