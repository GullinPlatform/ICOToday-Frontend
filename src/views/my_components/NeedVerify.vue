<template>
  <div class="col-md-9 text-center" v-else>
    <div class="card-new-layout">
      <h4 class="mt-3">
        You have to verify your email first
      </h4>
      <a href="javascript:void(0)" @click="resendConfirmEmail()" class="btn btn-primary mt-2" :disabled="!able_to_resend">Resend Email</a>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NeedVerify',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'You Need Verify Your Email First'
      }
    },
    methods: {
      resendConfirmEmail () {
        if (this.able_to_resend)
          this.$store.dispatch('resendConfirmEmail')
      },
    },
    computed: {
      ...mapGetters({
        able_to_resend: 'able_to_resend',
        is_verified: 'is_verified'
      })
    },
    beforeMount () {
      if (this.is_verified) {
        this.$router.push({name: 'me'})
      }
    },
  }
</script>
