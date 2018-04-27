<template>
  <div class="container-wrap">
      <div class="orders">
         <div class="order-top">
           <ul class="clearfix">
             <li :class='{on:componentName=="order_dsh"}' @click='componentName2("order_dsh")'>待收货<span>{{wraplist.waitConfirmCount}}</span></li>
             <li :class='{on:componentName=="order_dfk"}' @click='componentName2("order_dfk")'>待付款<span>{{wraplist.unpaidCount}}</span></li>
             <li :class='{on:componentName=="order_dshe"}' @click='componentName2("order_dshe")'>待审核</li>

             <li :class='{on:componentName=="order_yqx"}' @click='componentName2("order_yqx")'>已取消</li>
             <li :class='{on:componentName=="order_ywc"}' @click='componentName2("order_ywc")'>已完成</li>
             <li :class='{on:componentName=="order_yth"}' @click='componentName2("order_yth")'>已退货</li>
           </ul>
         </div>
         <keep-alive>
            <component :is="componentName" :wraplist='wraplist' class='orders_wrap'></component>
         </keep-alive>




      </div>
     <!--  <div class="pinglun" v-show="isPing">
        <ul>
          <li>
            <div class="order-num"><span>订单编号: 10700234230</span>   <span class="textRight">交易完成</span></div>
            <div class="ping-box">
                  <div class="ping-top flex-h">
                    <div class="pro-img">
                      <img src="../style/images/car-img.jpg" alt="" >
                      <p>Napoléon vanille <br> 经典香草拿破仑</p>
                      <div class="bangshu">2磅</div>
                    </div>
                    <div class="content">
                        <div class="textbox">
                          <textarea rows="3" cols="20" class="ping-text" v-show="isEdit"></textarea>
                        </div>
                        <p>
                          <span class="on">好吃</span>
                          <span>口感细腻</span>
                          <span>配送快</span>
                          <span>服务好</span>
                        </p>
                        <div class="edit" v-show="!isEdit">
                          <i class="icon iconsfont icons-gaixie" @click="edit"></i>
                        </div>
                    </div>
                  </div>
            </div>
            <div class="ping-box">
              <div class="ping-top flex-h">
                <div class="pro-img">
                  <img src="../style/images/car-img.jpg" alt="" >
                  <p>Napoléon vanille <br> 经典香草拿破仑</p>
                  <div class="bangshu">2磅</div>
                </div>
                <div class="content">
                  <div class="textbox">
                    <textarea rows="3" cols="20" class="ping-text" v-show="isEdit"></textarea>
                  </div>

                  <p>
                    <span>好吃</span>
                    <span>口感细腻</span>
                    <span>配送快</span>
                    <span>服务好</span>
                  </p>
                  <div class="edit" v-show="!isEdit">
                    <i class="icon iconsfont icons-gaixie" @click="edit"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="ping-box">
              <div class="ping-top flex-h">
                <div class="pro-img">
                  <img src="../style/images/car-img.jpg" alt="" >
                  <p>Napoléon vanille <br> 经典香草拿破仑</p>
                  <div class="bangshu">2磅</div>
                </div>
                <div class="content">
                  <div class="textbox">
                    <textarea rows="3" cols="20" class="ping-text" v-show="isEdit"></textarea>
                  </div>

                  <p>
                    <span>好吃</span>
                    <span>口感细腻</span>
                    <span>配送快</span>
                    <span>服务好</span>
                  </p>
                  <div class="edit" v-show="!isEdit">
                    <i class="icon iconsfont icons-gaixie" @click="edit"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="ping-box">
              <div class="ping-top flex-h">
                <div class="pro-img">
                  <img src="../style/images/car-img.jpg" alt="" >
                  <p>Napoléon vanille <br> 经典香草拿破仑</p>
                  <div class="bangshu">2磅</div>
                </div>
                <div class="content">
                  <div class="textbox">
                    <textarea rows="3" cols="20" class="ping-text" v-show="isEdit"></textarea>
                  </div>

                  <p>
                    <span>好吃</span>
                    <span>口感细腻</span>
                    <span>配送快</span>
                    <span>服务好</span>
                  </p>
                  <div class="edit" v-show="!isEdit">
                    <i class="icon iconsfont icons-gaixie" @click="edit"></i>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="order-num"><span>订单编号: 10700234230</span>   <span class="textRight">交易完成</span></div>
            <div class="ping-box">
              <div class="ping-top flex-h">
                <div class="pro-img">
                  <img src="../style/images/car-img.jpg" alt="" >
                  <p>Napoléon vanille <br> 经典香草拿破仑</p>
                  <div class="bangshu">2磅</div>
                </div>
                <div class="content">
                  <div class="textbox">
                    <textarea rows="3" cols="20" class="ping-text" v-show="isEdit"></textarea>
                  </div>

                  <p>
                    <span>好吃</span>
                    <span>口感细腻</span>
                    <span>配送快</span>
                    <span>服务好</span>
                  </p>
                  <div class="edit" v-show="!isEdit">
                    <i class="icon iconsfont icons-gaixie" @click="edit"></i>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    <div class="btns fixed">
      <ul >
        <li @click="comment"><span>提交评价</span></li>

      </ul>
    </div> -->
    <!-- <my-dialog :is-show="isShowDialog">
      
      <div class="tip-txt">
        <i class="icon iconsfont icons-dui"></i>
        <p>评价提交成功</p>
      </div>
    </my-dialog> -->
    <div class="marginBottom"></div>
  </div>

