<template>
  <div class="container-wrap">
      <div class="pinglun">
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
    //this.orderStatus=this.$route.query.orderStatus
  },
  watch:{
    
  },
  methods:{
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
