<template>
    <!-- ======== @Region: #footer ======== -->
    <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <!-- Contact Info-->
                    <section class="widget widget-light-skin">
                        <h3 class="widget-title">Get In Touch With Us</h3>

                        <p><i class="fa fa-envelope"></i>
                            <a class="navi-link-light" href="mailto:team@icotoday.io" target="_top">team@icotoday.io</a>
                        </p>

                        <a class="social-button shape-circle sb-facebook sb-light-skin"target="_blank" href="https://www.facebook.com/ICOToday/ "><i class="socicon-facebook"></i></a>
                        <a class="social-button shape-circle sb-twitter sb-light-skin" target="_blank" href="https://twitter.com/ICO_Today?lang=en "><i class="socicon-twitter"></i></a>
                        <a class="social-button shape-circle sb-reddit sb-light-skin"  target="_blank" href="https://www.reddit.com/user/icotoday/ "><i class="socicon-reddit"></i></a>
                        <br>
                        <a class="social-button shape-circle sb-telegram sb-light-skin" target="_blank" href="https://t.me/joinchat/DDHesUIRiVuAx6Sne4XgLw"><i class="socicon-telegram"></i></a>
                        <a class="social-button shape-circle sb-telegram sb-light-skin" target="_blank" href="https://icotoday.slack.com/messages/@slackbot/team/ico_today/"><i class="fa fa-slack"></i></a>
                        <a class="social-button shape-circle sb-medium sb-light-skin" target="_blank" href="https://medium.com/@icotoday"><i class="socicon-medium"></i></a>

                    </section>
                </div>

                <div class="col-lg-4 col-md-6">
                    <!-- About Us-->
                    <section class="widget widget-links widget-light-skin">
                        <h3 class="widget-title">About Us</h3>
                        <ul>
                            <li><a target="_blank" href="https://trello.com/b/JxFOIC9x">Upcoming Releases</a></li>
                            <li><a href="/white-paper">White Paper</a></li>
                            <li><a href="/terms?type=terms">Terms and Services</a></li>
                            <li><a href="/terms?type=privacy">Privacy Policy</a></li>
                            <li><a href="/terms?type=token">Token Sale Agreement</a></li>
                            <li><a href="/terms?type=rating">Expert Rating Guidelines</a></li>

                        </ul>
                    </section>
                </div>
                <div class="col-lg-4 col-md-6">
                    <!-- Account / Shipping Info-->
                    <section class="widget widget-links widget-light-skin">
                        <h3 class="widget-title">Account</h3>
                        <ul>
                            <li>
                                <router-link :to="{name:'me_settings'}">Your Account</router-link>
                            </li>
                            <li v-if="me.type===0">
                                <router-link :to="{name:'me_created'}">Your ICOs</router-link>
                            </li>
                            <li v-else>
                                <router-link :to="{name:'me_marked'}">Your ICOs</router-link>
                            </li>
                            <li v-if="!login_status">
                                <a href="javascript:void(0)" data-toggle="modal" data-target="#login-modal">Login</a>
                            </li>
                            <li v-if="!login_status">
                                <a href="javascript:void(0)" data-toggle="modal"
                                   data-target="#signup-modal">Register</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <!-- Copyright-->
            <p class="footer-copyright">© All rights reserved. ICOToday</p>
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
