<template>
  <!-- ======== @Region: #footer ======== -->
  <footer class="site-footer mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <!-- Contact Info-->
          <section class="widget widget-light-skin">
            <h3 class="widget-title">Get In Touch With Us</h3>

            <p><i class="fa fa-envelope"></i>
              <a class="navi-link-light" href="mailto:team@icotoday.io" target="_top">team@icotoday.io</a>
            </p>

            <a class="social-button shape-circle sb-facebook sb-light-skin" target="_blank" href="https://www.facebook.com/ICOToday/ "><i class="socicon-facebook"></i></a>
            <a class="social-button shape-circle sb-twitter sb-light-skin" target="_blank" href="https://twitter.com/icotoday_io"><i class="socicon-twitter"></i></a>
            <a class="social-button shape-circle sb-reddit sb-light-skin" target="_blank" href="https://www.reddit.com/user/icotoday/ "><i class="socicon-reddit"></i></a>
            <br>
            <a class="social-button shape-circle sb-telegram sb-light-skin" target="_blank" href="https://t.me/joinchat/DDHesUIRiVuAx6Sne4XgLw"><i class="socicon-telegram"></i></a>
            <a class="social-button shape-circle sb-medium sb-light-skin" target="_blank" href="https://medium.com/@icotoday"><i class="socicon-medium"></i></a>

          </section>
        </div>

        <div class="col-lg-4 col-md-6">
          <!-- About Us-->
          <section class="widget widget-links widget-light-skin">
            <h3 class="widget-title">About Us</h3>
            <ul>
              <li><a target="_blank" href="https://trello.com/b/JxFOIC9x">Upcoming Releases</a></li>
              <li><a href="/terms?type=rating">Analyst Rating Guidelines</a></li>
              <li>
                <router-link :to="{name:'premium'}" class="hidden-sm-down">
                  <span>Advertise Here</span>
                </router-link>
              </li>
            </ul>
          </section>
        </div>
        <div class="col-lg-4 col-md-6">
          <!-- Account / Shipping Info-->
          <section class="widget widget-links widget-light-skin">
            <h3 class="widget-title">Terms and Privacy</h3>
            <ul>
              <li><a href="/terms?type=terms">Terms and Services</a></li>
              <li><a href="/terms?type=privacy">Privacy Policy</a></li>
            </ul>
          </section>
        </div>
      </div>
      <!-- Copyright-->
      <p class="footer-copyright">© 2017 All rights reserved. ICOToday</p>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'Footer',
    computed: {
      me () {
        return this.$store.getters.self
      },
      login_status () {
        return this.$store.getters.login_status
      }
    }
  }
</script>
