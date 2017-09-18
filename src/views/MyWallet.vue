<template>
  <!-- Page Content-->
  <div class="container container-padding">
    <div class="row">
      <my-header></my-header>
      <!--main content-->
      <div class="col-md-8 margin-bottom-2x">
        <h6 class="text-muted text-normal text-uppercase">My Wallet</h6>
        <hr class="margin-bottom-1x">
        <div class="table-responsive">
          <table class="table">
            <thead class="thead-default">
            <tr>
              <th></th>
              <th class="text-center">BALANCE</th>
              <th class="text-center">ADDRESS</th>
              <th class="text-center">ACTIONS</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="wallet-cell">
                <h3 class="mb-0">BTC </h3>
              </td>
              <td class="wallet-cell">
                <h3 class="text-thin mb-0">{{(wallet.btc_amount).toFixed(2)}}</h3>
              </td>
              <td class="wallet-cell">
                <a class="btn btn-secondary btn-sm" href="#"><i class="fa fa-lock"></i> Copy Wallet Address</a>
              </td>
              <td class="wallet-cell">
                <a class="btn btn-success btn-sm" href="#">Deposit</a>
                <a class="btn btn-secondary btn-sm" href="#">Withdraw</a>
              </td>
            </tr>
            <tr>
              <td class="wallet-cell">
                <h3 class="mb-0">ETH </h3>
              </td>
              <td class="wallet-cell">
                <h3 class="text-thin mb-0">{{(wallet.eth_amount).toFixed(2)}}</h3>
              </td>
              <td class="wallet-cell">
                <a class="btn btn-secondary btn-sm" href="#"><i class="fa fa-lock"></i> Copy Wallet Address</a>
              </td>
              <td class="wallet-cell">
                <a class="btn btn-success btn-sm" href="#">Deposit</a>
                <a class="btn btn-secondary btn-sm" href="#">Withdraw</a>
              </td>
            </tr>
            <tr>
              <td class="wallet-cell">
                <h3 class="mb-0">ICC </h3>
              </td>
              <td class="wallet-cell"><h3 class="text-thin mb-0">{{(wallet.icc_amount).toFixed(2)}}</h3></td>
              <td class="wallet-cell">
                <a class="btn btn-secondary btn-sm" href="#"><i class="fa fa-lock"></i> Copy Wallet Address</a>
              </td>
              <td class="wallet-cell">
                <a class="btn btn-success btn-sm" href="#">Deposit</a>
                <a class="btn btn-secondary btn-sm" href="#">Withdraw</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-md-8 text-center" v-if="!me.is_verified">
        <h4 class="mt-3">
          You have to verify your email first
        </h4>
        <a href="javascript:void(0)" @click="" class="btn btn-primary mt-2">Resend Email</a>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from 'components/MyHeader'

  export default {
    name: 'MyWallet',
    data () {
      return {
        loaded: false,
        error_message: '',
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'My Wallet'
      }
    },
    components: {
      MyHeader,
    },
    methods: {
      getWallet () {
        this.loaded = false
        this.$store.dispatch('getWallet')
          .then(() => {
            this.loaded = true
          })
      },
    },
    computed: {
      me () {
        return this.$store.getters.self
      },
      wallet () {
        return this.$store.getters.wallet
      },
      login_status () {
        return this.$store.getters.login_status
      },
    },
    beforeMount () {
      // redirect non login user
      if (!this.login_status) {
        this.$router.push({name: 'landing'})
      }
      this.loaded = false
      this.getWallet()
    }
  }
</script>

<style scoped>
  .wallet-cell {
    vertical-align: middle;
    text-align: center !important;
  }
</style>
