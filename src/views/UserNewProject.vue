<template>
    <div class="py-lg-4">
        <!-- ======== @Region: #header ======== -->
        <user-header></user-header>
        <!-- ======== @Region: #content ======== -->
        <div id="content">
            <div class="container" id="about">
                <div class="row">
                    <!-- sidebar -->
                    <user-sidebar></user-sidebar>
                    <!--main content-->
                    <div class="col-md-9" v-if="self.is_verified">
                        <h3>
                            New ICO
                        </h3>
                        <p class="mb-4">您提供的信息越完善，验证进度就会越快</p>
                        <h4>Basic</h4>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="title" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Description</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" v-model="descr" type="text"
                                          placeholder="( Markdown Support Enabled )" rows="10"></textarea>
                            </div>
                        </div>
                        <h4>Time And Amount</h4>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">ICO Goal</label>
                            <div class="col-sm-5">
                                <input class="form-control" placeholder="Minimum" v-model="prize" type="number">
                            </div>
                            <div class="col-sm-5">
                                <input class="form-control" placeholder="Maximum" v-model="prize" type="number">
                            </div>

                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">ICO Goal</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="industry_tags">
                                    <option value="BTC" selected>Unit</option>
                                    <option value="BTC">BTC - Bitcoin</option>
                                    <option value="ETH">ETH - Ethereum</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Start Date</label>
                            <div class="col-sm-10">
                                <input class="form-control" placeholder="Start" v-model="prize" type="date">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">End Date</label>
                            <div class="col-sm-10">
                                <input class="form-control" placeholder="End" v-model="prize" type="date">
                            </div>
                        </div>
                        <h4>Supplement</h4>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">White Paper</label>
                            <div class="col-sm-10">
                                <div class="dropzone-area">
                                    <div class="dropzone-text">
                                        <i class="fa fa-cloud-upload"> </i>
                                        <span>Drag file here or click to upload file</span>
                                    </div>
                                    <input type="file" @change="onFileChange">
                                </div>
                                <div class="mt-1 btn-group" v-for="file in files">
                                    <button type="button" class="mb-1 btn btn-secondary">{{file.name}}</button>
                                    <button type="button" class="mb-1 btn btn-secondary" @click="removeFile(file)">
                                        <span>
                                            <i class="fa fa-times"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Video Link</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="tech_tags" placeholder="Youtube Video Link">
                            </div>
                        </div>
                        <!--<div class="form-group row">-->
                            <!--<label class="col-sm-2 col-form-label">Bid Icon</label>-->
                            <!--<div class="col-sm-10">-->
                                <!--<div class="dropzone-area">-->
                                    <!--<div class="dropzone-text">-->
                                        <!--<i class="fa fa-cloud-upload"> </i>-->
                                        <!--<span>Drag file here or click to upload file</span>-->
                                    <!--</div>-->
                                    <!--<input type="file" @change="onFileChange">-->
                                <!--</div>-->
                                <!--<div class="mt-1 btn-group" v-for="file in files">-->
                                    <!--<button type="button" class="mb-1 btn btn-secondary">{{file.name}}</button>-->
                                    <!--<button type="button" class="mb-1 btn btn-secondary" @click="removeFile(file)">-->
                                        <!--<span>-->
                                            <!--<i class="fa fa-times"></i>-->
                                        <!--</span>-->
                                    <!--</button>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="form-group row">-->
                            <!--<label class="col-sm-2 col-form-label">Small Icon</label>-->
                            <!--<div class="col-sm-10">-->
                                <!--<div class="dropzone-area">-->
                                    <!--<div class="dropzone-text">-->
                                        <!--<i class="fa fa-cloud-upload"> </i>-->
                                        <!--<span>Drag file here or click to upload file</span>-->
                                    <!--</div>-->
                                    <!--<input type="file" @change="onFileChange">-->
                                <!--</div>-->
                                <!--<div class="mt-1 btn-group" v-for="file in files">-->
                                    <!--<button type="button" class="mb-1 btn btn-secondary">{{file.name}}</button>-->
                                    <!--<button type="button" class="mb-1 btn btn-secondary" @click="removeFile(file)">-->
                                        <!--<span>-->
                                            <!--<i class="fa fa-times"></i>-->
                                        <!--</span>-->
                                    <!--</button>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <div class="form-group row justify-content-md-center">
                            <div class="col-md-10 offset-md-2">
                                <button type="button" @click="postNewQuestion()" class="mb-1 btn btn-block btn-primary">
                                    Submit
                                </button>
                                <p class="text-primary">{{message}}</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-9 text-center" v-else>
                        <h4 class="mt-3">
                            You have to verify your email first
                        </h4>
                        <router-link :to="{name:'me_verify'}" class="btn btn-primary mt-2">Resend Email</router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
  import UserSidebar from 'components/UserSidebar'
  import UserHeader from 'components/UserHeader'

  export default {
    name: 'UserNewProject',
    data () {
      return {
        files: [],
        title: '',
        descr: '',
        industry_tags: '',
          tech_tags: '',
          prize: '',

          message: ''
      }
    },
    components: {
      'user-sidebar': UserSidebar,
      'user-header': UserHeader
    },
    methods: {
      onFileChange (e) {
        var file = e.target.files || e.dataTransfer.files
        if (!file.length) return
        this.files.push(file[0])
      },
      removeFile (file) {
        for (var i = this.files.length - 1; i >= 0; i--) {
          if (this.files[i] === file)
            this.files.splice(i, 1)
        }
      },
      postNewQuestion () {
        /* global FormData */
        let formData = new FormData()
        formData.append('title', this.title)
        formData.append('description_short', this.descr)
        formData.append('industry_tags', this.industry_tags)
        formData.append('tech_tags', this.tech_tags)
        formData.append('prize', this.prize)

        if (this.files.length)
          Array.from(Array(this.files.length).keys())
            .map(x => {
              formData.append(this.files[x].name, this.files[x])
            })

        this.$store.dispatch('postNewQuestion', formData)
          .then(() => {
            this.files = []
            this.title = ''
            this.descr = ''
            this.industry_tags = ''
            this.tech_tags = ''
            this.prize = ''
            this.message = '提交成功！'
          })
          .catch((error) => {
            console.log(error)
          })

      },
    },
    computed: {
      self () {
        return this.$store.getters.self
      }
    }
  }
</script>