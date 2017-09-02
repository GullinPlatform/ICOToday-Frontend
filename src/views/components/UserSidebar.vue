<template>
    <!-- sidebar -->
    <div class="col-md-3">
        <!-- Sections Menu-->
        <div class="nav-section-menu">
            <div class="nav nav-list">

                <router-link :to="{name:'me'}" class="nav-link" v-if="me.type===0" :class="{active: $route.name==='me'}">
                    My ICO
                    <small>My ICO Projects</small>
                    <i class="fa fa-angle-right"></i>
                </router-link>

                <router-link :to="{name:'me_new_project'}" class="nav-link" v-if="me.type===0" :class="{active: $route.name==='me_new_project'}">
                    New ICO
                    <small>New ICO Application</small>
                    <i class="fa fa-angle-right"></i>
                </router-link>
                <router-link :to="{name:'me_marked'}" class="nav-link" :class="{active: $route.name==='me_marked'}">
                    Marked ICO
                    <small>Marked ICO Projects</small>
                    <i class="fa fa-angle-right"></i>
                </router-link>

                <router-link :to="{name:'me_team'}" class="nav-link" v-if="me.is_verified!==2" :class="{active: $route.name==='me_team'}">
                    My Team
                    <small>Team Information</small>
                    <i class="fa fa-angle-right"></i>
                </router-link>

                <router-link :to="{name:'me_settings'}" class="nav-link" :class="{active: $route.name==='me_settings'}">
                    Account Settings
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
