<template>
  <div>
    <!-- ======== @Region: #topbar ======== -->
    <top-bar></top-bar>
    <div class="offcanvas-wrapper">
      <router-view></router-view>
    </div>
    <!-- ======== @Region: #footer ======== -->
    <foot-bar></foot-bar>
    <!-- Modal -->
    <login-modal v-if="!login_status"></login-modal>
    <signup-modal v-if="!login_status"></signup-modal>
    <add-team-member v-if="login_status"></add-team-member>
    <project-modal></project-modal>
    <basic-modal></basic-modal>
    <premium-modal></premium-modal>
    <premiumplus-modal></premiumplus-modal>
    <similar-company v-if="login_status&&me.info.type===-1"></similar-company>
    <!-- Modal End-->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import TopBar from 'components/TopBar'
  import FootBar from 'components/FootBar'
  import SignupModal from 'modals/Signup'
  import LoginModal from 'modals/Login'
  import AddTeamMember from 'modals/AddTeamMember'
  import ProjectModal from 'views/project_pages/ProjectModal'
  import SimilarCompany from 'modals/SimilarCompany'
  import BasicModal from 'modals/BasicRedirect'
  import PremiumModal from 'modals/PremiumRedirect'
  import PremiumplusModal from 'modals/PremiumPlusRedirect'

  export default {
    name: 'RootLayout',
    components: {
      ProjectModal,
      TopBar,
      FootBar,
      LoginModal,
      SignupModal,
      AddTeamMember,
      SimilarCompany,
      BasicModal,
      PremiumModal,
      PremiumplusModal
    },
    computed: {
      ...mapGetters({
        login_status: 'login_status',
        current_project: 'current_project',
        me: 'self',
      })
    },
    watch: {
      '$intercom.ready': function ready () {
        this.$intercom.boot()
        this.$intercom.hide()
      },
    },
  }
</script>
