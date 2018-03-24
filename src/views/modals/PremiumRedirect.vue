<template>
  <div class="modal fade" id="premium-modal" tabindex="3" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            Premium
          </h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

          <div class="col-md-12 col-sm-6">
              <div class="pricingTable">
                  <div class="price-value">$120
                      <hr>
                  </div>
                  <h3 class="title">PREMIUM</h3>
                  <ul class="pricing-content">
                      <li> Please Pay using CoinPayments with the link Below. <br><br>
                        Once you've completed the payment, come back to this page and click continue. We will contact you using the email you provided shortly to confirm.</li> <br>

                  </ul>
                  <a  target='_blank' href="https://goo.gl/enzTwW" >https://goo.gl/enzTwW</a>

                    <br><br><br><br><br>
                  <router-link :to="{name:'company_project'}"  class="btn btn-primary" data-dismiss="modal">
                    <span>Continue</span>
                  </router-link>
              </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { SHA256 } from '../../config'

  export default {
    name: 'PremiumModal',
    data () {
      return {
        email: '',
        password: '',
        error_message: '',
      }
    },
    methods: {

    }
  }

</script>

<style scoped>
  .sign-up-link {
    text-decoration: none;
  }
</style>
