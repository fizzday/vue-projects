import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import axios from '@/util/preRequests'
Vue.prototype.axios= axios

// import HelloWorld from '@/components/HelloWorld'
import captchaGenerate from '@/components/captcha/generate'
import captchaRecognizeTesseract from '@/components/captcha/recognizeTesseract'
import captchaCnnTrain from '@/components/captcha/captchaCnnTrain'
import calculator from '@/components/calculator'
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
      name: 'captchaGenerate2',
      component: captchaGenerate
    },
    {
      path: '/captcha/recognize_tesseract',
      name: 'captchaRecognizeTesseract',
      component: captchaRecognizeTesseract
    },
    {
      path: '/captcha/cnntrain',
      name: 'captchaCnnTrain',
      component: captchaCnnTrain
    },
      // ===========工具类开始============
    {
      path: '/calculator',
      name: 'calculator',
      component: calculator
    },
    {
      path: '/tmp',
      name: 'tmp',
      component: tmp
    },
  ]
})
