<template>
  <div>
    <div class="project-list project-list-header">
      <div class="column project">
        Company
      </div>
      <div class="column project-data">
        Score
      </div>
      <div class="column project-data">
        Time
      </div>
      <div class="column project-data">
        Hard Cap
      </div>
      <div class="column project-data">
        % Tokens On Sale
      </div>
    </div>
    <spinner v-if="!loaded" class="mt-3"></spinner>
    <div class="project-list" v-else-if="loaded && projects.length"
         v-for="project in projects"
         @mouseover="subscribe_show=project.id" @mouseleave="subscribe_show=false">
      <div class="column project">
        <div class="project-info-wrapper">
          <div class="project-icon">
            <a href="javascript:void(0)" @click="projectModal(project.id)">
              <img :src="project.logo_image" alt="Logo">
            </a>
          </div>
          <div class="project-info">
            <div class="project-name">
              <a href="javascript:void(0)" @click="projectModal(project.id)" class="text-decoration-none text-gray-dark">
                {{project.name}}
                <span class="badge badge-sm badge-default">{{project.category}}</span>
              </a>
            </div>
            <div class="project-descr">
              {{project.description_short}}
            </div>
          </div>
        </div>
      </div>
      <div class="column project-data">
        <span class="text-bold text-primary" v-if="project.rating">{{project.rating}}/100</span>
        <span class="text-bold text-primary" v-else>No Score</span>
      </div>
      <div class="column project-data">
        <b>{{timeCounter(project.start_datetime, project.end_datetime)}}</b>
      </div>
      <div class="column project-data">
        {{project.maximum_goal}} {{project.coin_unit}}
      </div>
      <div class="column project-data">
        <span>{{project.equality_on_offer}}%</span>
      </div>
    </div>
    <div class="project-list" v-else-if="loaded && !projects.length">
     <h6 class="text-center m-4">No projects to show</h6>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Spinner from 'components/Spinner'

  export default {
    name: 'ProjectList',
    components: {Spinner},
    props: {
      projects: {
        type: Array,
        default: function () { return [] }
      },
      loaded: {
        type: Boolean,
        default: false
      },
    },
    data () {
      return {
        window_width: 0,
      }
    },
    methods: {
      timeCounter (start, end) {
        /* global moment:true */
        // Haven't start
        if (moment().diff(start, 'minutes') < 0) {
          let rest = -moment().diff(start, 'days') + ' days '

          if (rest === '0 days ') {
            rest = -moment().diff(start, 'hours') + ' hours '
          }
          if (rest === '0 hours ') {
            rest = -moment().diff(start, 'minutes') + ' minutes '
          }
          return 'Starts in ' + rest
        }
        // Started
        else if (moment().diff(end, 'minutes') < 0) {
          let rest = -moment().diff(end, 'days') + ' days '

          if (rest === '0 days ') {
            rest = -moment().diff(end, 'hours') + ' hours '
          }
          if (rest === '0 hours ') {
            rest = -moment().diff(end, 'minutes') + ' minutes '
          }

          return 'Ends in ' + rest
        }
        // Ended
        else {
          let rest = moment().diff(end, 'days') + ' days '

          if (rest === '0 days ') {
            rest = moment().diff(end, 'hours') + ' hours '
          }
          if (rest === '0 hours ') {
            rest = moment().diff(end, 'minutes') + ' minutes '
          }

          return 'Ended ' + rest + 'ago'
        }
      },
      formatTime (start, end) {
        if (moment().diff(start, 'minutes') < 0) {
          return moment(start).format('MM/DD, hh:mm')
        }
        else {

          return moment(end).format('MM/DD, hh:mm')
        }
      },

      projectModal (id) {
        if (this.window_width <= 768) {
          this.$router.push({name: 'project', params: {id: id}})
        }
        else {
          this.$store.dispatch('getProject', id)
            .then(() => {
              history.pushState({}, null, '/project/' + id)
              $('#project-modal').modal('show')
            })
        }
      },

      markPost (id, mark) {
        if (!this.login_status) {
          $('#signup-modal').modal('show')
          return
        }

        this.$store.dispatch('markPost', id)
          .then(() => {
            if (mark) {
              this.$store.dispatch('toastr', {
                type: 'success',
                title: 'Success',
                message: 'The selected ICO is added to your subscription list, you\'ll receive updates from now on'
              })
            } else {
              this.$store.dispatch('toastr', {
                type: 'success',
                title: 'Success',
                message: 'The selected ICO is removed from your subscription list, you\'ll no longer receive updates from this project'
              })
            }
          })
      },
      inSubscribeList (id) {
        for (let p of this.self_marked_posts) {
          if (id === p.id)
            return true
        }
        return false
      },
      getWindowWidth (event) {
        this.window_width = document.documentElement.clientWidth
      },
    },
    computed: {
      ...mapGetters({
        me: 'self',
        is_verified: 'is_verified',
        login_status: 'login_status',
        marked_projects: 'self_marked_posts'
      })
    },
    mounted () {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getWindowWidth)
        //Init
        this.getWindowWidth()
      })
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.getWindowWidth)
    }
  }

</script>

<style>
  .project-list {
    display: table;
    width: 100%;
    position: relative;
    border: 1px solid #e1e7ec;
    border-bottom: 0;
    border-radius: 2px;
    background-color: #ffffff;
    box-sizing: border-box;
  }

  .project-list-header {
    background-color: #f5f5f5;
    font-size: 16px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .project-list:last-child {
    border-bottom: 1px solid #e1e7ec;
  }

  .project-list .column {
    display: table-cell;
    vertical-align: middle;
  }

  .project-list.project-list-header .column.project {
    position: relative;
    width: 286px;
    padding: 10px;
  }

  .project-list .column.project {
    position: relative;
    width: 250px;
    padding: 12px;
  }

  .project-info-wrapper {
    display: table;
    table-layout: fixed;
  }

  .project-info-wrapper > .project-icon {
    width: 50px;
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    overflow: hidden;
    margin-right: 12px;
    float: left;
  }

  .project-info-wrapper > .project-info {
    font-size: 17px;
    margin-left: 49px;
    width: 100%;
    display: table-cell;
    vertical-align: middle;
  }

  .project-info-wrapper > .project-info > .project-name {
    font-weight: 700;
    color: #333;
  }

  .project-info-wrapper > .project-info > .project-descr {
    width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 13px;
    overflow: hidden;
    color: #666;
  }

  .project-list .column.project-data {
    width: 150px;
    max-width: 150px;
    box-sizing: border-box;
    padding: 2px;
    text-align: center;
    font-size: 16px;
  }

  html.ms .base .column {
    display: block;
    float: left;
    width: 100%;
    max-width: 100%;
    clear: both;
    box-sizing: border-box;
  }

  html.ms .base .column.project {
    background-color: #f8f9fa;
    border-bottom: 1px solid #eee;
  }

  html.ms.base .column.project-data {
    padding: 10px 15px 0;
  }
</style>
