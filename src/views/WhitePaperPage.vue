<template>
    <div class = "light-grey">
        <!-- Begin Jumbotron -->
        <div id="home" class="jumbotron jumbotron-register">
            <div id="particles-js"></div><!-- /.particles div -->
            <div class="container center-vertically-holder">
                <div class="center-vertically ">
                    <div class="row">
                        <div class="col-sm-7 col-lg-7 mt40-xs">
                            <h1 class="text-white">
                                <strong>ICOToday</strong>
                            </h1>
                            <h4 class="text-white">
                                Seamless Platform for Launching and Investing in ICOs on Ethereum Blockchain
                            </h4>

                            <a target="_blank" href="https://docs.google.com/document/d/1hlKcNyIdsbN-kp4_ZPmk2SQW6dxBXR4ebzCIGHrATcA/edit?usp=sharing">
                  						 Read the White Paper
                  					</a>
                        </div>

                        <div class="col-sm-5 float-right">
                            <div class="register-form pb-0 pt-3">
                                <h3 class="no-margin-top">Sign up for our WhiteList</h3>
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
        <h6 class="text-muted text-normal text-uppercase padding-top-2x">Our Focus</h6>
            <hr class="margin-bottom-1x">
            <div class="card-group">
              <div class="card margin-bottom-1x light-grey">
                <div class="text-center mt-5 mb-5 light-grey">
                <i class="fa fa-shield fa-5x big-icon" aria-hidden="true"></i>
                </div>

                <div class="card-body" style="background-color:#fff;">
                  <h4 class="card-title">INVESTOR SECURITY</h4>
                  <p class="card-text">We protect investors' money by providing a platform with direct information releases from the ICO launch team, secured with two factor authentication therefore, attracting new users to ICOs.</p>
                </div>

              </div>
              <div class="card margin-bottom-1x light-grey">
                      <div class="text-center mt-5 mb-5">
                      <i class="fa fa-users fa-5x big-icon" aria-hidden="true"></i>
                    </div>
                <div class="card-body" style="background-color:#fff;">
                  <h4 class="card-title">COMMUNITY DRIVEN</h4>
                  <p class="card-text">ICOtoday is a community driven platform where new investors can follow and learn from experienced investors and community experts. In addition, quality ICO’s are chosen by experts and experts are chosen by investors</p>
                </div>
              </div>
              <div class="card margin-bottom-1x light-grey">

                      <div class="text-center mt-5 mb-5">
                      <i class="fa fa-bolt fa-5x big-icon" aria-hidden="true"></i>
                    </div>

                    <div class="card-body" style="background-color:#fff;">
                  <h4 class="card-title">EASE OF USE</h4>
                  <p class="card-text">The current process of investing in ICOs is tedious and intimidating for new investors. We designed our platform to create an easy and intuitive process for ICO investing.</p>
                </div>
              </div>
            </div>
          </div>


          <!-- begin cards group -->
          <div class="container padding-bottom-2x mb-2">
          <h6 class="text-muted text-normal text-uppercase padding-top-2x">How it Works</h6>
              <hr class="margin-bottom-1x">
              <p>1. Company submits ICO Application </p>
              <p>2. Community selected experts review and rate ICO Application </p>
              <p>3. Secure and direct communication between investors and ICO companies</p>
              <p>4. Investors are able to follow other investors and experts and subscribe to ICOs </p>
              <p>5. Easily invest in ICOs <strong> automatically </strong> with either USD or Ether through our smart contract </p>
              <p>6. Post ICO market and price data provided to keep track of gains </p>
          </div>


          <!-- begin cards group -->
          <div class="container padding-bottom-2x mb-2">
          <h6 class="text-muted text-normal text-uppercase padding-top-2x">Token Sale Details</h6>
          <hr class="margin-bottom-1x">

                      <div class="container">
                <div class="row">

                </div><!-- /.row -->
                <div class="row mb15">
                  <div class="col-sm-6 leftReveal">
                    <div>
                      <canvas id="pie_chart"></canvas>
                    </div>
                  </div><!-- /.column -->
                  <div class="col-sm-5 mt30-xs rightReveal">
                    <h5 class="heading-1 mb20">Tokens</h5>
                    <p>20 million tokens issued
                        <br>
                        50% tokens issued for crowdsale<br>
                        20% will be retained for community Incentivization<br>
                        30% will be retained by ICOToday
                    </p>
                    <h5 class="heading-1 mb20">Logistics</h5>
                    <p>Our Token Sale dates have not yet been announced. We will keep you posted.</p>
                    <p> Follow along <a target="_blank" href="https://trello.com/b/JxFOIC9x">here</a> for our upcoming product releases</p>
                    <p> We want to prove we can deliver the secure platform you deserve by building and releasing most of it before our crowdsale and we are close.</p>
                  </div><!-- /.column -->
                </div><!-- /.row -->

                  </div><!-- /.column -->
                          </div>

        <div class="container padding-bottom-2x mb-2 mt-5">

            <h6 class="text-muted text-normal text-uppercase">Our Team</h6>
            <hr class="margin-bottom-1x">

          <div class="row">
                    <div class="col-md-3 col-sm-6 mb-30 text-center"><img class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="../../static/img/team/joe_pic.png" alt="Team">
                      <h6>Joseph Kitonga</h6>
                      <p class="text-muted mb-2">CEO</p>
                      <div class="social-bar"><a target="_blank"  class="social-button shape-circle sb-linkedin" href="https://www.linkedin.com/in/joseph-kitonga-69702811b/" data-toggle="tooltip" data-placement="top" title="Linkedin"><i class="socicon-linkedin"></i></a></div>
                    </div>
                    <div class="col-md-3 col-sm-6 mb-30 text-center"><img class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="../../static/img/team/john_pic2.png" alt="Team">
                      <h6>John Worthley</h6>
                      <p class="text-muted mb-2">CFO</p>
                      <div class="social-bar"><a target="_blank"  class="social-button shape-circle sb-linkedin" href="https://www.linkedin.com/in/john-worthley-b6597295//" data-toggle="tooltip" data-placement="top" title="Linkedin"><i class="socicon-linkedin"></i></a></div>

                    </div>
                    <div class="col-md-3 col-sm-6 mb-30 text-center"><img class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="../../static/img/team/nader_pic2.png" alt="Team">
                      <h6>Nader Sadek</h6>
                      <p class="text-muted mb-2">CIO</p>
                      <div class="social-bar"><a target="_blank"  class="social-button shape-circle sb-linkedin" href="https://www.linkedin.com/in/nader-sadek-82a081a8/" data-toggle="tooltip" data-placement="top" title="Linkedin"><i class="socicon-linkedin"></i></a></div>

                    </div>
                    <div class="col-md-3 col-sm-6 mb-30 text-center"><img target="_blank"  class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="../../static/img/team/elorm_pic.jpg" alt="Team">
                      <h6>Elorm Koto</h6>
                      <p class="text-muted mb-2">CTO</p>
                      <div class="social-bar"><a target="_blank" class="social-button shape-circle sb-linkedin" href="https://www.linkedin.com/in/elorm-koto-7a6537131/" data-toggle="tooltip" data-placement="top" title="Linkedin"><i class="socicon-linkedin"></i></a></div>

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
        </div>


      </div>
</template>


<script>
  export default {
    name: 'WhitePaper',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'White Papper',
      }
    },
    mounted () {
      /* global particlesJS:true Chart:true */
      var ctx = document.getElementById("pie_chart").getContext('2d')
      var pie_chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["Crowdsale", "Community Incentivization", "ICOToday"],
          datasets: [{
            backgroundColor: [
              "#9b59b6",
              "#e74c3c",
              "#34495e"
            ],
            data: [10, 4, 6]
          }]
        }
      })
      pie_chart
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
