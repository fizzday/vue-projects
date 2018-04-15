<template>
    <div class="container">
        <Row>
            <div class="captcha_show">
                <div class="captcha"><img @click="getCaptcha()" :src="captcha_img" alt="" /></div>
                <div class="github"><a href=""><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA0NjgwOTI2NTgxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMzIgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyNzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAxLjU2MjUiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0wIDUxNS44NzJDMCA3NDEuMTIgMTQ0LjM1MiA5MzIuNjQgMzQ1LjU4NCAxMDAyLjk3NmMyNy4xMiA2Ljg5NiAyMi44OTYtMTIuNTQ0IDIyLjg5Ni0yNS42MTZsMC04OS40MjRjLTE1Ni40NjQgMTguMzA0LTE2Mi43MzYtODUuMjgtMTczLjI5Ni0xMDIuNjA4LTIxLjMxMi0zNi4yNzItNzEuMzkyLTQ1LjQ4OC01Ni40MzItNjIuNzUyIDM1LjY5Ni0xOC40MzIgNzEuOTY4IDQuNjA4IDExNCA2Ni43ODQgMzAuNDY0IDQ1LjA3MiA4OS42NjQgMzcuNTA0IDExOS45MzYgMjkuOTM2IDYuNjI0LTI3LjA1NiAyMC43MDQtNTEuMiAzOS45NTItNzAuMDgtMTYxLjg4OC0yOC44MTYtMjI5LjU1Mi0xMjcuNzkyLTIyOS41NTItMjQ1LjQ0IDAtNTYuOTQ0IDE4LjgtMTA5LjUwNCA1NS44MDgtMTUxLjg1Ni0yMy40MDgtNjkuODg4IDIuMjU2LTEyOS40NzIgNS42MTYtMTM4LjQxNiA2Ni45MjgtNi4wOCAxMzYuNTEyIDQ3Ljg3MiAxNDEuODcyIDUyLjEyOCAzOC4xMjgtMTAuMTkyIDgxLjUyLTE1Ljc2IDEzMC4wNjQtMTUuNzYgNDguODQ4IDAgOTIuNDggNS42MzIgMTMwLjc4NCAxNS45NTIgMTMuMDcyLTkuOTUyIDc3LjU4NC01Ni4xOTIgMTM5LjgyNC01MC41NDQgMy4zMTIgOC44NDggMjguNDE2IDY3LjE2OCA2LjQgMTM2LjAxNiAzNy4zNzYgNDIuNDY0IDU2LjM1MiA5NS4yNjQgNTYuMzUyIDE1Mi40OCAwIDExNy44ODgtNjcuOTUyIDIxNy4wMDgtMjMwLjUyOCAyNDUuNiAyNy4xNTIgMjYuNzM2IDQzLjk4NCA2My45MiA0My45ODQgMTA1LjA0bDAgMTI5LjcxMmMwLjg2NCAxMC4zMzYgMCAyMC43MzYgMTcuMzYgMjAuNzM2IDIwNC4xMTItNjguNzUyIDM1MS4xMi0yNjEuNzEyIDM1MS4xMi00ODkuMDA4QzEwMzEuNzQ0IDIzMC45NiA4MDAuNzg0IDAgNTE1Ljg3MiAwIDIzMC45NiAwIDAgMjMwLjk2IDAgNTE1Ljg3MkwwIDUxNS44NzJ6TTAgNTE1Ljg3MiIgcC1pZD0iNDI3MSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==" alt="github" /></a></div>
            </div>
        </Row>


        <!--画布-->
        <Row type="flex">
            <Col :sm="24" :xs="24">
            <p>&nbsp;</p>
            <p class="text-align-left">验证码画布</p>
            <hr>
            <p>&nbsp;</p>
            </Col>
            <Col :sm="2" :xs="4">验证码宽度</Col>
            <Col :sm="6" :xs="20"><Slider @on-change="getCaptcha()" v-model="captcha.width" show-input :max=1000 :step=20></Slider></Col>
            <Col :sm="2" :xs="4">&nbsp;验证码高度</Col>
            <Col :sm="6" :xs="20"><Slider @on-change="getCaptcha()" v-model="captcha.height" show-input :max=1000 :step=10></Slider></Col>
            <Col :sm="8" :xs="24" class="text-align-left">&nbsp;&nbsp;背景颜色 : <ColorPicker @on-change="getCaptcha()"  v-model="captcha.bg_color" recommend /></Slider></Col>

            <Col :sm="24" :xs="24">
            <p>&nbsp;</p>
            </Col>
            <Col :sm="2" :xs="4">字符数</Col>
            <Col :sm="6" :xs="20">
            <span class="col-children-mark">验证码中字符的个数</span>
            <Slider @on-change="getCaptcha()" v-model="captcha.chars_num" show-input :max=32></Slider>
            </Col>
            <Col :sm="12" :xs="24" class="text-align-left">
            <CheckboxGroup @on-change="getCaptcha()" v-model="captcha.chars">
                <span>&nbsp;&nbsp;字符类型 :  &nbsp;</span>
                <Checkbox label="char_number"><span>数字</span></Checkbox>
                <Checkbox label="char_lower"><span>小写字母</span></Checkbox>
                <Checkbox label="char_upper"><span>大写字母</span></Checkbox>
                <Checkbox label="char_chinese"><span>一级汉字</span></Checkbox>
            </CheckboxGroup>
            </Col>
        </Row>

        <!--字体-->
        <Row type="flex">
            <Col :sm="24" :xs="24">
            <p>&nbsp;</p>
            <p class="text-align-left">字体</p>
            <hr>
            <p>&nbsp;</p>
            </Col>
            <Col :sm="2" :xs="4">字体大小</Col>
            <Col :sm="6" :xs="20"><Slider @on-change="getCaptcha()" v-model="captcha.font.size" show-input :max=100></Slider></Col>
            <Col :sm="8" :xs="24" class="text-align-left">
            <RadioGroup @on-change="getCaptcha()" v-model="captcha.font.name">
                <span>&nbsp;&nbsp;字体 :  &nbsp;</span>
                <Radio label="MonacoYahei"><span>MonacoYahei</span></Radio>
            </RadioGroup>
            </Col>
            <Col :sm="8" :xs="24" class="text-align-left">&nbsp;&nbsp;字体颜色 : <ColorPicker @on-change="getCaptcha()"  v-model="captcha.font.color" recommend /></Slider></Col>

        </Row>

        <!--噪点-->
        <Row type="flex">
            <Col :sm="24" :xs="24">
            <p>&nbsp;</p>
            <p class="text-align-left">噪点</p>
            <hr>
            <p>&nbsp;</p>
            </Col>
            <Col :sm="6" :xs="24" class="text-align-left">
            <RadioGroup v-model="captcha.point" @on-change="getCaptcha()">
                <span>启用噪点 :  &nbsp;</span>
                <Radio label="True"><span>是</span></Radio>
                <Radio label="False"><span>否</span></Radio>
            </RadioGroup>
            </Col>
            <Col :sm="2" :xs="4">噪点数量</Col>
            <Col :sm="8" :xs="20">
            <span class="col-children-mark">默认0时,随机数量(100~200)</span>
            <Slider @on-change="getCaptcha()" v-model="captcha.point_num" show-input :max=1000 :step=50></Slider>
            </Col>
            <Col :sm="4" :xs="12" class="text-align-left">&nbsp;&nbsp;噪点颜色 : <ColorPicker @on-change="getCaptcha()"  v-model="captcha.point_color" recommend /></Slider></Col>

        </Row>

        <!--干扰线-->
        <Row type="flex">
            <Col :sm="24" :xs="24">
            <p>&nbsp;</p>
            <p class="text-align-left">干扰线</p>
            <hr>
            <p>&nbsp;</p>
            </Col>

            <Col :sm="24" :xs="24" class="text-align-left">
            <RadioGroup v-model="captcha.line" @on-change="getCaptcha()">
                <span>启用干扰线 :  &nbsp;</span>
                <Radio label="True"><span>是</span></Radio>
                <Radio label="False"><span>否</span></Radio>
            </RadioGroup>
            </Col>
            <Col :sm="24" :xs="24">&nbsp;</Col>
            <Col :sm="2" :xs="4">干扰线数量</Col>
            <Col :sm="6" :xs="20">
            <Slider @on-change="getCaptcha()" v-model="captcha.line_num" show-input :max=50></Slider>
            </Col>

            <Col :sm="2" :xs="4">&nbsp;干扰线宽度</Col>
            <Col :sm="6" :xs="20">
            <Slider @on-change="getCaptcha()" v-model="captcha.line_width" show-input :max=10></Slider>
            </Col>

            <!--<Col :sm="2" :xs="4">干扰线颜色</Col>-->
            <Col :sm="8" :xs="24" class="text-align-left">&nbsp;&nbsp;扰线颜色 : <ColorPicker @on-change="getCaptcha()"  v-model="captcha.line_color" recommend /></Slider></Col>

        </Row>

        <!--倾斜-->
        <Row type="flex">
            <Col :sm="24" :xs="24">
            <p>&nbsp;</p>
            <p class="text-align-left">倾斜</p>
            <hr>
            <p>&nbsp;</p>
            </Col>

            <Col :sm="8" :xs="24" class="text-align-left">
            <RadioGroup @on-change="getCaptcha()" v-model="captcha.tilt">
                <span>是否倾斜 :  &nbsp;</span>
                <Radio label="True"><span>是</span></Radio>
                <Radio label="False"><span>否</span></Radio>
            </RadioGroup>
            </Col>
            <Col :sm="2" :xs="4">倾斜角度</Col>
            <Col :sm="9" :xs="20">
            <span class="col-children-mark">默认0时, 或值为45°时,随机角度(-45° ~ 45°)</span>
            <Slider @on-change="getCaptcha()" v-model="captcha.tilt_angle" show-input :max=180></Slider>
            </Col>
        </Row>
        <!--more-->

        <!--<div class="fork-me-on-github" style="position:relative"><a href="https://github.com/fizzday">Fork Me On Github</a></div>-->
    </div>

