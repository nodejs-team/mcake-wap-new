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
import newAddress from '@/pages/new-address'
import ziti from '@/pages/ziti'
import pay from '@/pages/pay'
import users from '@/pages/users'
import usersIndex from '@/pages/users-index'
import usersOrders from '@/pages/users-orders'
import evaluation from '@/pages/evaluation'
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

import nowbuyXjk from '@/components/nowBuy-xjk'
import nowbuyYhq from '@/components/nowBuy-yhq'
import nowbuyHb from '@/components/nowBuy-hb'
import $ from 'jquery'

import md5 from 'js-md5'
Vue.use(Router);



const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {  
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
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
      path: '/list/:listid',
      name: 'list',
      component: productList
    },
    {
      path: '/detail/:detailid',
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
      path: '/nowbuy/nowbuyXjk',
      name: 'nowbuyXjk',
      component: nowbuyXjk
    },
    {
      path: '/nowbuy/nowbuyYhq',
      name: 'nowbuyYhq',
      component: nowbuyYhq
    },
    {
      path: '/nowbuy/nowbuyHb',
      name: 'nowbuyHb',
      component: nowbuyHb
    },
    {
      path: '/users',
      name: 'users',
      component:users,
      // beforeEnter: (to, from, next) => {
        
      //   next('/login')
      // },

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
        },
        {
          path: '/users/evaluation',
          name: 'evaluation',
          component: evaluation
        }
      ]
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/address/new',
      name: 'newAddress',
      component: newAddress
    },
    {
      path: '/address/ziti',
      name: 'ziti',
      component: ziti
    }



  ]
})
//页面加载前先获取到access_token
router.beforeEach((to, from, next) => {
  
  //生成随机字符串
  let rand_str = function(len) {
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (let i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
  }
  let timestamp = new Date().getTime();
  let randstr = rand_str(32);
  let device_id = rand_str(16)
  // app_id=服务器颁发的应用ID&app_secret=服务器颁发的应用秘钥&device_id=设备唯一ID&rand_str=随机字符串&timestamp=当前系统时间戳
  let signature_str = 'app_id=92239814&app_secret=RHtzKIFRWweTAquYVSGJKwpeSMChMuXx&device_id='+device_id+'&rand_str='+randstr+'&timestamp='+timestamp
  
  let signature = md5(signature_str)
  // console.log(signature)
  // console.log(localStorage.mcake_is_login)
  let mcake_is_login = localStorage.mcake_is_login?JSON.parse(localStorage.mcake_is_login):''
  // console.log(mcake_is_login)
  if(mcake_is_login&&((mcake_is_login.time+mcake_is_login.expires_in*1000-new Date().getTime())>200*1000)){
    next()
  }else{
    next()
    localStorage.removeItem('mcake_is_login');
    let self = new Vue();

    self.$http.get('/api/027ae5bd6a9940da',{
      params:{
          "app_id":"92239814",
          "signature":signature,   //请注意，此字段只是在计算加密串的时候在被加入，API请求请勿传递此字段值
          "device_id":device_id,
          "rand_str":randstr,
          "timestamp":timestamp
      }
    }
    ).then(function(response){  //接口返回数据
      console.log(response)
      if(response.code==1){
        let obj = {
          token:response.data.access_token,
          time:new Date().getTime(),
          expires_in:response.data.expires_in
        }

        localStorage.mcake_is_login = JSON.stringify(obj)
        next()
      }else{
        self.Toast(response.msg)
      }
    },function(error){  //失败
      console.log(error);
      self.Toast(error)
    });
  }

  
})
export default router