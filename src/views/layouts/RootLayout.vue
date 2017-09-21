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
        <!-- Modal End-->
    </div>
</template>

<script>
  import TopBar from 'components/TopBar'
  import FootBar from 'components/FootBar'
  import SignupModal from 'modals/Signup'
  import LoginModal from 'modals/Login'
  import AddTeamMember from 'modals/AddTeamMember'
  import PostEdit from 'modals/PostEdit'
  import PostUpdate from 'modals/PostUpdate'
  import PostModal from 'modals/PostModal'

  import Vue from 'vue';
  import VueIntercom from 'vue-intercom';
  Vue.use(VueIntercom, { appId: 'rvgar4pm' });

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
    },
    data () {
      return {
        userId: 1,
        name: 'UserGuide',
        email: 'team@icotoday.io',
      }
    },
    computed: {
      login_status () {
        return this.$store.getters.login_status
      },
      current_post () {
        return this.$store.getters.current_post
      },
      me() {
        return this.$store.getters.self
      },
    },

    watch: {
    '$intercom.ready': function ready() {
      this.$intercom.boot({
        user_id: this.userId,
        name: this.name,
        email: this.email,
      });
      this.$intercom.hide();
    },
    email(email) {
      this.$intercom.update({ email });
    },
  }
  }
</script>
