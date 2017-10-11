<template>
  <div class="light-grey-fixed">
    <!-- Begin Jumbotron -->
    <div id="home" class="jumbotron jumbotron-register">
      <div id="particles-js"></div><!-- /.particles div -->
      <div class="container center-vertically-holder">
        <div class="center-vertically ">
          <div class="row">
            <div class="col-md-7">
              <h2 class="text-white text-uppercase">
                Seamless Platform<br>
                for Launching and Investing<br>
                on Blockchain
              </h2>

              <h5 class="mt-2">
                <a target="_blank" href="https://s3.us-east-2.amazonaws.com/icotoday/ICOToday+White+paper.pdf"> READ THE WHITE PAPER</a>
              </h5>

              <div class="countdown">
                <div class="item mb-0">
                  <div class="days">--</div>
                  <span class="days_ref">Days</span>
                </div>
                <div class="item mb-0">
                  <div class="hours">--</div>
                  <span class="hours_ref">Hours</span>
                </div>
                <div class="item mb-0">
                  <div class="minutes">--</div>
                  <span class="minutes_ref">Mins</span>
                </div>
                <div class="item mb-0">
                  <div class="seconds">--</div>
                  <span class="seconds_ref">Secs</span>
                </div>
              </div>
              <div>
              <span class="text-white text-uppercase">
                Our ICO Date Is Yet To Be Announced
              </span>
              </div>

            </div>
            <div class="col-sm-5 float-right">
              <div class="register-form pb-0 pt-3">
                <h3 class="no-margin-top">Sign Up for our Whitelist</h3>
                <div class="row">
                  <div class="form-group col-sm-12 mb-3">
                    <input class="form-control" placeholder="Email Address" v-model="email"
                           @keydown.enter="whiteListSubmit($event)">
                  </div>
                  <div class="form-group col-sm-4 mb-2">
                    <button class="btn btn-primary mt-0"
                            @click="whiteListSubmit($event)">Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end jumbotron -->

    <!-- begin cards group -->
    <div class="container padding-bottom-2x mb-2">
      <hr class="">
      <div class="text-center mt-30 mb-30">
        <h1>OUR FOCUS</h1>
      </div>
      <hr>
      <div class="row align-items-center padding-top-2x padding-bottom-2x tokensale-focus">
        <div class="col-md-2"></div>
        <div class="col-md-3"><img src="../../../static/img/tokensale/community.png" alt="Community"></div>
        <div class="col-md-5 text-md-left text-center">
          <div class="mt-30 hidden-md-up"></div>
          <h2>Community</h2>
          <p class="mb-4">ICOToday is a community driven platform where new investors can follow and learn from experienced investors and community analysts. In addition, quality ICO’s are chosen by experts and experts are chosen by investors.</p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <hr>
      <div class="row align-items-center padding-top-2x padding-bottom-2x">
        <div class="col-md-3 order-md-2"><img src="../../../static/img/tokensale/security_t.png" alt="Security"></div>
        <div class="col-md-6 order-md-1 text-md-left text-center">
          <div class="mt-30 hidden-md-up"></div>
          <h2>Security
          </h2>
          <p>We protect investors' funds by providing a platform with direct information releases from the ICO launch team, secured with two factor authentication therefore, attracting new users to ICOs.</p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <hr>
      <div class="row align-items-center padding-top-2x padding-bottom-2x">
        <div class="col-md-2"></div>
        <div class="col-md-3"><img src="../../../static/img/tokensale/easy_t.png" alt="Delivery"></div>
        <div class="col-md-5 text-md-left text-center">
          <div class="mt-30 hidden-md-up"></div>
          <h2>Ease of Use</h2>
          <p class="mb-4">The current process of investing in ICOs is tedious and intimidating for new investors. We designed our platform to create an easy and intuitive process for ICO investing.</p>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
    <!-- begin cards group -->
    <div class="container padding-bottom-2x mb-2">
      <hr class="mt-3">
      <div class="text-center mt-30 mb-30">
        <h1>HOW IT WORKS</h1>
      </div>
      <hr class="margin-bottom-1x">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div class="step step-hover step-dark">
            <h3 class="step-digit">01</h3>
            <div class="step-body">
              <h3 class="step-title">Company</h3>
              <p class="step-text">Company submits an ICO application and community selected analysts review and rate ICO. Applications with a less than 50% will not be approved to ensure only the best ICOs are listed.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div class="step step-hover step-dark">
            <h3 class="step-digit">02</h3>
            <div class="step-body">
              <h3 class="step-title">Communication </h3>
              <p class="step-text">Approved ICOs will have secure and direct communication with investors. Every update will be secured through two factor auntentication to keep hackers out.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div class="step step-hover step-dark">
            <h3 class="step-digit">03</h3>
            <div class="step-body">
              <h3 class="step-title">Community</h3>
              <p class="step-text">Investors will be able to follow other investors and analysts and subscribe to ICOs to receive all important updates from the company during the ICO and post-ICO.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div class="step step-hover step-dark">
            <h3 class="step-digit">04</h3>
            <div class="step-body">
              <h3 class="step-title">Auto Investment</h3>
              <p class="step-text">Investors will be able to easily support upcoming ICOs through our auto investment feature with either Ether or BTC and eventually USD through our smart contract.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- begin cards group -->
    <div class="container padding-bottom-2x mb-2">
      <hr class="margin-bottom-1x">
      <div class="container mb-2">
        <div class="text-center padding-top-0x mb-30">
          <h1>TOKEN DISTRIBUTION</h1>
        </div>
        <hr class="margin-bottom-1x">
        <div class="container mt-5">
          <div class="row text-center">
            <div class="col-sm-3">
              <canvas id="crowdsale_pie"></canvas>
              <h3 class="mt-2">50%</h3>
              <h5 class="mt-2 text-thin">Tokens issued for crowdsale</h5>
            </div>
            <div class="col-sm-3">
              <canvas id="community_pie"></canvas>
              <h3 class="mt-2">20%</h3>
              <h5 class="mt-2 text-thin">Retained for community</h5>
            </div>
            <div class="col-sm-3">
              <canvas id="team_pie"></canvas>
              <h3 class="mt-2">30%</h3>
              <h5 class="mt-2 text-thin">Retained by ICOToday</h5>
            </div>
            <div class="col-sm-3">
              <div class="card token-sale-card">
                <div class="card-body text-left">
                  <p class="card-text">Symbol: <span class="text-bold">ICT</span></p>
                  <p class="card-text">Token price: <span class="text-bold">0.001 ETH</span></p>
                  <p class="card-text">Tokens: <span class="text-bold">173 Million ICT</span></p>
                  <p class="card-text">Platform: <span class="text-bold">ERC20</span></p>
                  <p class=" text-center">
                    <a class="btn btn-outline-primary btn-sm" target="_blank" href="https://s3.us-east-2.amazonaws.com/icotoday/ICOToday+White+paper.pdf">Detail</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container padding-bottom-2x mb-2">
      <hr class="margin-bottom-1x mt-30">
      <div class="container mb-2">
        <div class="text-center padding-top-0x mb-30">
          <h1>TOKEN SALE PLAN</h1>
        </div>
        <hr class="mb-30">
        <div class="container">
          <div class="row text-center mt-30">
            <div class="col-sm-12 mt-30">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 15%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-success" role="progressbar" style="width: 40%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-warning" role="progressbar" style="width: 45%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            <h4>To be Announced</h4>
          </div>
        </div>
      </div>
    </div>


    <div class="container">
      <hr class="margin-bottom-1x mt-30">
      <div class="text-center mb-30">
        <h1>OUR TEAM</h1>
      </div>
      <hr class="margin-bottom-1x">
      <div class="row">
        <div class="col-md-3 col-sm-6 mb-30 text-center"><img
          class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2"
          src="../../../static/img/team/joe_pic.png" alt="Team">
          <h6>Joseph Kitonga</h6>
          <p class="text-muted mb-2">CEO</p>
          <div class="social-bar">
            <a target="_blank" class="social-button shape-circle sb-linkedin"
               href="https://www.linkedin.com/in/joseph-kitonga-69702811b/"
               data-toggle="tooltip" data-placement="top" title="Linkedin">
              <i class="socicon-linkedin"></i></a>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 mb-30 text-center"><img
          class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2"
          src="../../../static/img/team/john_pic2.png" alt="Team">
          <h6>John Worthley</h6>
          <p class="text-muted mb-2">CFO</p>
          <div class="social-bar">
            <a target="_blank" class="social-button shape-circle sb-linkedin"
               href="https://www.linkedin.com/in/john-worthley-b6597295//"
               data-toggle="tooltip" data-placement="top" title="Linkedin">
              <i class="socicon-linkedin"></i>
            </a>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 mb-30 text-center"><img
          class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2"
          src="../../../static/img/team/nader_pic2.png" alt="Team">
          <h6>Nader Sadek</h6>
          <p class="text-muted mb-2">COO</p>
          <div class="social-bar">
            <a target="_blank" class="social-button shape-circle sb-linkedin"
               href="https://www.linkedin.com/in/nader-sadek-82a081a8/"
               data-toggle="tooltip" data-placement="top" title="Linkedin">
              <i class="socicon-linkedin"></i>
            </a>
          </div>

        </div>
        <div class="col-md-2 col-sm-6 mb-30 text-center">
          <img target="_blank"
               class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2"
               src="../../../static/img/team/elorm_pic.jpg"
               alt="Team">
          <h6>Elorm Koto</h6>
          <p class="text-muted mb-2">CTO</p>
          <div class="social-bar">
            <a target="_blank" class="social-button shape-circle sb-linkedin"
               href="https://www.linkedin.com/in/elorm-koto-7a6537131/"
               data-toggle="tooltip" data-placement="top" title="Linkedin">
              <i class="socicon-linkedin"></i>
            </a>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 mb-30 text-center">
          <img target="_blank"
               class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2"
               src="../../../static/img/team/Rounded.png"
               alt="Team">
          <h6>Alex Patin</h6>
          <p class="text-muted mb-2">CPO</p>
          <div class="social-bar">
            <a target="_blank" class="social-button shape-circle sb-linkedin"
               href="https://www.linkedin.com/in/thealexpatin/"
               data-toggle="tooltip" data-placement="top" title="Linkedin">
              <i class="socicon-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>


    <div class="container padding-bottom-2x mb-2 mt-5">
      <hr class="margin-bottom-1x mt-30">
      <div class="text-center padding-top-0x mb-30">
        <h1>OUR ADVISORS</h1>
      </div>
      <hr class="margin-bottom-1x">

      <div class="row">
        <div class="col-md-4 col-sm-6 mb-30 text-center"><img
          class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2"
          src="../../../static/img/team/nitin_gaur.jpg" alt="Team">
          <h6>Nitin Gaur</h6>
          <p class="text-muted mb-2">Director IBM Blockchain Labs</p>
          <div class="social-bar">
            <a target="_blank" class="social-button shape-circle sb-linkedin"
               href="https://www.linkedin.com/in/nitin-gaur-75571a9/"
               data-toggle="tooltip" data-placement="top" title="Linkedin">
              <i class="socicon-linkedin"></i></a>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mb-30 text-center"><img
          class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2"
          src="../../../static/img/team/hoop_somuah.jpg" alt="Team">
          <h6>Hoop Somuah</h6>
          <p class="text-muted mb-2">Technical Advisor, Office of CEO, Microsoft</p>
          <div class="social-bar">
            <a target="_blank" class="social-button shape-circle sb-linkedin"
               href="https://www.linkedin.com/in/hoopsomuah/"
               data-toggle="tooltip" data-placement="top" title="Linkedin">
              <i class="socicon-linkedin"></i>
            </a>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mb-30 text-center"><img
          class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2"
          src="../../../static/img/team/ismail_malik.png" alt="Team">
          <h6>Ismail Malik</h6>
          <p class="text-muted mb-2">Founder and CEO, Blockchain Lab</p>
          <div class="social-bar">
            <a target="_blank" class="social-button shape-circle sb-linkedin"
               href="https://www.linkedin.com/in/blockchain/"
               data-toggle="tooltip" data-placement="top" title="Linkedin">
              <i class="socicon-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!--

         <div class="container padding-bottom-2x mb-2">


            <h6 class="text-muted text-normal text-uppercase">Our Advisors</h6>
            <hr class="margin-bottom-1x">

            <div class="row">
                      <div class="col-md-3 col-sm-6 mb-30 text-center"><img class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="../../static/img/team/01.jpg" alt="Team">
                        <h6>Grace Wright</h6>
                        <p class="text-muted mb-2">Founder, CEO</p>
                        <div class="social-bar"><a class="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="socicon-facebook"></i></a><a class="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="socicon-twitter"></i></a><a class="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i class="socicon-googleplus"></i></a></div>
                      </div>
                      <div class="col-md-3 col-sm-6 mb-30 text-center"><img class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="../../static/img/team/02.jpg" alt="Team">
                        <h6>Taylor Jackson</h6>
                        <p class="text-muted mb-2">Financial Director</p>
                        <div class="social-bar"><a class="social-button shape-circle sb-skype" href="#" data-toggle="tooltip" data-placement="top" title="Skype"><i class="socicon-skype"></i></a><a class="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="socicon-facebook"></i></a><a class="social-button shape-circle sb-paypal" href="#" data-toggle="tooltip" data-placement="top" title="PayPal"><i class="socicon-paypal"></i></a></div>
                      </div>
                      <div class="col-md-3 col-sm-6 mb-30 text-center"><img class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="../../static/img/team/03.jpg" alt="Team">
                        <h6>Quinton Cross</h6>
                        <p class="text-muted mb-2">Marketing Director</p>
                        <div class="social-bar"><a class="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="socicon-twitter"></i></a><a class="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i class="socicon-googleplus"></i></a><a class="social-button shape-circle sb-email" href="#" data-toggle="tooltip" data-placement="top" title="Email"><i class="socicon-mail"></i></a></div>
                      </div>
                      <div class="col-md-3 col-sm-6 mb-30 text-center"><img class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="../../static/img/team/04.jpg" alt="Team">
                        <h6>Liana Mullen</h6>
                        <p class="text-muted mb-2">Lead Designer</p>
                        <div class="social-bar"><a class="social-button shape-circle sb-behance" href="#" data-toggle="tooltip" data-placement="top" title="Behance"><i class="socicon-behance"></i></a><a class="social-button shape-circle sb-dribbble" href="#" data-toggle="tooltip" data-placement="top" title="Dribbble"><i class="socicon-dribbble"></i></a><a class="social-button shape-circle sb-instagram" href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i class="socicon-instagram"></i></a></div>
                      </div>
                    </div>
          </div> -->
  </div>
