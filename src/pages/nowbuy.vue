<template>
  <div class="container-wrap">
      <div class="nowbuy" v-if="!isEditFapiao">
        <div class="order">
          <nowbuyItem v-for='item in data.goods'   :item='item' :key="item.id"></nowbuyItem> 
        </div>
        <div class="order-line pjSelect">
          <div class="content">
            <div class="pj">
              <img src="../style/images/srp.png" alt="" >
              <p>选择巧克力牌</p>
            </div>
            <div class="pj">
              <img src="../style/images/srp.png" alt="" >
              <p>选择数字生日蜡烛</p>
            </div>
          </div>
        </div>
        <div class="order-line userInfo">
          <div class="content">
            <dl>
              <dd><em>联系人：</em> <span class="textLeft">丁志文</span></dd>
              <dd><em>联系方式：</em> <span class="textLeft">13162550295</span></dd>
              <dd class="longRight"><em>配送地址：</em> <span class="textLeft">上海市普陀区真光路中山北路3700弄2号楼503室</span></dd>
              <router-link tag='i' class='icon iconsfont icons-gaixie i-edit' to='/address'>
      
              </router-link>
            </dl>
          </div>
        </div>
        <div class="subtitle"><h2><i class="icon iconsfont icons-clock"></i>配送时间</h2></div>
        <div class="order-line peisong">
          <div class="in-line">
            <i class="icon iconsfont icons-metext"></i>
            <!-- <select  id =  "sel">
               <option  value = "请选择配送日期" selected >请选择配送日期</option >
               <option  value = "1" >1</option >
               <option  value = "2" >2</option >
               <option  value = "3" >3</option >
            </select > -->
            <yd-cell-group>
              <yd-cell-item arrow>
                  <span slot="left">Time：</span>
                  <yd-datetime type="time" v-model="datetime1" slot="right"></yd-datetime>
              </yd-cell-item>
              <yd-cell-item arrow>
                  <span slot="left">Day：</span>
                  <yd-datetime type="day" v-model="datetime2" slot="right"></yd-datetime>
              </yd-cell-item>
            </yd-cell-group>
            <!-- <input type="date" placeholder="请选择配送日期" min='2018-05-01'> -->
            
            <i class="icon iconsfont icons-arrowdown down"></i>
            
          </div>
          <div class="in-line">
            <i class="icon iconsfont clock icons-clock"></i>
            <select  id =  "sel">
              <option  value = "下午 19时45分" selected >下午 19时45分</option >
              <option  value = "1" >1</option >
              <option  value = "2" >2</option >
              <option  value = "3" >3</option >
            </select >
            <i class="icon iconsfont icons-arrowdown down"></i>
          </div>
          <div class="tips">
            <p>友情提示：<br>
            配送时间：10:00-22:00，订单一经下定，配送当天不可修改
            当天21:30至次日9:00订单，最早配送时间为次日14:00
            我们将优先根据您选择的时间配送，实际配送时间会有前后30分钟误差</p>
          </div>
        </div>
        <!-- <nowbuyXjk></nowbuyXjk> -->
        <dl class="ka-quan">
          <dt @click="go('nowbuyXjk')">
            <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i><i>现金卡</i></h2>
            <span>暂无使用</span>
            <!-- <i class="icon iconsfont icons-yuanshang acrows"></i> -->
            <i :class="{icon:true, iconsfont:true, 'icons-yuanyou':true, acrows:true, slideDown:false}"></i>
          </dt>
          
        </dl>

        <!-- <nowbuyYhq></nowbuyYhq> -->
        <dl class="ka-quan">
          <dt @click="go('nowbuyYhq')">
            <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i><i>优惠券</i></h2>
            <span>暂无使用</span>
            <!-- <i class="icon iconsfont icons-yuanshang acrows"></i> -->
            <i :class="{icon:true, iconsfont:true, 'icons-yuanyou':true, acrows:true, slideDown:false}"></i>
          </dt>
          
        </dl>
        <!-- <nowbuyBb></nowbuyBb> -->
        <dl class="ka-quan">
          <dt @click="go('nowbuyHb')">
            <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i><i>红包</i></h2>
            <span>暂无使用</span>
            <!-- <i class="icon iconsfont icons-yuanshang acrows"></i> -->
            <i :class="{icon:true, iconsfont:true, 'icons-yuanyou':true, acrows:true, slideDown:false}"></i>
          </dt>
          
        </dl>
        <nowbuySyye></nowbuySyye>

        <nowbuySyjf></nowbuySyjf>
        
        <nowbuyFp></nowbuyFp>
        
        <nowbuyDdbz></nowbuyDdbz>

        <nowbuyZffs></nowbuyZffs>

      </div>



   

    <div class="bottom-count fixed">

      <div class="btns">
        <div class="total-count">
          <span>运费：0.00</span>
          <span class="count-price textRight">
            <b>合计：</b><i>￥</i>289.00 <br> <i>(含运费)</i></span>
        </div>
        <ul>
          <li class="kankan"><span>再逛逛</span></li>
          <li class="btn-count"><span>结算</span></li>
        </ul>
      </div>
    </div>

    <div class="cartBottom"></div>
  </div>
</template>

<script>

import nowbuyItem from '../components/nowbuy-item'
import nowbuyXjk from '../components/nowBuy-xjk'
import nowbuyYhq from '../components/nowBuy-yhq'
import nowbuyBb from '../components/nowBuy-hb'
import nowbuySyye from '../components/nowBuy-syye'
import nowbuySyjf from '../components/nowBuy-syjf'
import nowbuyFp from '../components/nowBuy-fp'
import nowbuyDdbz from '../components/nowBuy-ddbz'
import nowbuyZffs from '../components/nowBuy-zffs'

export default {
  name: 'orders',
  props: [],
  components: {
    nowbuyItem,
    nowbuyXjk,
    nowbuyYhq,
    nowbuyBb,
    nowbuySyye,
    nowbuySyjf,
    nowbuyFp,
    nowbuyDdbz,
    nowbuyZffs
  },
  data () {
    return {
      msg: '结算页',
      isShowPj:false,
      isEditFapiao:false,
      isEdit:true,
      data:'',
      pickerVisible:'',
      datetime1:'',
      datetime2:''
    }
  },
  mounted(){
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
      this.getList()
      this.getDate()
  },
  methods:{
    go(url){
      this.$router.push('/nowbuy/'+url)
    },
    openPicker() {
        this.$refs.picker.open();
    },
    getList(){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/594c5ce1b3db7d9e',{
        params:{
          cityId:'110'
        }
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.code==1){
          self.data=res.data
        }
      },function(error){  //失败
        console.log(error);
      });
    },
    getDate(){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/43df3b8d469449bc',{
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.code==1){
         
        }
      },function(error){  //失败
        console.log(error);
      });
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
    padding-bottom: 0;
    margin-bottom: 0.27778rem;
  }
  .nowbuy .order-line.pjSelect{
    width: 10rem;
  }
  .order-line .content dl dd{
    padding: 0;
  }
  .datetime{
    font-size: 20px;
  }

</style>
