<template>
  <!-- Page Content-->
  <div class="container container-padding">
    <div class="row">
      <user-header></user-header>
      <!--main content-->
      <div class="col-md-8">
        <h6 class="text-muted text-normal text-uppercase ">
          User ICO Projects
        </h6>
        <hr class="mb-3 mt-2">
        <post-list :loaded="loaded" :posts="user_created_posts"></post-list>

        <div class="mt-5" v-if="loaded && user_created_posts.length===0">
          <div class="text-center">
            <h3 class="product-title">This user doesn't have any ICO projects right now</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UserHeader from 'components/UserHeader'
  import PostList from 'components/PostList'

  export default {
    name: 'UserCreatedProjects',
    data () {
      return {
        loaded: false,
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'User ICO Projects'
      }
    },
    components: {
      UserHeader,
      PostList
    },
    computed: {
      user_created_posts () {
        return this.$store.getters.user_created_posts
      },
    },
    beforeMount () {
      // User Created ICO Projects
      this.loaded = false
      this.$store.dispatch('getUserCreatedPost', this.$route.params.id)
        .then(() => {
          this.loaded = true
        })
    }
  }
</script>