</template>


<script>
  import Chart from 'chart.js/dist/Chart.bundle.min'

  export default {
    name: 'TokenSale',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Token Sale',
      }
    },
    data () {
      return {
        // for whitelist register
        email: '',
      }
    },
    methods: {
      whiteListSubmit (e) {
        console.log('123')
        e.preventDefault()
        if (!this.login_status) {
          this.$store.dispatch('whiteListEmail', this.email)
        }
        else {
          this.$store.dispatch('toastr', {
            type: 'success',
            title: 'Success',
            message: 'By being one of the first users to register, you were already added to our white list!'
          })
        }
      },
    },
    computed: {
      login_status () {
        return this.$store.getters.login_status
      },
    },
    mounted () {
      const crowdsale_pie = new Chart(document.getElementById('crowdsale_pie').getContext('2d'), {
        type: 'doughnut',
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
        data: {
          datasets: [{
            backgroundColor: [
              '#0da9ef',
              '#f1f1f1',
              '#f1f1f1'
            ],
            data: [10, 4, 6],
          }],
        }
      })
      const community_pie = new Chart(document.getElementById('community_pie').getContext('2d'), {
        type: 'doughnut',
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
        data: {
          datasets: [{
            backgroundColor: [
              '#f1f1f1',
              '#0da9ef',
              '#f1f1f1'
            ],
            data: [10, 4, 6],
          }],
        }
      })
      const team_pie = new Chart(document.getElementById('team_pie').getContext('2d'), {
        type: 'doughnut',
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
        data: {
          datasets: [{
            backgroundColor: [
              '#f1f1f1',
              '#f1f1f1',
              '#0da9ef'
            ],
            data: [10, 4, 6],
          }],
        }
      })

      crowdsale_pie.canvas.parentNode.style.height = '200px'
      community_pie.canvas.parentNode.style.height = '200px'
      team_pie.canvas.parentNode.style.height = '200px'
      // Particles JS
      /* global particlesJS:true */
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
    },
  }

