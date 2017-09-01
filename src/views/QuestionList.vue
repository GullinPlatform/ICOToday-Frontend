<template>
  <div>
    <!-- ======== @Region: #page-header ======== -->
    <div id="page-header">
      <div class="container clearfix">
        <h3 class="mb-0 float-md-left">
          Products List
        </h3>
        <!-- Page header breadcrumb -->
        <nav class="breadcrumb float-md-right">
          <a class="breadcrumb-item" href="index.htm">Home</a>
          <a class="breadcrumb-item" href="shop.htm">Shop Home</a>
          <span class="breadcrumb-item active">Products List</span>
        </nav>
      </div>
    </div>
  
    <!-- ======== @Region: #content ======== -->
    <div id="content" class="py-3">
      <div class="container">
        <div class="row">
          <!-- Products grid -->
          <div class="col-lg-9">
            <!-- Products filters -->
            <div class="row">
              <div class="col-lg-6 mb-3 mb-lg-0">
                <form class="form-inline justify-content-lg-start text-sm">
                  <label class="control-label mr-2">Keyword:</label>
                  <input type="text" class="form-control form-control-sm mr-lg-2" placeholder="ie. Calvin Klein">
                  <a href="#adv-search" data-toggle="collapse" class="text-sm">advanced search</a>
                </form>
              </div>
              <div class="col-lg-6">
                <form class="form-inline justify-content-lg-end text-sm">
                  <label class="control-label mr-2">Sort By:</label>
                  <select class="form-control form-control-sm">
                    <option value="#">Name (A - Z)</option>
                    <option value="#">Name (Z - A)</option>
                    <option value="#">Price (Low &gt; High)</option>
                    <option value="#" selected="">Price (High &gt; Low)</option>
                    <option value="#">Rating (Highest)</option>
                    <option value="#">Rating (Lowest)</option>
                  </select>
                  <label class="control-label mr-2 ml-lg-3">Show:</label>
                  <select class="form-control form-control-sm">
                    <option value="#">15</option>
                    <option value="#">20</option>
                    <option value="#">25</option>
                    <option value="#">30</option>
                    <option value="#">35</option>
                    <option value="#">40</option>
                    <option value="#">45</option>
                    <option value="#">50</option>
                  </select>
                </form>
              </div>
              <div class="col-lg-12 collapse" id="adv-search">
                <!-- Advanced search form -->
                <form class="mt-3 bg-faded p-3 rounded mb-4 text-sm">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label>Category</label>
                      <select class="form-control">
                        <option value="#">Mens</option>
                        <option value="#">Womens</option>
                        <option value="#">Childrens</option>
                        <option value="#">Baby</option>
                      </select>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label>Brand</label>
                      <select class="form-control">
                        <option value="#">Brand 1</option>
                        <option value="#">Brand 2</option>
                        <option value="#">Brand 3</option>
                        <option value="#">Brand 4</option>
                      </select>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label>Price</label>
                      <div class="row">
                        <div class="input-group col-md-6">
                          <span class="input-group-addon">$</span>
                          <input type="text" class="form-control" placeholder="from">
                        </div>
                        <div class="input-group col-md-6">
                          <span class="input-group-addon">$</span>
                          <input type="text" class="form-control" placeholder="to">
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label>Size</label>
                      <select class="form-control">
                        <option value="#">Small</option>
                        <option value="#">Medium</option>
                        <option value="#">Large</option>
                        <option value="#">Extra Large</option>
                      </select>
                    </div>
                    <div class="col-md-12">
                      <button type="submit" class="btn btn-primary">
                        <i class="fa fa-search"></i> Search </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <hr class="my-4" />
            <div class="row">
              <div class="col-lg-12" v-for="question in questions">
                <!-- Product 2 -->
                <div class="card product-card mb-4">
                  <!-- Content -->
                  <div class="card-block p-3 pos-relative row">
                    <!-- Image content -->
                    <div class="col-md-4 mb-2 mb-md-0">
                      <img class="rounded img-fluid" src="static/img/shop/shoes-2.jpg" alt="Card image cap">
                    </div>
                    <!-- Product details -->
                    <div class="col-md-8 d-flex flex-column align-items-start">
                      <p class="text-muted text-uppercase text-xs mb-0">
                        <span class="text-primary">{{question.industry_tags[0].tag}}</span> / {{question.tech_tags[0].tag}}</p>
                      <h4 class="card-title mb-2">
                        <router-link :to="{name:'question', params:{id:question.id}}" class="text-grey-dark">{{question.title}}</router-link>
                      </h4>
                      <p class="font-weight-bold">¥ {{question.prize}}</p>
  
                      <p class="pos-md-absolute pos-t pos-r mr-3 text-md-right">
                        难度:
                        <i class="fa fa-star text-primary" v-for="n in question.difficulty"></i>
                        <i class="fa fa-star-o text-primary" v-for="n in 5-question.difficulty"> </i>
                      </p>
                      <p class="text-muted text-xs">{{question.description_short}}</p>
                      <div class="mt-auto">
                        <router-link :to="{name:'question', params:{id:question.id}}" class="btn btn-primary btn-sm">
                          <i class="fa fa-plus mr-2"></i> 查看详情</router-link>
                        <a href="#" class="btn btn-link btn-sm">
                          <i class="fa fa-star"></i> 加入关注列表</a>
                        <p class="text-muted text-xs d-inline hidden-md-down">129位参与者</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Pagination -->
            <nav aria-label="Page navigation">
              <ul class="pagination pagination-lg justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">4</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">5</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- Products sidebar -->
          <div class="col-lg-3 mb-4 mb-lg-0">
            <div data-toggle="sticky" data-settings='{"parent":"#content","mind":"#header", "top":10, "breakpoint":480}'>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionList',
  components: {
    // 'spinner': Spinner/
  },
  data() {
    return {
      loaded: false,
    }
  },
  methods: {
  },
  computed: {
    questions() {
      return this.$store.getters.questions
    }
  },
  beforeCreate() {
    this.$store.dispatch('listQuestions').then(() => {
      this.loaded = true
    })
  }
}
</script>
