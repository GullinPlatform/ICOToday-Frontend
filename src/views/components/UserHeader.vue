<template>
    <!-- ======== @Region: #header ======== -->
    <div class="container">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="row bg-faded p-3">
                        <div class="col-md-2 col-sm-4 text-center">
                            <img src="/static/img/homes/code.jpg"
                                 class="rounded-circle img-padded"
                                 width="100" height="100">
                            <div class="hidden-sm-up mt-3"> </div>
                        </div>
                        <div class="col-md-10 col-sm-8">
                            <h4 class="mb-0">
                                {{username}}  <span class="text-muted text-light">{{me.info.title}}</span>
                                <span class="badge badge-primary" v-if="me.is_verified"> <i class="fa fa-check"></i> Verified</span>
                                <span class="badge badge-warning" v-else> <i class="fa fa-warning"></i> Unverified</span>
                            </h4>
                            <p class="text-muted mt-2 text-sm" v-if="me.info.team">
                                <a href="#" class="font-weight-bold text-muted">@ {{me.info.team.name}}</a>
                            </p>
                            <p class="text-muted mb-2 text-sm">
                                {{me.info.description}}
                            </p>
                            <p class="text-muted mb-2 text-sm"  v-if="has_social_media">
                                |
                                <a :href="me.info.linkedin" v-if="me.info.linkedin"><i class="fa fa-linkedin-square"></i> LinkedIn</a>
                                <span v-if="me.info.linkedin">|</span>
                                <a :href="me.info.twitter" v-if="me.info.twitter"><i class="fa fa-twitter"></i> Twitter</a>
                                <span v-if="me.info.twitter">|</span>
                                <a :href="me.info.slack" v-if="me.info.slcak"><i class="fa fa-slack"></i> Slack</a>
                                <span v-if="me.info.slack">|</span>
                                <a :href="me.info.telegram" v-if="me.info.telegram"><i class="fa fa-telegram"></i>
                                    Telegram</a>
                                <span v-if="me.info.telegram">|</span>
                            </p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'UserHeadBar',
    computed: {
      me () {
        return this.$store.getters.self
      },
      username () {
        return this.$store.getters.self_name
      },
      has_social_media () {
        return (this.me.info.linkedin || this.me.info.twitter || this.me.info.slack || this.me.info.telegram)
      }
    }
  }
</script>