</script>

<style lang="scss" scoped>
  p {
    font-size: 17px;
  }

  .token-sale-card {
    box-shadow: 0 20px 72px -20px rgba(0, 0, 0, .25);
  }

  //== Variables
  // -------------------------------------------------------

  $grid-vertical-step: 24px;
  $border-radius-default: 5px;
  $gray-darker: #222222;
  $gray-dark: #404040;
  $gray: #999999;
  $gray-light: #e7e7e7;
  $gray-lighter: #f5f5f5;
  $white-color: #ffffff;
  $black-color: #000000;
  $font-size-base: 14px;
  $font-size-h3: ceil(($font-size-base * 1.7)); // ~24px

  //
  // SCSS
  // --------------------------------------------------

  .step {
    position: relative;
    transition: .25s;
    border-radius: $border-radius-default;

    .step-digit {
      user-select: none;
    }
    &.step-simple {
      padding: {
        top: floor($grid-vertical-step * 1.89);
        right: $grid-vertical-step;
        bottom: $grid-vertical-step;
        left: floor($grid-vertical-step + 15);
      }
      .step-digit {
        position: absolute;
        top: 0;
        left: 0;
        color: $gray-light;
        font-size: 80px;
        font-weight: 900;
        line-height: .9;
        z-index: 1;
      }
      .step-body {
        position: relative;
        z-index: 2;
      }
    }

    &.step-hover,
    &.step-image {
      padding: {
        top: ceil($grid-vertical-step * 2);
        right: $grid-vertical-step;
        bottom: ceil($grid-vertical-step * 2);
        left: $grid-vertical-step;
      }
      text-align: center;
      overflow: hidden;

      .step-digit {
        display: inline-block;
        padding-bottom: ceil($grid-vertical-step / 2);
        transform: scale(2);
        transition: .3s;
        color: $gray;
        font-size: $font-size-h3;
        font-weight: 900;
      }
      .step-title {
        transition: .3s;
      }
      .step-text {
        margin-bottom: 0;
        transition: .3s;
        color: $gray;
      }
      &:hover {
        box-shadow: 0 20px 72px -20px rgba(0, 0, 0, .25);
        cursor: default;

        .step-digit {
          transform: scale(1);
        }
        .step-title {
          transform: scale(1.5);
        }
        .step-text,
        .step-digit {
          color: $gray-dark;
        }
      }
    }

    &.step-image {
      transform: translateZ(0);
      border-radius: $border-radius-default;
      .step-bg-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: .45s;
        background: {
          position: center;
          repeat: no-repeat;
          size: cover;
        }
        opacity: 0;
        visibility: hidden;
        z-index: 0;

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba($gray-darker, .45);
          content: '';
          z-index: 5;
        }
      }
      &:hover {
        .step-bg-image {
          transform: scale(1.1);
          opacity: 1;
          visibility: visible;
          backface-visibility: hidden;
        }
        .step-digit,
        .step-text {
          color: $white-color;
          opacity: .5;
        }
        .step-title {
          color: $white-color;
        }
      }
    }

    // Light Skin
    &.step-light {
      .step-digit, .step-text {
        color: $white-color;
        opacity: .25;
      }
      .step-text {
        opacity: .5;
      }
      &.step-hover,
      &.step-image {
        .step-digit {
          opacity: .5;
        }
      }

      .step-title {
        color: $white-color;
      }
      &.step-hover:hover {
        background-color: $white-color;
        .step-digit, .step-text {
          color: $gray-dark;
          opacity: 1;
        }
        .step-title {
          color: $gray-darker;
        }
      }
    }
  }

  .light-grey-fixed {
    background-color: #f6f6f6;
    margin-bottom: -50px;
  }

</style>
