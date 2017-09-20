<template>

  <div class="offcanvas-wrapper">
       <!-- Page Title-->
       <div class="page-title">
         <div class="container">
           <div class="column">
             <h1>Help / FAQ</h1>
           </div>
           <div class="column">
             <ul class="breadcrumbs">
               <li><a href="index.html">Home</a>
               </li>
               <li class="separator">&nbsp;</li>
               <li>Help / FAQ</li>
             </ul>
           </div>
         </div>
       </div>
       <!-- Page Content-->
       <div class="container padding-bottom-3x">
         <div class="row">
           <!-- Side Menu-->
           <div class="col-lg-3 col-md-4">

             <nav class="list-group">

               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'faq'}}"
                            :class="{active:type==='faq'}">Popular Questions
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'ico'}}"
                            :class="{active:type==='ico'}">What is an ICO?
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'investing'}}"
                            :class="{active:type==='investing'}">How to Get Started Investing in ICOs
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'blockchain'}}"
                            :class="{active:type==='blockchain'}">What is Blockchain?
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'bitcoin'}}"
                            :class="{active:type==='bitcoin'}">What is Bitcoin?
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'ethereum'}}"
                            :class="{active:type==='ethereum'}">What is Ethereum?
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'smart_contract'}}"
                            :class="{active:type==='smart_contract'}">What is a Smart Contract?
               </router-link>
               <a class="list-group-item"</a>

               </nav>

             <div class="padding-bottom-3x hidden-md-up"></div>
           </div>
<!-- Content-->
          <div class="col-lg-8 col-md-8" v-if="type=='faq'">
            <div class="accordion" id="accordion" role="tablist">
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseFive" data-toggle="collapse" data-parent="#accordion">How is ICOTOday better than competitors?</a></h6>
                </div>
                <div class="collapse" id="collapseFive" role="tabpanel">
                  <div class="card-body">
                    At ICOToday, we focus on three important things for our platform: Investor Security, Community and Ease of Use. Most or all of our current competitors are more like blogs, where they let companies submit an application, then manually upload them to their respective websites - they act as centralized middlemen between ICOs and investors. This is not how it should be. One of blockchain's biggest value propositions is that it negates the need for a middleman and connects people directly.<br><br>
                    At ICOToday, we created a decentralized platform where companies can submit their ICOs, have them rated by community experts, who are selected by the community. The community users are then able to invest automatically through our smart contract without the hassles that they have to endure with current platforms. Furthermore, ICO companies that get approved by our community experts will then be able to communicate critical information securely through our platform. Users will be able to subscribe to ICOs they are interested in and get updates on their feed. No critical information will ever be shared through emails. No other ICO platform offers these features - Investor Security, Community, Ease of Use.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseSix" data-toggle="collapse" data-parent="#accordion">Why is ICOToday launching its own ICO?</a></h6>
                </div>
                <div class="collapse" id="collapseSix" role="tabpanel">
                  <div class="card-body">
                    We have two important reasons for launching the ICOToken. One, creating a decentralized platform with no economic incentives for the necessary parties involved is impossible. Therefore, ICOToken will be tightly integrated in the product. It's value will be directly correlated to the demand of the ICOToday platform.
                    <br><br>
                     Second, ICO investors are our target audience. We wanted to give our supporters a chance to be invested in our collective future. ICOToday was founded because we, as ICO investors, understood the pain and inefficiencies with the current process and we thought there could be a better way. We are creating the future of ICOs, but we cannot do it by ourselves. Therefore, our ICO will enable ICO investors to support us in building our collective vision.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a href="#collapseOne" data-toggle="collapse" data-parent="#accordion">How do I participate in a project's ICO?</a></h6>
                </div>
                <div class="collapse show" id="collapseOne" role="tabpanel">
                  <div class="card-body">
                    <p>
                      Every project's page has a right-hand sidebar that shows the total amount the project is looking to raise, and what types of cryptocurrencies are accepted. All you have to do is press the "Contribute" button next to the type of cryptocurrency you intend to use!

                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseTwo" data-toggle="collapse" data-parent="#accordion">Before I participate in an ICO, is there anything I have to prepare in advance?</a></h6>
                </div>
                <div class="collapse" id="collapseTwo" role="tabpanel">
                  <div class="card-body">
                      Before you can participate in ICOs on ICOToday, you must have a valid account, have completed real-name verification, and deposited cryptocurrency into your ICOToday wallet. Once you've deposited cryptocurrency into your wallet, you can immediately participate in any active ICOs on the site. For a detailed overview of how to complete this process, see here.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseThree" data-toggle="collapse" data-parent="#accordion">How do I make a deposit to my ICOToday wallet?</a></h6>
                </div>
                <div class="collapse" id="collapseThree" role="tabpanel">
                  <div class="card-body">
                    To make a deposit to your ICOToday Wallet, login to your account and go to account settings. Proceed to your wallet and copy the address of the specific wallet you want to deposit funds into (BTC, ETH, ICC). Go to your exchange or outside wallet and send the funds to that address.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseFour" data-toggle="collapse" data-parent="#accordion">How long does it take for deposits to arrive in my ICOToday wallet?</a></h6>
                </div>
                <div class="collapse" id="collapseFour" role="tabpanel">
                  <div class="card-body">
                        The speed of blockchain deposits depends on how long it takes to get the requisite number of confirmations, which is different for different types of cryptocurrencies. If it's taking a long time for a deposit to arrive, please check the exchange or wallet you sent the deposit from and make sure the transaction was indeed sent out.
                    </div>
                </div>
              </div>
            </div>

            </div>

              <div class="col-lg-8 col-md-8" v-if="type==='ico'">


              </div>

              <div class="col-lg-8 col-md-8" v-if="type==='investing'">


              </div>

              <div class="col-lg-8 col-md-8" v-if="type==='blockchain'">


              </div>

              <div class="col-lg-8 col-md-8" v-if="type==='bitcoin'">


              </div>

              <div class="col-lg-8 col-md-8" v-if="type==='ethereum'">


              </div>

              <div class="col-lg-8 col-md-8" v-if="type==='smart_contract'">


              </div>



          </div>
        </div>
      </div>

</template>


<script>

  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'UserGuide',
    head: {
      title () {
        return {
          inner: 'ICOToday',
          complement: this.type_formal
        }
      }
    },
    components: {
      'vue-markdown': VueMarkdown
    },
    methods: {},
    computed: {
      type () {
        if (this.$route.query.hasOwnProperty('type'))
          return this.$route.query.type
        return false
      },
      type_formal () {
        if (this.type === 'faq')
          return 'Popular Questions'
        else if (this.type === 'ico')
          return 'What is an ICO?'
        else if (this.type === 'investing')
          return 'How to get Started Investing in ICOs'
        else if (this.type === 'blockchain')
          return 'What is Blockchain?'
        else if (this.type === 'bitcoin')
          return 'What is Bitcoin?'
        else if (this.type === 'ethereum')
          return 'What is Ethereum?'
        else if (this.type === 'smart_contract')
          return 'What is a Smart Contract?'
      }
    }
  }
</script>
