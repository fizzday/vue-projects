import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import axios from '@/util/preRequests'
Vue.prototype.axios= axios

// import HelloWorld from '@/components/HelloWorld'
import captchaGenerate from '@/components/captcha/generate'
import tmp from '@/components/tmp'


export default new Router({
  routes: [
    {
      path: '/',
      name: 'captchaGenerate',
      component: captchaGenerate
    },
    {
      path: '/captcha/generate',
      name: 'captchaGenerate',
      component: captchaGenerate
    },
    {
      path: '/tmp',
      name: 'tmp',
      component: tmp
    },
  ]
})
