<template>
    <!-- ======== @Region: #content ======== -->
    <div id="content" class="pb-lg-0">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class=" py-lg-7 bg-grey-dark text-center overlay overlay-op-7"
                         data-bg-img="assets/img/backgrounds/ysvazfxdz_8-alvaro-serrano.jpg">
                        <h2 class="text-uppercase font-weight-bold m-0 text-white">Simple Background Overlay</h2>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card  mb-4">
                        <!-- Ribbon -->
                        <div class="card-ribbon card-ribbon-top card-ribbon-right bg-green text-white">Verified</div>
                        <!-- Content -->
                        <div class="card-block p-4 pos-relative">
                            <!-- Product details -->
                            <p class="text-muted text-uppercase text-xs mb-0">
                                <span class="text-primary">{{post.tags[0]}}</span></p>
                            <h3 class="card-title mb-2 mt-2">
                                {{post.title}}
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
                            <p class="text-muted text-xs d-inline hidden-md-down"></p>
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
                    <iframe src="http://www.youtube.com/embed/bwj2s_5e12U"
                            frameborder="0"
                            allowfullscreen
                            style="width: 70%; height: 400px;">

                    </iframe>
                </p>
                <hr class="my-3">
                <h3>
                    Team
                </h3>
                <div class="team team-grid mt-4">
                    <div class="row" data-toggle="isotope-grid">
                        <!--Team Member -->
                        <div class="col-6 col-sm-4 col-md-3 grid-item" v-for="member in current_team_members"  v-if="!member.is_advisor">
                            <div class="team-member">
                                <a href="team-member.htm">
                                    <img :src="member.avatar" class="img-thumbnail">
                                </a>
                                <h5 class="name">
                                    <a href="team-member.htm" >{{member.first_name}} {{member.last_name}}</a>

                                </h5>
                                <p class="role">{{member.title}}</p>
                                <div class="social-media-branding social-media-branding-xs">
                                    <a :href="member.twitter" class="social-link branding-twitter" v-if="member.twitter">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a :href="member.slack" class="social-link branding-facebook" v-if="member.slack">
                                        <i class="fa fa-slack"></i>
                                    </a>
                                    <a  :href="member.linkedin" class="social-link branding-linkedin"  v-if="member.linkedin">
                                        <i class="fa fa-linkedin-square"></i>
                                    </a>
                                    <a :href="member.telegram" class="social-link branding-linkedin"v-if="member.telegram">
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
                        <div class="col-6 col-sm-4 col-md-3 grid-item" v-for="member in current_team_members"  v-if="member.is_advisor">
                            <div class="team-member">
                                <a href="team-member.htm" >
                                    <img :src="member.avatar" class="img-thumbnail">
                                </a>
                                <h5 class="name">
                                    <a href="team-member.htm" >{{member.first_name}} {{member.last_name}}</a>
                                </h5>
                                <p class="role">{{member.title}}</p>
                                <div class="social-media-branding social-media-branding-xs">
                                    <a :href="member.twitter" class="social-link branding-twitter" v-if="member.twitter">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a :href="member.slack" class="social-link branding-facebook" v-if="member.slack">
                                        <i class="fa fa-slack"></i>
                                    </a>
                                    <a  :href="member.linkedin" class="social-link branding-linkedin"  v-if="member.linkedin">
                                        <i class="fa fa-linkedin-square"></i>
                                    </a>
                                    <a :href="member.telegram" class="social-link branding-linkedin"v-if="member.telegram">
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
                <ul class="comments mt-3 list-unstyled">
                    <li class="media mb-3 pos-relative">
                        <a href="#">
                            <img src="assets/img/team/obama.jpg" alt="Picture of Tom"
                                 class="d-flex mr-3 img-thumbnail img-fluid">
                        </a>
                        <div class="media-body">
                            <ul class="list-inline blog-meta text-muted">
                                <li class="list-inline-item"><i class="fa fa-calendar"></i> Sat 3rd Jun 2017</li>
                                <li class="list-inline-item"><i class="fa fa-user"></i> <a href="#">Dave</a></li>
                            </ul>
                            <h5 class="mt-0 mb-2">
                                amet urna integer urna enim, sit arcu pid in nec?
                            </h5>
                            <p class="mb-1">
                                amet urna integer urna enim, sit arcu pid in nec?amet urna integer urna enim, sit arcu pid in nec?amet urna integer urna enim, sit arcu pid in nec?amet urna integer urna enim, sit arcu pid in nec?</p>
                            <!-- Nested media object -->
                            <div class="media mt-4 mb-2 pos-relative">
                                <a href="#">
                                    <img src="assets/img/team/obama.jpg" alt="Picture of Dave"
                                         class="d-flex mr-3 img-thumbnail img-fluid">
                                </a>
                                <div class="media-body">
                                    <ul class="list-inline blog-meta text-muted">
                                        <li class="list-inline-item"><i class="fa fa-calendar"></i> Sat 3rd Jun 2017
                                        </li>
                                        <li class="list-inline-item"><i class="fa fa-user"></i> <a href="#">Dave</a>
                                        </li>
                                    </ul>
                                    <h5 class="mt-0 mb-2">
                                        amet urna integer urna enim, sit arcu pid in nec?
                                    </h5>
                                    <p class="mb-1">
                                        amet urna integer urna enim, sit arcu pid in nec?amet urna integer urna enim, sit arcu pid in nec?amet urna integer urna enim, sit arcu pid in nec?amet urna integer urna enim, sit arcu pid in nec?</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="media mb-3 pos-relative">
                        <a href="#">
                            <img src="assets/img/team/steve.jpg" alt="Picture of Jo"
                                 class="d-flex mr-3 img-thumbnail img-fluid">
                        </a>
                        <div class="media-body">
                            <ul class="list-inline blog-meta text-muted">
                                <li class="list-inline-item"><i class="fa fa-calendar"></i> Sat 27th May 2017</li>
                                <li class="list-inline-item"><i class="fa fa-user"></i> <a href="#">Dave</a></li>
                            </ul>
                            <h5 class="mt-0 mb-2">
                                a nec in sed hac ultrices cursus
                            </h5>
                            <p class="mb-1">
                                a nec in sed hac ultrices cursusa nec in sed hac ultrices cursusa nec in sed hac ultrices cursusa nec in sed hac ultrices cursus</p>
                        </div>
                    </li>
                    <li class="media mb-3 pos-relative">
                        <a href="#">
                            <img src="assets/img/team/robert.jpg" alt="Picture of Alex"
                                 class="d-flex mr-3 img-thumbnail img-fluid">
                        </a>
                        <div class="media-body">
                            <ul class="list-inline blog-meta text-muted">
                                <li class="list-inline-item"><i class="fa fa-calendar"></i> Sun 21st May 2017</li>
                                <li class="list-inline-item"><i class="fa fa-user"></i> <a href="#">Dave</a></li>
                            </ul>
                            <h5 class="mt-0 mb-2">
                                Odio, nunc platea mattis, mid et
                            </h5>
                            <p class="mb-1">
                                Odio, nunc platea mattis, mid etOdio, nunc platea mattis, mid etOdio, nunc platea mattis, mid etOdio, nunc platea mattis, mid et</p>
                        </div>
                    </li>
                    <li class="media mb-3 pos-relative">
                        <a href="#">
                            <img src="assets/img/team/robert.jpg" alt="Picture of Erin"
                                 class="d-flex mr-3 img-thumbnail img-fluid">
                        </a>
                        <div class="media-body">
                            <ul class="list-inline blog-meta text-muted">
                                <li class="list-inline-item"><i class="fa fa-calendar"></i> Fri 19th May 2017</li>
                                <li class="list-inline-item"><i class="fa fa-user"></i> <a href="#">Joe</a></li>
                            </ul>
                            <h5 class="mt-0 mb-2">
                                Porta risus porttitor facilisis sit dapibus
                            </h5>
                            <p class="mb-1">
                                Porta risus porttitor facilisis sit dapibusPorta risus porttitor facilisis sit dapibusPorta risus porttitor facilisis sit dapibusPorta risus porttitor facilisis sit dapibus</p>
                        </div>
                    </li>
                    <li class="media mb-3 pos-relative">
                        <a href="#">
                            <img src="assets/img/team/adele.jpg" alt="Picture of Jo"
                                 class="d-flex mr-3 img-thumbnail img-fluid">
                        </a>
                        <div class="media-body">
                            <ul class="list-inline blog-meta text-muted">
                                <li class="list-inline-item"><i class="fa fa-calendar"></i> Mon 8th May 2017</li>
                                <li class="list-inline-item"><i class="fa fa-user"></i> <a href="#">Jo</a></li>
                            </ul>
                            <h5 class="mt-0 mb-2">
                                Enim augue elit adipiscing placerat natoque
                            </h5>
                            <p class="mb-1">
                                Enim augue elit adipiscing placerat natoqueEnim augue elit adipiscing placerat natoqueEnim augue elit adipiscing placerat natoqueEnim augue elit adipiscing placerat natoque</p>
                        </div>
                    </li>
                </ul>
                <form id="reviews-form" class="comment-form mt-3 p-3 bg-white rounded clearfix">
                    <div class="row">
                        <div class="col-md-1 mb-2">
                            <a href="#">
                                <img src="assets/img/team/adele.jpg" alt="Picture of Jo"
                                     class="d-flex mr-3 img-thumbnail img-fluid">
                            </a>
                        </div>
                        <div class="col-md-11 mb-2">
                            <label class="sr-only" for="comment-comment">Comment</label>
                            <textarea rows="4" class="form-control" id="comment-comment"
                                      placeholder="Comment"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary float-right">Submit</button>
                </form>
            </div>
        </div>
        <!-- /container -->
        <!--<hr class="mb-0"/>-->
    </div>
</template>

<script>

  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'Post',
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
      }
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
