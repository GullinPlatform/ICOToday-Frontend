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
        <edit-project v-if="login_status&&me.type==0"></edit-project>
        <update-project v-if="login_status&&me.type==0"></update-project>
        <post-modal></post-modal>
        <!-- Modal End-->
    </div>
</template>

<script>
  import TopBar from 'components/TopBar'
  import FootBar from 'components/FootBar'
  import SignupModal from 'components/Signup'
  import LoginModal from 'components/Login'
  import AddTeamMember from 'components/AddTeamMember'
  import EditProject from 'components/EditProject'
  import UpdateProject from 'components/UpdateProject'
  import PostModal from 'components/PostModal'

  export default {
    name: 'RootLayout',
    components: {
      PostModal,
      TopBar,
      FootBar,
      LoginModal,
      SignupModal,
      AddTeamMember,
      EditProject,
      UpdateProject,
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
  }
</script>
<style>
    .dropzone-area {
        display: block;
        width: 100%;
        font-size: 1rem;
        line-height: 1.25;
        color: #464a4c;
        height: 100px;
        border: 1px dashed #464a4c;
        border-radius: 22px;
    }

    .dropzone-area input {
        position: absolute;
        cursor: pointer;
        top: 0px;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    .dropzone-text {
        position: absolute;
        top: 50%;
        text-align: center;
        transform: translate(0, -50%);
        width: 100%;
    }

    .dropzone-text span {
        display: block;
        font-family: Arial, Helvetica;
        line-height: 1.9;
    }
</style>