<template>
    <div>
        <!-- ======== @Region: #highlighted ======== -->
        <div id="highlighted" class="border-bottom-0 bg-black">
            <!-- Image Banner: Use the the data-bg-img functionality to create a simple image banner Use spacer classes to make the banner larger with padding, allows for easy responsive changes too see: elements-ctas.htm To make the banner full height/screen add the attributes: data-toggle="full-height" data-offset="#header" -->
            <div class="overlay overlay-op-7 text-center flex-valign"
                 data-bg-img="static/img/backgrounds/computer-screens.jpg"
                 data-css='{"background-position": "center bottom","background-attachment": "fixed"}'
                 data-animate="fadeIn">
                <div data-scroll="scrollax" data-scrollax-y-ratio="1000" class="py-sm-8 pt-sm-8 hidden-xs-down">
                    <h2 class="display-3 text-white text-uppercase font-weight-bold" data-animate="fadeInDown"
                        data-animate-delay="0.6">
                        ICO Today
                    </h2>
                    <h3 class="text-grey font-weight-normal" data-animate="fadeInUp" data-animate-delay="0.8">
                        <span data-typed='["Share Your Intelligence", "Bring your ICO to the world"]'
                              data-typed-settings='{"delay":2000, "speed":120,"breakLines":false, "deleteDelay":1400, "doneClass":{"#get-btn":"animated fadeIn"}}'></span>
                    </h3>
                </div>
            </div>
        </div>

        <!-- ======== @Region: #content ======== -->
        <div id="content" class="pt-5 pb-6 bg-white pos-relative pos-zindex-10">
            <!-- Promo -->
            <div class="container pb-6">
                <hr class="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary"/>
                <h3 class="text-left text-uppercase mt-0 mb-3">
                    Special ICO Events
                </h3>
                <div class="row text-left">
                    <div class="col-md-4 d-lg-flex mb-3" v-for="promo in promo_posts">
                        <div class="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b"
                             data-bg-img="static/img/homes/code.jpg">
                            <h2 class="text-white text-uppercase font-weight-bold mb-0 ">
                                <span>{{promo.title}}</span>
                            </h2>
                            <p class="text-white text-uppercase mb-0">{{promo.start_datetime}}</p>
                            <hr class="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary"/>
                        </div>
                    </div>
                    <div class="col-md-4 d-lg-flex mb-3">
                        <div class="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b"
                             data-bg-img="static/img/homes/desk.jpg">
                            <h2 class="text-white text-uppercase font-weight-bold mb-0 display-4">
                                <span data-toggle="count-to" data-to="538" data-from="0">0</span>
                            </h2>
                            <p class="text-white text-uppercase mb-0">Admin Jobs</p>
                            <hr class="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary"/>
                        </div>
                    </div>
                    <div class="col-md-4 d-lg-flex mb-3">
                        <div class="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b"
                             data-bg-img="static/img/homes/happy.jpg">
                            <h2 class="text-white text-uppercase font-weight-bold mb-0 display-4">
                                <span data-toggle="count-to" data-to="138" data-from="0">0</span>
                            </h2>
                            <p class="text-white text-uppercase mb-0">Freelance Jobs</p>
                            <hr class="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary"/>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Main content -->
            <div class="container pb-6">
                <div class="row">

                    <!-- Main content -->
                    <div class="col-lg-12">
                        <!-- Jobs list -->
                        <hr class="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary"/>
                        <h3 class="mb-3 font-weight-bold text-uppercase">
                            Active ICOs
                            <span class="text-xs text-muted font-weight-normal text-normalcase op-7">{{getMonth()}}</span>
                            <a href="javascript:void(0)" @click="current=false;upcoming=true" v-if="current"
                               class="text-xs float-md-right mb-0">>> Upcoming</a>
                            <a href="javascript:void(0)" @click="current=true;upcoming=false" v-if="upcoming"
                               class="text-xs float-md-right mb-0">>> Current</a>
                        </h3>

                        <!-- Job 1 -->
                        <div v-if="loaded">
                            <div v-for="post in posts" class="card px-3 py-4 mb-3 row-hover pos-relative">
                                <div class="row align-items-center">
                                    <div class="col-md-2 col-sm-4">
                                        <!--<img :src="post.icon_image" alt="ICO Icon"-->
                                        <!--class="img-fluid"/>  -->
                                        <img src="static/img/customers/customer-2.png" alt="ICO Icon"
                                             class="img-fluid"/>

                                    </div>
                                    <div class="col-sm-8">
                                        <h4 class="mb-0">
                                            {{post.title}}
                                        </h4>
                                        <p class="text-muted mb-2 text-sm">By
                                            <router-link :to="{name:'team', params:{id:post.team.id}}"
                                                         class="font-weight-bold text-uppercase text-muted">
                                                {{post.team.name}}
                                            </router-link>
                                        </p>
                                        <p class="text-muted mb-2 text-sm">
                                            <span class="d-block d-md-inline">
                                                <i class="fa fa-map-marker"></i> Goal {{post.maximum_goal}} {{post.coin_type}}
                                            </span>
                                            <span class="d-block d-md-inline">
                                                <i class="fa fa-money ml-md-3"></i> Ends {{post.end_datetime}}
                                            </span>
                                            <a :href="post.website" class="d-block d-md-inline">
                                                <i class="fa fa-globe text-primary ml-md-3"></i> Website
                                            </a>
                                        </p>
                                        <div class="progress-bar w-100 mb-2 progress-bar-sm" role="progressbar"></div>
                                    </div>
                                    <div class="col-sm-12 col-md-2 text-md-center">
                                        <router-link :to="{name:'post', params:{id:post.id}}"
                                                     class="btn btn-danger text-uppercase font-weight-bold d-lg-block">
                                            Detail
                                        </router-link>

                                        <a href="#" v-if="logedin" class="btn btn-link text-muted text-xs">
                                            <i class="fa fa-star"></i> Mark For Me
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- Job 2 -->
                            <div class="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative">
                                <div class="row align-items-center ">
                                    <span class="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">featured</span>
                                    <div class="col-md-2 col-sm-4">
                                        <img src="static/img/customers/customer-2.png" alt="TSU"
                                             class="img-fluid"/>
                                    </div>
                                    <div class="col-sm-8">
                                        <h4 class="mb-0">
                                            Drupal Developer
                                        </h4>
                                        <p class="text-muted mb-2 text-sm">@
                                            <a href="#" class="font-weight-bold text-muted">TSU</a>
                                            (Senior level, Full Time Employment)
                                        </p>
                                        <p class="text-muted mb-2 text-sm">
                                        <span class="d-block d-md-inline">
                                          <i class="fa fa-map-marker"></i> London, UK
                                        </span>
                                            <span class="d-block d-md-inline">
                                            <i class="fa fa-money ml-md-3"></i> $70USD/hour
                                        </span>
                                        </p>

                                        <div class="progress-bar w-100 mb-2 progress-bar-sm" role="progressbar"></div>

                                    </div>
                                    <div class="col-sm-12 col-md-2 text-md-center">
                                        <a href="#"
                                           class="btn btn-danger text-uppercase font-weight-bold d-lg-block">
                                            Apply
                                        </a>
                                        <a href="#" class="btn btn-link text-muted text-xs">
                                            <i class="fa fa-heart"></i> Shortlist
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Call to action -->
                        <!--<div v-scroll-at="loadMore"></div>-->
                        <div class="row">
                            <div class="col-md-12 text-md-center mt-0">
                                <a class="btn btn-primary btn-md btn-rounded">
                                    + More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Landing',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Find Your Next ICO',
      }
    },
    data () {
      return {
        upcoming: false,
        current: true,
        loaded: false,
        page: 1,
      }
    },
    methods: {
      getMonth () {
        /* global moment:true */
        return moment().format('MMM YYYY')
      },
      loadMore () {
        this.$store.dispatch('listPostsByPage')
          .then(() => {
            this.page += 1
          })
          .catch(() => {
          })
      }
    },
    computed: {
      posts () {
        return this.$store.getters.posts
      },
      promo_posts () {
        return this.$store.getters.promo_posts
      },
      logedin () {
        return this.$store.getters.login_status
      }
    },
    beforeCreate () {
      this.$store.dispatch('listPosts')
        .then(() => {
          this.loaded = true
        })
        .catch(() => {
        })
      this.$store.dispatch('listPromoPosts')
        .then(() => {
          this.loaded = true
        })
        .catch(() => {
        })
    },
    mounted () {
      /* global $:true */
      $(document).ready(function () {
        'use strict'
        // Init theme functions
        $(document).themeInit()
      })

    },

    directives: {
      'scroll-at': {
        /**
         * @example: <div v-scroll-at.bottom="loadMore"></div>
         */

        _bind () {
          this.el.addEventListener('scroll', this.scrollHandler)
        },
        _unbind () {
          this.el.removeEventListener('scroll', this.scrollHandler)
        },
        bind () {
          let loading = false
          let done = () => { loading = false }

          this.scrollHandler = () => {
            let triggerTop = this.modifiers.top || false
            let distance = this.el.scrollTop
            let scrollMax = this.el.scrollHeight - this.el.clientHeight
            let trigger = triggerTop ? distance < 10 : distance > scrollMax - 10

            if (this.handler && !loading && trigger) {
              loading = true

              let result = this.handler()

              if (result === undefined) done()
              else if (result.then && result.then.call) result.then(done, done)
              else done()
            }
          }

          this._bind()
        },
        update (value) {
          this.handler = value
          value.unbind = () => this._unbind()
          value.bind = () => this._bind()
        },
        unbind () {
          this._unbind()
        }
      }
    },
  }

</script>