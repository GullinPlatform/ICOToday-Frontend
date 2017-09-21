<template>
  <div>
    <!-- Begin Jumbotron -->
    <div id="home" class="jumbotron jumbotron-register">
      <div id="particles-js"></div><!-- /.particles div -->
      <div class="container center-vertically-holder">
        <div class="center-vertically">
          <div class="row">
            <div class="col-md-7">
              <h1 class="text-white text-bold mb-2">
                ICOToday
              </h1>
              <h2 class="text-white text-thin text-uppercase">
                Seamless Platform<br>
                for Launching and Investing<br>
                on Blockchain
              </h2>
            </div>
            <div class="col-md-5 float-right">
              <div class="register-form pb-0 pt-3">
                <h3 class="no-margin-top">Sign Up for our Whitelist</h3>
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
          <div class="product-card-radius fixed-height box-shadow">
            <a class="post-thumb" href="javascript:void(0)" @click="postModal(project.id)">
              <img :src="project.promote_image" alt="Logo">
              <div class="post-categories-top font-family-nav"><span class="badge badge-sm badge-default">cryptocurrency</span></div>

            </a>

            <h3 class="product-title text-bold text-left mb-0 mt-2 font-18">
              {{project.title}}
              <span class="badge badge-primary" v-if="project.rating">{{project.rating}}/100</span>
              <span class="badge badge-primary" v-else>No Score</span>
            </h3>
            <div class="text-box-short">
            <span class="text-muted">
                            {{project.description_short}}
                        </span>
            </div>
            <br>
            <span class="text-bold">
                            <i class="fa fa-clock-o"></i> {{timeCounter(project.start_datetime, project.end_datetime)}}
                        </span>
            <button class="btn btn-outline-danger btn-sm btn-block mb-0"
                    @click="markPost(project.id, true)" v-if="!inSubscribeList(project.id)">
              <span class="text-gray"><i class="fa fa-star-o"></i> SUBSCRIBE</span>
            </button>
            <button class="btn btn-outline-danger btn-sm btn-block mb-0"
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
        <div class="col-lg-2">
          <nav class="list-group">
            <a class="list-group-item-fixed">IN TREND</a>
            <a class="list-group-item-fixed" href="javascript:void(0)" @click="status='active'" :class="{active:status==='active'}">ACTIVE</a>
            <a class="list-group-item-fixed" href="javascript:void(0)" @click="status='upcoming'" :class="{active:status==='upcoming'}">UPCOMING</a>
            <a class="list-group-item-fixed" href="javascript:void(0)" @click="status='passed'" :class="{active:status==='passed'}">PASSED</a>
            <a class="list-group-item-fixed" href="javascript:void(0)" @click="status=''" :class="{active:status===''}">ALL</a>
          </nav>
        </div>
        <div class="col-lg-10">
          <div class="row">
            <div class="col-lg-4">
              <section class="widget widget-links mb-3">
                <div class="input-group form-group">
                                <span class="input-group-btn">
                                <button>
                                    <i class="icon-search"></i>
                                </button>
                                </span>
                  <input class="form-control" v-model="keyword" placeholder="Search by Keyword">
                </div>
              </section>
            </div>
            <div class="col-lg-4">
              <section class="widget widget-links mb-3">
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
            </div>
            <div class="col-lg-4">
              <section class="widget widget-links mb-3">
                <div class="input-group form-group">
                  <select class="form-control" v-model="type" required>
                    <option value="" selected>-- Choose Type --</option>
                    <option value="0">Pre-ICO</option>
                    <option value="1">ICO</option>
                  </select>
                </div>
              </section>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-lg-12">
              <a class="tag" href="javascript:void(0)" @click="category=''"
                 v-if="category">#{{category}}</a>
              <a class="tag" href="javascript:void(0)" @click="keyword=''" v-if="keyword">#{{keyword}}</a>
              <a class="tag" href="javascript:void(0)" @click="type=''" v-if="type==='0'">#Pre-ICO</a>
              <a class="tag" href="javascript:void(0)" @click="type=''" v-if="type==='1'">#ICO</a>
              <a class="tag" href="javascript:void(0)" @click="status=''" v-if="status">#{{status}}</a>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <post-list :loaded="list_loaded" :posts="posts"></post-list>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import VueIntercom from 'vue-intercom';
  import PostList from 'components/PostList'
  import _ from 'lodash'

  Vue.use(VueIntercom, { appId: 'rvgar4pm' });

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

        userId: 1,
        name: 'Landing',
        email: 'team@icotoday.io',
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
      },

      '$intercom.ready': function ready() {
      this.$intercom.boot({
        user_id: this.userId,
        name: this.name,
        email: this.email,
      });
      this.$intercom.show();
    },

    email(email) {
      this.$intercom.update({ email });
    },
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

