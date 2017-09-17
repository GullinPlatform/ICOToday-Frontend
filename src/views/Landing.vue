<template>
    <div>
        <!-- Begin Jumbotron -->
        <div id="home" class="jumbotron jumbotron-register">
            <div id="particles-js"></div><!-- /.particles div -->
            <div class="container center-vertically-holder">
                <div class="center-vertically">
                    <div class="row">
                        <div class="col-md-7 mt40-xs">
                            <h1 class="text-white">
                                <strong>ICOToday</strong>
                            </h1>
                            <h4 class="text-white">
                                Seamless Platform for Launching and Investing in ICOs on Ethereum Blockchain
                            </h4>
                            <a target="_blank"
                               href="https://s3.us-east-2.amazonaws.com/icotoday/ICOToday+White+paper.pdf">
                                Read the White Paper
                            </a>
                        </div>
                        <div class="col-md-5 float-right">
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
        <section class="container pt-5 pb-5">
            <h1 class="text-left">Today's Top ICOs</h1>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6"
                     v-if="promotion_loaded"
                     v-for="project in promo_posts">
                    <div class="product-card">
                        <a class="product-thumb" href="javascript:void(0)" @click="postModal(project.id)">
                            <img :src="project.promote_image" alt="Logo">
                        </a>
                        <h3 class="product-title text-bold text-left mb-0 mt-2">
                            {{project.title}}
                            <span class="badge badge-primary" v-if="project.rating">{{project.rating}}/100</span>
                            <span class="badge badge-primary" v-else>No Score</span>
                        </h3>
                        <span class="text-muted">
                            {{project.description_short}}
                        </span>
                        <br>
                        <span class="text-bold">
                            <i class="fa fa-clock-o"></i> {{timeCounter(project.start_datetime, project.end_datetime)}}
                        </span>

                        <button class="btn btn-outline-danger btn-sm btn-block mb-0"
                                @click="markPost(project.id, true)" v-if="!inSubscribeList(project.id)">
                            <span><i class="fa fa-star-o"></i> SUBSCRIBE</span>
                        </button>
                        <button class="btn btn-danger btn-sm btn-block mb-0"
                                @click="markPost(project.id, false)" v-else>
                            <span><i class="fa fa-check"></i> SUBSCRIBED</span>
                        </button>
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
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" @click="status='active'" :class="{active:status==='active'}">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" @click="status='upcoming'" :class="{active:status==='upcoming'}">Upcoming</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" @click="status='passed'" :class="{active:status==='passed'}">Passed</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" @click="status=''" :class="{active:status===''}">All</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-3">
                    <div class="card p-3 mb-3">
                        <section class="widget widget-links mb-3">
                            <h3 class="widget-title">Search</h3>
                            <div class="input-group form-group">
                                <span class="input-group-btn">
                                <button>
                                    <i class="icon-search"></i>
                                </button>
                                </span>
                                <input class="form-control" v-model="keyword" placeholder="Search by Keyword">
                            </div>
                        </section>
                        <section class="widget widget-links mb-3">
                            <h3 class="widget-title">Category </h3>
                            <div class="input-group form-group">
                                <select class="form-control" v-model="category" required>
                                    <option value="" selected>-- Choose Category --</option>
                                    <option value="Platform">Platform</option>
                                    <option value="Cryptocurrency">Cryptocurrency</option>
                                    <option value="Businessservices">Businessservices</option>
                                    <option value="Internet">Internet</option>
                                    <option value="Investment">Investment</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Banking">Banking</option>
                                    <option value="Software">Software</option>
                                    <option value="Realestate">Realestate</option>
                                    <option value="Casino&Gambling">Casino&Gambling</option>
                                    <option value="Communication">Communication</option>
                                    <option value="Tourism">Tourism</option>
                                    <option value="Media">Media</option>
                                    <option value="Health">Health</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Infrastructure">Infrastructure</option>
                                    <option value="Energy">Energy</option>
                                    <option value="Charity">Charity</option>
                                    <option value="Education">Education</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Other">Other</option>
                                </select>

                            </div>
                        </section>
                        <section class="widget widget-links mb-3">
                            <h3 class="widget-title">Type </h3>
                            <div class="input-group form-group">
                                <select class="form-control" v-model="type" required>
                                    <option value="" selected>-- Choose Type --</option>
                                    <option value="0">Pre-ICO</option>
                                    <option value="1">ICO</option>
                                </select>
                            </div>
                        </section>
                        <section class="widget widget-tags mb-3">
                            <hr class="mb-3">
                            <a class="tag" href="javascript:void(0)" @click="category=''"
                               v-if="category">#{{category}}</a>
                            <a class="tag" href="javascript:void(0)" @click="keyword=''" v-if="keyword">#{{keyword}}</a>
                            <a class="tag" href="javascript:void(0)" @click="type=''" v-if="type==='0'">#Pre-ICO</a>
                            <a class="tag" href="javascript:void(0)" @click="type=''" v-if="type==='1'">#ICO</a>
                            <a class="tag" href="javascript:void(0)" @click="status=''" v-if="status">#{{status}}</a>
                        </section>
                    </div>
                </div>

                <div class="col-lg-9">
                    <post-list :loaded="list_loaded" :posts="posts"></post-list>
                    <!-- Call to action -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import PostList from 'components/PostList'
  import _ from 'lodash'

  export default {
    name: 'Landing',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Find Your Next ICO',
      }
    },
    components: {
      PostList
    },
    data () {
      return {
        // loading track
        list_loaded: false,
        promotion_loaded: false,

        // for whitelist register
        email: '',

        // For auto reload
        page: 1,

        // Search
        status: 'active',
        keyword: '',
        category: '',
        type: '',
      }
    },
    methods: {
      loadMore () {
        this.page += 1
        const formData = {
          page: this.page,
          status: this.status,
          keyword: this.keyword,
          category: this.category,
        }
        this.$store.dispatch('searchPostsByPage', formData)
      },
      search: _.debounce(
        function () {
          this.list_loaded = false
          const formData = {
            page: this.page,
            status: this.status,
            keyword: this.keyword,
            category: this.category,
          }
          this.$store.dispatch('searchPosts', formData)
            .then(() => {
              this.list_loaded = true
            })
        }, 500),

      // For promotion list
      markPost (id, mark) {
        if (!this.login_status) {
          $('#signup-modal').modal('show')
          return
        }
        this.$store.dispatch('markPost', id)
          .then(() => {
            if (mark) {
              this.$store.dispatch('toastr', {
                type: 'success',
                title: 'Success',
                message: 'The selected ICO is added to your subscription list, you\'ll receive free updates from now on'
              })
            } else {
              this.$store.dispatch('toastr', {
                type: 'success',
                title: 'Success',
                message: 'The selected ICO is removed from your subscription list, you\'ll no longer receive updates from this project'
              })
            }
          })
      },
      inSubscribeList (id) {
        for (let p of this.self_marked_posts) {
          if (id === p.id)
            return true
        }
        return false
      },
      postModal (id) {
        /* global $:true */
        this.$store.dispatch('getPost', id)
          .then(() => {
            $('#post-modal').modal('show')
          })
      },

      // Until
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

      // white list submit
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
      self_marked_posts () {
        return this.$store.getters.self_marked_posts
      },
      me () {
        return this.$store.getters.self
      }
    },
    beforeMount () {
      this.search()
      this.$store.dispatch('listPromoPosts')
        .then(() => {
          this.promotion_loaded = true
        })

      this.$store.dispatch('getSelfMarkedPost')
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
    watch: {
      keyword () {
        this.search()
      },
      category () {
        this.search()
      },
      type () {
        this.search()
      },
      status () {
        this.search()
      },
      page () {
        this.loadMore()
      }
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
