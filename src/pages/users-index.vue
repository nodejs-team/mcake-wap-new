<template>
  <div class="users index">
    <div class="topheader">
        <router-link to="/users/message" tag="h2"><i class="icon iconsfont">&#xe63f;</i>我的消息 <em></em></router-link>
    </div>
    <div class="mainContent">
       <div class="user-portrait">
          <div class="user_avater">
            <div class="user-icon">
              <img src="../style/images/car-img.jpg" alt="">
              <div class="rank">v2</div>
            </div>

           <h2>雨中潇洒走一回</h2>
           <p><i class="icon iconsfont">&#xe626;</i>切换账号</p>
        </div>
       </div>
      <div class="user-main">
        <div class="subNav">
          <mt-tabbar>
            <mt-tab-item id="我的订单">
              <router-link to="/users/orders?orderStatus=1" tag="div">
                <i class="icon iconsfont">&#xe61a;</i><div class="title">我的订单</div>
              </router-link>
            </mt-tab-item>
            <mt-tab-item id="支付">
              <!-- <router-link :to="{ name: 'pay'}" tag="div"> -->
              <router-link to="/users/orders?orderStatus=3" tag="div">
                 <i class="icon iconsfont">&#xe625;</i><div class="title">代付款<span>1</span></div>
              </router-link>
            </mt-tab-item>
            <mt-tab-item id="待收货">
              <!-- <router-link :to="{ name: 'list'}" tag="div"> -->
                <router-link to="/users/orders?orderStatus=4" tag="div">
                   <i class="icon iconsfont">&#xe64c;</i><div class="title">待收货<span>18</span></div>
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
      isSearch: false
    }
  },
  mounted(){

  },
  methods:{

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
  }
</style>