</template>
<script>
    export default {
        data () {
            return {
                captcha_img:"",
//                captcha_url:"http://127.0.0.1:5000/getCaptcha?time="+Math.random(),
                captcha:{
                    width: 160,
                    height: 60,
                    chars_num: 4,
                    bg_color: "#fff",
                    font:{
                        size:32,
                        color: "",
                        name:"MonacoYahei",
                        path:"",
                    },
                    point: "True",
                    point_num: 0,
                    point_color: "#678",
                    line: "True",
                    line_num: 0,
                    line_width: 0,
                    line_color: "",
                    chars: [
                        "char_number",
                        "char_lower",
                        "char_upper",
//                        "char_chinese"
                    ],
                    tilt: "True",
                    tilt_angle: 0,
                    chars_repeat: "True",
                }
            }
        },

        mounted() {
            this.captcha_img = 'data:image/png;base64,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'
        },

        methods: {
            getCaptcha() {
                setTimeout(() => {
                    this.axios.post("/getCaptcha", {config:JSON.stringify(this.captcha)}).then(response => {
                        if (!response.data) {
                            this.$Message.info("错误啊错误");
                            return;
                        }
                        this.captcha_img = response.data
                    }, response => {
                        // error callback
                        this.$Message.error("请求错误, 请重试 !");
                    })
                }, 50);
            },
        }
    }
</script>
<style>
    .col-children-mark {
        display: inline-block;
        float: left;
        color: grey;
        line-height:0.5rem;
    }
    .text-align-left {
        text-align: left;
    }
    .text-align-right {
        text-align: right;
    }

    .captcha_show {
        position: relative;
    }
    .captcha_show .github {
        height:3rem;
        width:3rem;
        position: absolute;
        top:0;
        right:0;
    }
    .captcha_show .github img {
        height:3rem;
        background: #345234;
        -webkit-border-radius:1rem;
        -moz-border-radius:1rem;
        border-radius:1rem;
    }
</style>
