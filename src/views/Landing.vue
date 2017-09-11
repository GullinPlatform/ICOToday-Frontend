<template>
    <div>
                      <!-- Begin Jumbotron -->
                <div id="home" class="jumbotron jumbotron-register">
                <div id="particles-js"></div><!-- /.particles div -->

                      <div class="container center-vertically-holder">
                        <div class="center-vertically ">
                            <div class="row" >
                          <div class="col-sm-7 col-lg-7 mt40-xs">
                            <h1 class="mb30 no-margin-top scaleReveal">
                               <strong>ICOToday</strong>
                            </h1>
                            <p class="bottomReveal">Seamless Platform for Launching and Investing in ICOs on Ethereum blockchain</p>
                          </div>

                          <div class="col-sm-5 col-lg-5 col-lg-offset-1 mt40-xs float-right">
                            <form role="form" id="register_form" class="register-form mb40-xs">
                                          <h3 class="no-margin-top mb20">Sign up for our WhiteList</h3>

                                          <div class="form-group">
                                              <input type="text" class="form-control" placeholder="Email Address" required="required">
                                          </div>

                                          <div class="form-group no-margin-bottom mt20">
                                              <button type="submit" class="btn btn-primary">Subscibe</button>
                                          </div>
                                      </form>
                          </div><!-- /.column -->
                  </div><!-- /.vertical center -->
                </div><!-- /.container -->
              </div>
                </div>
                <!-- End Jumbotron -->
        <!--<section class="hero-slider">-->
        <!--<div class="item">-->
        <!--<div class="container padding-top-4x">-->
        <!--<div class="row justify-content-end align-items-right">-->
        <!--<div class="col-lg-4 col-md-6 padding-bottom-2x text-md-left text-center">-->
        <!--<div class="grid-item align-items-right">-->
        <!--<div class="product-card">-->
        <!--<div class="rating-stars"><i class="icon-star filled"></i><i-->
        <!--class="icon-star filled"></i><i class="icon-star filled"></i><i-->
        <!--class="icon-star filled"></i><i class="icon-star filled"></i>-->
        <!--</div>-->
        <!--<a class="product-thumb" href="shop-single.html"><img-->
        <!--src="../../static/img/shop/products/11.jpg" alt="Product"></a>-->
        <!--<h3 class="product-title"><a href="shop-single.html">Top-Sider Fathom</a></h3>-->
        <!--<h4 class="product-price">$90.00</h4>-->
        <!--<div class="product-buttons">-->
        <!--<button class="btn btn-outline-secondary btn-sm btn-wishlist"-->
        <!--data-toggle="tooltip" title="Whishlist"><i class="icon-heart"></i>-->
        <!--</button>-->
        <!--<button class="btn btn-outline-primary btn-sm" data-toast-->
        <!--data-toast-type="success" data-toast-position="topRight"-->
        <!--data-toast-icon="icon-circle-check" data-toast-title="Product"-->
        <!--data-toast-message="successfuly added to cart!">Add to Cart-->
        <!--</button>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->

        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</section>-->

        <!-- Featured Products Carousel-->
        <section class="container padding-top-3x padding-bottom-3x">
            <h1 class="text-left mb-30">Today's Top ICOs</h1>

            <div class="row">
                <div class="col-md-3 col-sm-6"
                v-for="project in promo_posts"
                >
                    <div class="product-card"
                        >
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
                              <span><i class="fa fa-star-o"></i> Mark for me</span>
                          </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ======== @Region: #content ======== -->
        <div id="content" class="pb-6 bg-white pos-relative pos-zindex-10">
            <!-- Main content -->
            <div class="container pb-6">
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
                        <div class="card p-3">
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
                                 v-if="loaded&&project.status===1">
                                <a class="product-thumb" href="javascript:void(0)" @click="postModal(project.id)">
                                    <img :src="project.logo_image" alt="Logo">
                                </a>
                                <div class="product-info" @click="postModal(project.id)">
                                    <h3 class="product-title">
                                        {{project.title}}

                                        <span class="float-right text-bold text-info ml-2">{{project.rating}}/100</span>
                                    </h3>

                                    <h4 class="product-price">
                                        {{formatTime(project.start_datetime, project.end_datetime)}}</h4>
                                    <p> {{project.description_short}}</p>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            ICO Process
                                            <div class="progress">
                                                <div class="progress-bar bg-info" role="progressbar"
                                                     style="width: 70%; height: 5px;"
                                                     aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2 float-right">
                                            <button class="btn btn-outline-danger btn-sm float-right">
                                                <span><i class="fa fa-star-o"></i> Mark for me</span>
                                            </button>
                                        </div>
                                    </div>
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
