<template>
  <div class="container-wrap">
      <div class="orders" v-show="!isPing">
         <div class="order-top">
           <ul>
             <li :class='{on:orderStatus==1}' @click='orderStatus=1'>全部</li>
             <li :class='{on:orderStatus==2}' @click='orderStatus=2'>已完成</li>
             <li :class='{on:orderStatus==3}' @click='orderStatus=3'>待付款 <span>1</span></li>
             <li :class='{on:orderStatus==4}' @click='orderStatus=4'>待收货 <span>16</span></li>
           </ul>
         </div>
         <div class="order-box" v-show='orderStatus==1'>
          <div class="pro-list">
            <ul>
              <li class="flex-w">
                <div class="pro-box flex-h">
                  <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                  <div class="content">
                    <p><h2>订单编号 10700234230</h2></p>
                    <p>cookies au beurre <br>
                      云顶小花曲奇（抹茶味）1111</p>
                    <div class="o-time">
                      <p><i class="icon iconsfont icons-clock"></i><span>下单时间：2017-07-14 18:14:46</span></p>
                    </div>
                  </div>
                  <div class="edit">
                    <p><i class="icon iconsfont icons-lajixiang"></i><span>删除</span></p>
                    <p class="price"><em>￥</em>299</p>
                  </div>
                </div>
                <div class="pro-btns">
                  <ul>
                    <li><i class="icon iconsfont icons-test"></i><span>订单详情</span></li><em></em>
                    <li @click="goComment"><i class="icon iconsfont icons-pop"></i><span>去评价</span></li><em></em>
                    <li class="share"><i class="icon iconsfont icons-money1"></i><span>分享优惠券</span></li>
                  </ul>
                </div>
              </li>
              <li class="flex-w">
                <div class="pro-box flex-h">
                  <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                  <div class="content">
                    <p><h2>订单编号 10700234230</h2></p>
                    <p>cookies au beurre <br>
                      云顶小花曲奇（抹茶味）</p>
                    <div class="o-time">
                      <p><i class="icon iconsfont icons-clock"></i><span>下单时间：2017-07-14 18:14:46</span></p>
                    </div>
                  </div>
                  <div class="edit">
                    <p>取消</p>
                    <p class="price"><em>￥</em>299</p>
                  </div>
                </div>
                <div class="pro-btns2">
                  <dl>
                    <dd class="cancel"><span><i class="icon iconsfont icons-test"></i><span>订单详情</span></span></dd>
                    <dd><span><i class="icon iconsfont icons-pop"></i><span>去支付</span></span></dd>
                  </dl>
                </div>
              </li>

            </ul>
          </div>
        </div>
         <div class="order-box" v-show='orderStatus==2'>
           <div class="pro-list">
             <ul>
               <li class="flex-w">
                 <div class="pro-box flex-h">
                     <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                     <div class="content">
                       <p><h2>订单编号 10700234230</h2></p>
                       <p>cookies au beurre <br>
                         云顶小花曲奇（抹茶味）</p>
                       <div class="o-time">
                         <p><i class="icon iconsfont icons-clock"></i><span>下单时间：2017-07-14 18:14:46</span></p>
                       </div>
                     </div>
                     <div class="edit">
                       <p><i class="icon iconsfont icons-lajixiang"></i><span>删除</span></p>
                       <p class="price"><em>￥</em>299</p>
                     </div>
                 </div>
                  <div class="pro-btns">
                    <ul>
                      <li><i class="icon iconsfont icons-test"></i><span>订单详情</span></li><em></em>
                      <li><i class="icon iconsfont icons-pop"></i><span>去评价</span></li><em></em>
                      <li class="share"><i class="icon iconsfont icons-money1"></i><span>分享优惠券</span></li>
                    </ul>
                  </div>
               </li>
               <li class="flex-w">
                 <div class="pro-box flex-h">
                   <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                   <div class="content">
                     <p><h2>订单编号 10700234230</h2></p>
                     <p>cookies au beurre <br>
                       云顶小花曲奇（抹茶味）</p>
                     <div class="o-time">
                       <p><i class="icon iconsfont icons-clock"></i>下单时间：2017-07-14 18:14:46</p>
                     </div>
                   </div>
                   <div class="edit">
                     <p><i class="icon iconsfont icons-lajixiang"></i><span>删除</span></p>
                     <p class="price"><em>￥</em>299</p>
                   </div>
                 </div>
                 <div class="pro-btns">
                   <ul>
                     <li><i class="icon iconsfont icons-test"></i><span>订单详情</span></li><em></em>
                     <li><i class="icon iconsfont icons-pop"></i><span>去评价</span></li><em></em>
                     <li class="share"><i class="icon iconsfont icons-money1"></i><span>分享优惠券</span></li>
                   </ul>
                 </div>
               </li>

             </ul>
           </div>
         </div>
         <div class="order-box" v-show='orderStatus==3'>
          <div class="pro-list">
            <ul>
              <li class="flex-w">
                <div class="pro-box flex-h">
                  <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                  <div class="content">
                    <p><h2>订单编号 10700234230</h2></p>
                    <p>cookies au beurre <br>
                      云顶小花曲奇（抹茶味）</p>
                    <div class="o-time">
                      <p><i class="icon iconsfont icons-clock"></i><span>下单时间：2017-07-14 18:14:46</span></p>
                    </div>
                  </div>
                  <div class="edit">
                    <p>取消</p>
                    <p class="price"><em>￥</em>299</p>
                  </div>
                </div>
                <div class="pro-btns2">
                  <dl>
                    <dd class="cancel"><span><i class="icon iconsfont icons-test"></i><span>订单详情</span></span></dd>
                    <dd><span><i class="icon iconsfont icons-pop"></i><span>去支付</span></span></dd>
                  </dl>
                </div>
              </li>
              <li class="flex-w">
                <div class="pro-box flex-h">
                  <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                  <div class="content">
                    <p><h2>订单编号 10700234230</h2></p>
                    <p>cookies au beurre <br>
                      云顶小花曲奇（抹茶味）</p>
                    <div class="o-time">
                      <p><i class="icon iconsfont icons-clock"></i><span>下单时间：2017-07-14 18:14:46</span></p>
                    </div>
                  </div>
                  <div class="edit">
                    <p>取消</p>
                    <p class="price"><em>￥</em>299</p>
                  </div>
                </div>
                <div class="pro-btns2">
                  <dl>
                    <dd class="cancel"><span><i class="icon iconsfont icons-test"></i><span>订单详情</span></span></dd>
                    <dd><span><i class="icon iconsfont icons-pop"></i><span>去支付</span></span></dd>
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </div>
         <div class="order-box" v-show='orderStatus==4'>
          <div class="pro-list">
            <ul>
              <li class="flex-w">
                <div class="pro-box flex-h">
                  <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                  <div class="content">
                    <p><h2>订单编号 10700234230</h2></p>
                    <p>cookies au beurre <br>
                      云顶小花曲奇（抹茶味）</p>
                    <div class="luyin"><i class="icon iconsfont icons-luyin1"></i><span>录音传情</span></div>
                    <div class="o-time">
                      <p><i class="icon iconsfont icons-clock"></i><span>下单时间：2017-07-14 18:14:46</span></p>
                    </div>
                  </div>
                  <div class="edit">
                    <p class="price"><em>￥</em>299</p>
                  </div>
                </div>
                <div class="pro-btns">
                  <ul>
                    <li class="cancel"><span><i class="icon iconsfont icons-test"></i><span>订单详情</span></span></li><em></em>
                    <li><span><i class="icon iconsfont icons-pop"></i><span>查看配送信息</span></span></li>
                  </ul>
                </div>
              </li>
              <li class="flex-w">
                <div class="pro-box flex-h">
                  <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                  <div class="content">
                    <p><h2>订单编号 10700234230</h2></p>
                    <p>cookies au beurre <br>
                      云顶小花曲奇（抹茶味）</p>
                    <div class="luyin"><i class="icon iconsfont icons-luyin1"></i><span>录音传情</span></div>
                    <div class="o-time">
                      <p><i class="icon iconsfont icons-clock"></i><span><span>下单时间：2017-07-14 18:14:46</span></span></p>
                    </div>
                  </div>
                  <div class="edit">
                    <p class="price"><em>￥</em>299</p>
                  </div>
                </div>
                <div class="pro-btns">
                  <ul>
                    <li class="cancel"><span><i class="icon iconsfont icons-test"></i><span>订单详情</span></span></li><em></em>
                    <li><span><i class="icon iconsfont icons-pop"></i><span>查看配送信息</span></span></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div class="pinglun" v-show="isPing">
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
    </div>
    <my-dialog :is-show="isShowDialog">
      <!--<p class="dialog-close" @click="closeDialog"  slot="close"> <i class="icon iconsfont icons-guanbi"></i></p>-->
      <div class="tip-txt">
        <i class="icon iconsfont icons-dui"></i>
        <p>评价提交成功</p>
      </div>
    </my-dialog>
    <div class="marginBottom"></div>
  </div>

</template>

<script>
  import dialogTips from '../components/dialog-tips'
export default {
  name: 'orders',
  props: [],
  components: {
    myDialog: dialogTips
  },
  data () {
    return {
      msg: '我的订单',
      isPing:false,
      isEdit:false,
      isShowDialog:false,
      orderStatus:1
    }
  },
  mounted(){
    //this.tabSlide();
    this.orderStatus=this.$route.query.orderStatus
  },
  watch:{
    '$route':function(){
      this.orderStatus=this.$route.query.orderStatus
    }
  },
  methods:{
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
</style>
