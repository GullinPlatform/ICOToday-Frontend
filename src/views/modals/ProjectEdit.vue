<template>
  <div class="modal fade" id="edit-project-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            Edit Project
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">

          <div class="row">
            <div class="col-md-2">
            </div>
            <div class="col-md-10">
              <button type="button" @click="editPost()" class="mb-1 btn btn-block btn-primary">
                Submit change
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->
</template>


<script>
  import VueDatetimePicker from 'vue-bootstrap-datetimepicker'

  export default {
    name: 'EditProjectModal',
    data () {
      return {
        // -- form info start --
        title: '',
        icon: null,
        description_short: '',
        description_full: '',
        category: '',

        type: '',
        maximum_goal: null,
        minimum_goal: null,
        coin_unit: '',
        accept: '',
        start_datetime: '',
        end_datetime: '',
        white_paper: '',
        equality_on_offer: '',

        coin_name: '',
        rating: '',
        ratio: '',

        video_link: '',
        website: '',

        medium: '',
        twitter: '',
        slack: '',
        telegram: '',

        // -- form info end --
        icon_change: false,
        icon_loaded: false,
      }
    },
    components: {
      'vue-datetime-picker': VueDatetimePicker
    },
    methods: {
      onIconChange (e) {
        var file = e.target.files || e.dataTransfer.files
        if (!file.length) return
        this.icon = file[0]
        this.icon_loaded = true
      },
      removeFile () {
        this.icon = null
        this.icon_loaded = false
      },

      editPost () {
        /* global FormData */
        let formData = new FormData()

        if (!(this.title && this.description_full && this.description_full &&
            this.maximum_goal && this.minimum_goal &&
            this.coin_unit && this.start_datetime &&
            this.end_datetime && this.website)) {
          this.$store.dispatch('toastr', {
            type: 'danger',
            title: 'Error',
            message: 'Please Make Sure Fill Out Required Fields!'
          })
          return
        }

        formData.append('title', this.title)
        if (this.icon)
          formData.append('logo_image', this.icon)
        formData.append('category', this.category)
        formData.append('description_short', this.description_short)
        formData.append('description_full', this.description_full)

        formData.append('type', this.type)
        formData.append('coin_name', this.coin_name)
        formData.append('minimum_goal', this.minimum_goal)
        formData.append('maximum_goal', this.maximum_goal)
        formData.append('coin_unit', this.coin_unit)
        if (this.start_datetime)
          formData.append('start_datetime', this.start_datetime.format('YYYY-MM-DD HH:mmZ'))
        if (this.end_datetime)
          formData.append('end_datetime', this.end_datetime.format('YYYY-MM-DD HH:mmZ'))
        formData.append('ratio', this.ratio)
        formData.append('equality_on_offer', this.equality_on_offer)
        formData.append('accept', this.accept)

        formData.append('white_paper', this.white_paper)
        formData.append('video_link', this.video_link)
        formData.append('website', this.website)

        formData.append('medium', this.medium)
        formData.append('twitter', this.twitter)
        formData.append('slack', this.slack)
        formData.append('telegram', this.telegram)

        formData.append('video_link', this.video_link)
        formData.append('website', this.website)

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
      }
    },
    computed: {
      self () {
        return this.$store.getters.self
      },
      current_post () {
        return this.$store.getters.current_project
      }
    },
    watch: {
      'current_post': function () {
        /* global moment:true */
        this.title = this.current_post.title
        this.description_short = this.current_post.description_short
        this.description_full = this.current_post.description_full
        this.category = this.current_post.category

        this.maximum_goal = this.current_post.maximum_goal
        this.minimum_goal = this.current_post.minimum_goal
        this.coin_unit = this.current_post.coin_unit
        this.type = this.current_post.type
        this.equality_on_offer = this.current_post.equality_on_offer
        this.accpet = this.current_post.accpet

        this.start_datetime = moment(this.current_post.start_datetime)
        this.end_datetime = moment(this.current_post.end_datetime)

        this.white_paper = null
        this.coin_name = this.current_post.coin_name
        this.ratio = this.current_post.ratio

        this.video_link = this.current_post.video_link
        this.website = this.current_post.website

        this.medium = this.current_post.medium
        this.twitter = this.current_post.twitter
        this.slack = this.current_post.slack
        this.telegram = this.current_post.telegram
      }
    }
  }

</script>

<style>
  @import url("/static/css/glyphicons.css");

  .dropzone-area {
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1.25;
    color: #464a4c;
    height: 100px;
    border: 1px dashed #464a4c;
    border-radius: 22px;
  }

  .dropzone-area input {
    position: absolute;
    cursor: pointer;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .dropzone-text {
    position: absolute;
    top: 50%;
    text-align: center;
    transform: translate(0, -50%);
    width: 100%;
  }

  .dropzone-text span {
    display: block;
    line-height: 1.9;
  }
</style>