<style lang="scss" scoped>

  .fixed-height {
    height: 440px;

  }

  .text-box-short{

    text-overflow:ellipsis;
    height:110px;
    overflow:scroll;


  }

  .box-shadow{

    transition: box-shadow .4s;

  }

  .product-card:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2);
  }
  .post-thumb{
    display: block;
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    overflow: hidden;
  }
  .post-categories{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 24px;
    padding-right: 70px;
    padding-left: 24px;
  }
  .post-categories-top{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 12px;
    padding-right: 80px;
    padding-left: 12px;
  }

  .btn-block-small{
    display: block;
    width: 55%;
    margin-top: 0px;
    margin-right: 0 !important;
    margin-bottom: 12px;
    margin-left: 0 !important;
    padding-right: 1px !important;
    padding-left: 1px !important;
  }

  .btn-outline-danger-red{
    border-color: #ff5252;
    background-color: #ff5252;
    color: #ff5252;


  }

  .btn-sm-top {
    height: 30px;
    padding: 0 18px;
    border-radius: 2px;
    font-size: 12px;
    line-height: 20px;


  .text-gray{
    color: #FFFFFF !important;
  }


  .fw-section {
    position: relative;
    width: 100%;
    background: {
      position: 50% 50%;
      repeat: no-repeat;
      size: cover;
    }

    // Overlay

    // Content
    > .container,
    > .container-fluid {
      position: relative;
      z-index: 5;
    }
  }
  .container-fluid {
    padding: {
      right: 30px;
      left: 30px;
    }

    // Full height
    .full-height { height: 100vh; }
  }

  // Equal Height Columns
  .layout-boxed-equal,
  .layout-full-equal {
    .row {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      flex: 1 1 auto;
      -webkit-flex-flow: row wrap;
      flex-flow: row wrap;
      align-content: flex-start;
      flex: 0;
      &::before { display: none; } // Safari fix
    }
  }

  // No Gap Version
  .section-no-gap {
    > .container,
    > .container-fluid {
      padding: {
        right: 0;
        right: 0;
        left: 0;
      }
      > .row {
        margin: {
          right: 0 !important;
          left: 0 !important;
        }
      }
      > .row  > [class^='col-'] {
        padding: {
          right: 0 !important;
          left: 0 !important;
        }
      }
      > .row  > [class^='col-'] > .row {
        margin: {
          right: 0 !important;
          left: 0 !important;
        }
      }
    }
  }


  // Masonry Grid
  // -----------------------------------------------------
  .masonry-grid {
    position: relative;

    // Gap Width
    .gutter-sizer { width: 30px; }

    // Items
    .grid-item {
      margin-bottom: 30px;
      .post-tile,
      .portfolio-tile { margin-bottom: 0; }
    }

    // 1 Column
    &.col-1 {
      .gutter-sizer { width: 0; }
      .grid-sizer,
      .grid-item { width: 100%; }
    }

    // 2 Columns
    &.col-2 {
      .grid-sizer,
      .grid-item { width: calc((100% / 2) - 15px); }
    }

    // 3 Columns
    &.col-3 {
      .grid-sizer,
      .grid-item { width: calc((100% / 3) - 20px); }
    }

    // 4 Columns
    &.col-4 {
      .grid-sizer,
      .grid-item { width: calc((100% / 4) - 22.5px); }
    }

    // 5 Columns
    &.col-5 {
      .grid-sizer,
      .grid-item { width: calc((100% / 5) - 24px); }
    }

    // 6 Columns
    &.col-6 {
      .grid-sizer,
      .grid-item { width: calc((100% / 6) - 25px); }
    }

    // Media Queries
    @media screen and (max-width: 1100px) {
      &.col-6,
      &.col-5,
      &.col-4 {
        .grid-sizer,
        .grid-item { width: calc((100% / 3) - 20px); }
      }
    }
    @media screen and (max-width: 820px) {
      &.col-6,
      &.col-5,
      &.col-4,
      &.col-3 {
        .grid-sizer,
        .grid-item { width: calc((100% / 2) - 15px); }
      }
    }
    @media screen and (max-width: 560px) {
      &.col-6,
      &.col-5,
      &.col-4,
      &.col-3,
      &.col-2 {
        .gutter-sizer { width: 0; }
        .grid-sizer,
        .grid-item { width: 100%; }
      }
    }

    // No Gap Version
    &.grid-no-gap {
      .gutter-sizer { width: 0; }
      .grid-item { margin-bottom: 0; }
      &.col-2 {
        .grid-sizer,
        .grid-item { width: (100% / 2); }
      }
      &.col-3 {
        .grid-sizer,
        .grid-item { width: (100% / 3); }
      }
      &.col-4 {
        .grid-sizer,
        .grid-item { width: (100% / 4); }
      }
      &.col-5 {
        .grid-sizer,
        .grid-item { width: (100% / 5); }
      }
      &.col-6 {
        .grid-sizer,
        .grid-item { width: (100% / 6); }
      }
      @media screen and (max-width: 1100px) {
        &.col-6,
        &.col-5,
        &.col-4 {
          .grid-sizer,
          .grid-item { width: (100% / 3); }
        }
      }
      @media screen and (max-width: 820px) {
        &.col-6,
        &.col-5,
        &.col-4,
        &.col-3 {
          .grid-sizer,
          .grid-item { width: (100% / 2); }
        }
      }
      @media screen and (max-width: 560px) {
        &.col-6,
        &.col-5,
        &.col-4,
        &.col-3,
        &.col-2 {
          .grid-sizer,
          .grid-item { width: 100%; }
        }
      }
    }
  }

  // Justified Grid
    .si-justified-row {
      display: -ms-flexbox;
      display: flex;
      &:first-child .si-justified-item {
        @media only screen and (min-width: 991px) {
          border-top: 0;
        }
      }
    }
    .si-justified-item {
      width: 25%;
      &:first-child {
        border-left: 0;
      }
    }
      .si-justified-item {
        width: 50%;
        &:nth-child(3) { border-left: 0; }
      }
      .si-justified-row {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        &:first-child {
          .si-justified-item {
            &:first-child { border-top: 0; }
            @media only screen and (min-width: 768px) {
              &:nth-child(2) { border-top: 0; }
            }
          }
        }
      }
    }
      .si-justified-item {
        width: 100%;
        border-left: 0;
      }

  .masonry-grid.blog-posts {
    .has-post-thumbnail .svg-bg { display: block; }
    &.col-1 .has-post-thumbnail .svg-bg { display: none; }
    &:not(.col-1) .has-post-thumbnail .post-format {
      top: auto;
      bottom: 10px;
      @media screen and (max-width: 560px) { bottom: 10px; }
      @media screen and (max-width: 360px) { bottom: 5px; }
    }
  }

  .product-card-radius{
    display: block;
    position: relative;
    width: 100%;
    padding: 18px;
    border: 1px solid #e1e7ec;
    border-radius: 7px;
    background-color: #ffffff;
  }



.font-18{
  font-size:19px;
}



  a.list-group-item-fixed:hover, a.list-group-item-fixed:focus, a.list-group-item-fixed:active,
  .list-group-item-action-fixed:hover,
  .list-group-item-action-fixed:focus,
  .list-group-item-action-fixed:active {
    background-color: #0da9ef;
    color: white;



  }
  a.list-group-item-fixed {
    padding-top: .87rem;
    padding-bottom: .87rem;
  }
  a.list-group-item-fixed, .list-group-item-action-fixed {
    transition: all 0.6s;
    color: #606975;
    font-weight: 500;
  }

  .list-group-item-fixed {
    border-color: #e1e7ec;
    background-color: #ffffff;
    text-decoration: none;
  }
  .list-group-item-fixed {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
  }
  .list-group-item-action-fixed {
    width: 100%;
    text-align: inherit;
  }

</style>
