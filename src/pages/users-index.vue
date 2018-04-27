<template>
  <div class="users index">
    <div class="topheader">
        <router-link to="/users/message" tag="h2"><i class="icon iconsfont">&#xe63f;</i>我的消息 <em></em></router-link>
    </div>
    <div class="mainContent">
       <div class="user-portrait">
          <div class="user_avater">
            <div class="user-icon">
              <img :src="userinfo.img" alt="">
              <div class="rank">v{{userinfo.rid}}</div>
            </div>

           <h2>{{userinfo.uname}}</h2>
           <p><span @click='logout'><i class="icon iconsfont">&#xe626;</i>切换账号</span></p>
        </div>
       </div>
      <div class="user-main">
        <div class="subNav">
          <mt-tabbar>
            <mt-tab-item id="我的订单">
              <router-link to="/users/orders" tag="div">
                <i class="icon iconsfont">&#xe61a;</i><div class="title">我的订单</div>
              </router-link>
            </mt-tab-item>
            <mt-tab-item id="支付">
              <!-- <router-link :to="{ name: 'pay'}" tag="div"> -->
              <router-link to="/users/orders?orderStatus=order_dfk" tag="div">
                 <i class="icon iconsfont">&#xe625;</i><div class="title">待付款<span v-if='unpaidCount'>{{unpaidCount}}</span></div>
              </router-link>
            </mt-tab-item>
            <mt-tab-item id="待收货">
              <!-- <router-link :to="{ name: 'list'}" tag="div"> -->
                <router-link to="/users/orders?orderStatus=order_dsh" tag="div">
                   <i class="icon iconsfont">&#xe64c;</i><div class="title">待收货<span v-if='waitConfirmCount'>{{waitConfirmCount}}</span></div>
              </router-link>
            </mt-tab-item>
            <mt-tab-item id="会员等级">
              <router-link :to="{ name: 'level'}" tag="div">
                  <i class="icon iconsfont">&#xe64c;</i><div class="title">会员等级</div>
              </router-link>
            </mt-tab-item>
          </mt-tabbar>
          <mt-tabbar>
            <mt-tab-item id="积分">
              <router-link :to="{ name: 'integral'}" tag="div">
                  <i class="icon iconsfont">&#xe61d;</i><div class="title">积分</div>
              </router-link>
            </mt-tab-item>
            <mt-tab-item id="余额">
              <router-link :to="{ name: 'wallet'}" tag="div">
                  <i class="icon iconsfont">&#xe625;</i><div class="title">余额</div>
              </router-link>
            </mt-tab-item>
            <mt-tab-item id="优惠券">
              <router-link :to="{ name: 'hongbao'}" tag="div">
                  <i class="icon iconsfont">&#xe64c;</i><div class="title">红包/优惠券</div>
              </router-link>
            </mt-tab-item>
            <mt-tab-item id="现金卡">
              <router-link :to="{ name: 'cash'}" tag="div">
                  <i class="icon iconsfont">&#xe64c;</i><div class="title">现金卡</div>
              </router-link>
            </mt-tab-item>
          </mt-tabbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'usersIndex',
  props: [],
  components: {
  },
  data () {
    return {
      msg: '用户中心',
      isSearch: false,
      userinfo:'',
      unpaidCount:'',
      waitConfirmCount:'',
      ismonted:false
    }
  },
  mounted(){
    this.getUserInfo()
    this.ismonted=true
  },
  activated(){
    if(this.ismonted){
      return false
    }
    this.getUserInfo()
  },
  deactivated(){
    this.ismonted=false
  },
  methods:{
    getUserInfo(){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/781fdd9d4eb4b628',{

      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.code==1){
          self.userinfo = res.data.userInfo
          self.unpaidCount = res.data.unpaidCount
          self.waitConfirmCount = res.data.waitConfirmCount
        }
      },function(error){  //失败
        console.log(error);
      });
    },
    logout(){
      this.MessageBox.confirm('确定要退出账号吗？').then(action => {
          let self = this;
          self.Loading.open()
          self.$http.get('/api/1cad3899ac89259c',{
            params:{
              'user-token':localStorage.mcake_user_token
            }
          }).then(function(res){  //接口返回数据
            self.Loading.close()
            console.log(res);
            if(res.code==1){
              localStorage.removeItem('mcake_user_token')
              localStorage.removeItem('mcake_user_token_time')
              self.$router.push('/login')
            }
          },function(error){  //失败
            console.log(error);
          });
        
      });
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/user.css';
  .users.index .topheader em{
    text-align: center;
    width: .28rem;
    height: .28rem;
    right: -0.1rem;
    top: .3rem;
  }
  .users.index .topheader{
    background-color: #d0d0d0;
    height: 7rem;
    color: #fff;
  }
  .users.index{
    background-color: #f9f9f9;
  }
  .users.index .mainContent .user-portrait{
    width: 100%;
    margin-left: auto;
    left: auto;
    background-color: #fff;
    top: 0;
    position: relative;
  }
  .users.index .user_avater{
    position: relative;
    transform: translateY(-1.5rem);
  }
  .users.index .topheader h2{
    padding-top: .3rem;
  }
  .users.index .title{
    position: relative;
  }
  .users.index .title span{
    position: absolute;
    top: -0.2rem;
    right: .12rem;
    display: inline-block;
    width: .4rem;
    height: .4rem;
    background-color: #ffcd20;
    border-radius: 50%;
    line-height: .42rem;
    text-align: center;
    font-size: .24rem;
    color: #000;
  }
  .users.index .user-icon img{
    border:.08rem solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 50%;
    width: 2.77778rem;
    height: 2.77778rem;
  }
</style>
