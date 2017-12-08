<template>
  <div class="login">
    <div class="content">
      <div class="login_box">
        <ul>
          <li><i class="icon iconsfont icons-shoujihao"></i>
            <input type="text" class="input_txt" placeholder="手机号码">
          </li>
          <li><i class="icon iconsfont icons-mima"></i>
            <input type="text" class="input_txt input_short" placeholder="请输入密码">
            <div class="send"><span>获取动态验证码</span></div>
          </li>
        </ul>
      </div>

      <div class="tips"><span class="textRight">立即注册</span> <i>|</i> <span class="textLeft">忘记密码</span></div>
      <div class="btns fixed">
        <ul >
          <li><span>登录</span></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
//import '../style/css/login.css'
export default {
  name: 'login',
  props: [],
  components: {
  },
  data () {
    return {
      msg: '登录',
      isSearch: false
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/login.css'
</style>
