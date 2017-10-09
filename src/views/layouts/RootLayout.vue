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
    <project-update v-if="login_status&&me.type==0"></project-update>
    <project-modal></project-modal>
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
  import ProjectUpdate from 'modals/ProjectUpdate'
  import ProjectModal from 'views/project_pages/ProjectModal'
  import SimilarCompany from 'modals/SimilarCompany'

  export default {
    name: 'RootLayout',
    components: {
      ProjectModal,
      TopBar,
      FootBar,
      LoginModal,
      SignupModal,
      AddTeamMember,
      ProjectUpdate,
      SimilarCompany
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
    }
  }
</script>
