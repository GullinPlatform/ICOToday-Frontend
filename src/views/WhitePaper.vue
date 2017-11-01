<template>
  <div class="container container-padding">
    <div class="text-center">
      <div class="mb-3">
        <div class="form-group row justify-content-center">
          <div class="col-2">
            <button class="btn btn-link-secondary p-0 m-0" v-if="page>1" @click="page-=1" type="button">< Prev</button>
            <button class="btn btn-link-secondary p-0 m-0" v-else type="button">< Prev</button>
          </div>
          <div class="col-5 hidden-sm-down">
            <div class="row justify-content-center">
              <label class="col-2 col-form-label p-r-3" for="page">Page:  </label>
              <input id="page" class="form-control form-control-sm col-2 text-center" type="number" v-model.number="page">
              <label class="col-2 col-form-label p-0 text-lg" for="page">/ {{numPages}}</label>
            </div>
          </div>
          <div class="col-2">
            <button class="btn btn-link-secondary p-0 m-0" v-if="page<numPages" @click="page+=1" type="button">Next ></button>
            <button class="btn btn-link-secondary p-0 m-0" v-else type="button">Next ></button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div v-if=" loadedRatio> 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
        <pdf v-if="show" ref="pdf" :src="src" :page="page" :rotate="rotate" @password="password" @progress="loadedRatio = $event" @error="error" @numPages="numPages = $event"></pdf>
      </div>
      <div class="mt-3">
        <div class="form-group row justify-content-center">
          <div class="col-2">
            <button class="btn btn-link-secondary p-0 m-0" v-if="page>1" @click="page-=1" type="button">< Prev</button>
            <button class="btn btn-link-secondary p-0 m-0" v-else type="button">< Prev</button>
          </div>
          <div class="col-5 hidden-sm-down">
            <div class="row justify-content-center">
              <label class="col-2 col-form-label p-r-3" for="page">Page:  </label>
              <input id="page" class="form-control form-control-sm col-2 text-center" type="number" v-model.number="page">
              <label class="col-2 col-form-label p-0 text-lg" for="page">/ {{numPages}}</label>
            </div>
          </div>
          <div class="col-2">
            <button class="btn btn-link-secondary p-0 m-0" v-if="page<numPages" @click="page+=1" type="button">Next ></button>
            <button class="btn btn-link-secondary p-0 m-0" v-else type="button">Next ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import pdf from 'vue-pdf'

  export default {
    name: 'WhitePaper',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'White Paper',
      }
    },
    components: {
      pdf: pdf
    },
    data () {
      return {
        show: true,
        src: 'https://s3.us-east-2.amazonaws.com/icotoday/ICOToday-Whitepaper.pdf',
        loadedRatio: 0,
        page: 1,
        numPages: 0,
        rotate: 0,
      }
    },
    methods: {
      password: function (updatePassword, reason) {
        updatePassword(prompt('password is "test"'))
      },
      error: function (err) {
        console.log(err)
      }
    },
    computed: {
      ...mapGetters({
        full_analysis_url: 'full_analysis_url',
        project_rating_detail_by_id: 'project_rating_detail_by_id',
        login_status: 'login_status'
      })
    },
    watch: {
      page: function () {
        if (this.page > 3 && !this.login_status) {
          this.page = 3
          this.$store.dispatch('toastr', {
            type: 'warning',
            title: 'Notice',
            message: 'Our full white paper is locked for ICOToday users, please login to continue.'
          })
          $('#signup-modal').modal('show')
        }
      }
    }
  }
</script>
