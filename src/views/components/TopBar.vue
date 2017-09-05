<template>
    <!-- Navbar-->
    <!-- Remove ".navbar-sticky" class to make navigation bar scrollable with the page.-->
    <header class="navbar">
        <div class="site-branding">
            <div class="inner">
                <!-- Site Logo-->
                <router-link :to="{name:'landing'}" class="site-logo">ICOToday</router-link>
            </div>
        </div>
        <!-- Main Navigation-->
        <nav class="site-menu">
            <ul>
                <li><a href="../index.html" class="hidden-sm-down"><span>Publish ICO</span></a></li>
                <li><a href="../shop-grid-ls.html" class="hidden-sm-down"><span>Invest</span></a></li>
                <li><a href="../shop-grid-ls.html" class="hidden-sm-down"><span>Learn</span></a></li>
            </ul>
        </nav>
        <!-- Toolbar-->
        <div class="toolbar">
            <div class="inner">
                <div class="tools">
                    <div class="account" v-if="login_status">
                        <img :src="me.info.avatar" class="rounded-circle">
                        <router-link :to="{name:'me'}"></router-link>
                        <ul class="toolbar-dropdown">
                            <li>
                                <router-link :to="{name:'me_new_project'}" class="dropdown-item" v-if="me.type===0">
                                    <i class="fa fa-plus dropdown-icon" aria-hidden="true"></i>Launch New ICO
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'me'}" class="dropdown-item" v-if="me.type===0">
                                    <i class="fa fa-bitcoin dropdown-icon" aria-hidden="true"></i>My ICO Projects
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'me_team'}" class="dropdown-item" v-if="me.type===0">
                                    <i class="fa fa-users dropdown-icon" aria-hidden="true"></i>My Team
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'me'}" class="dropdown-item" v-if="me.type===1">
                                    <i class="fa fa-bitcoin dropdown-icon" aria-hidden="true"></i>My Marked Projects
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'me_settings'}" class="dropdown-item">
                                    <i class="fa fa-gear dropdown-icon" aria-hidden="true"></i>Settings
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
