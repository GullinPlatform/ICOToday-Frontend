<template>
  <!-- ======== @Region: #footer ======== -->
  <footer id="footer" class="py-3">
  
    <div class="container pt-2 pb-2" v-if="$route.name=='landing'">
      <div class="row">
        <div class="col-md-4">
          <h4 class="text-uppercase text-white">
            Contact Us
          </h4>
          <address>
            <ul class="list-unstyled">
              <li>
                <abbr title="Phone">
                  <i class="fa fa-phone fa-fw"></i>
                </abbr> (+86) 15116931616
              </li>
              <li>
                <abbr title="Email">
                  <i class="fa fa-envelope fa-fw"></i>
                </abbr> <a href="mailto:david@DeepComputation.com">david@DeepComputation.com</a> 
              </li>
              <li>
                <abbr title="Address">
                  <i class="fa fa-globe fa-fw"></i>
                </abbr> <a href="http://www.DeepComputation.com">http://www.DeepComputation.com</a>
              </li>
            </ul>
          </address>
        </div>
      </div>
  
    </div>
    <div class="container" v-else>
      <div class=" row ">
        <!--@todo: replace with company copyright details-->
        <div class="col-md-6 ">
          <p class="mb-0 text-sm ">Copyright 2017 &copy; DeepComputation Technologies</p>
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
        <div class="col-md-6 flex-valign ">
          <div class="float-md-right ml-md-auto ">
            <!--@todo: replace with company social media details-->
            <a href="# " class="btn btn-sm btn-icon btn-inverse btn-rounded ">
              <i class="fa fa-twitter "></i>
            </a>
            <a href="# " class="btn btn-sm btn-icon btn-inverse btn-rounded ">
              <i class="fa fa-facebook "></i>
            </a>
            <a href="# " class="btn btn-sm btn-icon btn-inverse btn-rounded ">
              <i class="fa fa-linkedin "></i>
            </a>
            <a href="# " class="btn btn-sm btn-icon btn-inverse btn-rounded ">
              <i class="fa fa-google-plus "></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
