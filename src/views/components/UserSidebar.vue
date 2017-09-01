<template>
    <!-- sidebar -->
    <div class="col-md-3">
        <!-- Sections Menu-->
        <div class="nav-section-menu">
            <div class="nav nav-list">
                <router-link :to="{name:'me'}" class="nav-link" v-if="me.type===1" :class="{active: $route.name==='me'}">
                    我参与的项目
                    <small>My Projects</small>
                    <i class="fa fa-angle-right"></i>
                </router-link>
    
                <router-link :to="{name:'me'}" class="nav-link" v-if="me.type===0" :class="{active: $route.name==='me'}">
                    我提出的项目
                    <small>My Projects</small>
                    <i class="fa fa-angle-right"></i>
                </router-link>
    
                <router-link :to="{name:'me_new_question'}" class="nav-link" v-if="me.type===0" :class="{active: $route.name==='me_new_question'}">
                    新的项目
                    <small>My Projects</small>
                    <i class="fa fa-angle-right"></i>
                </router-link>
                <router-link :to="{name:'me_marked'}" class="nav-link" :class="{active: $route.name==='me_marked'}">
                    我关注的项目
                    <small>Marked Projects</small>
                    <i class="fa fa-angle-right"></i>
                </router-link>
    
                <router-link :to="{name:'me_verify'}" class="nav-link" v-if="me.is_verified!==2" :class="{active: $route.name==='me_verify'}">
                    验证进度
                    <small>Verification Process</small>
                    <i class="fa fa-angle-right"></i>
                </router-link>
    
                <router-link :to="{name:'me_settings'}" class="nav-link" :class="{active: $route.name==='me_settings'}">
                    账号设置
                    <small>Account Settings</small>
                    <i class="fa fa-angle-right"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserSidebar',
    computed: {
        me() {
            return this.$store.getters.self
        }
    }
}
</script>
