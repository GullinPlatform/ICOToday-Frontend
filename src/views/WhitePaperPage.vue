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

        email: '',

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
      },
      formatTime (start, end) {
        /* global moment:true */
        // Haven't start
        if (moment().diff(start, 'minutes') < 0) {
          return 'Start: ' + moment(start).format('MM/DD, hh:mm')
        } else {
          return 'End: ' + moment(end).format('MM/DD, hh:mm')
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
        this.$store.dispatch('whiteListEmail', this.email)
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
