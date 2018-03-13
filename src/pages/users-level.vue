<template>
  <div class="users level">
    <div class="level-header">
      <div class="mylevel"><span>V2</span></div>
      <div class="txt">还差消费344.00元升级至 V3</div>
      <div class="level-line"></div>
      <div class="dot"></div>
    </div>
    <div class="level-main">
      <ul>
        <li>
          <div class="level-left"><span>V1</span></div>
          <div class="level-center">免费领取会员卡</div>
          <div class="level-right">消费累计 0元</div>
        </li>
        <li class="cur">
          <div class="level-left"><span>V2</span></div>
          <div class="level-center">参加抢红包活动</div>
          <div class="level-right">消费累计 500元</div>
        </li>
        <li>
          <div class="level-left"><span>V3</span></div>
          <div class="level-center">尊享永久订购9.8折优惠</div>
          <div class="level-right">消费累计 2000元</div>
        </li>
        <li>
          <div class="level-left"><span>V4</span></div>
          <div class="level-center">尊享永久订购9.5折优惠</div>
          <div class="level-right">消费累计 5000元</div>
        </li>
        <li>
          <div class="level-left"><span>V5</span></div>
          <div class="level-center">进入蛋糕五折购买区</div>
          <div class="level-right">消费累计 10000元</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'level',
    props: [],
    components: {
    },
    data () {
      return {
        msg: '用户中心',
        level: 2
      }
    },
    mounted(){
      this.init();
    },
    methods:{
        init:function () {
           $(".level-header .dot").addClass("level-"+this.level);
        }
    }
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/user.css';
</style>
