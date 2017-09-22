<template>
  <div>
    <header class="navbar">
      <!-- Main Navigation-->
      <nav class="site-menu">
        <div class="site-branding">
          <div class="inner">
            <!-- Site Logo-->
            <div class="site-logo">
              <router-link :to="{name:'landing'}">
                <img src="../../../static/img/logo/icotoday.png" width="185"/>
              </router-link>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <router-link :to="{name:'faq', query:{type:'faq'}}" class="hidden-sm-down">
              <span>User Guide</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'tokensale'}" class="hidden-sm-down">
              <span>Token Sale</span>
            </router-link>
          </li>
          <li>
            <a target="_blank" href="https://trello.com/b/JxFOIC9x" class="hidden-sm-down">
              <span>Roadmap</span>
            </a>
          </li>
        </ul>
        <div class="toolbar">
          <div class="inner">
            <div class="tools">
              <div class="notification" v-if="login_status"><a href="javascript:void(0)"></a>
                <i class="icon-bell"></i>
                <span class="count" v-if="notifications.length">{{notifications.length}}</span>
                <div class="toolbar-dropdown" v-if="notifications.length">
                  <div class="dropdown-notification-item" v-for="notification in notifications">
                    <div class="dropdown-notification-thumb">
                      <img src="../../../static/img/account/default.jpg">
                    </div>
                    <div class="dropdown-notification-info">
                      <p class="dropdown-notification-content"><span class="text-bold">ICOToday </span>
                        <router-link :to="{name:'user', params:{}}">{{notification.content}}</router-link>
                      </p>
                      <span class="dropdown-notification-time float-left">2 days ago</span>
                      <span class="badge badge-default badge-pill dropdown-notification-remove">
                         Dismiss
                      </span>
                    </div>
                  </div>
                  <div class="toolbar-dropdown-group">
                    <a class="dropdown-notification-button float-left">Mark all as read</a>
                    <a class="dropdown-notification-button float-right">See all</a>
                  </div>
                </div>
                <div class="toolbar-dropdown" v-else>
                  <div class="dropdown-product-item text-center">
                    <h3 class="dropdown-product-title"><i class="fa fa-bell-slash-o"></i> Nothing Here, yet</h3>
                  </div>
                </div>
              </div>
              <div class="account" v-if="login_status">
                <img v-if="me.info" :src="me.info.avatar" class="rounded-circle">
                <a href="javascript:void(0)"></a>
                <ul class="toolbar-dropdown">
                  <li class="sub-menu-user">
                    <div class="user-info">
                      <h6 class="user-name">{{self_name}}</h6>
                      <span class="text-xs text-muted" v-if="me.info.title && me.info.team.name">{{me.info.title}} @ {{me.info.team.name}}</span>
                      <span class="text-xs text-muted" v-else>{{me.email}}</span>
                    </div>
                  </li>
                  <li class="sub-menu-separator"></li>
                  <li>
                    <router-link :to="{name:'me_new_project'}" class="dropdown-item" v-if="me.type===0">
                      <i class="icon-plus"></i>Submit New ICO
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_created'}" class="dropdown-item" v-if="me.type===0">
                      <i class="fa fa-bitcoin"></i> My ICO Projects
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_wallet'}" class="dropdown-item" v-if="me.type===1">
                      <i class="fa fa-bitcoin"></i> My Wallet
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_marked'}" class="dropdown-item" v-if="me.type===1">
                      <i class="fa fa-star"></i> Subscribed ICOs
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_team'}" class="dropdown-item" v-if="me.type===0">
                      <i class="fa fa-users"></i> My Team
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_expert_apply'}" class="dropdown-item" v-if="me.type===1">
                      <i class="fa fa-id-badge"></i> Apply to be an Expert
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_settings'}" class="dropdown-item">
                      <i class="fa fa-gear"></i>Account Settings
                    </router-link>
                  </li>
                  <li class="sub-menu-separator"></li>
                  <li>
                    <a href="" @click="logout()" class="dropdown-item">
                      <i class="fa fa-sign-out dropdown-icon"></i> Logout</a>
                  </li>
                </ul>
              </div>
              <button class="btn btn-sm btn-primary pl-3 pr-3" data-toggle="modal" data-target="#signup-modal"
                      v-if="!login_status">SIGN UP
              </button>
              <button class="btn btn-sm btn-link p-0 hidden-sm-down" data-toggle="modal" data-target="#login-modal"
                      v-if="!login_status">LOG IN
              </button>
            </div>
          </div>
        </div>

      </nav>
      <!-- Toolbar-->
    </header>
    <div class="alert alert-warning alert-dismissible alert-top text-center text-lg" v-if="login_status && !me.info.is_verified">
      <span class="alert-close" data-dismiss="alert"></span>
      <i class="icon-bell"></i>&nbsp;&nbsp;<strong>Account Unverified:</strong>
      Please verify your account to have fully access to ICOToday's great features.
      <a href="javascript:void(0)" @click="resendConfirmEmail()" :class="{'text-muted':!able_to_resend}">RESEND <span v-show="!able_to_resend">(Retry Later)</span></a>
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
    methods: {
      logout () {
        this.$store.dispatch('logout')
      },
      getNotifications () {
        if (this.login_status)
          this.$store.dispatch('getNotifications')
      },
      readNotification (pk) {
        this.$store.dispatch('readNotification', pk)
      },
      resendConfirmEmail () {
        if (this.able_to_resend)
          this.$store.dispatch('resendConfirmEmail')
      },
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
      notifications () {
        return this.$store.getters.notifications
      },
      able_to_resend () {
        return this.$store.getters.able_to_resend
      }
    },
    mounted () {
      this.getNotifications()
      this.interval = setInterval(function () {
        this.getNotifications()
      }.bind(this), 30000)
    },
    beforeDestroy () {
      clearInterval(this.interval)
    }
  }

</script>

<style scoped>
  .dropdown-product-item {
    display: table;
    position: relative;
    width: 100%;
    padding: 9px 0;
    border-top: 1px dashed #d8e0e6;
  }

  .dropdown-product-item .dropdown-product-title {
    display: block;
    padding-top: 2px;
    transition: color .3s;
    color: #606975;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
  }
</style>
