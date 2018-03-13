<template>
  <div class="container-wrap">
      <div class="fast-mail">
        <div class="mail-banner">
          <div class="state"><span>配送中</span></div>
          <img src="../style/images/mail.jpg" alt="">
        </div>
        <div class="ziti-address">
          <div class="content">
            <div class="address_box">
              <ul>
                <li><i class="icon iconsfont icons-me"></i>
                  <b>派送员</b>
                  <span>张东升</span>
                </li>
                <li><i class="icon iconsfont icons-shoujihao"></i>
                  <b>联系方式</b>
                  <span>135425544566</span>
                </li>
                <li><i class="icon iconsfont icons-shoujihao"></i>
                  <b>详细物流信息</b>
                </li>
                <div class="wulist">
                  <ul>
                    <li><b>您的订单未确认</b><span>2018.2.16 15:00:00</span></li>
                    <li><b>您的订单未确认</b><span>2018.2.16 15:00:00</span></li>
                    <li><b>您的订单未确认</b><span>2018.2.16 15:00:00</span></li>
                    <li><b>您的订单未确认</b><span>2018.2.16 15:00:00</span></li>
                    <li><b>您的订单未确认</b><span>2018.2.16 15:00:00</span></li>

                  </ul>
                </div>
              </ul>
            </div>


          </div>
        </div>


      </div>

    <div class="marginBottom"></div>
  </div>
</template>

<script>

export default {
  name: 'orders',
  props: [],
  components: {

  },
  data () {
    return {
      msg: '结算页',
      isShowPj:false

    }
  },
  mounted(){
      this.init();
  },
  methods:{
      init:function () {
       // $(".peijian dd").hide();
      },
    showPj:function () {
       this.isShowPj = !this.isShowPj;
    }

  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/cart.css';
</style>
