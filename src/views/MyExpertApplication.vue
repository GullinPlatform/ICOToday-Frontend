<template>
    <!-- Page Content-->
    <div class="container padding-bottom-3x mb-2 mt-5">
        <div class="row">
            <my-header></my-header>
            <!--main content-->
            <div class="col-md-8">
                <h6 class="text-muted text-normal text-uppercase ">
                    My ICO Projects
                </h6>
                <hr class="mb-3 mt-2">

                <div class="product-card product-list"
                     v-for="project in projects"
                     v-if="loaded"
                     @mouseover="active=project.id" @mouseleave="active=false">
                    <a href="javascript:void(0)" @click="postModal(project.id)" class="product-thumb">
                        <img :src="project.logo_image" alt="Logo">
                    </a>
                    <div class="product-info pt-2 pb-2" :class="{active:active===project.id}">
                        <h3 class="product-title" @click="postModal(project.id)">
                            {{project.title}}
                            <span v-if="project.status===0" class="badge badge-warning">Verifying</span>
                            <span v-else-if="project.status===1" class="badge badge-primary">Verified</span>
                            <span v-else-if="project.status===2" class="badge badge-success"><i
                                    class="fa fa-check"></i> Completed</span>
                            <span v-else-if="project.status===3" class="badge badge-info"><i
                                    class="fa fa-star-o"></i> Promoting</span>
                            <span v-else-if="project.status===4" class="badge badge-warning"><i
                                    class="fa fa-star-o"></i> Premium</span>
                            <span v-else="project.status===5" class="badge badge-default"><i
                                    class="fa fa-check"></i> Closed</span>
                            <span class="text-muted text-sm"> {{project.description_short}}</span>
                            <span class="float-right text-bold text-primary ml-2" v-if="project.rating">{{project.rating}}/100</span>
                            <span class="float-right text-bold text-primary ml-2" v-else>No Score</span>

                        </h3>

                        <div class="row" @click="postModal(project.id)">
                            <div class="col-sm-2">
                                Type
                                <h4 class="product-price" v-if="project.type===0">
                                    Pre-ICO
                                </h4>
                                <h4 class="product-price" v-else>
                                    ICO
                                </h4>
                            </div>
                            <div class="col-sm-3">
                                Time
                                <h4 class="product-price">
                                    {{timeCounter(project.start_datetime, project.end_datetime)}}
                                </h4>
                            </div>
                            <div class="col-sm-4">
                                Soft Cap / Hard Cap
                                <h4 class="product-price">
                                    {{project.minimum_goal}} /  {{project.maximum_goal}} {{project.coin_type}}
                                </h4>
                            </div>
                            <div class="col-sm-3">
                                Token for Sale
                                <h4 class="product-price">
                                    {{project.equality_on_offer}}%
                                </h4>
                            </div>
                        </div>
                        <span class="badge badge-sm badge-default">{{project.category}}</span>
                        <a href="javascript:void(0)">
                            <span class="badge badge-sm badge-outline-primary float-right"
                                  @click="getEditProjectAndShowModal(project.id)"
                                  :class="{active:active}"
                                  v-if="me.info.team&&project.team.id===me.info.team.id&&project.status==0">
                                    <i class="fa fa-edit"></i> Edit
                            </span>
                            <span class="badge badge-sm badge-outline-primary float-right"
                                  @click="getUpdateProjectAndShowModal(project.id)"
                                  :class="{active:active}"
                                  v-else-if="me.info.team&&project.team.id===me.info.team.id&&project.status!=0">
                                    <i class="fa fa-edit"></i> Edit
                            </span>
                        </a>
                    </div>
                </div>

                <div class="mt-5" v-if="loaded && projects.length===0">
                    <div class="text-center">
                        <h3 class="product-title">You don't have ICO projects now</h3>
                        <router-link :to="{name:'me_new_project'}"
                                     class="btn btn-outline-primary btn-sm text-primary">
                            Create Now
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-md-8 text-center" v-else>
                <h4 class="mt-3">
                    You have to verify your email first
                </h4>
                <a href="javascript:void(0)" @click="" class="btn btn-primary mt-2">Resend Email</a>
            </div>
        </div>
    </div>
</template>

<script>
  import MyHeader from 'components/MyHeader'

  export default {
    name: 'UserMarkedProjects',
    data () {
      return {
        loaded: false,
      }
    },
    head: {
      title: {
        inner: 'ICOToday',
        complement: 'My ICO Projects'
      }
    },
    components: {
      MyHeader,
    },
  }
</script>