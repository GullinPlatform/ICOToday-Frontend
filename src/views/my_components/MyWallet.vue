<template>
  <div class="col-md-9">
    <h6 class="text-muted text-normal text-uppercase ">My Wallet</h6>
    <hr class="mb-3 mt-2">
    <div class="table-responsive table-wrapper">
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
            <a class="btn btn-secondary btn-sm" href="#" @click="warning()"><i class="fa fa-lock"></i> Copy Wallet Address</a>
          </td>
          <td class="wallet-cell">
            <a class="btn btn-success btn-sm" href="#" @click="warning()">Deposit</a>
            <a class="btn btn-secondary btn-sm" href="#" @click="warning()">Withdraw</a>
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
            <a class="btn btn-secondary btn-sm" href="#" @click="warning()"><i class="fa fa-lock"></i> Copy Wallet Address</a>
          </td>
          <td class="wallet-cell">
            <a class="btn btn-success btn-sm" href="#" @click="warning()">Deposit</a>
            <a class="btn btn-secondary btn-sm" href="#" @click="warning()">Withdraw</a>
          </td>
        </tr>
        <tr>
          <td class="wallet-cell">
            <h3 class="mb-0">ICT </h3>
          </td>
          <td class="wallet-cell"><h3 class="text-thin mb-0">{{(wallet.ict_amount).toFixed(2)}}</h3></td>
          <td class="wallet-cell">
            <a class="btn btn-secondary btn-sm" href="#" @click="warning()"><i class="fa fa-lock"></i> Copy Wallet Address</a>
          </td>
          <td class="wallet-cell">
            <a class="btn btn-success btn-sm" href="#" @click="warning()">Deposit</a>
            <a class="btn btn-secondary btn-sm" href="#" @click="warning()">Withdraw</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="card-new-layout mt-4 text-center">
      <h6 class="text-muted">Refer your friends to ICOToday using the following link <br>
        and earn FREE 5 ICTs for each referral!</h6>
      <h6>https://icotoday.io/register?refer={{me.email}}</h6>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

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
    methods: {
      getWallet () {
        this.loaded = false
        this.$store.dispatch('getWallet')
          .then(() => {
            this.loaded = true
          })
      },
      warning () {
        this.$store.dispatch('toastr', {type: 'warning', title: 'Warning', message: 'This function is locked until our ICO.'})
      }
    },
    computed: {
      ...mapGetters({
        me: 'self',
        wallet: 'wallet',
      })
    },
    beforeCreate () {
      // redirect not verified user
      if (!this.$store.getters.is_verified) {
        this.$router.push({name: 'me_need_verify'})
      }
    },
    beforeMount () {
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

  .table, .table th {
    margin: 0;
    border-top: 0;
  }

  .table td {
    background: #ffffff;
  }

  .table-wrapper {
    overflow: hidden;
    border-radius: 7px;
    border: 1px solid #e9ecef !important;
  }

</style>
