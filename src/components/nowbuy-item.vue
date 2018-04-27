<template>
  <div class="container-wrap">
      <div class="nowbuy" >
        <div class="order">
          <ul class="orderList">
            <li class="flex-w">
              <div class="pro-box flex-h">
                <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                <div class="content">
                  <dl>
                    <dt><h2>{{item.name}}</h2><h2>{{item.french}}</h2></dt>
                    <dd><em>数量：</em> <span>{{item.num}}个</span></dd>
                    <dd><em>小计：</em> <span>￥{{item.price}}</span></dd>
                    <dd><em>食用：</em> <span>{{item.spec}}<template v-if='item.edible'>-</template>{{item.edible}}</span></dd>
                    <dd><em>标配：</em> <span>{{item.fittings['51'].num}}{{item.fittings['51'].uname}}{{item.fittings['51'].name}}</span></dd>
                    <dd class="line"></dd>
                    <dd v-for='fit in item.fittings' v-if='fit.sale&&fit.num>0'><em>{{fit.name}}：</em> <i>{{fit.num}}{{fit.uname}}</i> <span>{{fit.price}}元</span></dd>
                    <!-- <dd><em>付费蜡烛：</em> <i>2个</i> <span>5.00元</span></dd>
                    <dd><em>数字蜡烛：</em> <i>1个</i> <span>5.00元</span></dd>
                    <dd><em>付费生日牌：</em> <i>1个</i> <span>5.00元</span></dd> -->
                  </dl>
                </div>
              </div>
            </li>
          </ul>
          <dl class="peijian">
            <dt @click="showPj">
              <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>配件选择</h2>
              <span>已选择：餐具1份，巧克力牌1个等水电水电水电水电水电让人</span>
              <i :class="{icon:true, iconsfont:true, 'icons-yuanshang':true, acrows:true, slideDown:isShowPj}"></i>
            </dt>
            <transition
                name="slide"
                enter-active-class="slideInLeft"
                leave-active-class="slideOutRight"
              >

            <div v-show="isShowPj">

              <dd>
                <div class="in-line" ><span :class="{uncheck:data.qklp}" @click='data.qklp=!data.qklp'><i class="icon iconsfont icons-dui"></i></span><p>赠送巧克力牌</p></div>
                <div class="in-line" ><span :class="{uncheck:data.srlz}" @click='data.srlz=!data.srlz'><i class="icon iconsfont icons-dui"></i></span><p>赠送生日蜡烛</p></div>
              </dd>

              <dd class="birthday-card" v-show='!data.qklp'><i class="icon iconsfont icons-gaixie"></i><input type="text" placeholder="点击填写巧克力牌文字"><span>（happy birthday）</span></dd>
              
              <dt >
                <h2><i class="icon iconsfont icons-shouye1 pj-icon"></i>加购配件</h2><span></span>
              </dt>

              <dd >
                <div class="in-line"><span :class="{uncheck:data.ewcj}"  @click='change_ewcj'><i class="icon iconsfont icons-dui"></i></span>
                  <p class="ewai">额外餐具
                    <i>￥5.00/包(5个餐盘 5个餐勺)</i>
                    <span class="nums">
                     <van-stepper
                     @plus='plus'
                      min='0'
                      v-model="num"
                      :default-value="num"
                      @change='change1'
                      />
                   </span>
                  </p>
                </div>
                <div class="in-line" ><span :class="{uncheck:data.ewlz}" @click='change_ewlz'><i class="icon iconsfont icons-dui"></i></span>
                  <p class="ewai">
                  额外生日蜡烛
                  <i>￥2.00/套</i>
                  <span class="nums">
                     <van-stepper
                     @plus='plus'
                     min='0'
                      v-model="num2"
                      :default-value="num2"
                      @change='change2'
                      />
                   </span>
                  </p>
                </div>
              </dd>

            </div>
            </transition>
          </dl>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'orders',
  props: ['item'],
  components: {

  },
  data () {
    return {
      msg: '结算页',
      isShowPj:false,
      isEditFapiao:false,
      isEdit:true,
      num:0,
      num2:0,
      data:{
        qklp:true,
        srlz:true,
        ewcj:true,
        ewlz:true
      }
    }
  },
  mounted(){
      console.log(this.item)
      this.num=this.item.fittings['52'].num
      if(this.num>0){
        this.data.ewcj=false
      }
      this.num2=this.item.fittings['55'].num
      if(this.num2>0){
        this.data.ewlz=false
      }
      this.init();
      $(".payfor li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
      });

      $(".ka-quan").each(function () {
          var self = $(this);
          var kq = true;
        $(this).find("dt").click(function () {
            if(kq){
              self.find("dd").slideDown();
              kq = false;
            }else{
              self.find("dd").slideUp();
              kq = true;
            }
        });
      });
  },
  methods:{
    change_ewcj(){
      this.data.ewcj=!this.data.ewcj
      if(!this.data.ewcj){
        this.num>0?this.num=this.num:this.num=1
        this.item.fittings['52'].num=this.num
      }else{
        this.num=0;
        this.item.fittings['52'].num=0
      }
    },
    change1(data){
      this.item.fittings['52'].num=data
      if(data>0){
        this.data.ewcj=false;
      }else{
        this.data.ewcj=true;
      }
    },
    change_ewlz(){
      this.data.ewlz=!this.data.ewlz
      if(!this.data.ewlz){
        this.num2>0?this.num2=this.num2:this.num2=1
        this.item.fittings['55'].num=this.num2
      }else{
        this.num2=0;
        this.item.fittings['55'].num=0
      }
    },
    change2(data){
      this.item.fittings['55'].num=data
      if(data>0){
        this.data.ewlz=false;
      }else{
        this.data.ewlz=true;
      }
    },
    plus(){

    },
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
  @import '../style/css/nowbuy.css';

  .nowbuy ul.orderList li .pro-box .pro-img img{
    border-radius: 0;
  }
  .nowbuy ul.orderList li .pro-box .content dl dd{
    font-size: .24rem;
  }
  .nowbuy dl.peijian{
    margin-bottom: 0.27778rem;
  }
  .nowbuy .order-line.pjSelect{
    width: 10rem;
  }
  .nowbuy dl.peijian dd .in-line span{
    flex: 1.5
  }
  .nowbuy dl.peijian .icon.iconsfont.icons-dui{
    font-size: .5rem;
  }
  .nowbuy dl.peijian dd .in-line span.uncheck{
    background-color: #acacac;
  }
  .nowbuy dl.peijian dd .in-line{
    line-height: 1.1rem;
  }
  .nowbuy dl.peijian dd .in-line p i{
    font-size: .24rem;
  }
  .slideDown{
    transform: rotate(180deg);
  }
  .nums{
    display: block;
  }
  .nowbuy dl.peijian dd .in-line span.nums{
    background-color: transparent;
    margin-left: .4rem;
  }
  .nowbuy dl.peijian dd .in-line span{
    position: relative;
  }
  .nowbuy dl.peijian dd .in-line span i{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .nowbuy ul.orderList li .pro-box .content dl dd i{
    flex: 2;
  }
    .nowbuy ul.orderList li .pro-box .content{
    flex: 1.5;
  }
</style>
