<template>
  <!-- ======== @Region: #content ======== -->
  <div id="content" class="pb-lg-0">
    <div class="container">
      <div class="col-lg-12">
        <div class="card product-card mb-4">
          <!-- Ribbon -->
          <div class="card-ribbon card-ribbon-top card-ribbon-right bg-yellow text-white">资质认证</div>
          <!-- Content -->
          <div class="card-block p-4 pos-relative">
            <!-- Product details -->
            <p class="text-muted text-uppercase text-xs mb-0">
              <span class="text-primary">{{question.industry_tags[0].tag}}</span> / {{question.tech_tags[0].tag}}</p>
            <h3 class="card-title mb-2 mt-2">
              {{question.title}}
            </h3>
            <h4 class="font-weight-bold text-primary">
              ¥ {{question.prize}}
            </h4>
            <div class="product-offer-countdown">
              <p class="mb-t mb-0 text-xs">问题截止日期: {{question.due_date}}</p>
              <div class="countdown">
              </div>
            </div>
            <div class="pos-md-absolute pos-t pos-r mr-8 mt-3 text-md-right">
              <span class="mt-3">难度:</span>
              <i class="fa fa-star text-primary" v-for="n in question.difficulty"></i>
            </div>
            <hr class="my-3" />
            <p class="text-muted text-sm">{{question.description_short}}</p>
            <hr class="my-3">
            <button @click="apply()" class="btn btn-primary">
              <i class="fa fa-plus mr-2"></i> 报名</button>
            <button @click="mark()" class="btn btn-link btn-sm">
              <i class="fa fa-heart"></i> 加入关注列表</button>
            <p class="text-muted text-xs d-inline hidden-md-down"></p>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="row">
            <!-- sidebar -->
            <div class="col-md-3">
              <!-- Sections Menu-->
              <div class="nav-section-menu">
                <div class="nav nav-list">
                  <div v-for="(field, index) in question.fields">
                    <a @click="tab_index = index" class="nav-link" :class="{'active':index === tab_index}">
                      {{field.title}}
                      <i class="fa fa-angle-right"></i>
                    </a>
                  </div>
                  <a @click="tab_index = 'data'" class="nav-link" :class="{'active':'data' === tab_index}">
                    下载数据
                    <i class="fa fa-angle-right"></i>
                  </a>
                  <a @click="tab_index = 'progress'" class="nav-link" :class="{'active':'progress' === tab_index}">
                    比赛进程
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <!--main content-->
            <div class="col-md-9" v-for="(field, index) in question.fields" v-show="tab_index === index">
              <vue-markdown>{{field.content}}</vue-markdown>
  
            </div>
            <div class="col-md-9" v-show="tab_index === 'data'">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>文件</th>
                    <th>大小</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(file,index) in question.files">
                    <th scope="row">{{index}}</th>
                    <td>
                      <a :href="file.file">{{file.file_name}}</a>
                    </td>
                    <td>{{file.file_name}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-9" v-show="tab_index === 'progess'">
  
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /container -->
    <hr class=" mb-0" />
  </div>
</template>

<script>

import VueMarkdown from 'vue-markdown'
export default {
  name: 'Question',
  components: {
    'vue-markdown': VueMarkdown
  },
  data() {
    return {
      question: {},
      tab_index: 0
    }
  },
  methods: {
    apply() {
      this.$store.dispatch('applyQuestion', this.$route.params.id)
    },
    mark() {
      this.$store.dispatch('markQuestion', this.$route.params.id)
    },

  },
  computed: {
    // question() {
    //   return this.$route.getters.current_question
    // }
    login_status() {
      return this.$route.getters.login_status
    }
  },
  beforeCreate() {
    this.$store.dispatch('getQuestion', this.$route.params.id)
      .then((res) => {
        this.question = res
      })
      .catch(() => {

      })
  }
}
</script>
