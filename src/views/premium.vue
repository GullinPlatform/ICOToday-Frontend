<template>

  <div class="offcanvas-wrapper">
    <!-- Page Title-->
    <div id="home" class="jumbotron jumbotron-register-fixed">
      <div id="particles-js"></div><!-- /.particles div -->
      <div class="container center-vertically-holder">
        <div class="center-vertically ">
          <div class="row">
            <div class="col-md-12 mt-3">
              <h2 class="text-white text-uppercase text-center">
                Premium <br> <br>Payments made in Crypto
              </h2>
            </div>

          </div>
        </div>
      </div>
    </div>


    <!-- Featured Products Carousel-->
    <section class="container pt-5 pb-5">

      <div class="container">
        <h2 class="text-center">
          Please Select an Option To Continue
        </h2><br><br>
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="pricingTable">
                <div class="price-value">$0
                  <hr>
                </div>
                <h3 class="title">FREE</h3>
                <ul class="pricing-content">
                    <li> - Your ICO, if approved, is listed on the platform within 14 working days.</li>

                </ul><br><br><br><br><br><br><br><br><br><br><br><br>

                <router-link :to="{name:'company_project'}"  class="btn btn-primary">
                  <span>Order Now</span>
                </router-link>


            </div>
        </div>

        <div class="col-md-3 col-sm-6">
            <div class="pricingTable">
                <div class="price-value">$80
                    <hr>
                </div>
                <h3 class="title">BASIC</h3>
                <ul class="pricing-content">
                    <li> - Your ICO, if approved, is listed within 5 working days:</li> <br>
                    <li> - We Share your ICO project across our Twitter platform and partner Telegram channels
                       (Combined total of over 10,000 investors)</li>
                </ul><br><br><br><br><br><br><br><br>
                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#basic-modal">Order Now</a>
            </div>
        </div>

        <div class="col-md-3 col-sm-6">
            <div class="pricingTable">
                <div class="price-value">$120
                    <hr>
                </div>
                <h3 class="title">PREMIUM</h3>
                <ul class="pricing-content">
                    <li> - Your ICO, if approved, it will be listed and live within 24 hours.</li> <br>
                    <li> - We share your ICO project across our Twitter platform and partner Telegram channels (Combined total of over 10,000 investors)</li> <br>
                    <li> - Your ICO will be featured on the homepage of the “Top Featured ICOs” increasing exposure to your ICO, for 5 working days.</li> <br>
                    <li> - Your ICO will receive our “Premium” badge, for the duration of your ICO - alerting investors of your ICO and drawing attention to your project.</li>

                </ul>
                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#premium-modal">Order Now</a>
            </div>
        </div>

        <div class="col-md-3 col-sm-6">
            <div class="pricingTable">
                <div class="price-value">$200
                    <hr>
                </div>
                <h3 class="title">PREMIUM PLUS</h3>
                <ul class="pricing-content">
                    <li> - Including the benefits from the Premium Package</li><br>
                    <li> - Your ICO will be shared with our growing contact list of over 15,000 investors through a one-time email campaign.
                      You can decide when you would like to make use of this email campaign, with your ICO details.</li>
                        <br><br><br><br><br><br>
                </ul>
                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#premiumplus-modal">Order Now</a>
            </div>
        </div>
    </div>
</div>

    </section>

  </div>

</template>


<script>

  import VueMarkdown from 'vue-markdown'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Premium',
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
      },
      ...mapGetters({
        me: 'self',
        self_name: 'self_name',
        login_status: 'login_status',
        notifications: 'notifications',
        able_to_resend: 'able_to_resend',
        self_type: 'self_type'
      })
    },
    mounted () {
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 100,
            'density': {
              'enable': true,
              'value_area': 800
            }
          },
          'color': {
            'value': '#ffffff'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 5
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 3,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 40,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 150,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 1
          },
          'move': {
            'enable': true,
            'speed': 6,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'grab'
            },
            'onclick': {
              'enable': true,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 140,
              'line_linked': {
                'opacity': 1
              }
            },
            'bubble': {
              'distance': 400,
              'size': 40,
              'duration': 2,
              'opacity': 8,
              'speed': 3
            },
            'repulse': {
              'distance': 200,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    }

  }


</script>
<style scoped>
  .jumbotron-register-fixed {
    height: 200px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;
    margin: 0;
  }

  a.list-group-item:hover, a.list-group-item:focus, a.list-group-item:active {
    background-color: #0da9ef !important;
    color: white !important;
  }


</style>
