<template>
    <div>
        <!--<input type="file" @change="handleUp($event)" name="" />-->
        <Row>
            <RadioGroup @on-change="changeImageType" v-model="imageType">
                <span>&nbsp;&nbsp;上传图片方式 :  &nbsp;</span>
                <Radio label="upload"><span>文件上传</span></Radio>
                <Radio label="url"><span>远程url地址</span></Radio>
            </RadioGroup>
        </Row>
        <br>
        <Row :class-name="fileClass">
            <Upload
                    :show-upload-list="false"
                    :before-upload="beforeUpload"
                    :on-success="handleSuccess"
                    :action="this.axios.defaults.baseURL+'/recognize_tesseract'">
                <Button type="ghost" icon="ios-cloud-upload-outline">上传文件并识别</Button>
            </Upload>
        </Row>
        <Row :class-name="imgClass">
            <Input v-model="imageUrl" placeholder="输入图片的url" value="" style="width: 60%"></Input>
            <Button type="ghost" icon="ios-cloud-upload" @click="recognize">url上传并识别</Button>
        </Row>
        <br>
        <Row>
            <h2>识别结果为: {{code}}</h2>
        </Row>
        <br>
        <Row>
            上传的文件为: <img :src="fileOrigin" alt="">
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                code:"",    // 验证码
                fileOrigin:"",  // 验证码图片
                fileOriginTmp:"",
                imageType: "upload",    // 默认是上传验证码识别(upload, url)
                imageUrl: "http://s4.sinaimg.cn/mw690/003bsgbmgy6R6efoOr1c3",
                fileClass: "show",
                imgClass: "hide",
            }
        },

        methods: {
            handleSuccess(response) {
                if (response) {
                    this.code = response
                    this.fileOrigin = this.fileOriginTmp
                }
            },
            beforeUpload(imgFile){
                var fr = new FileReader();
                var thiss = this
                fr.onload = function() {
                    thiss.fileOriginTmp = fr.result;
                };
                fr.readAsDataURL(imgFile);
            },
            changeImageType(label){
                if (label=="upload") {
                    this.fileClass = "show";
                    this.imgClass = "hide";
                } else {
                    this.fileClass = "hide";
                    this.imgClass = "show";
                }
            },
            recognize(){
                var param = {
                    url: this.imageUrl
                }
                this.axios.get("/recognize_tesseract", {params: param}).then(response => {
                    if (response.data) {
                        this.code = response.data
                        this.fileOrigin = this.imageUrl
                    }
                }, response => {
                    // error callback
                    this.$Message.error("请求错误, 请重试2 !");
                })
            }
        }
    }
</script>
<style>
    .show {
        display: block;
    }
    .hide {
        display: none;
    }
</style>
