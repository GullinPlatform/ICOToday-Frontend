<template>
    <!-- ======== @Region: #header ======== -->
    <div class="container">
        <div class="row bg-faded p-3 align-items-center">
            <div class="col-md-2 text-md-center">
                <img src="/static/img/homes/code.jpg" class="rounded-circle img-padded" width="100" height="100">
            </div>
            <div class="col-md-8">

                <h4 class="mb-0">
                    {{username}}  <span class="text-muted text-light">{{me.info.title}}</span>
                </h4>
                <p class="text-muted mt-2 text-sm">
                    <a href="#" class="font-weight-bold text-muted">@ {{me.info.team.name}}</a>
                </p>
                <p class="text-muted mb-2 text-sm">
                    {{me.info.description}}
                </p>
                <p class="text-muted mb-2 text-sm"
                   v-if="has_social_media">
                    |
                    <a :href="me.info.linkedin" v-if="me.info.linkedin"><i class="fa fa-linkedin-square"></i>
                        LinkedIn</a>
                    <span v-if="me.info.linkedin">|</span>
                    <a :href="me.info.twitter" v-if="me.info.twitter"><i class="fa fa-twitter"></i> Twitter</a>
                    <span v-if="me.info.twitter">|</span>
                    <a :href="me.info.slack" v-if="me.info.slcak"><i class="fa fa-slack"></i> Slack</a>
                    <span v-if="me.info.slack">|</span>
                    <a :href="me.info.telegram" v-if="me.info.telegram"><i class="fa fa-telegram"></i> Telegram</a>
                    |
                </p>

            </div>
            <div class="col-md-2 text-md-center">
                <a v-if="me.is_verified" href="javascript:void(0)" class="btn btn-primary text-uppercase font-weight-bold d-lg-block">
                    <i class="fa fa-check"></i> Verified
                </a>
                <button class="btn btn-yellow text-uppercase font-weight-bold d-lg-block" v-else >
                    <i class="fa fa-warning"></i> unverified
                </button>
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

