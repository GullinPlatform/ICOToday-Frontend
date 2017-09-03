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
                        <h3>
                            Account Settings
                        </h3>
                        <p class="mb-4">Your Account Detail</p>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="col-md-2 text-md-center">
                                    <img src="../../static/img/homes/code.jpg" class="rounded-circle img-padded"
                                         width="100" height="100">
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <div class="dropzone-area" v-if="!avatar_loaded">
                                        <div class="dropzone-text">
                                            <i class="fa fa-cloud-upload"> </i>
                                            <span>Drag file here or click to upload file</span>
                                        </div>
                                        <input type="file" required @change="onAvatarChange">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">First Name</label>
                            <div class="col-sm-4">
                                <input class="form-control" type="text" id="first_name">
                            </div>
                            <label class="col-sm-2 col-form-label">Last Name</label>
                            <div class="col-sm-4">
                                <input class="form-control" type="text" id="last_name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" placeholder="ex. CEO">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Description</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" placeholder=""></textarea>
                            </div>
                        </div>
                        <hr>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">LinkedIn</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Twitter</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Slack</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Telegram</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text">
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
    name: 'UserSettings',
    components: {
      'user-sidebar': UserSidebar,
      'user-header': UserHeader
    }
  }
</script>
