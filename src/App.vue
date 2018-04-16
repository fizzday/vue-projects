<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    /*background: #5b6270;*/
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
  .fork-me-on-github
  {
    position: absolute;
    right: -4rem;
    top: 3rem;
    width: 15rem;
    height: 2rem;
    background-color: red;
    transform: rotate(50deg);
    text-align: center;
    line-height:2rem;
    background: linear-gradient(to right, yellow, red, orange, green, indigo, violet);
    /*background: linear-gradient(to right, red, orange, green, yellow, indigo, violet);*/
    z-index: 1000;
  }
  .fork-me-on-github.github-text {
    font-size:0.9rem;
    text-decoration: none;
    text-shadow: 0 0 0.2em #fff, 0 0 0.2em green;
    color: #fff;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <a href="/"><img height="65" style="margin-top:-1rem;" src="/static/logo_fizz3.jpg" alt=""></a>
          </div>
          <!--<div class="layout-nav">-->
            <!--<MenuItem name="1">-->
              <!--<Icon type="ios-navigate"></Icon>-->
              <!--Item 1-->
            <!--</MenuItem>-->
            <!--<MenuItem name="2">-->
              <!--<Icon type="ios-keypad"></Icon>-->
              <!--Item 2-->
            <!--</MenuItem>-->
            <!--<MenuItem name="3">-->
              <!--<Icon type="ios-analytics"></Icon>-->
              <!--Item 3-->
            <!--</MenuItem>-->
            <!--<MenuItem name="4">-->
              <!--<Icon type="ios-paper"></Icon>-->
              <!--Item 4-->
            <!--</MenuItem>-->
          <!--</div>-->
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <!--<BreadcrumbItem>{{BreadcrumbItem}}</BreadcrumbItem>-->
          <!--<BreadcrumbItem>{{BreadcrumbItem2}}</BreadcrumbItem>-->
          <!--<BreadcrumbItem>{{BreadcrumbItem3}}</BreadcrumbItem>-->
        </Breadcrumb>
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#495060'}">
              <Menu @on-select="routeTo" :active-name="sidemenu.defaultActive" theme="dark" width="auto" :open-names="sidemenu.defaultOpen">
                <Submenu v-for="item in sidemenu.menulist" :key="item.name" :name="item.name">
                  <template slot="title">
                    <Icon :type="item.icon"></Icon>
                    {{item.title}}
                  </template>
                  <MenuItem v-for="subitem in item.items" :key="subitem.itemName" :name="subitem.itemName">{{subitem.itemTitle}}</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <router-view></router-view>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
    <a target="_blank" href="https://github.com/fizzday"><div class="fork-me-on-github github-text">Fork Me On Github <Icon type="social-github" /></div></a>
  </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            sidemenu:{
                defaultOpen:['captcha'],
                defaultActive: "captchagenerate",
                menulist:[
                    {
                        title:'captcha',
                        name:'captcha',
                        icon:'ios-navigate',
                        items:[
                            {
                                itemName:"captchagenerate",
                                itemTitle:'captchaGenerate'
                            },
                            {
                                itemName:"captcharecognizetesseract",
                                itemTitle:'captchaRecognize'
                            },
                            {
                                itemName:"captchacnntrain",
                                itemTitle:'captchaCnnTrain'
                            },
                            {
                                itemName:"tmp",
                                itemTitle:'tmp'
                            },
                        ]
                    },
                ]
            },
            page: {
                captchagenerate:'/captcha/generate',
                captcharecognizetesseract:'/captcha/recognize_tesseract',
                captchacnntrain:'/captcha/cnntrain',
                tmp:'/tmp',
            }
        }
    },
    computed: {
        setActive() {
            return this.$route.path.replace('/','');
        }
    },
    methods: {
        routeTo(e) {
            this.$router.push({path: this.page[e]});
        },
    }
}
</script>
