import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueResource from 'vue-resource'
import './style/css/base.css'
import './style/css/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/icons/iconfont.css'
import config from './lib/config/config.js'
import API from './lib/api/API.js'
import login from './lib/controllers/login.js'



Vue.use(MintUI);
Vue.use(VueResource);
Vue.use(config);
Vue.use(API);
Vue.use(login);
Vue.config.productionTip = false;
fastclick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
