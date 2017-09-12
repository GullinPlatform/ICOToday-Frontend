<template>
    <div>
        <!-- Begin Jumbotron -->
        <div id="home" class="jumbotron jumbotron-register">
            <div id="particles-js"></div><!-- /.particles div -->
            <div class="container center-vertically-holder">
                <div class="center-vertically ">
                    <div class="row">
                        <div class="col-sm-7 col-lg-7 mt40-xs">
                            <h1 class="text-white">
                                <strong>ICOToday</strong>
                            </h1>
                            <h4 class="text-white">
                                Seamless Platform for Launching and Investing in ICOs on Ethereum Blockchain
                            </h4>
                        </div>

                        <div class="col-sm-5 float-right">
                            <div class="register-form pb-0 pt-3">
                                <h3 class="no-margin-top">Sign up for our WhiteList</h3>
                                <div class="row">
                                    <div class="form-group col-sm-12 mb-3">
                                        <input class="form-control" placeholder="Email Address" v-model="email"
                                               @keydown.enter="whiteListSubmit($event)">
                                    </div>
                                    <div class="form-group col-sm-4 mb-2">
                                        <button class="btn btn-primary mt-0"
                                                @click="whiteListSubmit($event)">Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Featured Products Carousel-->
        <section class="container padding-top-3x padding-bottom-3x">
            <h1 class="text-left mb-30">Today's Top ICOs</h1>

            <div class="row">
                <div class="col-md-3 col-sm-6"
                     v-for="project in promo_posts">
                    <div class="product-card">
                        <a class="product-thumb" href="javascript:void(0)" @click="postModal(project.id)">
                            <img :src="project.logo_image" alt="Logo">
                        </a>
                        <h3 class="product-price">
                            {{project.title}}
                        </h3>
                        <h4 class="product-title">
                            {{project.description_short}}
                        </h4>
                        <div class="product-buttons">
                            <button class="btn btn-outline-danger btn-sm ">
                                <span><i class="fa fa-star-o"></i> SUBSCRIBE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main content -->
        <div class="container pb-6">
            <h1 class="text-left mb-30">ICO Projects</h1>
            <div class="row">
                <!-- Main content -->
                <div class="col-lg-12">
                    <ul class="nav nav-tabs md-4" role="tablist">
                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" role="tab"
                                                aria-expanded="true">Active</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" role="tab" aria-expanded="false">Upcoming</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" role="tab" aria-expanded="false">Passed</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-3">
                    <div class="card p-3 mb-3">
                        <section class="widget widget-links">
                            <h3 class="widget-title">Search Widget</h3>
                            <form class="input-group form-group" method="get"><span class="input-group-btn">
                                <button type="submit"><i class="icon-search"></i></button></span>
                                <input class="form-control" type="search" placeholder="Search site">
                            </form>
                        </section>
                        <section class="widget widget-categories">
                            <h3 class="widget-title">Price Range Widget</h3>
                            <form class="price-range-slider" method="post" data-start-min="250" data-start-max="650"
                                  data-min="0" data-max="1000" data-step="1">
                                <div class="ui-range-slider noUi-target noUi-ltr noUi-horizontal noUi-background">

                                </div>
                                <footer class="ui-range-slider-footer">
                                    <div class="column">
                                        <button class="btn btn-outline-primary btn-sm" type="submit">Filter</button>
                                    </div>
                                    <div class="column">
                                        <div class="ui-range-values">
                                            <div class="ui-range-value-min">$<span>250</span>
                                                <input type="hidden" value="250">
                                            </div>&nbsp;-&nbsp;
                                            <div class="ui-range-value-max">$<span>650</span>
                                                <input type="hidden" value="650">
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </form>
                        </section>
                        <section class="widget widget-tags">
                            <h3 class="widget-title">Tags Widget</h3><a class="tag" href="#">#design</a><a
                                class="tag" href="#">#fashion</a><a class="tag" href="#">#travelling</a><span
                                class="tag active">#active tag</span><a class="tag" href="#">#shopping</a>
                        </section>
                    </div>
                </div>

                <div class="col-lg-9">
                    <div v-if="loaded">
                        <div class="product-card product-list"
                             v-for="project in posts"
                             v-if="loaded&&project.status===1"
                             @mouseover="mark_show=project.id" @mouseleave="mark_show=false">
                            <a class="product-thumb" href="javascript:void(0)" @click="postModal(project.id)">
                                <img :src="project.logo_image" alt="Logo">
                            </a>
                            <div class="product-info pt-2 pb-2 active" @click="postModal(project.id)">
                                <h3 class="product-title">
                                    {{project.title}}    <span
                                        class="text-muted text-sm"> {{project.description_short}}</span>
                                    <span class="float-right text-bold text-success ml-2">{{project.rating}}/100</span>
                                </h3>

                                <div class="row">
                                    <div class="col-sm-3">
                                        Type
                                        <h4 class="product-price">
                                            Pre-ICO
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
                                            1200 / 4000
                                        </h4>
                                    </div>
                                    <div class="col-sm-3">
                                        Equity On Offer
                                        <h4 class="product-price">
                                            50%
                                        </h4>
                                    </div>
                                </div>
                                <span class="badge badge-sm badge-default">Real estate
                               </span>
                                <span class="badge badge-sm badge-outline-danger float-right" v-show="mark_show===project.id"><i class="fa fa-star-o"></i> SUBSCRIBE
                               </span>
                            </div>
                        </div>
                    </div>
                    <!-- Call to action -->
                    <!--<div v-scroll-at="loadMore"></div>-->
                    <div class="row">
                        <div class="col-md-12 text-md-center">
                            <a class="btn btn-primary btn-md btn-rounded text-white">
                                + More
                            </a>
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

        mark_show: false,

        email: '',

        page: 1
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
      whiteListSubmit (e) {
        e.preventDefault()
        if (!this.login_status) {
          this.$store.dispatch('whiteListEmail', this.email)
        }
        else {
          this.$store.dispatch('toastr', {
            type: 'success',
            title: 'Success',
            message: 'By being one of the first users to register, you were already added to our white list!'
          })
        }
      },

      mouseOver: function () {
        this.mark_show = !this.active
      }
    },
    computed: {
      posts () {
        return this.$store.getters.posts
      },
      promo_posts () {
        return this.$store.getters.promo_posts
      },
      login_status () {
        return this.$store.getters.login_status
      },
      me () {
        return this.$store.getters.self
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
      /* global particlesJS:true */
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 100,
            'density': {
              'enable': true,
              'value_area': 800
            }
          },
          'color': {
            'value': '#ffffff'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 5
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 3,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 40,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 150,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 1
          },
          'move': {
            'enable': true,
            'speed': 6,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'grab'
            },
            'onclick': {
              'enable': true,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 140,
              'line_linked': {
                'opacity': 1
              }
            },
            'bubble': {
              'distance': 400,
              'size': 40,
              'duration': 2,
              'opacity': 8,
              'speed': 3
            },
            'repulse': {
              'distance': 200,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
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
