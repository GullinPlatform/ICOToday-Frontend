<template>
  <div class="col-md-9">
    <div class="card-new-layout text-center">
      <h6 class="m-0"><i class="fa fa-lightbulb-o"></i> Notice: This is project wallet, not your personal wallet!</h6>
    </div>
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
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CompanyWallet',
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
      getCompanyWallet () {
        this.loaded = false
        this.$store.dispatch('getCompanyWallet')
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
        self_company: 'self_company',
        self_admin: 'self_admin',
        wallet: 'company_wallet',
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

      // Redirect non company admin user
      if (!this.self_admin) {
        this.$router.push({name: 'landing'})
      }

      // Load company wallet
      this.$store.dispatch('getCompanyWallet', this.self_company.id)
        .then(() => {
          this.loaded = true
        })
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
