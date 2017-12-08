import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import './style/css/base.css'
import './style/css/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/icons/iconfont.css'
Vue.use(MintUI)
Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
