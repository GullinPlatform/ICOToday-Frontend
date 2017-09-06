<template>
    <div class="modal fade" id="post-modal" tabindex="-1" role="dialog" aria-hidden="true">
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
</template>
<script>

  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'PostModal',
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
    }
  }
</script>