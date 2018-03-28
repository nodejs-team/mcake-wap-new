<template>
  <div class="users money">
    <div class="topheader">

        <div class="now-money">
          <h3>当前余额（元）</h3>
          <i class="money_icon">￥</i><span>210.00</span>
        </div>
        <div class="btns">
          <ul >
            <router-link to="/users/wallet/full" tag="li">
            <span>充值</span>
            </router-link>
          </ul>
        </div>
    </div>
    <div class="integral-message">
      <ul>
        <li>
          <div class="content">
            <h2>余额明细</h2>
            <p>有效订购的产品30天内可对其进行评价，评价通过审核即可获得50积分。若一笔订单包含N个产品，且评价皆通过审核，则最终可获得50N积分。若一笔订单中包含N个同款产品，仅可对商品评价一次，通过审核后，则最终可获得50积分。</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wallet',
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
  .money_icon{
    position: relative;
    top: .3rem;
    font-weight: bold;
  }
</style>
