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
import fastMail from '@/pages/fast-mail'
import order from '@/pages/order'
import nowbuy from '@/pages/nowbuy'
import address from '@/pages/address'
import pay from '@/pages/pay'
import users from '@/pages/users'
import usersIndex from '@/pages/users-index'
import usersOrders from '@/pages/users-orders'
import usersIntegral from '@/pages/users-integral'
import integralHow from '@/pages/users-integral-how'
import integralUse from '@/pages/users-integral-use'
import integralMessage from '@/pages/users-integral-message'
import usersWallet from '@/pages/users-wallet'
import walletFull from '@/pages/users-wallet-full'
import walletPay from '@/pages/users-wallet-pay'
import walletHongbao from '@/pages/users-wallet-hongbao'
import walletCash from '@/pages/users-wallet-cash'
import userLevel from '@/pages/users-level'


import $ from 'jquery'


Vue.use(Router);

export default new Router({
  /*mode: 'history',*/
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
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/nowbuy',
      name: 'nowbuy',
      component: nowbuy
    },
    {
      path: '/users',
      name: 'users',
      component:users,
      children: [
        {
          path: '/users/index',
          name: 'usersIndex',
          component: usersIndex
        },
        {
          path: '/users/orders',
          name: 'orders',
          component: usersOrders
        },
        {
          path: '/users/fastMail',
          name: 'fastMail',
          component: fastMail
        },
        {
          path: '/users/integral',
          name: 'integral',
          component: usersIntegral
        },
        {
          path: '/users/integral/how',
          name: 'how',
          component: integralHow
        },
        {
          path: '/users/integral/use',
          name: 'use',
          component: integralUse
        },
        {
          path: '/users/message',
          name: 'message',
          component: integralMessage
        },
        {
          path: '/users/wallet',
          name: 'wallet',
          component: usersWallet
        },
        {
          path: '/users/wallet/full',
          name: 'full',
          component: walletFull
        },
        {
          path: '/users/pay',
          name: 'pay',
          component: walletPay
        },
        {
          path: '/users/hongbao',
          name: 'hongbao',
          component: walletHongbao
        },
        {
          path: '/users/cash',
          name: 'cash',
          component: walletCash
        },
        {
          path: '/users/level',
          name: 'level',
          component: userLevel
        }

      ]
    },
    {
      path: '/address',
      name: 'address',
      component: address
    }



  ]
})
