<template>
    <div class="modal fade" id="update-project-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">
                        Update Project
                    </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <h6 class="text-muted text-normal text-uppercase ">Financial data </h6>
                    <hr class="mb-3 mt-2">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Tokens Sold </label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="current" required type="text">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Money Raised </label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="money_raised" required type="text">
                        </div>
                    </div>
                    <h6 class="text-muted text-normal text-uppercase ">Supplement</h6>
                    <hr class="mb-3 mt-2">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">White Paper<span class="text-red">*</span></label>
                        <div class="col-sm-10">
                            <button type="button" class="mb-1 btn btn-secondary btn-sm"
                                    v-if="!white_paper_change&&!white_paper_loaded"
                                    @click="icon_change=true">
                                <span><i class="fa fa-refresh"></i> Change</span>
                            </button>
                            <div class="dropzone-area" v-if="white_paper_change&&!white_paper_loaded">
                                <div class="dropzone-text">
                                    <i class="fa fa-cloud-upload"> </i>
                                    <span>Drag file here or click to upload file</span>
                                </div>
                                <input type="file" required @change="onWhitePaperChange">
                            </div>

                            <div v-if="white_paper_change&&white_paper_loaded">
                                <button type="button" class="mb-1 btn btn-secondary">{{white_paper.name}}</button>
                                <button type="button" class="mb-1 btn btn-secondary" @click="removeFile('w')">
                                    <span> <i class="fa fa-times"></i> Remove</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Video Link</label>
                        <div class="col-sm-10">
                            <input class="form-control" v-model="video_link" placeholder="Youtube Video Link">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-10">
                            <button type="button" @click="updatePost()" class="mb-1 btn btn-block btn-primary">
                                Submit change
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <small>
                        <span class="text-danger">* </span>
                       After project is online, we only allow user to update their finical data
                    </small>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</template>


<script>

  export default {
    name: 'EditProjectModal',
    data () {
      return {
        // -- form info start --
        white_paper: null,
        current: 0,
        money_raised: 0,
        video_link: '',
        // -- form info end --

        white_paper_change: false,
        white_paper_loaded: false,
      }
    },
    methods: {
      onWhitePaperChange (e) {
        var file = e.target.files || e.dataTransfer.files
        if (!file.length) return
        this.white_paper = file[0]
        this.white_paper_loaded = true
      },
      removeFile (name) {
        if (name === 'w') {
          this.white_paper = null
          this.white_paper_loaded = false
        } else if (name === 'i') {
          this.icon = null
          this.icon_loaded = false
        }
      },

      updatePost () {
        /* global FormData */
        let formData = new FormData()

        if (!(this.current && this.video_link)) {
          this.$store.dispatch('toastr', {
            type: 'danger',
            title: 'Error',
            message: 'Please Make Sure Fill Out Required Fields!'
          })
          return
        }

        if (this.white_paper)
          formData.append('white_paper', this.white_paper)

        formData.append('id', this.current_post.id)
        formData.append('current', this.current)
        formData.append('video_link', this.video_link)

        this.$store.dispatch('updatePost', formData)
          .then(() => {
            /* global $:true */
            $('#edit-project-modal').modal('hide')
            this.$router.push({name: 'me_created'})
            this.$store.dispatch('toastr', {
              type: 'success',
              title: 'Success',
              message: 'Your Project Info is updated!'
            })
          })
          .catch((error) => {
            console.log(error)
          })
      },
    },
    computed: {
      self () {
        return this.$store.getters.self
      },
      current_post () {
        return this.$store.getters.current_post
      }
    },
    watch: {
      'current_post': function () {
        this.white_paper = null
        this.video_link = this.current_post.video_link
        this.money_raised = this.current_post.money_raised
        this.current = this.current_post.current
      }
    }
  }

</script>
