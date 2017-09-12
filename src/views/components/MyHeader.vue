<template>
    <div class="col-md-4 mb-5">
        <aside class="user-info-wrapper">
            <div class="user-cover" style="background-image: url(../../../static/img/account/user-cover-img.jpg);">
                <div class="info-label" v-if="me.is_verified"><i class="fa fa-id-badge"></i> Verified
                </div>
                <div class="info-label warning-label" data-toggle="tooltip" v-if="!me.is_verified"
                     data-original-title="Verify Your Email"><i class="fa fa-warning"></i> Unverified
                </div>
            </div>
            <div class="user-info">
                <div class="user-avatar">
                    <router-link class="edit-avatar" :to="{name:'me_settings'}"></router-link>
                    <img :src="me.info.avatar" alt="User"></div>
                <div class="pl-2">
                    <h4 class="mb-0">{{username}}  </h4>
                    <h4 class="text-muted">{{me.info.title}}</h4>
                    <span v-if="me.info.team">@ {{me.info.team.name}}</span>
                    <br>
                    <p>{{me.info.description}}</p>
                    <a :href="me.info.facebook" target="_blank"
                       v-if="me.info.facebook">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a :href="me.info.linkedin" target="_blank"
                       v-if="me.info.linkedin">
                        <i class="fa fa-linkedin-square"></i>
                    </a>
                    <a :href="me.info.twitter" target="_blank"
                       v-if="me.info.twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a :href="me.info.telegram" target="_blank"
                       v-if="me.info.telegram">
                        <i class="fa fa-telegram"></i>
                    </a>
                </div>
            </div>
        </aside>
        <nav class="list-group">
            <router-link :to="{name:'me_new_project'}" class="list-group-item" v-if="me.type===0"
                         :class="{active: $route.name==='me_new_project'}">
                <i class="fa fa-angle-right"></i>New ICO Application
            </router-link>
            <router-link :to="{name:'me_created'}" class="list-group-item with-badge" v-if="me.type===0"
                         :class="{active: $route.name==='me_created'}">
                <i class="fa fa-angle-right"></i>My ICO Projects
            </router-link>
            <router-link :to="{name:'me_marked'}" class="list-group-item"
                         :class="{active: $route.name==='me_marked'}">
                <i class="fa fa-angle-right"></i>Marked ICO Projects
            </router-link>

            <router-link :to="{name:'me_team'}" class="list-group-item" v-if="me.type===0"
                         :class="{active: $route.name==='me_team'}">
                <i class="fa fa-angle-right"></i>My Team
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
    name: 'MyHeadBar',
    computed: {
      me () {
        return this.$store.getters.self
      },
      username () {
        return this.$store.getters.self_name
      },
    }
  }
</script>

