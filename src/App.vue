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
  .fork-me-on-github a {
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
          <div class="layout-logo"><img height="40" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA0NjgwOTI2NTgxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMzIgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyNzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAxLjU2MjUiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0wIDUxNS44NzJDMCA3NDEuMTIgMTQ0LjM1MiA5MzIuNjQgMzQ1LjU4NCAxMDAyLjk3NmMyNy4xMiA2Ljg5NiAyMi44OTYtMTIuNTQ0IDIyLjg5Ni0yNS42MTZsMC04OS40MjRjLTE1Ni40NjQgMTguMzA0LTE2Mi43MzYtODUuMjgtMTczLjI5Ni0xMDIuNjA4LTIxLjMxMi0zNi4yNzItNzEuMzkyLTQ1LjQ4OC01Ni40MzItNjIuNzUyIDM1LjY5Ni0xOC40MzIgNzEuOTY4IDQuNjA4IDExNCA2Ni43ODQgMzAuNDY0IDQ1LjA3MiA4OS42NjQgMzcuNTA0IDExOS45MzYgMjkuOTM2IDYuNjI0LTI3LjA1NiAyMC43MDQtNTEuMiAzOS45NTItNzAuMDgtMTYxLjg4OC0yOC44MTYtMjI5LjU1Mi0xMjcuNzkyLTIyOS41NTItMjQ1LjQ0IDAtNTYuOTQ0IDE4LjgtMTA5LjUwNCA1NS44MDgtMTUxLjg1Ni0yMy40MDgtNjkuODg4IDIuMjU2LTEyOS40NzIgNS42MTYtMTM4LjQxNiA2Ni45MjgtNi4wOCAxMzYuNTEyIDQ3Ljg3MiAxNDEuODcyIDUyLjEyOCAzOC4xMjgtMTAuMTkyIDgxLjUyLTE1Ljc2IDEzMC4wNjQtMTUuNzYgNDguODQ4IDAgOTIuNDggNS42MzIgMTMwLjc4NCAxNS45NTIgMTMuMDcyLTkuOTUyIDc3LjU4NC01Ni4xOTIgMTM5LjgyNC01MC41NDQgMy4zMTIgOC44NDggMjguNDE2IDY3LjE2OCA2LjQgMTM2LjAxNiAzNy4zNzYgNDIuNDY0IDU2LjM1MiA5NS4yNjQgNTYuMzUyIDE1Mi40OCAwIDExNy44ODgtNjcuOTUyIDIxNy4wMDgtMjMwLjUyOCAyNDUuNiAyNy4xNTIgMjYuNzM2IDQzLjk4NCA2My45MiA0My45ODQgMTA1LjA0bDAgMTI5LjcxMmMwLjg2NCAxMC4zMzYgMCAyMC43MzYgMTcuMzYgMjAuNzM2IDIwNC4xMTItNjguNzUyIDM1MS4xMi0yNjEuNzEyIDM1MS4xMi00ODkuMDA4QzEwMzEuNzQ0IDIzMC45NiA4MDAuNzg0IDAgNTE1Ljg3MiAwIDIzMC45NiAwIDAgMjMwLjk2IDAgNTE1Ljg3MkwwIDUxNS44NzJ6TTAgNTE1Ljg3MiIgcC1pZD0iNDI3MSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==" alt=""></div>
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
                  <MenuItem @click="test()" v-for="subitem in item.items" :key="subitem.itemName" :name="subitem.itemName">{{subitem.itemTitle}}</MenuItem>
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
    <div class="fork-me-on-github"><a target="_blank" href="https://github.com/fizzday">Fork Me On Github <Icon type="social-github" /></a></div>
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
                                itemName:"captcharecognize",
                                itemTitle:'captchaRecognize'
                            },
                            {
                                itemName:"captchacnntrain",
                                itemTitle:'captchaCnnTrain'
                            },
                        ]
                    },
                ]
            },
            page: {
                captchagenerate:'/captcha/generate',
                captcharecognize:'/captcha/recognize',
                captchacnntrain:'/captcha/cnntrain'
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
