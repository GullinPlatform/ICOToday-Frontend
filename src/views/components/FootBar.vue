<template>
    <!-- ======== @Region: #footer ======== -->
    <footer id="footer" class="py-3 p-0 footer-light">
        <div class="container pt-2 pb-2" v-if="$route.name=='landing'">
            <div class="row">
                <div class="col-md-4">
                    <h4 class="text-uppercase">
                        Contact Us
                    </h4>
                    <address>
                        <ul class="list-unstyled">
                            <li>
                                <abbr title="Phone">
                                    <i class="fa fa-phone fa-fw"></i>
                                </abbr> 8147772479
                            </li>
                            <li>
                                <abbr title="Email">
                                    <i class="fa fa-envelope fa-fw"></i>
                                </abbr> <a href="mailto:C0dezLee@gmail.com">C0dezLee@gmail.com</a>
                            </li>
                            <li>
                                <abbr title="Email">
                                    <i class="fa fa-envelope fa-fw"></i>
                                </abbr> <a href="mailto:kitongajoseph@gmail.com">KitongaJoseph@gmail.com</a>
                            </li>
                            <li>
                                <abbr title="Address">
                                    <i class="fa fa-globe fa-fw"></i>
                                </abbr> <a href="http://www.icotoday.io">http://www.icotoday.io</a>
                            </li>
                        </ul>
                    </address>
                </div>
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                    <h4 class="text-uppercase text-grey-dark">
                        About Us
                    </h4>
                    <p>
                    Launch Your ICO Today!
                    </p>
                </div>
            </div>
        </div>
        <div class="container" v-else>

            <div class="row">
                <div class="col-md-6 ">
                    <p class="mb-0 text-sm ">Copyright 2017 &copy; ICOToday</p>
                    <ul class="list-inline footer-links mb-0 text-sm ">
                        <li class="list-inline-item ">
                            <a href="# ">Terms</a>
                        </li>
                        <li class="list-inline-item ">
                            <a href="# ">Privacy</a>
                        </li>
                        <li class="list-inline-item ">
                            <a href="# ">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 flex-valign">
                    <div class="float-md-right ml-md-auto">
                        <!--@todo: replace with company social media details-->
                        <a href="#" class="btn btn-sm btn-icon"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="btn btn-sm btn-icon"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="btn btn-sm btn-icon"><i class="fa fa-linkedin"></i></a>
                        <a href="#" class="btn btn-sm btn-icon"><i class="fa fa-google-plus"></i></a>
                        <a href="#top" class="btn btn-sm btn-icon" title="Back to top"><i
                                class="fa fa-chevron-up"></i></a>
                    </div>
                </div>
            </div>

        </div>
        <hr class="my-0 hr-blank op-2">
        <!--@todo: replace with company copyright details-->
        <a href="#top"
           class="btn btn-icon btn-inverse pos-fixed pos-b pos-r mr-3 mb-3 scroll-state-hidden hidden-md-down"
           title="Back to top" data-scroll="scroll-state"><i class="fa fa-chevron-up"></i>
        </a>
    </footer>

</template>
<script>
  export default {
    name: 'Footer'
  }
</script>
