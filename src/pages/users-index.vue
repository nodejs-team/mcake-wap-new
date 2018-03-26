<template>
  <div class="users index">
    <div class="topheader">
        <h2><i class="icon iconsfont">&#xe63f;</i>我的消息 <em>12</em></h2>
    </div>
    <div class="mainContent">
       <div class="user-portrait">
          <div class="user-icon">
            <img src="../style/images/car-img.jpg" alt="">
            <div class="rank">v2</div>
          </div>

         <h2>雨中潇洒走一回</h2>
         <p><i class="icon iconsfont">&#xe626;</i>切换账号</p>
       </div>
      <div class="user-main">
        <div class="subNav">
          <mt-tabbar>
            <mt-tab-item id="我的订单">
              <router-link :to="{ name: 'list'}" tag="div">
                <i class="icon iconsfont">&#xe61a;</i><div class="title">我的订单</div>
              </router-link>
            </mt-tab-item>
            <mt-tab-item id="支付">
              <router-link :to="{ name: 'pay'}" tag="div">
                 <i class="icon iconsfont">&#xe625;</i><div class="title">代付款</div>
              </router-link>
            </mt-tab-item>
            <mt-tab-item id="待收货">
              <router-link :to="{ name: 'list'}" tag="div">
                   <i class="icon iconsfont">&#xe64c;</i><div class="title">待收货</div>
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
</style>
