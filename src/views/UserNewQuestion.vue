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
                            发布新项目
                        </h3>
                        <p class="mb-4">您提供的信息越完善，验证进度就会越快</p>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">标题</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="title" type="text" id="example-text-input">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">赏金</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="prize" type="number" id="example-text-input">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">问题描述</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" v-model="descr" type="text" rows="10" id="example-text-input"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">补充文件</label>
                            <div class="col-sm-10">
                                <div class="dropzone-area">
                                    <div class="dropzone-text ">
                                        <i class="fa fa-cloud-upload"> </i>
                                        <span>拖拽文件至此或单击来上传文件</span>
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
                            <label class="col-sm-2 col-form-label">行业</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="industry_tags">
                                    <option value="医疗">医疗</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">技术方向</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="tech_tags">
                                    <option value="计算机视觉">计算机视觉</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row justify-content-md-center">
                            <div class="col-md-10 offset-md-2">
                                <button type="button" @click="postNewQuestion()" class="mb-1 btn btn-block btn-primary">提交</button>
                                <p class="text-primary">{{message}}</p>
                            </div>
    
                        </div>
                    </div>
                    <div class="col-md-9 text-center" v-else>
                        <h4 class="mt-3">
                            未验证账号不能发布新问题
                        </h4>
                        <router-link :to="{name:'me_verify'}" class="btn btn-primary mt-2">点此验证</router-link>
    
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
    name: 'UserNewQuestions',
    data() {
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
        onFileChange(e) {
            var file = e.target.files || e.dataTransfer.files
            if (!file.length) return
            this.files.push(file[0])
        },
        removeFile(file) {
            for (var i = this.files.length - 1; i >= 0; i--) {
                if (this.files[i] === file)
                    this.files.splice(i, 1)
            }
        },
        postNewQuestion() {
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
        self() {
            return this.$store.getters.self
        }
    }
}
</script>