<template>
    <div>
    <header class="navbar">
        <div class="site-branding">
            <div class="inner">
                <!-- Site Logo-->
                <router-link :to="{name:'landing'}" class="site-logo">
                    <h1 class="text-black text-bold mt-2">ICO<span class="text-primary">Today</span></h1>
                </router-link>

            </div>
        </div>
        <!-- Main Navigation-->
        <nav class="site-menu">
            <ul>
                <li><a href="../index.html" class="hidden-sm-down"><span>Publish Your ICO</span></a></li>
                <li><router-link :to="{name:'white_paper'}"><span>White paper</span></router-link></li>
                <li><a target="_blank" href="https://trello.com/b/JxFOIC9x" class="hidden-sm-down"><span>Upcoming Releases</span></a></li>
            </ul>
        </nav>
        <!-- Toolbar-->
        <div class="toolbar">
            <div class="inner">
                <div class="tools">
                    <div class="account" v-if="login_status">
                        <img :src="me.info.avatar" class="rounded-circle">
                        <router-link v-if="me.type===0" :to="{name:'me_created'}"></router-link>
                        <router-link v-else :to="{name:'me_marked'}"></router-link>
                        <ul class="toolbar-dropdown">
                            <li>
                                <router-link :to="{name:'me_new_project'}" class="dropdown-item" v-if="me.type===0">
                                    <i class="fa fa-chevron-up" aria-hidden="true"></i>Launch New ICO
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'me_created'}" class="dropdown-item" v-if="me.type===0">
                                    <i class="fa fa-bitcoin" aria-hidden="true"></i> My ICO Projects
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'me_marked'}" class="dropdown-item">
                                    <i class="fa fa-bitcoin" aria-hidden="true"></i> Marked ICO Projects
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'me_team'}" class="dropdown-item" v-if="me.type===0">
                                    <i class="fa fa-user" aria-hidden="true"></i> My Team
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
                    <span class="ml-1 text-bold" v-if="login_status">{{self_name}}</span>
                    <button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#signup-modal"
                            v-if="!login_status">SIGN UP
                    </button>
                    <button class="btn btn-sm btn-link" data-toggle="modal" data-target="#login-modal"
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
  import SignupModal from 'components/Signup'
  import LoginModal from 'components/Login'

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
        console.log('logout-methods')
        this.$store.dispatch('logout')
      }
    }
  }

</script>
