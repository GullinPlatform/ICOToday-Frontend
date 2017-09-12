<template>
    <div class="col-md-4 mb-5" v-if="loaded">
        <aside class="user-info-wrapper">
            <div class="user-cover" style="background-image: url(../../../static/img/account/user-cover-img.jpg);">
                <div class="info-label" v-if="user.is_verified"><i class="fa fa-id-badge"></i> Verified
                </div>
                <div class="info-label warning-label" data-toggle="tooltip" v-if="!user.is_verified"
                     data-original-title="Verify Your Email"><i class="fa fa-warning"></i> Unverified
                </div>
            </div>
            <div class="user-info">
                <div class="user-avatar">
                    <img :src="user.info.avatar" alt="User">
                </div>
                <div class="pl-2">
                    <h4 class="mb-0">{{username}}  </h4>
                    <h4 class="text-muted">{{user.info.title}}</h4>
                    <span v-if="user.info.team">@ {{user.info.team.name}}</span>
                    <br>
                    <p>{{user.info.description}}</p>
                    <a :href="user.info.facebook" target="_blank"
                       v-if="user.info.facebook">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a :href="user.info.linkedin" target="_blank"
                       v-if="user.info.linkedin">
                        <i class="fa fa-linkedin-square"></i>
                    </a>
                    <a :href="user.info.twitter" target="_blank"
                       v-if="user.info.twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a :href="user.info.telegram" target="_blank"
                       v-if="user.info.telegram">
                        <i class="fa fa-telegram"></i>
                    </a>
                </div>
            </div>
        </aside>
        <nav class="list-group">
            <router-link :to="{name:'user_created', params:{id:user.id}}" class="list-group-item"
                         v-if="user.type===0"
                         :class="{active: $route.name==='user_created'}">
                <i class="fa fa-angle-right"></i>User ICO Projects
            </router-link>
            <router-link :to="{name:'user_marked', params:{id:user.id}}" class="list-group-item"
                         :class="{active: $route.name==='user_marked'}">
                <i class="fa fa-angle-right"></i>User Marked ICO Projects
            </router-link>
            <router-link :to="{name:'user_team', params:{id:user.id}}" class="list-group-item"
                         v-if="user.type===0"
                         :class="{active: $route.name==='user_team'}">
                <i class="fa fa-angle-right"></i>User Team
            </router-link>
        </nav>
    </div>
</template>

<script>
  export default {
    name: 'UserHeadBar',
    data () {
      return {
        loaded: false
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      username () {
        return this.$store.getters.user_name
      },
    },
    beforeMount () {
      this.loaded = false
      if (this.$store.getters.user.id === parseInt(this.$route.params.id)) {
        this.loaded = true
      }
      else {
        this.$store.dispatch('getUser', this.$route.params.id)
          .then(() => {
            this.loaded = true
          })
      }
    }
  }
</script>

