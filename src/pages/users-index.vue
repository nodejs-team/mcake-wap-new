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
            <mt-tab-item id="外卖">
              <i class="icon iconsfont">&#xe61a;</i><div class="title">我的订单</div>
            </mt-tab-item>
            <mt-tab-item id="订单">
              <i class="icon iconsfont">&#xe625;</i><div class="title">代付款</div>
            </mt-tab-item>
            <mt-tab-item id="发现">
              <i class="icon iconsfont">&#xe64c;</i><div class="title">待收货</div>
            </mt-tab-item>
            <mt-tab-item id="发现">
              <i class="icon iconsfont">&#xe64c;</i><div class="title">会员等级</div>
            </mt-tab-item>
          </mt-tabbar>
          <mt-tabbar>
            <mt-tab-item id="外卖">
              <i class="icon iconsfont">&#xe61d;</i><div class="title">积分</div>
            </mt-tab-item>
            <mt-tab-item id="订单">
              <i class="icon iconsfont">&#xe625;</i><div class="title">余额</div>
            </mt-tab-item>
            <mt-tab-item id="发现">
              <i class="icon iconsfont">&#xe64c;</i><div class="title">红包/优惠券</div>
            </mt-tab-item>
            <mt-tab-item id="发现">
              <i class="icon iconsfont">&#xe64c;</i><div class="title">现金卡</div>
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
