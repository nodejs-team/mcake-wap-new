<template>
  <div class="users integral how">
    <div class="topheader">
      <h1>如何获得<span>积分</span>？<br>
        <b>How do I get the integral?</b>
      </h1>
    </div>

    <div class="user-integral-list integral-how">
      <ul>
        <li><i class="icon iconsfont icons-money2"></i>
          <h2>注册得积分</h2>
          <p>注册成功可获得100积分。</p>
        </li>
        <li><i class="icon iconsfont icons-money2"></i>
          <h2>购物得积分</h2>
          <p>购物完成可获得消费积分，按照会员每笔订单实际支付
            金额（优惠券、积分、现金卡、专项卡、红包抵扣部分
            不计入在内）赠送积分，每消费100元赠送25积分，按
            照此比例依次类推。</p>
        </li>
        <li><i class="icon iconsfont icons-money2"></i>
          <h2>评论得积分</h2>
          <p>有效订购的产品30天内可对其进行评价，评价通过审核
            即可获得50积分。若一笔订单包含N个产品，且评价皆
            通过审核，则最终可获得50N积分。若一笔订单中包含
            N个同款产品，仅可对商品评价一次，通过审核后，则
            最终可获得50积分。</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'how',
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
