<template>
    <div id="header">
        <div data-toggle="sticky">
            <!--Header & Branding region-->
            <div class="header  py-1 py-lg-0">
                <div class="header-inner container">
                    <!--branding/logo -->
                    <div class="header-brand flex-first">
                        <router-link :to="{ name: 'landing'}" class="header-brand-text header-brand-text-sm">
                            <h1>
                                <span>ICO</span>Today
                            </h1>
                        </router-link>
                        <div class="header-divider hidden-md-down"></div>
                        <div class="header-slogan hidden-md-down m-t">Find your next ICO</div>
                    </div>
                    <!-- other header content -->
                    <div class="flex-last navbar navbar-toggleable-md">
                        <!--everything within this div is collapsed on mobile-->
                        <div class="navbar-main">
                            <!--main navigation-->
                            <ul class="nav navbar-nav">
                                <li class="nav-item dropdown" v-if="login_status">
                                    <a href="javascript:void(0)" class="nav-link dropdown-toggle animated dropdown"
                                       data-toggle="dropdown"
                                       data-hover="dropdown">
                                        {{self_name}}
                                        <i class="ml-1 fa fa-user nav-link-icon"></i>
                                    </a>
                                    <!-- Dropdown menu -->
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-nobullets">

                                        <router-link :to="{name:'me_new_project'}" class="dropdown-item">
                                            <i class="fa fa-plus dropdown-icon" aria-hidden="true"></i>Launch New ICO
                                        </router-link>

                                        <router-link :to="{name:'me'}" class="dropdown-item" v-if="me.type===0">
                                            <i class="fa fa-bitcoin dropdown-icon" aria-hidden="true"></i>My ICO Projects
                                        </router-link>
                                        <router-link :to="{name:'me_team'}" class="dropdown-item" v-if="me.type===0">
                                            <i class="fa fa-users dropdown-icon" aria-hidden="true"></i>My Team
                                        </router-link>

                                        <router-link :to="{name:'me'}" class="dropdown-item" v-if="me.type===1">
                                            <i class="fa fa-bitcoin dropdown-icon" aria-hidden="true"></i>My Marked Projects
                                        </router-link>

                                        <router-link :to="{name:'me_settings'}" class="dropdown-item">
                                            <i class="fa fa-gear dropdown-icon" aria-hidden="true"></i>Settings
                                        </router-link>

                                        <a href="" @click="logout()" class="dropdown-item">
                                            <i class="fa fa-sign-out dropdown-icon" aria-hidden="true"></i> Logout</a>
                                    </div>
                                </li>
                                <li class="nav-item d-lg-flex hidden-md-down" v-if="!login_status">
                                    <a data-toggle="modal" data-target="#login-modal" class="nav-link">Login</a>
                                </li>
                            </ul>
                        </div>
                        <button data-toggle="modal" data-target="#signup-modal"
                                class="btn btn-primary d-lg-flex btn-rounded btn-sm font-weight-bold"
                                v-if="!login_status">REGISTER
                        </button>

                    </div>
                </div>
            </div>
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
