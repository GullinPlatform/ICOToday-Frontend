<template>
  <div>
    <!-- ======== @Region: #highlighted ======== -->
    <div id="highlighted" class="border-bottom-0 bg-black">
      <!-- Image Banner: Use the the data-bg-img functionality to create a simple image banner Use spacer classes to make the banner larger with padding, allows for easy responsive changes too see: elements-ctas.htm To make the banner full height/screen add the attributes: data-toggle="full-height" data-offset="#header" -->
      <div class="overlay overlay-op-7 text-center px-3 pb-5 pt-7 py-lg-8 flex-valign" data-bg-img="static/img/backgrounds/computer-screens.jpg" data-css='{"background-position": "center bottom","background-attachment": "fixed"}' data-animate="fadeIn" data-toggle="full-height" data-breakpoint="992">
        <div data-scroll="scrollax" data-scrollax-y-ratio="1000" class="py-lg-10 pt-lg-8">
          <h2 class="display-3 text-white text-uppercase font-weight-bold" data-animate="fadeInDown" data-animate-delay="0.6">
           深度计算 
            </span>
          </h2>
          <h3 class="text-grey font-weight-normal" data-animate="fadeInUp" data-animate-delay="0.8">
            <span data-typed='["Share Your Intelligence", "共享才智，挑战未来"]' data-typed-settings='{"delay":2000, "speed":120,"breakLines":false, "deleteDelay":1400, "doneClass":{"#get-btn":"animated fadeIn"}}'></span>
          </h3>
        </div>
      </div>
    </div>
  
    <!-- ======== @Region: #content ======== -->
    <div id="content" class="pt-5 pb-6 bg-white pos-relative pos-zindex-10">
      <!-- Promo -->
      <div class="container pb-6">
        <hr class="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
        <h3 class="text-left text-uppercase mt-0 mb-3">
          活动／比赛
        </h3>
        <div class="row text-left">
          <div class="col-lg-4 d-lg-flex mb-3">
            <div class="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b" data-bg-img="static/img/homes/code.jpg">
              <h2 class="text-white text-uppercase font-weight-bold mb-0 display-4">
                <span data-toggle="count-to" data-to="238" data-from="0">0</span>
              </h2>
              <p class="text-white text-uppercase mb-0">Developer Jobs</p>
              <hr class="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary" />
            </div>
          </div>
          <div class="col-lg-4 d-lg-flex mb-3">
            <div class="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b" data-bg-img="static/img/homes/desk.jpg">
              <h2 class="text-white text-uppercase font-weight-bold mb-0 display-4">
                <span data-toggle="count-to" data-to="538" data-from="0">0</span>
              </h2>
              <p class="text-white text-uppercase mb-0">Admin Jobs</p>
              <hr class="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary" />
            </div>
          </div>
          <div class="col-lg-4 d-lg-flex mb-3">
            <div class="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b" data-bg-img="static/img/homes/happy.jpg">
              <h2 class="text-white text-uppercase font-weight-bold mb-0 display-4">
                <span data-toggle="count-to" data-to="138" data-from="0">0</span>
              </h2>
              <p class="text-white text-uppercase mb-0">Freelance Jobs</p>
              <hr class="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary" />
            </div>
          </div>
        </div>
      </div>
      <div class="container pb-6">
        <div class="row">
          <!-- Sidebar content -->
          <div class="col-lg-3 push-lg-9 mb-4 mb-lg-0">
            <div>
              <hr class="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
              <h3 class="text-uppercase mb-3">
                Filter Jobs
              </h3>
              <div class="p-3 bg-faded">
                <h4>
                  Location
                </h4>
                <div class="pos-relative">
                  <i class="fa fa-map-marker icon-1x pos-absolute pos-l mt-1"></i>
                  <input class="form-control form-control-transparent pl-4" type="text" placeholder="Location ie. London">
                  <hr class="mt-1 mb-0">
                </div>
                <h4 class="mt-3">
                  Remote OK
                </h4>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value=""> Remote OK
                  </label>
                </div>
                <hr class="my-3">
                <h4>
                  Job Type
                </h4>
                <div class="checkboxes">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" value=""> Freelance
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" value=""> Full Time
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" value=""> Part Time
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" value=""> Internship
                    </label>
                  </div>
                </div>
                <hr class="my-3">
                <a href="#" class="btn btn-primary btn-block btn-rounded">Filter</a>
              </div>
            </div>
          </div>
          <!-- Main content -->
          <div class="col-lg-9 pull-lg-3 mb-3">
            <!-- Jobs list -->
            <hr class="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
            <h3 class="mb-3 font-weight-bold text-uppercase">
              本周
              <span class="text-xs text-muted font-weight-normal text-normalcase op-7">2017年6月</span>
              <router-link :to="{name:'question_list'}" class="text-xs float-md-right mb-0">>>更多</router-link>
            </h3>
  
            <!-- Job 1 -->
            <div class="card px-3 py-4 mb-3 row-hover pos-relative">
              <div class="row align-items-center ">
                <div class="col-md-2">
                  <img src="static/img/customers/customer-1.png" alt="RRT Productions" class="img-fluid hidden-sm-down" />
                </div>
                <div class="col-md-8">
                  <h4 class="mb-0">
                    Bootstrap Designer/Developer
                  </h4>
                  <p class="text-muted mb-2 text-sm">@
                    <a href="#" class="font-weight-bold text-muted">RRT Productions</a> (Senior level, Contract)</p>
                  <p class="text-muted mb-2 text-sm">
                    <span class="d-block d-md-inline">
                      <i class="fa fa-map-marker"></i> Europe Based</span>
                    <span class="d-block d-md-inline">
                      <i class="fa fa-money ml-md-3"></i> $70USD/hour</span>
                    <span class="d-block d-md-inline">
                      <i class="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div class="col-md-2 text-md-center">
                  <a href="#" class="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" class="text-muted text-xs op-7">
                    <i class="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>
            <!-- Job 2 -->
            <div class="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative">
              <div class="row align-items-center ">
                <span class="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">featured</span>
                <div class="col-md-2">
                  <img src="static/img/customers/customer-2.png" alt="TSU" class="img-fluid hidden-sm-down" />
                </div>
                <div class="col-md-8">
                  <h4 class="mb-0">
                    Drupal Developer
                  </h4>
                  <p class="text-muted mb-2 text-sm">@
                    <a href="#" class="font-weight-bold text-muted">TSU</a> (Senior level, Full Time Employment)</p>
                  <p class="text-muted mb-2 text-sm">
                    <span class="d-block d-md-inline">
                      <i class="fa fa-map-marker"></i> London, UK</span>
                    <span class="d-block d-md-inline">
                      <i class="fa fa-money ml-md-3"></i> $70USD/hour</span>
                  </p>
                </div>
                <div class="col-md-2 text-md-center">
                  <a href="#" class="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" class="text-muted text-xs op-7">
                    <i class="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>
            <!-- Job 3 -->
            <div class="card px-3 py-4 mb-3 row-hover pos-relative">
              <div class="row align-items-center ">
                <div class="col-md-2">
                  <img src="static/img/customers/customer-1.png" alt="RRT Productions" class="img-fluid hidden-sm-down" />
                </div>
                <div class="col-md-8">
                  <h4 class="mb-0">
                    Bootstrap Designer/Developer
                  </h4>
                  <p class="text-muted mb-2 text-sm">@
                    <a href="#" class="font-weight-bold text-muted">RRT Productions</a> (Senior level, Contract)</p>
                  <p class="text-muted mb-2 text-sm">
                    <span class="d-block d-md-inline">
                      <i class="fa fa-map-marker"></i> Europe Based</span>
                    <span class="d-block d-md-inline">
                      <i class="fa fa-money ml-md-3"></i> $70USD/hour</span>
                    <span class="d-block d-md-inline">
                      <i class="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div class="col-md-2 text-md-center">
                  <a href="#" class="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" class="text-muted text-xs op-7">
                    <i class="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>
            <!-- Job 4 -->
            <div class="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative">
              <div class="row align-items-center ">
                <span class="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">featured</span>
                <div class="col-md-2">
                  <img src="static/img/customers/customer-2.png" alt="TSU" class="img-fluid hidden-sm-down" />
                </div>
                <div class="col-md-8">
                  <h4 class="mb-0">
                    Drupal Developer
                  </h4>
                  <p class="text-muted mb-2 text-sm">@
                    <a href="#" class="font-weight-bold text-muted">TSU</a> (Senior level, Full Time Employment)</p>
                  <p class="text-muted mb-2 text-sm">
                    <span class="d-block d-md-inline">
                      <i class="fa fa-map-marker"></i> London, UK</span>
                    <span class="d-block d-md-inline">
                      <i class="fa fa-money ml-md-3"></i> $70USD/hour</span>
                  </p>
                </div>
                <div class="col-md-2 text-md-center">
                  <a href="#" class="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" class="text-muted text-xs op-7">
                    <i class="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>
            <!-- Job 5 -->
            <div class="card px-3 py-4 mb-3 row-hover pos-relative">
              <div class="row align-items-center ">
                <div class="col-md-2">
                  <img src="static/img/customers/customer-3.png" alt="Bergman Foremann" class="img-fluid hidden-sm-down" />
                </div>
                <div class="col-md-8">
                  <h4 class="mb-0">
                    UX Designer
                  </h4>
                  <p class="text-muted mb-2 text-sm">@
                    <a href="#" class="font-weight-bold text-muted">Bergman Foremann</a> (Senior level, Full Time Employment)</p>
                  <p class="text-muted mb-2 text-sm">
                    <span class="d-block d-md-inline">
                      <i class="fa fa-map-marker"></i> New York, US</span>
                    <span class="d-block d-md-inline">
                      <i class="fa fa-money ml-md-3"></i> $70000000USD/year + benefits</span>
                    <span class="d-block d-md-inline">
                      <i class="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div class="col-md-2 text-md-center">
                  <a href="#" class="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" class="text-muted text-xs op-7">
                    <i class="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>
            <!-- Call to action -->
            <div class="row">
              <div class="col-md-12 text-md-center mt-0">
                <router-link :to="{name:'question_list'}" class="btn btn-primary btn-md btn-rounded">
                  + 查看更多
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <!-- Customer logos -->
        <hr class="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
        <h3 class="text-left text-uppercase mt-0 mb-3">
         合作单位 
        </h3>
        <!-- Logos carousel Uses Owl Carousel plugin All options here are customisable from the data-owl-carousel-settings="{OBJECT}" item via data- attributes: http://www.owlgraphic.com/owlcarousel/#customizing ie. data-settings="{"items": "4", "lazyLoad":"true", "navigation":"true"}" -->
        <div class="mt-4" data-toggle="owl-carousel" data-owl-carousel-settings='{"items": 4, "lazyLoad":true, "dots":true, "loop":true, "autoplay":true, "autoplayTimeout":1500}'>
          <a href="http://www.psu.edu">
            <img data-src="/static/img/collaborators/PSU_logo.png" class="owl-lazy img-fluid" />
  
          </a>
          <a href="http://www.pku.edu.cn/">
            <img data-src="/static/img/collaborators/PKU_logo.png" class="owl-lazy img-fluid" />
  
          </a>
          <a href="http://www.cas.ac.cn/">
            <img data-src="/static/img/collaborators/CAS_logo.png" class="owl-lazy img-fluid" />
  
          </a>
          <a href="http://www.buaa.edu.cn/">
            <img data-src="/static/img/collaborators/BUAA_logo.png" class="owl-lazy img-fluid" />
  
          </a>
          <a href="http://www.xtu.edu.cn/">
            <img data-src="/static/img/collaborators/XTU_logo.png" class="owl-lazy img-fluid" />
  
          </a>
          <a href="http://ky.xiangya.com.cn/">
            <img data-src="/static/img/collaborators/XYH_logo.png" class="owl-lazy img-fluid" />
          </a>
          <a href="http://www.ynufe.edu.cn/">
            <img data-src="/static/img/collaborators/YNUFE_logo.png" class="owl-lazy img-fluid" />
  
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

