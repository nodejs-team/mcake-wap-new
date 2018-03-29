<template>
  <div class="login">
    <div class="content">
      <div class="login_box">
        <ul>
          <li><i class="icon iconsfont icons-shoujihao"></i>
            <input type="text" class="input_txt" placeholder="手机号码">
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
            <input type="text" class="input_txt " placeholder="密码">
          </li>
          <li><i class="icon iconsfont icons-mima"></i>
            <input type="text" class="input_txt " placeholder="密码确认">
          </li>
        </ul>
      </div>
      <div class="yuedu">
        <p class="pwd_waring">密码必须是6-30位字符，可使用字母、数字。</p>
        <p class="mcake_agree"><span><span :class="{icon_agree:true,ischecked:ischecked}" @click='ischecked=!ischecked'></span><span>同意《Mcake购物协议》</span></span></p>
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
import '../style/css/login.css'
export default {
  name: 'login',
  props: [],
  components: {
  },
  data () {
    return {
      msg: '登录',
      isSearch: false,
      ischecked:false
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import '../style/css/login.css'*/
  
</style>
