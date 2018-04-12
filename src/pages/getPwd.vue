<template>
  <div class="login">
    <div class="content">
      <div class="login_box">
        <ul>
          <li><i class="icon iconsfont icons-shoujihao"></i>
            <input type="number" class="input_txt" placeholder="注册时手机号码" v-model='data.mobile'>
          </li>
          <li class="pwd">
            <input type="text" class="input_txt input_short" placeholder="图片验证码" v-model='data.imgCode'>
            <div class="yzm"><img :src="imgurl" alt="" @click='refresh'></div>
          </li>

          <li class="pwd">
            <input type="text" class="input_txt input_short" placeholder="手机验证码" v-model='data.code'>
            <div :class="{send:true,issend:issend}" @click='sendMsg'><span>{{countText}}</span></div>
          </li>

          <li><i class="icon iconsfont icons-mima"></i>
            <input type="text" class="input_txt " placeholder="新密码" v-model='data.password'>
          </li>
          <li><i class="icon iconsfont icons-mima"></i>
            <input type="text" class="input_txt " placeholder="密码确认" v-model='data.confirm_password'>
          </li>
        </ul>
      </div>

      <div class="tips"><router-link to="/register" tag="span" class='textRight'>立即注册</router-link> <i>|</i> <router-link to="/login" tag="span" class='textLeft'>立即登陆</router-link></div>
      <div class="btns fixed">
        <ul >
          <li @click='register'><span>确认修改</span></li>
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
      ischecked:false,
      count:60,
      issend:false,
      countText:'点击发送验证码',
      data:{
        mobile:'',
        imgCode:'',
        code:'',
        password:'',
        confirm_password:''
      },
      imgurl:'/api/7ba4aed89d17966a?type=password'
    }
  },
  methods:{
    refresh(){
      this.imgurl = '/api/7ba4aed89d17966a?type=password&t='+new Date().getTime()
    },
    register(){
      let self = this
      if(!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(self.data.mobile)){
        self.Toast('请填写准确的手机号码');
        return false;
      }
      if(self.data.imgCode==''||!self.data.imgCode){
          self.Toast('请填正确的图形验证码');
          return false;
      }
      if(self.data.code==''||!self.data.code){
          self.Toast('请填正确的验证码');
          return false;
      }
      if(self.data.password.length<6||self.data.password.length>30){
          self.Toast('请填正确的密码');
          return false;
      }
      if(self.data.password!=self.data.confirm_password){
          self.Toast('两次密码不一致');
          return false;
      }
      if(!self.ischecked){
          self.Toast('请阅读并同意购物须知');
          return false;
      }
      self.Loading.open()
      self.$http.post("/api/cdbe580b34aab6a0",self.data)
        .then(function(res){
            console.log(res);
            self.Loading.close();
            if(res.code==0){
              self.MessageBox('密码修改成功');
            }else{
              self.Toast('用户名或密码错误');
            }            
        })
    },
    sendMsg(){
        let self = this
        if(self.issend){
          return false;
        }
        
        if(!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(self.data.mobile)){
          self.Toast('请填写准确的手机号码');
          return false;
        }
        if(self.data.imgCode==''||!self.data.imgCode){
          self.Toast('请填图形验证码');
          return false;
        }
   
        self.Loading.open()
        self.$http.post("/api/3bcce139cf5325bd",{
            mobile:this.data.mobile,
            type:'password',
            vcode:this.data.imgCode
        })
        .then(function(res){
            console.log(res);
            self.Loading.close();
            if(res.code==1){
              self.Toast('短信发送成功');
              self.sign = res.data.sign;
              self.time=setInterval(function(){
                self.issend=true
                self.count--
                if(self.count<=0){
                  clearInterval(self.time)
                  self.issend=false
                  self.countText='再次发送'
                  self.count=60
                }else{
                  self.countText=self.count+'S后再试'
                }
                
              },1000)
            }else{
              self.Toast(res.msg);
              self.refresh()
            }  
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import '../style/css/login.css'*/
  .login .login_box ul li .send.issend{
    background-color: #eee;
  }
</style>