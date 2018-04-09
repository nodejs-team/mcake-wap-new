<template>
  <div class="container-wrap">
      <div class="order-list">
        <div class="order-num"><span>订单编号: 10700234230</span></div>
        <ul class="orderList">
          <li class="flex-w">
            <div class="pro-box flex-h">
              <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
              <div class="content">
                <dl>
                  <dt><h2>Napoléon vanille</h2><br><h2>经典香草拿破仑111</h2></dt>
                  <dd><em>数量：</em> <span>1个</span></dd>
                  <dd><em>大小：</em> <span>适2-3人食</span></dd>
                  <dd><em>巧克力牌：</em> <span>1个</span></dd>
                  <dd><em>赠送：</em> <span>标配餐具1套</span></dd>
                  <dd><em>额外生日蜡烛：</em> <span>1套</span></dd>
                </dl>
              </div>
            </div>
          </li>
          <li class="flex-w">
            <div class="pro-box flex-h">
              <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
              <div class="content">
                <dl>
                  <dt><h2>Napoléon vanille</h2><br><h2>经典香草拿破仑222</h2></dt>
                  <dd><em>数量：</em> <span>1个</span></dd>
                  <dd><em>大小：</em> <span>适2-3人食</span></dd>
                  <dd><em>巧克力牌：</em> <span>1个</span></dd>
                  <dd><em>赠送：</em> <span>标配餐具1套</span></dd>
                  <dd><em>额外生日蜡烛：</em> <span>1套</span></dd>
                </dl>
              </div>
            </div>
          </li>
          <li class="flex-w">
            <div class="pro-box flex-h">
              <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
              <div class="content">
                <dl>
                  <dt><h2>Napoléon vanille</h2><br><h2>经典香草拿破仑333</h2></dt>
                  <dd><em>数量：</em> <span>1个</span></dd>
                  <dd><em>大小：</em> <span>适2-3人食</span></dd>
                  <dd><em>巧克力牌：</em> <span>1个</span></dd>
                  <dd><em>赠送：</em> <span>标配餐具1套</span></dd>
                  <dd><em>额外生日蜡烛：</em> <span>1套</span></dd>
                </dl>
              </div>
            </div>
          </li>
          <li class="flex-w">
            <div class="pro-box flex-h">
              <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
              <div class="content">
                <dl>
                  <dt><h2>Napoléon vanille</h2><br><h2>经典香草拿破仑444</h2></dt>
                  <dd><em>数量：</em> <span>1个</span></dd>
                  <dd><em>大小：</em> <span>适2-3人食</span></dd>
                  <dd><em>巧克力牌：</em> <span>1个</span></dd>
                  <dd><em>赠送：</em> <span>标配餐具1套</span></dd>
                  <dd><em>额外生日蜡烛：</em> <span>1套</span></dd>
                </dl>
              </div>
            </div>
          </li>
          <li class="flex-w">
            <div class="pro-box flex-h">
              <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
              <div class="content">
                <dl>
                  <dt><h2>Napoléon vanille</h2><br><h2>经典香草拿破仑555</h2></dt>
                  <dd><em>数量：</em> <span>1个</span></dd>
                  <dd><em>大小：</em> <span>适2-3人食</span></dd>
                  <dd><em>巧克力牌：</em> <span>1个</span></dd>
                  <dd><em>赠送：</em> <span>标配餐具1套</span></dd>
                  <dd><em>额外生日蜡烛：</em> <span>1套</span></dd>
                </dl>
              </div>
            </div>
          </li>
          <div class="more" @click="showMore"><i class="icon iconsfont" :class="[icons ? 'icons-jiantoushang':'icons-jiantouxia']" ></i></div>
        </ul>

        <div class="order-line orderTime">
          <div class="content">
            <dl>
              <dd><i class="icon iconsfont icons-clock"></i><em>下单时间：</em> <span>2017-07-14 18:14:46</span></dd>
              <dd><i class="icon iconsfont icons-clock"></i><em>下单时间：</em> <span>2017-07-15 10:00:00~13:00:00</span></dd>
              <dd><i class="icon iconsfont icons-money2"></i><em>还需支付：</em> <span>298.00</span></dd>
            </dl>
          </div>
        </div>

        <div class="btns">
          <ul >
            <li class="chuanqing"><span>去录音传情</span></li>
            <li @click='goPay'><span>去付款</span></li>

          </ul>
        </div>

        <div class="order-line orderTime">
          <div class="content">
            <dl>
              <i class="icon iconsfont icons-dui i-complete"></i>
              <h2>订单状态：已完成</h2>
              <dd><em>如有疑问可以拨打客服热线：4006678678</em></dd>
            </dl>
          </div>
        </div>

        <div class="order-line orderTime">
          <div class="content">
            <dl>
              <h2>收货信息</h2>
              <dd><em>联系人：</em> <span>丁志文</span></dd>
              <dd><em>联系方式：</em> <span>13162550295</span></dd>
              <dd class="longRight"><em>配送地址：</em> <span>上海市普陀区真光路中山北路3700弄2号楼503室</span></dd>
              <dd><em>配送时间：</em> <span>2017-07-15 10:00:00--13:00:00</span></dd>
            </dl>
          </div>
        </div>
        <div class="order-line orderTime">
          <div class="content">
            <dl>
              <h2>收货信息 <i class="icon iconsfont icons-jiantouyou" @click='goFastMall'></i></h2>
              <dd><em>您的订单未确认：</em> <span>2017-07-14 18:14:46</span></dd>
              <dd><em>您的订单已付款：</em> <span>2017-07-14 18:14:46</span></dd>
              <dd><em>您的订单已确认：</em> <span>2017-07-14 18:14:46</span></dd>
              <dd><em>您的订单待发货：</em> <span>2017-07-14 18:14:46</span></dd>
              <dd><em>您的订单已发货：</em> <span>2017-07-14 18:14:46</span></dd>
              <dd><em>您的订单配送站已收货：</em> <span>2017-07-14 18:14:46</span></dd>
              <dd><em>您的订单配送站已出仓：</em> <span>2017-07-14 18:14:46</span></dd>
              <dd><em>您的订单已完成：</em> <span>2017-07-14 18:14:46</span></dd>

            </dl>
          </div>
        </div>

        <div class="order-num"><span>运费：0.00</span>   <span class="textRight">实付款：￥<i>78.00</i></span></div>
    </div>


    <dialogTips2 :is-show="isShowDialog">
      <!--<p class="dialog-close" @click="closeDialog"  slot="close"> <i class="icon iconsfont icons-guanbi"></i></p>-->
      <div class="tip-txt">
        <i class="icon iconsfont icons-dui"></i>
        <p>订单提交成功</p>
      </div>
    </dialogTips2>
    <!-- <div class="marginBottom"></div> -->
  </div>

</template>

<script>
  import dialogTips from '../components/dialog-tips'
  import dialogTips2 from '../components/dialog-tips2'
export default {
  name: 'orders',
  props: [],
  components: {
    myDialog: dialogTips,
    dialogTips2
  },
  data () {
    return {
      msg: '我的订单',
      isShowDialog:false,
      icons:false
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    goFastMall(){
      
      this.$router.push('/users/fastMail')
    },
    goPay(){
      this.$router.push('/users/pay')
    },
    init:function () {
        $(".orderList li:gt(1)").hide();
    },
    showMore:function () {
        $(".orderList li:gt(1)").toggle();
        this.icons = !this.icons;
    }

  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/orders.css';

  .order-line .content dl dd{
    padding: 0;
  }

  .tip-txt{
    position: absolute;
    width: 100%;
    top: 40%;
    transform: translateY(-50%);
  }
  .order-line .content dl dd .iconsfont{
    font-size: .6rem;
  }
</style>
