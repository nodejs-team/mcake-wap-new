import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/pages/demo'
import Home from '@/pages/home'
import productList from '@/pages/product-list'
import productDetail from '@/pages/product-detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: productList
    },
    {
      path: '/detail',
      name: 'detail',
      component: productDetail
    }

  ]
})
