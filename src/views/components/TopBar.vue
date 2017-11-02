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
            <router-link :to="{name:'white_paper'}" class="hidden-sm-down">
              <span>WHITE PAPER</span>
            </router-link>
          </li>
        </ul>
        <div class="toolbar">
          <div class="inner">
            <div class="tools">
              <div class="notification" v-if="login_status">
                <i class="icon-bell"></i>
                <span class="count" v-if="notifications.length">{{notifications.length}}</span>
                <a href="javascript:void(0)"></a>
                <div class="toolbar-dropdown" v-if="notifications.length">
                  <div class="dropdown-notification-item" v-for="notify in notifications">
                    <div class="dropdown-notification-thumb">
                      <router-link :to="{name:'user', params:{id:notify.sender.id}}">
                        <img :src="notify.sender.avatar">
                      </router-link>
                    </div>
                    <div class="dropdown-notification-info">
                      <p class="dropdown-notification-content">
                        <router-link class="text-bold" :to="{name:'user', params:{id:notify.sender.id}}">{{notify.sender.full_name}}:</router-link>
                        {{notify.content}}
                      </p>
                      <span class="dropdown-notification-time float-left">{{timeFromNow(notify.created)}}</span>
                      <button class="btn btn-xm btn-secondary float-right" @click="readNotification(notify.id)">
                        Dismiss
                      </button>
                      <button class="btn btn-xm btn-outline-primary float-right mr-3" @click="notificationDetail(notify)">
                        Detail
                      </button>
                    </div>
                  </div>
                  <div class="toolbar-dropdown-group">
                    <a class="dropdown-notification-button float-left" href="javascript:void(0)" @click="readAllNotification()">Mark all as read</a>
                    <router-link :to="{name:'notifications'}" class="dropdown-notification-button float-right">See all</router-link>
                  </div>
                </div>
                <div class="toolbar-dropdown" v-else>
                  <div class="text-center">
                    <h6 class="dropdown-product-title mt-3">
                      <i class="fa fa-bell-slash-o"></i> Nothing Here, yet
                    </h6>
                  </div>
                  <div class="toolbar-dropdown-group">
                    <router-link :to="{name:'notifications'}" class="dropdown-notification-button float-right">See all</router-link>
                  </div>
                </div>
              </div>
              <div class="account" v-if="login_status">
                <img v-if="me.info" :src="me.info.avatar" class="rounded-circle">
                <router-link :to="{name:'me'}"></router-link>
                <ul class="toolbar-dropdown">
                  <li class="sub-menu-user">
                    <div class="user-info">
                      <h6 class="user-name">{{self_name}}</h6>
                      <span class="text-xs text-muted">{{me.email}}</span>
                    </div>
                  </li>
                  <li class="sub-menu-separator"></li>
                  <li>
                    <router-link :to="{name:'me'}" class="dropdown-item">
                      <i class="fa fa-newspaper-o"></i> Feed
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_wallet'}" class="dropdown-item">
                      <i class="fa fa-bitcoin"></i> My Wallet
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_marked'}" class="dropdown-item">
                      <i class="fa fa-star"></i>Subscribed ICOs
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_profile'}" class="dropdown-item">
                      <i class="fa fa-user"></i> Profile
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_settings'}" class="dropdown-item">
                      <i class="fa fa-gear"></i>Settings
                    </router-link>
                  </li>
                  <li class="sub-menu-separator"></li>
                  <li>
                    <router-link :to="{name:'company_new_project'}" class="dropdown-item" v-if="self_type===0">
                      <i class="fa fa-building-o"></i>Project: {{me.info.company.name}}
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_analyst_apply'}" class="dropdown-item" v-if="self_type===1||self_type===-1">
                      <i class="fa fa-id-badge"></i> Apply to be Analyst
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'me_company_create'}" class="dropdown-item" v-if="self_type===1||self_type===-1">
                      <i class="fa fa-building-o"></i> List My ICO
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'analyst_unrated_projects'}" class="dropdown-item" v-if="self_type===2">
                      <i class="fa fa-star-o"></i>Rate projects
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'company_feed'}" class="dropdown-item" v-if="self_type===3">
                      <i class="fa fa-building-o"></i>Project: {{me.info.company.name}}
                    </router-link>
                  </li>
                  <li class="sub-menu-separator"></li>
                  <li>
                    <a href="javascript:void(0)" @click="logout()" class="dropdown-item">
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
    <div class="alert alert-primary alert-dismissible alert-top text-center text-lg">
      <span class="alert-close" data-dismiss="alert"></span>
      <i class="icon-bell"></i>&nbsp;&nbsp;Welcome! This is ICOToday’s Launch week. We will be announcing our initial Analysts and adding ratings and reports each day of the week. Stay tuned.
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Header',
    methods: {
      logout () {
        this.$store.dispatch('logout')
      },
      getNotifications () {
        if (this.login_status)
          this.$store.dispatch('getNotifications')
      },
      readNotification (id) {
        this.$store.dispatch('readNotification', id)
      },
      readAllNotification () {
        this.$store.dispatch('readAllNotification')
          .then(() => {
            this.$store.dispatch('toastr', {
              type: 'success',
              title: 'Success',
              message: 'All notifications are marked as read.'
            })
          })
      },
      notificationDetail (notify) {
        this.$store.dispatch('notificationDetail', notify)
      },

      resendConfirmEmail () {
        if (this.able_to_resend)
          this.$store.dispatch('resendConfirmEmail')
      },

      timeFromNow (time) {
        return moment(time).fromNow()
      }

    },
    computed: {
      ...mapGetters({
        me: 'self',
        self_name: 'self_name',
        login_status: 'login_status',
        notifications: 'notifications',
        able_to_resend: 'able_to_resend',
        self_type: 'self_type'
      })
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

  .router-link-active {
    color: #0da9ef;
  }
</style>
