import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ChartContainer from '@/components/ChartContainer'
import UploadComponent from '@/components/Upload'
import Template from '@/components/Template'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/charts',
      name: 'ChartContainer',
      component: ChartContainer
    },
    {
      path: '/upload',
      name: 'UploadComponent',
      component: UploadComponent
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    }
  ]
})
