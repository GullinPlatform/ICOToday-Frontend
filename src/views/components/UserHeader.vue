<template>
    <div class="col-lg-4">
        <aside class="user-info-wrapper">
            <div class="user-cover" style="background-image: url(../../../static/img/account/user-cover-img.jpg);">
                <div class="info-label" data-toggle="tooltip" title=""
                     data-original-title="You currently have 290 Reward Points to spend"><i class="icon-medal"></i>290 points
                </div>
            </div>
            <div class="user-info">
                <div class="user-avatar"><a class="edit-avatar" href="#"></a>
                    <img :src="me.info.avatar" alt="User"></div>
                <div class="pl-2">
                    <h4>{{username}}  <span class="text-muted">{{me.info.title}}</span></h4>

                    <span class="badge badge-primary" v-if="me.is_verified"> <i
                            class="fa fa-check"></i> Verified</span>
                    <span class="badge badge-warning" v-else> <i class="fa fa-warning"></i> Unverified</span>
                    <br>
                    <span>@ {{me.info.team.name}}</span>
                    <p>{{me.info.description}}</p>

                    <a :href="me.info.linkedin" v-if="me.info.linkedin"><i class="fa fa-linkedin-square"></i></a>
                    <a :href="me.info.twitter" v-if="me.info.twitter"><i class="fa fa-twitter"></i></a>
                    <a :href="me.info.slack" v-if="me.info.slack"><i class="fa fa-slack"></i></a>
                    <a :href="me.info.telegram" v-if="me.info.telegram"><i class="fa fa-telegram"></i></a>
                </div>
            </div>
        </aside>
        <nav class="list-group">
            <router-link :to="{name:'me'}" class="list-group-item with-badge" v-if="me.type===0"
                         :class="{active: $route.name==='me'}">
                <i class="fa fa-angle-right"></i>My ICO Projects
            </router-link>
            <router-link :to="{name:'me_new_project'}" class="list-group-item" v-if="me.type===0"
                         :class="{active: $route.name==='me_new_project'}">
                <i class="fa fa-angle-right"></i>New ICO Application
            </router-link>
            <router-link :to="{name:'me_marked'}" class="list-group-item"
                         :class="{active: $route.name==='me_marked'}">
                <i class="fa fa-angle-right"></i>Marked ICO Projects
            </router-link>

            <router-link :to="{name:'me_team'}" class="list-group-item" v-if="me.is_verified!==2"
                         :class="{active: $route.name==='me_team'}">
                <i class="fa fa-angle-right"></i>My Team Information
            </router-link>

            <router-link :to="{name:'me_settings'}" class="list-group-item"
                         :class="{active: $route.name==='me_settings'}">
                <i class="fa fa-angle-right"></i>Account Settings
            </router-link>

        </nav>
    </div>
</template>

<script>
  export default {
    name: 'UserHeadBar',
    computed: {
      me () {
        return this.$store.getters.self
      },
      username () {
        return this.$store.getters.self_name
      },
      has_social_media () {
        return (this.me.info.linkedin || this.me.info.twitter || this.me.info.slack || this.me.info.telegram)
      }
    }
  }
</script>

