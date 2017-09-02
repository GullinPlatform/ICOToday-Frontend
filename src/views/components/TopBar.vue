<template>
    <div id="header">
        <div data-toggle="sticky">
            <!--Header & Branding region-->
            <div class="header py-1 py-lg-0">
                <!-- all direct children of the .header-inner element will be vertically aligned with each other you can override all the behaviours using the flexbox utilities (flexbox.htm)
                                                                                                    All elements with .header-brand & .header-block-flex wrappers will automatically be aligned inline & vertically using flexbox, this can be overridden using the flexbox utilities (flexbox.htm)
                                                                                                    Use .header-block to stack elements within on small screen & "float" on larger screens use .flex-first or/and .flex-last classes to make an element show first or last within .header-inner or .headr-block elements -->
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
                    <div class="navbar navbar-toggleable">
                        <!--everything within this div is collapsed on mobile-->
                        <div class="navbar-main">
                            <!--main navigation-->
                            <ul class="nav navbar-nav navbar-inverse">
                                <li class="nav-item d-lg-flex dropdown" v-if="login_status">
                                    <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown"
                                       data-hover="dropdown">
                                        {{me.email}}
                                        <i class="ml-1 fa fa-user nav-link-icon"></i>
                                    </a>
                                    <!-- Dropdown menu -->
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-nobullets">
                                        <router-link :to="{name:'me_new_question'}" class="dropdown-item">
                                            <i class="fa fa-plus dropdown-icon" aria-hidden="true"></i>新的项目
                                        </router-link>
                                        <router-link :to="{name:'me'}" class="dropdown-item">
                                            <i class="fa fa-drupal dropdown-icon" aria-hidden="true"></i>我的项目
                                        </router-link>
                                        <router-link :to="{name:'me_settings'}" class="dropdown-item">
                                            <i class="fa fa-paint-brush dropdown-icon" aria-hidden="true"></i>个人中心
                                        </router-link>
                                        <a href="" @click="logout()" class="dropdown-item">
                                            <i class="fa fa-sign-out dropdown-icon" aria-hidden="true"></i> 退出登录</a>
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
