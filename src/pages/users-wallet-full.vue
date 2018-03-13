<template>
  <div class="users money">
    <div class="ziti-address">
      <div class="content">
        <div class="address_box">
          <ul>
            <li>
              <input type="text" class="input_txt" placeholder="卡号">
            </li>
            <li>
              <input type="text" class="input_txt" placeholder="密码">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="guize">
      <h2>规则说明</h2>
      <p>• 充值余额可订购Mcake全线、全品类产品；</p>
      <p>• 请登录www.mcake.com 或关注Mcake官方微信（Mcake1893）订购。</p>
      <p>• 若发生退货，余额支付部分将退回账户，不予兑换；</p>
      <p>• 上海、杭州、北京地区需提前5小时订购，苏州地区需提前8小时订购；</p>
      <p>• 使用余额消费时不再开具发票；</p>
      <p>• Mcake对余额充值规则拥有最终解释权。</p>
    </div>
    <div class="btns">
      <ul >
        <li><span>充值</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'users',
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
