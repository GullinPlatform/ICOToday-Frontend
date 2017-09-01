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
                    <div class="col-md-9" v-if="self.is_verified === 0">
                        <h3>
                            资历验证
                        </h3>
                        <p class="mb-4">您提供的信息越完善，验证进度就会越快</p>
                        <div v-if="!self.is_company">
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">真实姓名
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="real_name" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">出生年月日
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="birthday" type="date">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">所属单位
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="working_at" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">有效证件类型
                                    <span class="text-danger">*</span>
    
                                </label>
                                <div class="col-sm-10">
                                    <select class="form-control" v-model="legal_id_type">
                                        <option value="0">身份证</option>
                                        <option value="1">护照</option>
                                        <option value="2">驾照</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">有效证件
                                    <span class="text-danger">*</span>
    
                                </label>
                                <div class="col-sm-10">
                                    <div class="dropzone-area" v-if="!file">
                                        <div class="dropzone-text ">
                                            <i class="fa fa-cloud-upload"> </i>
                                            <span>拖拽文件至此或单击来上传文件</span>
                                        </div>
                                        <input type="file" @change="onFileChange">
                                    </div>
                                    <div class="mt-1 btn-group" v-if="file">
                                        <button type="button" class="mb-1 btn btn-secondary">{{file.name}}</button>
                                        <button type="button" class="mb-1 btn btn-secondary" @click="file = null">
                                            <span>
                                                <i class="fa fa-times"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">微信
    
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="wechat" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">QQ
    
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="qq" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">电话
    
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="phone" type="text">
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">公司名称
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="company_name" type="text" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">公商注册文件
                                    <span class="text-danger">*</span>
    
                                </label>
                                <div class="col-sm-10">
                                    <div class="dropzone-area" v-if="!file">
                                        <div class="dropzone-text ">
                                            <i class="fa fa-cloud-upload"> </i>
                                            <span>拖拽文件至此或单击来上传文件</span>
                                        </div>
                                        <input type="file" @change="onFileChange">
                                    </div>
                                    <div class="mt-1 btn-group" v-if="file">
                                        <button type="button" class="mb-1 btn btn-secondary">{{file.name}}</button>
                                        <button type="button" class="mb-1 btn btn-secondary" @click="file = null">
                                            <span>
                                                <i class="fa fa-times"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">联系电话
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="company_phone" type="text" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">联系人
                                    <span class="text-danger">*</span>
    
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="company_contact" type="text" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">邮箱
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="company_email" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">地址
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="company_address" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-text-input" class="col-sm-2 col-form-label">所属领域
                                </label>
                                <div class="col-sm-10">
                                    <input class="form-control" v-model="company_field" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row justify-content-md-center">
                            <div class="col-md-10 offset-md-2">
                                <button type="button" @click="postVerification()" class="mb-1 btn btn-block btn-primary">提交</button>
                                <p class="text-primary">{{message}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9 text-center" v-else-if="self.is_verified === 1">
                        <h4 class="mt-3">
                            正在验证中
                        </h4>
                        <a class="btn btn-primary mt-2 text-white">点此催促</a>
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
    name: 'UserVerify',
    data() {
        return {
            file: null,

            company_name: '',
            company_phone: '',
            company_contact: '',
            company_email: '',
            company_address: '',
            company_field: '',

            real_name: '',
            birthday: '',
            working_at: '',
            legal_id_type: '',
            wechat: '',
            qq: '',
            phone: '',

            message: ''
        }
    },
    components: {
        'user-sidebar': UserSidebar,
        'user-header': UserHeader
    },
    methods: {
        onFileChange(e) {
            var file = e.target.files || e.dataTransfer.files
            if (!file.length) return
            this.file = file[0]
        },
        postVerification() {
            /* global FormData */
            let formData = new FormData()
            if (this.self.is_company) {
                formData.append('company_name', this.company_name)
                formData.append('company_register_file', this.file)
                formData.append('company_phone', this.company_phone)
                formData.append('company_contact', this.company_contact)
                formData.append('company_email', this.tech_tags)
                formData.append('company_address', this.company_address)
                formData.append('company_field', this.company_field)
            } else {
                formData.append('real_name', this.real_name)
                formData.append('birthday', this.birthday)
                formData.append('working_at', this.working_at)
                formData.append('legal_id', this.file)
                formData.append('legal_id_type', this.legal_id_type)
                formData.append('wechat', this.wechat)
                formData.append('qq', this.qq)
                formData.append('phone', this.phone)
            }
            this.$store.dispatch('verifySelf', formData)
                .catch((error) => {
                    console.log(error)
                })

        },
    },
    computed: {
        self() {
            return this.$store.getters.self
        }
    },
}
</script>
