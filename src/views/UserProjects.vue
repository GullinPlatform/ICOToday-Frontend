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
                    <div class="col-md-9">
                        <h3 v-if="$route.name === 'me' && me.type === 1">
                            我参与的项目
                        </h3>
                        <h3 v-else-if="$route.name === 'me' && me.type === 0">
                            我提出的项目
                        </h3>
                        <h3 v-else>
                            我关注的项目
                        </h3>
    
                        <p class="mb-4">您的账户详细信息</p>
    
                        <div class="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative">
                            <div class="row align-items-center ">
                                <span class="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">我参与的</span>
                                <div class="col-md-2">
                                    <img src="static/img/customers/customer-2.png" alt="TSU" class="img-fluid hidden-sm-down" />
                                </div>
                                <div class="col-md-8">
                                    <h4 class="mb-0">
                                        Drupal Developer
                                    </h4>
                                    <p class="text-muted mb-2 text-sm">@
                                        <a href="#" class="font-weight-bold text-muted">TSU</a> (Senior level, Full Time Employment)</p>
                                    <p class="text-muted mb-2 text-sm">
                                        <span class="d-block d-md-inline">
                                            <i class="fa fa-map-marker"></i> London, UK</span>
                                        <span class="d-block d-md-inline">
                                            <i class="fa fa-money ml-md-3"></i> $70USD/hour</span>
                                    </p>
                                </div>
                                <div class="col-md-2 text-md-center">
                                    <a href="#" class="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                                    <a href="#" class="text-muted text-xs op-7">
                                        <i class="fa fa-heart"></i> Shortlist</a>
                                </div>
                            </div>
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
    name: 'UserProjects',
    data() {
        return {
            projects: {}
        }
    },
    components: {
        'user-sidebar': UserSidebar,
        'user-header': UserHeader
    },
    methods: {
        markedProjects() {

        },
        appliedProjects() {

        },
        proposedProject() {

        }
    },
    computed: {
        me() {
            return this.$store.getters.self
        }
    },
    beforeCreate() {

    }
}
</script>
