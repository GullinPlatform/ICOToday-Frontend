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
    <post-edit v-if="login_status&&me.type==0"></post-edit>
    <post-update v-if="login_status&&me.type==0"></post-update>
    <post-modal></post-modal>
    <similar-companies v-if="me.info.type===-1"></similar-companies>
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
  import PostEdit from 'modals/PostEdit'
  import PostUpdate from 'modals/PostUpdate'
  import PostModal from 'modals/PostModal'
  import SimilarCompanies from 'modals/SimilarCompanies'

  export default {
    name: 'RootLayout',
    components: {
      PostModal,
      TopBar,
      FootBar,
      LoginModal,
      SignupModal,
      AddTeamMember,
      PostEdit,
      PostUpdate,
      SimilarCompanies
    },
    data () {
      return {
        userId: 1,
        name: 'UserGuide',
        email: 'team@icotoday.io',
      }
    },
    computed: {
      ...mapGetters({
        login_status: 'login_status',
        current_post: 'current_post',
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
