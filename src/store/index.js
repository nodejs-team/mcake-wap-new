import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const state = {

}

const actions = {
   // 用户登出，清除本地数据并重定向至登录页面
  logout({commit}) {
      return new Promise(function (resolve, reject) {
          commit('logout')
          axios.post('/api/admin/logout', {}).then(respond => {
                    window.location.href='http://'+window.location.host+'/#/login'
                    //Vue.$router.push('/login')
          
          })          
      })
  },
  // 将刷新的 token 保存至本地
  refreshToken({commit},token) {
      return new Promise(function (resolve, reject) {
          commit('refreshToken', token)
      })
  },
}

const mutations = {
  menuItemsupdata(state, newData) {
    // 变更状态
    
    state.slideMenuItems = newData;
   // console.log(newData);
  },
  // 用户刷新 token 成功，使用新的 token 替换掉本地的token
  refreshToken(state, token) {
      state.token = token
      localStorage.token = token
      axios.defaults.headers.common['Access-Token'] = state.token
      //console.log(state)
  },
  logout(state){
      state.name = null
      state.mobile = null
      state.avatar = null
      state.remark = null
      state.auth = false
      state.token = null

      localStorage.removeItem('tokens')
      localStorage.removeItem('loginName')
  }
}

export default new Vuex.Store({
  state,
  // getters,
  actions,
  mutations
})