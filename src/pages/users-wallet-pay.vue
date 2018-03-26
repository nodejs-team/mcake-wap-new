<template>
  <div class="users charge">
    <ul class="payfor">
      <li>
        <i class="icon iconsfont icons-money2"></i>
        <p><b>货到付款</b> <br><span>现金支付</span></p>
      </li>
      <li>
        <i class="icon iconsfont icons-money2"></i>
        <p><b>货到付款</b> <br><span>刷POS</span></p>
      </li>
      <li>
        <i class="icon iconsfont icons-money2"></i>
        <p><b>货到付款</b> <br><span>刷信用卡</span></p>
      </li>
      <li class="on">
        <i class="icon iconsfont icons-money2"></i>
        <p><b>在线支付</b></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pay',
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
      $(".payfor li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
      });
  },
  methods:{

  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/user.css';
</style>
