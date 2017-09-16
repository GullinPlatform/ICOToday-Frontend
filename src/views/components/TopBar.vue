<template>
    <div>
        <header class="navbar">
            <div class="site-branding">
                <div class="inner">
                    <!-- Site Logo-->
                    <router-link :to="{name:'landing'}" >
                        <img src="../../../static/img/logo/icotoday.png" width="180" class="m-3 ml-4"/>
                    </router-link>
                </div>
            </div>
            <!-- Main Navigation-->
            <nav class="site-menu">
                <ul>
                    <li>
                        <a href="javascript:void(0)" data-toggle="modal" data-target="#signup-modal" v-if="!login_status" class="hidden-sm-down">
                            <span>Publish Your ICO</span>
                        </a>
                        <router-link :to="{name:'me_new_project'}" v-if="login_status&&me.type===0" class="hidden-sm-down">
                            <span>Publish Your ICO</span>
                        </router-link>
                        <router-link :to="{name:'me_expert_apply'}" v-if="login_status&&me.type===1" class="hidden-sm-down">
                            <span>Apply to be an Expert</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'tokensale'}" class="hidden-sm-down">
                            <span>Token Sale</span>
                        </router-link>
                    </li>
                    <li>
                        <a target="_blank" href="https://trello.com/b/JxFOIC9x" class="hidden-sm-down">
                            <span>Upcoming Releases</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- Toolbar-->
            <div class="toolbar">
                <div class="inner">
                    <div class="tools">
                        <div class="account" v-if="login_status">
                            <img :src="me.info.avatar" class="rounded-circle">
                            <a href="javascript:void(0)"></a>
                            <ul class="toolbar-dropdown">
                                <li>
                                    <router-link :to="{name:'me_new_project'}" class="dropdown-item" v-if="me.type===0">
                                        <i class="fa fa-chevron-up" aria-hidden="true"></i>Submit New ICO
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'me_created'}" class="dropdown-item" v-if="me.type===0">
                                        <i class="fa fa-bitcoin" aria-hidden="true"></i> My ICO Projects
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'me_marked'}" class="dropdown-item">
                                        <i class="fa fa-bitcoin" aria-hidden="true"></i> Subscribed ICOs
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'me_team'}" class="dropdown-item" v-if="me.type===0">
                                        <i class="fa fa-user" aria-hidden="true"></i> My Team
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'me_expert_apply'}" class="dropdown-item" v-if="me.type===1">
                                        <i class="fa fa-id-badge" aria-hidden="true"></i> Apply to be an Expert
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'me_settings'}" class="dropdown-item">
                                        <i class="fa fa-gear" aria-hidden="true"></i>Account Settings
                                    </router-link>
                                </li>
                                <li class="sub-menu-separator"></li>
                                <li>
                                    <a href="" @click="logout()" class="dropdown-item">
                                        <i class="fa fa-sign-out dropdown-icon" aria-hidden="true"></i> Logout</a>
                                </li>
                            </ul>
                        </div>
                        <span class="ml-1 text-bold hidden-sm-down" v-if="login_status">{{self_name}}</span>
                        <button class="btn btn-sm btn-primary pl-3 pr-3" data-toggle="modal" data-target="#signup-modal"
                                v-if="!login_status">SIGN UP
                        </button>
                        <button class="btn btn-sm btn-link p-0 hidden-sm-down" data-toggle="modal" data-target="#login-modal"
                                v-if="!login_status">LOG IN
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <div class="alert alert-warning alert-dismissible fade show text-center" v-if="login_status && !me.is_verified">
            <span class="alert-close" data-dismiss="alert"></span>
            <i class="icon-bell"></i>&nbsp;&nbsp;<strong>Account Unverified:</strong>
            Please verify your account to have fully access to ICOToday's great features.
        </div>
    </div>
</template>
<script>
  import SignupModal from 'modals/Signup'
  import LoginModal from 'modals/Login'

  export default {
    name: 'Header',
    components: {
      LoginModal,
      SignupModal
    },
    computed: {
      me () {
        return this.$store.getters.self
      },
      self_name () {
        return this.$store.getters.self_name
      },
      login_status () {
        return this.$store.getters.login_status
      },
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
      }
    }
  }

</script>
