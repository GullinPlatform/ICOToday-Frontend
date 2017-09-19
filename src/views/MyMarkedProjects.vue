<template>
  <!-- Page Content-->
  <div class="container container-padding">
    <div class="row">
      <my-header></my-header>
      <!--main content-->
      <div class="col-md-8">
        <h6 class="text-muted text-normal text-uppercase">
          Subscribed ICO Projects
        </h6>
        <hr class="mb-3 mt-2">
        <post-list :loaded="loaded" :posts="self_marked_posts"></post-list>
        <div class="mt-5" v-if="loaded && self_marked_posts.length===0">
          <div class="text-center">
            <h3 class="product-title">You don't have marked projects right now</h3>
            <router-link :to="{name:'landing'}" class="btn btn-outline-primary btn-sm text-primary">
              Explore
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from 'components/MyHeader'
  import PostList from 'components/PostList'

  export default {
    name: 'MyMarkedProjects',
    data () {
      return {
        loaded: false,
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Subscribed ICOs'
      }
    },
    components: {
      MyHeader,
      PostList
    },
    methods: {
      loadProjects () {
        this.loaded = false
        // My Marked Projects
        this.$store.dispatch('getSelfMarkedPost')
          .then(() => {
            this.loaded = true
          })
      },

    },
    computed: {
      me () {
        return this.$store.getters.self
      },
      self_marked_posts () {
        return this.$store.getters.self_marked_posts
      }
    },
    beforeMount () {
      this.loaded = false
      this.$store.dispatch('getSelfMarkedPost')
        .then(() => {
          this.loaded = true
        })
    },
    beforeCreate () {
      // redirect non login user
      if (!this.$store.getters.login_status) {
        this.$router.push({name: 'landing'})
      }
    }
  }
</script>
