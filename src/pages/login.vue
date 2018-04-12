<template>
  <div class="login">
    <div class="content">
      <div class="login_box">
        <ul>
          <li><i class="icon iconsfont icons-shoujihao"></i>
            <input type="number" class="input_txt" placeholder="手机号码" v-model='mobile'>
          </li>
          <li  v-if='ispwd'><i class="icon iconsfont icons-mima" ></i>
            <input type="password" class="input_txt" placeholder="请输入密码" v-model='password'>
          </li>
          <li class="pwd" v-if='!ispwd'><i class="icon iconsfont icons-mima"></i>
            <input type="text" class="input_txt input_short" placeholder="图片验证码" v-model='vcode'>
            <div class="yzm"><img :src="imgurl" alt="" @click='refresh'></div>
          </li>
          <li class="pwd" v-if='!ispwd'><i class="icon iconsfont icons-mima"></i>
            <input type="text" class="input_txt input_short" placeholder="请输入验证码" v-model='code'>
            <div :class="{send:true,issend:issend}" @click='sendMsg'><span>{{countText}}</span></div>
          </li>
        </ul>
      </div>
      <div class="textRight loginMethod" @click='ispwd=!ispwd'>
        <template v-if='ispwd'>验证码登陆</template>
        <template v-if='!ispwd'>密码登陆</template>
      </div>
      <div class="tips"><router-link to="/register" tag="span" class='textRight'>立即注册</router-link> <i>|</i> <router-link to="/getPwd" tag="span" class='textLeft'>忘记密码</router-link></div>
      <div class="btns fixed">
        <ul >
          <li @click='login'><span>登录</span></li>
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
      vcode:'',
      code:'',
      mobile:'',
      ispwd:true,
      password:'',
      count:60,
      issend:false,
      countText:'点击发送验证码',
      imgurl:'/api/7ba4aed89d17966a?type=login',
      apiurl:''
    }
  },
  methods:{
    refresh(){
      this.imgurl = '/api/7ba4aed89d17966a?type=login&t='+new Date().getTime()
    },
    login(){
      let self = this
      if(!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(self.mobile)){
        self.Toast('请填写手机号码');
        return false;
      }
      let data={};
      if(this.ispwd){
        if(self.password==''||!self.password){
          self.Toast('请填密码');
          return false;
        }
        data={
          uname:this.mobile,
          password:this.password,
          client:2
        }
        self.apiurl='/api/44faba4b9157fab1'
      }else{
        if(self.code==''||!self.code){
          self.Toast('请填写验证码');
          return false;
        }
        data={
          mobile:this.mobile,
          sign:this.code,
          vcode:this.vcode,
          client:2
        }
        self.apiurl='/api/f024e387afc49466'
      }

      self.Loading.open()
      self.$http.post(self.apiurl,data)
        .then(function(res){
            console.log(res);
            self.Loading.close();
            if(res.code==1){
              self.Toast('登录成功');
              localStorage.mcake_user_token = res.data.token;
              localStorage.mcake_user_token_time = new Date().getTime()+60*60*24*1000;
              let isback = self.$route.query.isback
              if(isback){
                self.$router.go(-1);
              }else{
                self.$router.push('/home')
              }
            }else{
              self.MessageBox('提示','用户名或密码错误');
              self.refresh();
              self.vcode = '';
              self.code = '';
            }            
        })
    },
    sendMsg(){
        let self = this
        if(self.issend){
          return false;
        }
        
        if(!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(self.mobile)){
          self.Toast('请填写准确的手机号码');
          return false;
        }
        if(self.vcode==''||!self.vcode){
          self.Toast('请填图形验证码');
          return false;
        }
        self.Loading.open()
        self.$http.post("/api/3bcce139cf5325bd",{
            mobile:this.mobile,
            type:'login',
            vcode:this.imgCode
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

  /*.login .login_box ul li .input_short{
    padding: 0 0.13889rem
  }
  .login .login_box ul li .input_short{
    width: 4.30556rem;
  }*/
  .login .login_box ul li .input_short{
    padding-left: 1.4rem;
  }
  .loginMethod{
    font-size: .4rem;
    padding-right: .2rem;
    margin-top: .4rem;
    margin-bottom: .2rem;
  }
  .login .login_box ul li .send.issend{
    background-color: #eee;
  }
</style>
