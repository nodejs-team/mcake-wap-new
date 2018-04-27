import Vue from 'vue'
import App from './App'
import router from './router'
// import fastclick from 'fastclick'
import VueResource from 'vue-resource'
import './style/css/base.css'
import './style/css/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/icons/iconfont.css'
import config from './lib/config/config.js'

import API from './lib/api/API.js'
import login from './lib/controllers/login.js'
import flexible from 'lib-flexible'
import axios from './axios'
import VueAxios from 'vue-axios'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';


import 'vue2-animate/dist/vue2-animate.min.css';

import { Toast, MessageBox, Popup } from 'mint-ui'
import { Indicator } from 'mint-ui';

import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

Vue.use(YDUI);

import store from './store'
Vue.component(Popup.name, Popup)
// require('animate.css/animate.min.css');
// require('vue2-animate/dist/vue2-animate.min.css')
// import { CellSwipe } from 'mint-ui';

// Vue.component(CellSwipe.name, CellSwipe);

Vue.use(Vant);
Vue.use(VueAxios, axios)

Vue.use(MintUI);
// Vue.use(VueResource);
Vue.use(config);
Vue.prototype.Toast=Toast;
Vue.prototype.MessageBox=MessageBox;
Vue.prototype.Popup=Popup;
Vue.prototype.Loading=Indicator
// Vue.use(API);
Vue.prototype.baseUrl = 'https://www.easy-mock.com/mock/59fdce0e6b54331215b44a24/mcake';

        Vue.prototype.API = {
          goods:Vue.prototype.baseUrl+'/goods',
          news:Vue.prototype.baseUrl+'/news'
        };
Vue.use(login);
Vue.config.productionTip = false;

Vue.filter('toDecimal2', function (x) {
	var f = parseFloat(x); 
    if (isNaN(f)) { 
    return false; 
    } 
    var f = Math.round(x*100)/100; 
    var s = f.toString(); 
    var rs = s.indexOf('.'); 
    if (rs < 0) { 
    rs = s.length; 
    s += '.'; 
    } 
    while (s.length <= rs + 2) { 
    s += '0'; 
    } 
    return s; 
  // 返回处理后的值
})

// getter，返回已注册的过滤器
var toDecimal2 = Vue.filter('toDecimal2')
// fastclick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  filters:{
      toDecimal2
  },
})
