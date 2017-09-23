<template>
  <div class="modal fade" id="similar-company-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            We found some companies with similar name, is those yours?
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <h6 class="modal-title">
            If you believe you belong to one of those companies, click it and send a apply request instead of create a new company
          </h6>
          <section class="widget widget-featured-posts">
            <!-- Entry-->
            <div class="entry">
              <div class="entry-thumb"><a href="#"><img src="../../../static/img/404_art.jpg" alt="Post"></a></div>
              <div class="entry-content">
                <h4 class="entry-title"><a href="#">Trending Winter Boots</a></h4><span class="entry-meta">by Olivia Reyes</span>
              </div>
            </div>
            <!-- Entry-->
            <div class="entry">
              <div class="entry-thumb"><a href="#"><img src="../../../static/img/404_art.jpg" alt="Post"></a></div>
              <div class="entry-content">
                <h4 class="entry-title"><a href="#">Hoop Earrings A Style From History</a></h4><span class="entry-meta">by Cynthia Gomez</span>
              </div>
            </div>
          </section>
          <a class="btn btn-primary text-white">Send Team Member Request</a>
          <a class="btn btn-secondary text-white">No, Continue Company Creation</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'SimilarCompanies',
    data () {
      return {
        email: '',
        password: '',
        error_message: '',
      }
    },
    methods: {
      applyCompany(id){
        this.$store.dispatch('applyCompany', id)
      }
    }
  }

</script>
