<template>
  <div class="login">
    <div class="content">
      <div class="login_box">
        <ul>
          <li><i class="icon iconsfont icons-shoujihao"></i>
            <input type="text" class="input_txt" placeholder="注册时的手机号">
          </li>
          <li class="pwd">
            <input type="text" class="input_txt input_short" placeholder="图片验证码">
            <div class="yzm"><img src="../../static/images/yzm.png" alt=""></div>
          </li>

          <li class="pwd">
            <input type="text" class="input_txt input_short" placeholder="手机验证码">
            <div class="send"><span>点击发送验证码</span></div>
          </li>

          <li><i class="icon iconsfont icons-mima"></i>
            <input type="text" class="input_txt " placeholder="新密码">
          </li>
          <li><i class="icon iconsfont icons-mima"></i>
            <input type="text" class="input_txt " placeholder="密码确认">
          </li>
        </ul>
      </div>

      <div class="tips"><span class="textRight">立即注册</span> <i>|</i> <router-link to="/login" tag="span" class='textLeft'>立即登陆</router-link></div>
      <div class="btns fixed">
        <ul >
          <li><span>立即注册</span></li>
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
