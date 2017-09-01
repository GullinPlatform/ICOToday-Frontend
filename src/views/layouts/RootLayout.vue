<template>
    <div>
        <!-- ======== @Region: #topbar ======== -->
        <top-bar></top-bar>
        <router-view></router-view>
        <!-- ======== @Region: #footer ======== -->
        <foot-bar></foot-bar>
        <div class="hidden-elements jpanel-menu-exclude">
            <login-modal v-if="!login_status"></login-modal>
            <signup-modal v-if="!login_status"></signup-modal>
        </div>
    </div>
</template>

<script>
import TopBar from 'components/TopBar'
import FootBar from 'components/FootBar'
import SignupModal from 'components/Signup'
import LoginModal from 'components/Login'

export default {
    name: 'RootLayout',
    components: {
        TopBar,
        FootBar,
        LoginModal,
        SignupModal
    },
    computed: {
        login_status() {
            return this.$store.getters.login_status
        }
    },
}

</script>
<style >
.dropzone-area {
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1.25;
    color: #464a4c;
    height: 150px;
    position: relative;
    border: 2px dashed #CBCBCB;
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