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
                <div class="person_info">
                  <li><i class="icon iconsfont icons-me"></i>
                    <b>派送员</b>
                    <span>张东升</span>
                  </li>
                  <li><i class="icon iconsfont icons-shoujihao"></i>
                    <b>联系方式</b>
                    <span>135425544566</span>
                  </li>
                </div>
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

  .address_box{
    text-align: left;
  }
  .ziti-address .address_box ul li{
    padding-left: 1.14rem;
    font-size: .34rem;
  }
  .icon.iconsfont.icons-shoujihao{
    /*margin-left: 0;*/
    margin-left: .1rem;
    font-size: .5rem;
  }
  .ziti-address .address_box .wulist ul li{
    display: flex;
  }
  .fast-mail .wulist ul li b{
    font-size: .28rem;
    flex: 5 !important;
  }
  .fast-mail .wulist ul li span{
    text-align: right;
    font-size: .28rem;
    flex: 3 !important;
  }
  .person_info li{
    display: flex;
  }
  .person_info b{
    flex: 2
  }
  .person_info span{
    flex: 8;
    text-align: right;
    padding-right: .5rem;
  }
  .fast-mail .mail-banner .state span{
    margin-right: .3rem;
  }
</style>