</template>

<script>
import dialogTips from '../components/dialog-tips'
import order_dshe from '../components/order_dshe'
import order_dfk from '../components/order_dfk'
import order_dsh from '../components/order_dsh'
import order_ywc from '../components/order_ywc'
import order_yqx from '../components/order_yqx'
import order_yth from '../components/order_yth'
export default {
  name: 'orders',
  props: [],
  components: {
    myDialog: dialogTips,
    order_dshe,
    order_dfk,
    order_dsh,
    order_ywc,
    order_yqx,
    order_yth
  },
  data () {
    return {
      msg: '我的订单',
      isPing:false,
      isEdit:false,
      isShowDialog:false,
      orderStatus:1,
      componentName:'order_dsh',
      wraplist:{
          waitConfirmCount:0,
          unpaidCount:0,
      }
    }
  },
  mounted(){
    //this.tabSlide();
    if(this.$route.query.orderStatus){
      this.componentName=this.$route.query.orderStatus
    }else{
      this.componentName='order_dsh'
    }
    
  },
  watch:{
    '$route':function(){
      if(this.$route.query.orderStatus){
        this.componentName=this.$route.query.orderStatus
      }else{
        this.componentName='order_dsh'
      }
    }
  },
  methods:{
    componentName2(type){
      this.componentName = type
    },
    orderDetail(){
      this.$router.push('/order')
    },
    tabSlide: function (event) {
        $(".orders").find(".order-top li").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            var index = $(this).index();
          $(".order-box").eq(index).show().siblings('.order-box').hide(0);
        });
     // console.log($(".order-box"));

    },
    edit:function (event) {
      this.isEdit = true;
    },
    goComment:function () {
      this.isPing = true;
      this.$router.push('/users/evaluation')
    },
    comment: function (event) {
     this.isShowDialog = true;
     var self = this;
     setTimeout(function () {
       self.isShowDialog = false;
     },2000);
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/orders.css';

  .pro-list .pro-box .edit i{
    background-color: transparent;
  }
  .pro-list .pro-btns ul li i{
    color: #888888;
    vertical-align: middle;
  }
  .pro-list .pro-btns ul li i+span,.pro-list .pro-btns2 dl dd i+span{
    display: inline-block;
    vertical-align: middle;
  }
  .orders .order-top{
    background-color: #ebebeb;
    padding: 0 0.2rem;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .orders .order-top li{
    position: relative;
    background-color: #ebebeb;
  }
  .orders .order-top li span{
    position: absolute;
    top: .16rem;
    right: .12rem;
    display: inline-block;
    width: .4rem;
    height: .4rem;
    background-color: #ffcd20;
    border-radius: 50%;
    line-height: .42rem;
    text-align: center;
    font-size: .24rem;
    color: #000;
  }
  .orders .order-box{
    display: block;
  }

  .orders .order_no{
    text-align: left;
    display: flex;
    font-size: .32rem;
    padding: .3rem 0;
    border-bottom: 1px solid #ccc;
    margin-bottom: .2rem;
  }
  .orders .order_no .order_no_left{
    flex: 5;
    display: flex;
    color: #3d3d3d;
  }
  .orders .order_no .order_no_left .o-time{
    margin-right: .2rem;
    color: #000;
  }
  .orders .order_no .order_del{
    flex: 1;
    text-align: right;
  }
  .orders .order-box li{
    padding: 0 0.27778rem;
  }
  .pro-list .pro-box {
    margin: 0;
    padding-bottom: 0.27778rem;
    /*padding: 0 0.27778rem 0.27778rem;*/
  }
  .pro-list .pro-btns{
    margin: 0;
  }
  .pro-list .pro-box .edit .price{
    position: inherit;
    font-size: .36111rem;
  }
  .pro-list .pro-box .edit p{
    text-align: right;
  }
  .order_item_total{
    text-align: right;
    padding: .2rem 0;
    border-top: 1px solid #ccc;
  }
  .icon.iconsfont.icons-lajixiang{
    font-size: .4rem;
  }
  .orders .order-top{
    position: fixed;
    top: 1.6rem;
    width: 100%;
    z-index: 99;
  }
  .orders_wrap{
    padding-top: 1rem;
  }
  .orders{
    padding-bottom: 1rem;
  }
  .orders .order-top ul{
    display: block;
    width: 14.4rem;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }
  .orders .order-top ul li{
    float: left;
    width: 2.4rem;
  }
</style>
