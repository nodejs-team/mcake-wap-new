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
// fastclick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
