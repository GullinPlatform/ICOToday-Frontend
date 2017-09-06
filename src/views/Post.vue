<template>
    <div>
        <!-- Page Title-->
        <div class="page-title">
            <div class="container">
                <div class="column">
                    <h1>
                        {{post.title}}
                    </h1>
                </div>
                <div class="column">
                    <ul class="breadcrumbs">
                        <li>
                            <router-link :to="{name:'landing'}">Home</router-link>
                        </li>
                        <li class="separator">&nbsp;</li>
                        <li>
                            <router-link :to="{name:'landing'}">ICO Projects</router-link>
                        </li>
                        <li class="separator">&nbsp;</li>
                        <li>
                            {{post.title}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Page Content-->
        <div class="container padding-bottom-3x mb-2">
            <div class="container">
                <div class="example-modal">
                    <div class="modal">
                        <div class="modal-dialog modal-xlg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <div class="media">
                                        <img class="d-flex rounded mr-3" :src="post.logo_image" width="75" alt="Media">
                                        <div class="media-body">
                                            <h6 class="mt-0 mb-1">{{post.title}}  <span class="text-sm text-info ml-2">{{post.rating}}/100</span>

                                            </h6>
                                            <span class="d-block text-sm text-muted">
                                               {{post.description_short}}
                                            </span>
                                        </div>
                                    </div>

                                    <p class="mb-0">
                                        <button class="btn btn-outline-danger btn-sm">
                                            <span><i class="fa fa-star-o"></i> Mark for me</span>
                                        </button>
                                        <router-link :to="{name:'post', params:{id:post.id}}"
                                                     class="btn btn-outline-primary btn-sm mr-2">
                                            Go To Full Page
                                        </router-link>
                                    </p>
                                </div>
                                <div class="modal-body">
                                    <div class="row justify-content-center">
                                        <div class="col-md-8">
                                            <div class="embed-responsive embed-responsive-16by9">
                                                <iframe src="http://www.youtube.com/embed/bwj2s_5e12U"
                                                        class="embed-responsive-item"
                                                        allowfullscreen>
                                                </iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <a class="social-button shape-circle" href="#"><i class="fa fa-slack"></i></a>
                                        <a class="social-button shape-circle" href="#"><i
                                                class="socicon-twitter"></i></a>
                                        <a class="social-button shape-circle" href="#"><i class="socicon-telegram"></i></a>
                                        <a class="social-button shape-circle" href="#"><i
                                                class="socicon-medium"></i></a>
                                    </div>
                                    <div class="row justify-content-center">
                                        <a class="btn btn-outline-secondary btn-sm"><i class="fa fa-file-o"></i>
                                            White paper</a>
                                        <a class="btn btn-outline-secondary btn-sm"><i class="fa fa-globe"></i> Website</a>
                                    </div>
                                    <div class="ml-5 mr-5">
                                        <h3 class="text-left">Description</h3>
                                        <p>{{post.description_full}}</p>
                                        <h3 class="text-left">Financial</h3>
                                        <p></p>
                                        <h3 class="text-left">Team</h3>
                                        <div class="row">
                                            <div class="col-md-3 col-sm-6 mb-3 text-center"
                                                 v-for="member in current_team_members"
                                                 v-if="!member.is_advisor">
                                                <img class="img-thumbnail rounded-circle mb-2" height="100" width="100"
                                                     :src="member.avatar" alt="Team Member">
                                                <h6>{{member.first_name}} {{member.last_name}}</h6>
                                                <p class="text-muted mb-2">{{member.title}}</p>
                                                <div class="social-bar">
                                                    <a :href="member.twitter" class="social-link branding-twitter"
                                                       v-if="member.twitter">
                                                        <i class="fa fa-twitter"></i>
                                                    </a>
                                                    <a :href="member.linkedin" class="social-link branding-linkedin"
                                                       v-if="member.linkedin">
                                                        <i class="fa fa-linkedin-square"></i>
                                                    </a>
                                                    <a :href="member.telegram" class="social-link branding-linkedin"
                                                       v-if="member.telegram">
                                                        <i class="fa fa-telegram"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 class="text-left">Advisors</h3>
                                        <div class="row">
                                            <div class="col-md-3 col-sm-6 mb-3 text-center"
                                                 v-for="member in current_team_members"
                                                 v-if="member.is_advisor">
                                                <img class="img-thumbnail rounded-circle mb-2" height="100" width="100"
                                                     :src="member.avatar" alt="Team Member">
                                                <h6>{{member.first_name}} {{member.last_name}}</h6>
                                                <p class="text-muted mb-2">{{member.title}}</p>
                                                <div class="social-bar">
                                                    <a :href="member.twitter" class="social-link branding-twitter"
                                                       v-if="member.twitter">
                                                        <i class="fa fa-twitter"></i>
                                                    </a>
                                                    <a :href="member.linkedin" class="social-link branding-linkedin"
                                                       v-if="member.linkedin">
                                                        <i class="fa fa-linkedin-square"></i>
                                                    </a>
                                                    <a :href="member.telegram" class="social-link branding-linkedin"
                                                       v-if="member.telegram">
                                                        <i class="fa fa-telegram"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 class="text-left">Comments</h3>
                                        <ul class="comment mt-3 pl-3">
                                            <li class="media mb-3 pos-relative">
                                                <a href="#">
                                                    <img :src="me.info.avatar"
                                                         class="d-flex rounded-circle align-self-start mr-4" width="55">
                                                </a>
                                                <div class="media-body">
                                                    <h6 class="comment-title">Francis Burton</h6>
                                                    <p class="mb-1">
                                                        amet urna integer urna enim, sit arcu pid in nec?amet urna integer
                                                        urna enim, sit arcu pid in nec?amet urna integer urna enim, sit
                                                        arcu pid in nec?amet urna integer urna enim, sit arcu pid in nec?</p>
                                                    <p>
                                                    <span class="float-right">
                                                        <a class="reply-link" href="#">
                                                            <i class="icon-reply"></i>Reply
                                                        </a>
                                                    </span>
                                                        <i class="fa fa-calendar"></i> Sat 3rd Jun 2017
                                                    </p>
                                                    <!-- Nested reply area-->
                                                    <div class="media mt-4 mb-2 pos-relative">
                                                        <a href="#">
                                                            <img :src="me.info.avatar"
                                                                 class="d-flex rounded-circle align-self-start mr-4"
                                                                 width="55">
                                                        </a>
                                                        <div class="media-body">
                                                             <textarea rows="4" class="form-control"
                                                                       id="comment"
                                                                       placeholder="Comment"></textarea>

                                                        </div>

                                                        <button type="submit" class="ml-4 btn btn-sm btn-primary">
                                                            Reply
                                                        </button>
                                                    </div>

                                                    <!-- Nested media object -->
                                                    <div class="media mt-4 mb-2 pos-relative">
                                                        <a href="#">
                                                            <img :src="me.info.avatar"
                                                                 class="d-flex rounded-circle align-self-start mr-4"
                                                                 width="55">
                                                        </a>
                                                        <div class="media-body">
                                                            <h6 class="comment-title">Francis Burton</h6>
                                                            <p class="mb-1">
                                                                amet urna integer urna enim, sit arcu pid in nec?amet urna integer u
                                                                rna enim, sit arcu pid in nec?amet urna integer urna enim, sit arcu p
                                                                id in nec?amet urna integer urna enim, sit arcu pid in nec?</p>
                                                            <i class="fa fa-calendar"></i> Sat 3rd Jun 2017

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="row">
                                            <div class="col-md-1 mb-2">
                                                <a href="#">
                                                    <img :src="me.info.avatar"
                                                         class="d-flex rounded-circle align-self-start mr-4" width="55">
                                                </a>
                                            </div>
                                            <div class="col-md-11 mb-2">
                                                <label class="sr-only" for="comment-comment">Comment</label>
                                                <textarea rows="4" class="form-control" id="comment-comment"
                                                          placeholder="Comment"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary float-right">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4">
                        <div class=" py-lg-7 bg-grey-dark text-center overlay overlay-op-7"
                             data-bg-img="assets/img/backgrounds/ysvazfxdz_8-alvaro-serrano.jpg">
                            <h2 class="text-uppercase font-weight-bold m-0 text-white">Simple Background Overlay</h2>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card  mb-4">
                            <!-- Content -->
                            <div class="card-block p-4 pos-relative">
                                <!-- Product details -->
                                <p class="text-muted text-uppercase text-xs mb-0">
                                    <span class="text-primary">{{post.tags[0]}}</span>
                                </p>


                                <h3 class="card-title mb-2 mt-2">
                                    {{post.title}}   <a class="btn btn-primary"
                                                        v-if="post.team.id===me.info.team.id&&post.status===0">Edit</a>
                                </h3>

                                <div class="product-offer-countdown">
                                    <p class="mb-t mb-0">ICO Ends: {{post.end_datetime}}</p>
                                    <div class="countdown">
                                    </div>
                                </div>
                                <div class="pos-md-absolute pos-t pos-r mr-8 mt-3 text-md-right">

                                </div>
                                <hr class="my-3"/>
                                <span class="text-muted text-sm">
                            70%
                        </span>
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success w-70"
                                     role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                <h4 class="font-weight-bold text-primary">
                                    GOAL {{post.maximum_goal}} {{post.coin_type}}
                                </h4>
                                <hr class="my-3">
                                <button @click="mark()" class="btn btn-primary btn-sm">
                                    <i class="fa fa-star mr-2"></i> Mark for me
                                </button>
                                <a :href="post.website" class="btn btn-link">
                                    <i class="fa fa-globe text-primary ml-md-3"></i> Website
                                </a>
                                <div class="pos-md-absolute pos-t pos-r mr-4 mt-3 text-md-right">
                                    <i class="fa fa-star text-primary"></i> <i class="fa fa-star text-primary"></i> <i
                                        class="fa fa-star text-primary"></i> <i class="fa fa-star text-primary"></i> <i
                                        class="fa fa-star text-primary"></i>
                                    <p class="my-0 text-xs">10 reviews | <a href="#reviews">write review</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 mt-5">

                    <h3>
                        Project Detail
                    </h3>
                    <p> {{post.description_short}}</p>
                    <hr class="my-3">
                    <h3>
                        White Paper
                    </h3>
                    <p><a :href="post.white_paper">White Paper</a></p>
                    <hr class="my-3">
                    <h3>
                        Video
                    </h3>
                    <p class="text-center">

                    </p>
                    <hr class="my-3">
                    <h3>
                        Team
                    </h3>
                    <div class="team team-grid mt-4">
                        <div class="row" data-toggle="isotope-grid">
                            <!--Team Member -->
                            <div class="col-6 col-sm-4 col-md-3 grid-item" v-for="member in current_team_members"
                                 v-if="!member.is_advisor">
                                <div class="team-member">
                                    <a href="team-member.htm">
                                        <img :src="member.avatar" class="img-thumbnail">
                                    </a>
                                    <h5 class="name">
                                        <a href="team-member.htm">{{member.first_name}} {{member.last_name}}</a>

                                    </h5>
                                    <p class="role">{{member.title}}</p>
                                    <div class="social-media-branding social-media-branding-xs">
                                        <a :href="member.twitter" class="social-link branding-twitter"
                                           v-if="member.twitter">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                        <!--<a :href="member.slack" class="social-link branding-facebook"-->
                                        <!--v-if="member.slack">-->
                                        <!--<i class="fa fa-slack"></i>-->
                                        <!--</a>-->
                                        <a :href="member.linkedin" class="social-link branding-linkedin"
                                           v-if="member.linkedin">
                                            <i class="fa fa-linkedin-square"></i>
                                        </a>
                                        <a :href="member.telegram" class="social-link branding-linkedin"
                                           v-if="member.telegram">
                                            <i class="fa fa-telegram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-5">
                    <h3>
                        Advisors
                    </h3>
                    <div class="team team-grid mt-4">
                        <div class="row" data-toggle="isotope-grid">
                            <!--Team Advisors -->
                            <div class="col-6 col-sm-4 col-md-3 grid-item" v-for="member in current_team_members"
                                 v-if="member.is_advisor">
                                <div class="team-member">
                                    <a href="team-member.htm">
                                        <img :src="member.avatar" class="img-thumbnail">
                                    </a>
                                    <h5 class="name">
                                        <a href="team-member.htm">{{member.first_name}} {{member.last_name}}</a>
                                    </h5>
                                    <p class="role">{{member.title}}</p>
                                    <div class="social-media-branding social-media-branding-xs">
                                        <a :href="member.twitter" class="social-link branding-twitter"
                                           v-if="member.twitter">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                        <a :href="member.slack" class="social-link branding-facebook"
                                           v-if="member.slack">
                                            <i class="fa fa-slack"></i>
                                        </a>
                                        <a :href="member.linkedin" class="social-link branding-linkedin"
                                           v-if="member.linkedin">
                                            <i class="fa fa-linkedin-square"></i>
                                        </a>
                                        <a :href="member.telegram" class="social-link branding-linkedin"
                                           v-if="member.telegram">
                                            <i class="fa fa-telegram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-5">
                    <h3>
                        Comments
                    </h3>
                    <ul class="comment mt-3 pl-3">
                        <li class="media mb-3 pos-relative">
                            <a href="#">
                                <img :src="me.info.avatar"
                                     class="d-flex rounded-circle align-self-start mr-4" width="55">
                            </a>
                            <div class="media-body">
                                <h6 class="comment-title">Francis Burton</h6>

                                <p class="mb-1">
                                    amet urna integer urna enim, sit arcu pid in nec?amet urna integer
                                    urna enim, sit arcu pid in nec?amet urna integer urna enim, sit
                                    arcu pid in nec?amet urna integer urna enim, sit arcu pid in nec?</p>
                                <p>
                                    <span class="float-right">
                                        <a class="reply-link" href="#">
                                            <i class="icon-reply"></i>Reply
                                        </a>
                                    </span>
                                    <i class="fa fa-calendar"></i> Sat 3rd Jun 2017
                                </p>
                                <!-- Nested media object -->
                                <div class="media mt-4 mb-2 pos-relative">
                                    <a href="#">
                                        <img :src="me.info.avatar"
                                             class="d-flex rounded-circle align-self-start mr-4" width="55">
                                    </a>
                                    <div class="media-body">
                                        <h6 class="comment-title">Francis Burton</h6>
                                        <h5 class="mt-0 mb-2">
                                            amet urna integer urna enim, sit arcu pid in nec?
                                        </h5>
                                        <p class="mb-1">
                                            amet urna integer urna enim, sit arcu pid in nec?amet urna integer u
                                            rna enim, sit arcu pid in nec?amet urna integer urna enim, sit arcu p
                                            id in nec?amet urna integer urna enim, sit arcu pid in nec?</p>
                                        <i class="fa fa-calendar"></i> Sat 3rd Jun 2017

                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <form id="reviews-form" class="comment-form mt-3 p-3 bg-white rounded clearfix">

                    </form>
                </div>
            </div>
            <!-- /container -->
            <!--<hr class="mb-0"/>-->
        </div>
    </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'Post',
    head: {
      title () {
        return {
          inner: 'ICOToday',
          complement: this.post.title
        }
      }
    },
    components: {
      'vue-markdown': VueMarkdown
    },
    data () {
      return {
        tab_index: 0
      }
    },
    methods: {
      apply () {
        this.$store.dispatch('applyQuestion', this.$route.params.id)
      },
      mark () {
        this.$store.dispatch('markQuestion', this.$route.params.id)
      },
    },
    computed: {
      post () {
        return this.$store.getters.current_post
      },
      current_team_members () {
        return this.$store.getters.current_team_members
      },
      login_status () {
        return this.$store.getters.login_status
      },
      me () {
        return this.$store.getters.self
      },
    },
    beforeCreate () {
      this.$store.dispatch('getPost', this.$route.params.id)
        .then(() => {
          this.$store.dispatch('getTeam', this.post.team.id)
        })
        .catch(() => {

        })
    }
  }
</script>
