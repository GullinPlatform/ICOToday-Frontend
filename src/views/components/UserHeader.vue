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
                <p class="text-muted mb-2 text-sm">
                    <a href="#" class="font-weight-bold text-muted">@ {{me.info.team.name}}</a>
                </p>
                <p class="text-muted mb-2 text-sm">
                    <span class="d-block d-md-inline">
                        <i class="fa fa-map-marker"></i> Europe Based</span>
                    <span class="d-block d-md-inline">
                        <i class="fa fa-money ml-md-3"></i> $70USD/hour</span>
                    <span class="d-block d-md-inline">
                        <i class="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                </p>
            </div>
            <div class="col-md-2 text-md-center">

                <a href="#" class="btn btn-yellow text-uppercase font-weight-bold d-lg-block">
                    <i class="fa fa-check"></i> Verified</a>
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
    }
  }
</script>

