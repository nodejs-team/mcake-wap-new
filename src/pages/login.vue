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
      code:'',
      mobile:'',
      ispwd:true,
      password:'',
      count:60,
      issend:false,
      countText:'点击发送验证码'

    }
  },
  methods:{
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
          mobile:this.mobile,
          password:this.password
        }
      }else{
        if(self.code==''||!self.code){
          self.Toast('请填写验证码');
          return false;
        }
        data={
          mobile:this.mobile,
          code:this.code
        }
      }

      self.Loading.open()
      self.$http.post("/api/admin/login",data)
        .then(function(res){
            console.log(res);
            self.Loading.close();
            if(res.code==0){
              self.$message('登录成功');
            }else{
              self.$message.error('用户名或密码错误');
            }            
        })
    },
    sendMsg(){
        let self = this
        if(self.issend){
          return false;
        }
        
        if(!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(self.mobile)){
          self.Toast('请填写手机号码');
          return false;
        }
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
        // self.Loading.open()
        // self.$http.get("/api/admin/shop/all",{
        //   params:{
        //     mobile:this.mobile,
        //   }
        // })
        // .then(function(res){
        //     console.log(res);
        //     self.Loading.close();
        //     if(res.code==99||res.code==90){
        //       self.$router.push('/login')
        //       return false
        //     }  
        // })
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
