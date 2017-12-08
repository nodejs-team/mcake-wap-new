import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/pages/demo'
import Home from '@/pages/home'
import selectCity from '@/pages/select-city'
import productList from '@/pages/product-list'
import productDetail from '@/pages/product-detail'
import cart from '@/pages/cart'
import search from '@/pages/search'
import login from '@/pages/login'
import register from '@/pages/register'
import getPwd from '@/pages/getPwd'
import orders from '@/pages/orders'
import users from '@/pages/users'




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
      path: '/city',
      name: 'city',
      component: selectCity
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
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/getPwd',
      name: 'getPwd',
      component: getPwd
    },
    {
      path: '/users',
      name: 'users',
      component: users,
      children: [
        {
          path: '/orders',
          name: 'orders',
          component: orders
        }
      ]
    }



  ]
})
