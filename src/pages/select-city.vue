<template>
  <div class="city_wrap" v-show='isshow'>
    <div class="city"  :style='{height:height}' >
      <div class="content" >
        <div class="city-icon">
          <div class="info icon iconsfont icons-dingwei"></div>
          <p>请选择您所在的城市</p>
        </div>
        <ul class="lists">
          <li v-for='(item,index) in cityList' :class="{on:item.id==cityId}" @click='onConfirm(item.name,item.id)'><span>{{item.name}}</span><!-- <b>Shanghai</b> --> <i class="icon iconsfont icons-gengduo"></i></li>
        </ul>
        <div class="city_more">
          <p>更多城市敬请期待</p>
          <img src="/static/images/address_more.png">

        </div>
      </div>
    </div>
    <van-dialog v-model="getAddressShow" @confirm="onConfirm" :show-cancel-button='true' :cancel-button-text="cancel_text">
        <div class="select_city_wrap">
          <p>当前获取到的城市为：{{city_name}}</p>
          <p v-if='cityname'>该城市在配送范围</p>
          <p v-else>该城市不在配送范围，请选择城市</p>
          <div class="city_select">
            <span>配送城市：</span>
            <select v-model='cityId'>
              <option v-for='item in cityList' :value='item.id'>{{item.name}}</option>
            </select>
          </div>
        </div>
      </van-dialog>
  </div>
</template>

<script>
// import $ from 'jquery'
// import Vue from 'vue'
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      msg: '首页',
      popShow: false,
      height:'',
      cityList:[],
      now_index:0,
      c_id:'',
      getAddressShow: false,
      username: '',
      password: '',
      cancel_text:'先逛逛',
      title:'',
      cityList:'',
      cityId:'',
      cityname:'',
      city_name:'上海市',
      cartNum:''
    }
  },
  props:['show'],
  watch:{

  },
  computed:{
    isshow:{
      
      get(){
          return this.show
      },
      set(){
          // this.isshow = newValue; 
      }
    }
  },
  mounted(){
    this.city_name = remote_ip_info?remote_ip_info.city:'上海市';
    // let cityId = sessionStorage.getItem('mcake_cityid')
    this.cityId = this.getCookie('mcake_cityid')
    if(!this.cityId){
      this.getAddressShow=true
    }
    this.getCityList(this.cityId)
    // this.cityMatch()
    this.$nextTick(function(){
      this.height=document.documentElement.clientHeight+'px'
    })
  },
  methods: {
    setCookie(name,value){
      var Days = 30;
      var exp = new Date();
      exp.setTime(exp.getTime() + Days*24*60*60*1000);
      document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    },
    getCookie(name){
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
      else
      return null;
    },
    changeCity(){
        location.reload()
    },
    getCityList(cityId){
       let self = this;
      self.Loading.open()
      self.$http.get('/api/d6aa1510ad3a473a',{
       
      })
        .then(function(res){
            console.log(res);
            self.Loading.close();
            if(res.code==1){
              self.cityList = res.data;
               for(let i=0;i<self.cityList.length;i++){
                if(self.cityList[i].id==self.cityId){
                  self.city_name=self.cityList[i].name
                }
              }
              if(!cityId){
                self.cityMatch();

              }else{
                self.$emit('selectCity',self.city_name)
              }
              
            }else{
              self.MessageBox('提示','获取城市列表失败');
             
            }            
        })
    },
    cityMatch(name,isclear){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/03a8be5ea008cd26',{
        params:{
          name:name?name:remote_ip_info.city
        }
      })
        .then(function(res){
            // console.log(res);
            self.Loading.close();
            if(res.code==1){
              self.cityId=res.data.id
              self.cityname = res.data.name

              self.setCookie('mcake_cityid',self.cityId)
              // sessionStorage.setItem('mcake_cityid',self.cityId)
              self.$emit('selectCity',self.cityname)
              // if(name&&(self.$route.path.includes('/home')||self.$route.path.includes('/list'))){

              //   // location.reload()
              // }
              // if(isclear&&self.$route.path.includes('/cart')){
              //   self.$emit('clearCarts')
              //   // location.reload()
              // }
            }else{
              self.MessageBox('提示','匹配不上');
             
            }            
        })
    },
    onConfirm(name,id){
      if(id==this.cityId){
        this.$emit('selectCity',1)
        return false;
      }
      if(id==this.cityId){
        this.$emit('selectCity',name)
        return false;
      }
      if(!localStorage.mcake_user_token){
        this.cityMatch(name)
        return false;
      }
      this.getCartList(name,id)

    },
    getCartList(name,id){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/5e49d89248023811',{

      }).then(function(res){  //接口返回数据
        self.Loading.close()
        self.ismounted=false
        console.log(res);
        if(res.code==1){
          self.cartNum = res.data.length
          // alert(self.cartNum)
          if(self.cartNum==undefined){
            self.MessageBox.confirm('切换城市会清空购物车，确认要切换城市吗?').then(action => {
              self.clearCart(name)
            },function(){

            });
          }else{
            self.isshow=false;
            self.setCookie('mcake_cityid',self.cityId)
            for(let i=0;i<self.cityList.length;i++){
              if(self.cityList[i].id==self.cityId){
                self.city_name=self.cityList[i].name
              }
            }
            self.cityMatch(name)
          }
        }
      },function(error){  //失败
        console.log(error);
      });
    },
    clearCart(name){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/c300195f519eeeac',{

      })
        .then(function(res){
            // console.log(res);
            self.Loading.close();
            if(res.code==1){
              // self.$emit('clearCart')
              self.cityMatch(name,1)
            }else{
              self.Toast(res.msg)
            }            
        })
    },
    greet: function (event) {

    },
    alert: function (event) {

    },
    pop: function (event) {

    },
    init: function (event) {
      $(".lists li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
      });
    }
  }
}
</script>



<style scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .city .content{
    padding: 3.2rem .3rem .6rem;
    height: 100%;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
  }
  .city_wrap{
    
    position: fixed;
    width: 100%;
    height: 100%;
    
    z-index: 1997;
    top: 0rem;
    left: 0;
    box-sizing: border-box;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
  }
  .city_more{
    margin-top: .2rem;
    font-size: .24rem;
  }
  .city_more img{
    width: .2rem;
    margin-top: .2rem;
  }
  


</style>
