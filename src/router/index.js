import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import axios from '@/util/preRequests'
Vue.prototype.axios= axios

// import HelloWorld from '@/components/HelloWorld'
import captchaGenerate from '@/components/captcha/generate'
import captchaRecognizeTesseract from '@/components/captcha/recognizeTesseract'
import captchaCnnTrain from '@/components/captcha/captchaCnnTrain'
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
      path: '/captcha/recognize_tesseract',
      name: 'captchaRecognizeTesseract',
      component: captchaRecognizeTesseract
    },
    {
      path: '/captcha/cnntrain',
      name: 'captchaCnnTrain',
      component: captchaCnnTrain
    },
    {
      path: '/tmp',
      name: 'tmp',
      component: tmp
    },
  ]
})
