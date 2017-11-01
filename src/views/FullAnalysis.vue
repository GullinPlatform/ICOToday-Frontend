<template>
  <div class="container container-padding">
    <div class="text-center">
      <div class="mb-3">
        <div class="form-group row justify-content-center">
          <div class="col-1">
            <button class="btn btn-link-secondary p-0 m-0" @click="page=1" type="button"><<</button>
          </div>
          <div class="col-1">
            <button class="btn btn-link-secondary p-0 m-0" v-if="page>1" @click="page-=1" type="button">< Prev</button>
            <button class="btn btn-link-secondary p-0 m-0" v-else type="button">< Prev</button>
          </div>
          <div class="col-5">
            <div class="row justify-content-center">
              <label class="col-2 col-form-label p-r-3" for="page">Page:  </label>
              <input id="page" class="form-control form-control-sm col-2 text-center" type="number" v-model.number="page">
              <label class="col-2 col-form-label p-0 text-lg" for="page">/ {{numPages}}</label>
            </div>
          </div>
          <div class="col-1">
            <button class="btn btn-link-secondary p-0 m-0" v-if="page<numPages" @click="page+=1" type="button">Next ></button>
            <button class="btn btn-link-secondary p-0 m-0" v-else type="button">Next ></button>
          </div>
          <div class="col-1">
            <button class="btn btn-link-secondary p-0 m-0" @click="page=numPages" type="button">>></button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div v-if=" loadedRatio> 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
        <pdf v-if="show" ref="pdf" :src="src" :page="page" :rotate="rotate" @password="password" @progress="loadedRatio = $event" @error="error" @numPages="numPages = $event"></pdf>
      </div>
      <div class="mt-3">
        <div class="form-group row justify-content-center">
          <div class="col-1">
            <button class="btn btn-link-secondary p-0 m-0" @click="page=1" type="button"><<</button>
          </div>
          <div class="col-1">
            <button class="btn btn-link-secondary p-0 m-0" v-if="page>1" @click="page-=1" type="button">< Prev</button>
            <button class="btn btn-link-secondary p-0 m-0" v-else type="button">< Prev</button>
          </div>
          <div class="col-5">
            <div class="row justify-content-center">
              <label class="col-2 col-form-label p-r-3" for="page_d">Page:  </label>
              <input id="page_d" class="form-control form-control-sm col-2 text-center" type="number" v-model.number="page">
              <label class="col-2 col-form-label p-0 text-lg" for="page_d">/ {{numPages}}</label>
            </div>
          </div>
          <div class="col-1">
            <button class="btn btn-link-secondary p-0 m-0" v-if="page<numPages" @click="page+=1" type="button">Next ></button>
            <button class="btn btn-link-secondary p-0 m-0" v-else type="button">Next ></button>
          </div>
          <div class="col-1">
            <button class="btn btn-link-secondary p-0 m-0" @click="page=numPages" type="button">>></button>
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
    name: 'FullAnalysis',
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'Full Analysis',
      }
    },
    components: {
      pdf: pdf
    },
    data () {
      return {
        show: true,
        src: '',
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
    beforeMount () {
      if (this.$route.params.id) {
        this.$store.dispatch('getProjectRatingDetailById', this.$route.params.id).then(() => {
          this.src = this.project_rating_detail_by_id.file
        })
      } else {
        this.src = this.full_analysis_url
      }
    },
    watch: {
      page: function () {
        if (this.page > 5 && !this.login_status) {
          this.page = 5
          this.$store.dispatch('toastr', {
            type: 'warning',
            title: 'Notice',
            message: 'Only ICOToday users are allowed to view the full report, please signup to continue.'
          })
          $('#signup-modal').modal('show')
        }
      }
    }
  }
</script>

<style scoped>
  .pdf-container {
    margin-bottom: -100%
  }
</style>
