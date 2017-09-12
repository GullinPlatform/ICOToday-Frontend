<template>
    <div>
        <!-- Page Content-->
        <div class="container padding-bottom-3x mb-2 mt-5">
            <div class="row">
                <my-header></my-header>
                <!--main content-->
                <div class="col-md-8">
                    <h6 class="text-muted text-normal text-uppercase ">
                        My ICO Projects
                    </h6>
                    <hr class="mb-3 mt-2">

                    <div class="product-card product-list"
                         v-for="project in projects"
                         v-if="loaded"
                         @mouseover="active=project.id" @mouseleave="active=false">
                        <a href="javascript:void(0)" @click="postModal(project.id)" class="product-thumb">
                            <img :src="project.logo_image" alt="Logo">
                        </a>
                        <div class="product-info pt-2 pb-2" :class="{active:active===project.id}">
                            <h3 class="product-title" @click="postModal(project.id)">
                                {{project.title}}
                                <span v-if="project.status===0" class="badge badge-warning">Verifying</span>
                                <span v-else-if="project.status===1" class="badge badge-primary">Verified</span>
                                <span v-else-if="project.status===2" class="badge badge-success"><i
                                        class="fa fa-check"></i> Completed</span>
                                <span v-else-if="project.status===3" class="badge badge-info"><i
                                        class="fa fa-star-o"></i> Promoting</span>
                                <span v-else-if="project.status===4" class="badge badge-warning"><i
                                        class="fa fa-star-o"></i> Premium</span>
                                <span v-else="project.status===5" class="badge badge-default"><i
                                        class="fa fa-check"></i> Closed</span>
                                <span class="text-muted text-sm"> {{project.description_short}}</span>
                                <span class="float-right text-bold text-primary ml-2">{{project.rating}}/100</span>
                            </h3>

                            <div class="row" @click="postModal(project.id)">
                                <div class="col-sm-3">
                                    Type
                                    <h4 class="product-price" v-if="project.type===0">
                                        Pre-ICO
                                    </h4>
                                    <h4 class="product-price" v-else>
                                        ICO
                                    </h4>
                                </div>
                                <div class="col-sm-3">
                                    Time
                                    <h4 class="product-price">
                                        {{timeCounter(project.start_datetime, project.end_datetime)}}
                                    </h4>
                                </div>
                                <div class="col-sm-3">
                                    Soft Cap / Hard Cap
                                    <h4 class="product-price">
                                        {{project.minimum_goal}} /  {{project.maximum_goal}} {{project.coin_type}}
                                    </h4>
                                </div>
                                <div class="col-sm-3">
                                    Equity On Offer
                                    <h4 class="product-price">
                                        {{project.equality_on_offer}}%
                                    </h4>
                                </div>
                            </div>

                            <span class="badge badge-sm badge-default">Real estate</span>
                            <a href="javascript:void(0)">
                            <span class="badge badge-sm badge-outline-primary float-right"
                                  @click="getEditProjectAndShowModal(project.id)"
                                  :class="{active:active}"
                                  v-if="me.info.team&&project.team.id===me.info.team.id&&project.status==0">
                                    <i class="fa fa-edit"></i> Edit
                            </span>
                                <span class="badge badge-sm badge-outline-primary float-right"
                                      @click="getUpdateProjectAndShowModal(project.id)"
                                      :class="{active:active}"
                                      v-else-if="me.info.team&&project.team.id===me.info.team.id&&project.status!=0">
                                    <i class="fa fa-edit"></i> Edit
                            </span>
                            </a>
                        </div>
                    </div>

                    <div class="mt-5" v-if="loaded && projects.length===0">
                        <div class="text-center">
                            <h3 class="product-title">You don't have ICO projects now</h3>
                            <router-link :to="{name:'me_new_project'}"
                                         class="btn btn-outline-primary btn-sm text-primary">
                                Create Now
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import MyHeader from 'components/MyHeader'

  export default {
    name: 'MyCreatedProjects',
    data () {
      return {
        active: false,
        loaded: false,
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'My ICO Projects'
      }
    },
    components: {
      MyHeader,
    },
    methods: {
      getEditProjectAndShowModal (id) {
        this.$store.dispatch('getPost', id)
          .then(() => {
            /* global $:true */
            $('#edit-project-modal').modal('show')
          })
          .catch(() => {
          })
      },
      getUpdateProjectAndShowModal (id) {
        this.$store.dispatch('getPost', id)
          .then(() => {
            /* global $:true */
            $('#update-project-modal').modal('show')
          })
          .catch(() => {
          })
      },
      timeCounter (start, end) {
        /* global moment:true */
        // Haven't start
        if (moment().diff(start, 'minutes') < 0) {
          let rest = -moment().diff(start, 'days') + ' days '

          if (rest === '0 days ') {
            rest = -moment().diff(start, 'hours') + ' hours '
          }
          if (rest === '0 hours ') {
            rest = -moment().diff(start, 'minutes') + ' minutes '
          }
          return 'Start in ' + rest
        }
        // Started
        else if (moment().diff(end, 'minutes') < 0) {
          let rest = -moment().diff(end, 'days') + ' days '

          if (rest === '0 days ') {
            rest = -moment().diff(end, 'hours') + ' hours '
          }
          if (rest === '0 hours ') {
            rest = -moment().diff(end, 'minutes') + ' minutes '
          }

          return 'End in ' + rest
        }
        // Ended
        else {
          let rest = moment().diff(end, 'days') + ' days '

          if (rest === '0 days ') {
            rest = moment().diff(end, 'hours') + ' hours '
          }
          if (rest === '0 hours ') {
            rest = moment().diff(end, 'minutes') + ' minutes '
          }

          return 'Ended ' + rest + 'ago'
        }
      },
      formatTime (start, end) {
        if (moment().diff(start, 'minutes') < 0) {

          return moment(start).format('MM/DD, hh:mm')
        }
        else {

          return moment(end).format('MM/DD, hh:mm')
        }
      },
      postModal (id) {
        /* global $:true */
        this.$store.dispatch('getPost', id)
          .then(() => {
            $('#post-modal').modal('show')
          })
      },
    },
    computed: {
      me () {
        return this.$store.getters.self
      },
      projects () {
        return this.$store.getters.self_created_posts
      }
    },
    beforeCreate () {
      // My ICO Projects
      this.$store.dispatch('getSelfCreatedPost')
        .then(() => {
          this.loaded = true
        })
    }
  }
</script>
